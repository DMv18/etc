import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@home/home.jsx"));
const Pokedex = lazy(() => import("@pokedex/pokedex.jsx"));
const DashboardProducts = lazy(() => import("@dashboard_products/dashboard_products.jsx"));
const Tablero = lazy(() => import("@tic-tac/tablero.jsx"));
const Login = lazy(() => import("@user/login/login.jsx"));
const Register = lazy(() => import("@user/register/register.jsx"));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div style={{padding:20}}>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/dashboard/*" element={<DashboardProducts />} />
                <Route path="/tablero" element={<Tablero />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
    );
}