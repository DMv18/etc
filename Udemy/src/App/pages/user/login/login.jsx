import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input_contrasena from "@user/components/input_contrasena/input_contrasena.jsx";
import Layout from "@components/Layout/Layout.jsx";
import { useAuthStore } from '@hooks/store/useAuthStore';

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = useAuthStore(state => state.login);

  async function AuthLogin(email, password) {
    if (!email || !password) return;
    
    const resp = await login(email, password);
    
    if(resp.ok) {
      navigate("/");
    } else {
      alert(resp.msg || 'Error desconocido');
    }
  };

  return (
    <Layout>
      <form onSubmit={(e) => { e.preventDefault(); AuthLogin(email, password); }} className="Panel-identificacion">
        <h1>Iniciar Sesión</h1>
        <div className="campo-identificacion">
          <h4>Correo:</h4>
          <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
          {emailError && <span>{emailError}</span>}
        </div>
        <div className="campo-identificacion">
          <Input_contrasena value={password} onChange={e => setPassword(e.target.value)}>Contraseña:</Input_contrasena>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </Layout>
  );
}
