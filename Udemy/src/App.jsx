import { useState } from 'react';
import './App.css';
import data from './components/Item_Product/data.json';
import ItemProduct from './components/Item_Product/index.jsx';


function App() {
  data.lenght 
  if(data.length === 0){
    return <h2>No hay productos</h2>
  }

  return (
    <> 
      <main>
        <h2>Welcome to React</h2>
        <section id="container-product">
          {data.map((item, index) => (
            <ItemProduct key={index} {...item} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App;      