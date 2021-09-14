import React from 'react';
import './carrito.css';
import Producto from './Producto';
const Carrito = ({carrito}) => ( 
    <div className="carrito"><h2>Tu lista de compras</h2>
    {carrito.map(c=>(
      <Producto
        key ={c.id}
        p = {c}
      />
    ))}
    </div>
);
 
export default Carrito;