import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input_contrasena from "@user/components/input_contrasena/input_contrasena.jsx";
import Layout from "@components/Layout/Layout.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const result = await resp.json();
    if(result.success){
      localStorage.setItem("user", JSON.stringify(result.user));
      alert("Inicio de sesión exitoso");
      navigate("/");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="Panel-identificacion">
        <h1>Iniciar Sesión</h1>
        <div className="campo-identificacion">
          <h4>Correo:</h4>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="campo-identificacion">
          <Input_contrasena value={password} onChange={e => setPassword(e.target.value)}>Contraseña:</Input_contrasena>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </Layout>
  );
}
