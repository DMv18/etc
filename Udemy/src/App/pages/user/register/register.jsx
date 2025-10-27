import { useState } from "react";
import data_user from '@data/data_user.json';
import Input_contrasena from "@user/components/input_contrasena/input_contrasena.jsx"
import Layout from '@components/Layout/Layout.jsx';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [data, setData] = useState(data_user);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    };

    return (
    <Layout>
        <form  className="Panel-identificacion" onSubmit={handleSubmit}>
            <h1>Registrarse</h1>
            <div className="campo-identificacion">
                <h4>Correo:</h4>
                <input className="input_correo" type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="campo-identificacion">
                <Input_contrasena value={password} onChange={(e) => setPassword(e.target.value)}>Contraseña:</Input_contrasena>
            </div>

            <div className="campo-identificacion">
                <Input_contrasena value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>Confirmar Contraseña:</Input_contrasena>
            </div>
            <button type="submit">Registrarse</button>

            <p>Ya tiene cuenta? <a href="/login">Iniciar sesión</a></p>
        </form>
    </Layout>
    )
}