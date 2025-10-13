import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Input_contrasena from "@user/components/input_contrasena/input_contrasena.jsx"
import data_user from '@data/data_user.json';
import '@user/styles/user.css';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(data_user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data.find(user => user.email === email && user.password === password);
    if (user) {
      alert("Inicio de sesión exitoso");
      navigate('/');
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return(
  <> 
    <form  className="Panel-identificacion" onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      <div className="campo-identificacion">
        <h4>Correo:</h4>
        <input className="input_correo" type="email" value={email} placeholder="abc123@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="campo-identificacion">
        <Input_contrasena value={password} onChange={(e) => setPassword(e.target.value)}>Contraseña:</Input_contrasena>

      </div>
      <button type="submit">Iniciar Sesión</button>


      <p>No tiene cuenta? <a href="/register">Regístrate</a></p>
    </form>
  </>)
}