import React from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import GitInfo from 'react-git-info/macro';

import CustomButton from '../../components/custom-button/custom-button.component';
import { 
    HelpPageContainer,
    HelpTitleContainer,
    HelpTextContainer,
    HelpButtonsContainer
 } from './help.styles';

const gitInfo = GitInfo();

const HelpPage = ({history}) => (
    <HelpPageContainer>
        <HelpTitleContainer>Administracion del Punto de Venta</HelpTitleContainer>
        <HelpTextContainer>tocando el Icono de arriba ala Izquierda se retorna a la pantalla principal</HelpTextContainer>
        <HelpTextContainer>En la vista de Productos se pueden agregar, modificar o borrar productos a la venta.</HelpTextContainer>
        <HelpTextContainer>Cuando se agrega un nuevo porducto por defecto lo hace "deshabilitado".</HelpTextContainer>   
        <HelpTextContainer>Una vez HABILITADO apraecera en la lista del Punto de Ventas.</HelpTextContainer>     
        <HelpTextContainer>Se puede habilitar un producto haciendo click en el checkbox o editando todo el producto</HelpTextContainer>     
        <HelpTextContainer>En la vista de Stock se puede visaulizar la eolucion de ventas.</HelpTextContainer>     
        <HelpTextContainer>STOCK: cantidad actual</HelpTextContainer>     
        <HelpTextContainer >Nivel Minimo: valor a partir del cual se genera una alarma (te la debo aun)</HelpTextContainer>     
        <HelpTextContainer>Nivel critico: Si esta HABILITADO el AUTOSTOP automaticamewnte se deshabilita el producto al llegar a ese valor.(te la debo aun)</HelpTextContainer>     
        <HelpButtonsContainer>
            <CustomButton onClick={()=>history.goBack()}>VOLVER</CustomButton>
        </HelpButtonsContainer>
        <p>{gitInfo.commit.shortHash}</p>
    </HelpPageContainer>
);

export default withRouter(HelpPage);