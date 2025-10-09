import { useState } from 'react';

export default function NombreJugador(){
    const [estado, setEstado] = useState();
    let boton = estado ? "Editar" : "Guardar";


    return(<>
        <input className="input-nombre" disabled={estado} type="text" />
        <button className="nombre-boton" onClick={() => setEstado(!estado)}>{boton}</button>
    </>);
}

