import React from 'react';
import {Route, Switch, Redirect }from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/home/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-aign-up.component';
import StockPage from './pages/stock/stock-page.component';
import HelpPage from './pages/help/help.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if( userAuth) {
        const userRef = await createUserProfileDocument( userAuth);
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser} = this.props;
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact  path = '/' 
              render={()=>
                currentUser ? (
                  <Homepage />
                ) : (
                  <SignInAndSignUpPage/>
                )
              }
            />
          <Route path='/products' component={Homepage}/>
          <Route path='/stock' component={StockPage}/>
          <Route path='/help' component={HelpPage}/>
          <Route 
            exact
            path = '/SignIn' 
            render={()=>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
