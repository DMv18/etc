import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Input_contrasena({children, value, onChange}) {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
            <h4>{children}</h4>
            <input type={showPassword ? "text" : "password"} value={value} onChange={onChange} placeholder="Contraseña" />
            <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
        </>
    )
}