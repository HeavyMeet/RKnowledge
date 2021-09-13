import React from 'react';

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;

    const seleccionaProducto = () => {
        console.log('comprando...')

    }
    return (<div>
        <h2>{nombre}</h2>
        <h2>{precio}</h2>
        <button type="button"
        onClick={()=> seleccionaProducto(id) }
        ></button>
        </div>
        
        )
}

export default Producto;