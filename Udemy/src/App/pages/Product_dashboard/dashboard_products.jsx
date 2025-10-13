import '@dashboard_products/styles/Product_Item.css';
import data from '@data/data_Item_product.json';
import ItemProduct from '@dashboard_products/components/Item_Product/item_product.jsx';
import Img from '@components/Img/Img.jsx';
import { useState } from 'react';

export default function DashBoard_Products(){
    const [itemSeleccionado, setItemSeleccionado] = useState(null);
    const [StyleMe, setStyleMe] = useState("h2Change1");


    if (data.length === 0) {
        return <h2>No hay productos</h2>
    }

    function manejarSeleccion(action, item) {
        console.log('Datos recibidos en App:', action, item);
        setItemSeleccionado(item);
    }

    return (
        <main>
        <h2 className={StyleMe}>Welcome to React</h2>
        <button onClick={() => setStyleMe(StyleMe === 'h2Change1' ? 'h2Change2' : 'h2Change1')}>
            Change
        </button>

        {itemSeleccionado && (
            <div id="container-product">
            <Img id="container-product" img={itemSeleccionado.img} alt={itemSeleccionado.title} />
            <h3 id='container-product'>{itemSeleccionado.title}</h3>
            <p id="container-product">{itemSeleccionado.description}</p>
            </div>
        )}
        
        <section id="container-product">
            {data.map((item, index) => (
            <ItemProduct
                key={index}
                item={item}
                onSelect={manejarSeleccion}
            />
            ))}
        </section>
        </main>
    )
}