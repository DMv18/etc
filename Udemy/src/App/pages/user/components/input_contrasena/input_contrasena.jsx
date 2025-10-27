import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Input_contrasena({ children, value, onChange, placeholder = "Contraseña" }) {
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="campo-identificacion">
            <h4>{children}</h4>
            <div className="input_contrasena">
                <input type={showPassword ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder} className="password-input"/>
                <span 
                    onClick={() => setShowPassword(!showPassword)} className="password-toggle" aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"} role="button" tabIndex={0}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
            </div>
        </div>
    )
}