import React from 'react';



const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const { nombre,precio, id} = producto;
    const seleccionarProducto = id => {
        const producto = productos.filter(p => p.id === id);
        agregarProducto([
            ...carrito,
            producto
        ])
    }
    return ( <div>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        <button type="button" onClick={ () => seleccionarProducto(id) }>Comprar</button>
    </div>);
}
 
export default Producto;