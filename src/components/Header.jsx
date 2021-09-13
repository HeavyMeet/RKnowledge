import React from 'react';

function Header(props){

   

    let edad = 18;
    return (
        <h1 className="encabezado">{props.titulo}</h1>
    )
}

export default Header;