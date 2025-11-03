import { useState } from "react";
import Input_contrasena from "@user/components/input_contrasena/input_contrasena.jsx";
import Layout from "@components/Layout/Layout.jsx";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      alert("Las contraseñas no coinciden");
      return;
    }

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Usuario registrado correctamente");
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="Panel-identificacion">
        <h1>Registrarse</h1>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <Input_contrasena value={password} onChange={e => setPassword(e.target.value)}>Contraseña:</Input_contrasena>
        <Input_contrasena value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}>Confirmar Contraseña:</Input_contrasena>
        <button type="submit">Registrarse</button>
      </form>
    </Layout>
  );
}