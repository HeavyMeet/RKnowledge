import './App.css';
import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';


function App() {
    //Crear listado de productos
const fecha = new Date().getFullYear();

    const [productos, guardarProductos] = useState([
      {id: 1, nombre: 'Camisa ReactJS', precio: 50},
      {id: 2, nombre: 'Camisa VueJS', precio: 40},
      {id: 3, nombre: 'Camisa Node.js', precio: 30},
      {id: 4, nombre: 'Camisa Angular', precio: 20}

    ]);
  return (
    <Fragment>
       <Header titulo='Tienda Virtual'
       numero = {20} />
       
       <h1>Lista de Productos</h1>
      {productos.map(p => (
        <Producto 
        key={p.id}
        producto={p}
        />
      ))}
       <Footer
         fecha={fecha}
       />
    </Fragment>
  );
}

export default App;