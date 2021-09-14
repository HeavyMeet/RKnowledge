import React, {Fragment, useState} from 'react';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const [productos, guardarProducto] = useState([
    {id:1, nombre:'vue', precio:1200},
    {id:2, nombre:'vue1', precio:1250},
    {id:3, nombre:'vue2', precio:1233}

  ])

  const [carrito, agregarProducto] = useState([]);
  const fecha = new Date().getFullYear();
  return (
   <Fragment>
     <h1>Lista de productos</h1>
     {productos.map(p=>(
      <Producto
          key = {p.id}
          producto={p}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
      /> ))}
      
        <Carrito
         carrito={carrito}
        />
      

   </Fragment>
  );
}

export default App;
