import {Routes, Route } from 'react-router-dom';
import Home from '@home/home.jsx';
import DashBoard_Products from '@dashboard_products/dashboard_products.jsx';
import Tablero from "@tic-tac/tablero.jsx";
import Login from '@user/login/login.jsx';
import Register from '@user/register/register.jsx';

export default function Rutas(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/tic-tac-toe' element={<Tablero/>}/>
            <Route path='/products' element={<DashBoard_Products/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    )
}