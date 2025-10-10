import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return(
  <> 
    <h1>Login Page</h1>
    <form>
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  </>)
}