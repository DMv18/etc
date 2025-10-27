import { Suspense, lazy, useEffect, useState} from "react";
import { Routes, Route, Navigate , useLocation} from "react-router-dom";

const Home = lazy(() => import("@home/home.jsx"));
const Pokedex = lazy(() => import("@pokedex/pokedex.jsx"));
const DashboardProducts = lazy(() => import("@dashboard_products/dashboard_products.jsx"));
const Tablero = lazy(() => import("@tic-tac/tablero.jsx"));
const Login = lazy(() => import("@user/login/login.jsx"));
const Register = lazy(() => import("@user/register/register.jsx"));

function useAuthStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [location.pathname]); 

  return isLoggedIn;
}

export default function AppRoutes() {
    const isLoggedIn = useAuthStatus();

    

    return (
        <Suspense fallback={<div style={{padding:20}}>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="/pokedex" element={isLoggedIn ? <Pokedex /> : <Navigate to="/login" />} />
                <Route path="/dashboard" element={isLoggedIn ? <DashboardProducts /> : <Navigate to="/login" />} />
                <Route path="/tablero" element={isLoggedIn ? <Tablero /> : <Navigate to="/login" />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/register" element={ <Register />} />
            </Routes>
        </Suspense>
    );
}