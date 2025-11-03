import { Suspense, lazy} from "react";
import { Routes, Route} from "react-router-dom";
import ProtectRoute from '@components/ProtectRoute/ProtectRoute.jsx';

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
                <Route path="*" element={<Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/register" element={ <Register />} />
                <Route path="/pokedex" element={<ProtectRoute><Pokedex /></ProtectRoute>} />
                <Route path="/dashboard" element={<ProtectRoute><DashboardProducts /></ProtectRoute>} />
                <Route path="/tablero" element={<ProtectRoute><Tablero /></ProtectRoute>} />
            </Routes>
        </Suspense>
    );
}