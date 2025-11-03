
const API = import.meta.env.VITE_API_URL;

export const login = async (email, password) => {
  if(!email || !password) return null;

  try{
    const response = await fetch(`${API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login response data:", data);
    return { ok: !!data.user, user: data.user, msg: data.message };
    
  }catch(error){
    console.error("Login error:", error);
    return null;
  }
}

export const logout = async () => {
  try {     
    await fetch(`${API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Logout error:", error);
  }
  return null;
}

export const register = async (email, password) => {
  if (!email || !password) return null;

  try {
    const response = await fetch(`${API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Register error:", data.message);
      return { success: false, message: data.message || "Error en el registro" };
    }

    return data; 

  } catch (error) {
    console.error("Register error:", error);
    return { success: false, message: "Error de conexión con el servidor" };
  }
};

export const getCurrentUser = async () => {
  const response = await fetch(`${API}/users`);
  const data = await response.json();
  return data;
}






