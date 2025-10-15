import { useState } from "react";

export default function Buscador({ lista, onSeleccionar, placeholder = "Buscar..." }) {
    const [termino, setTermino] = useState('');
    const [resultados, setResultados] = useState([]);

    const manejarCambio = (e) => {
        const valor = e.target.value.toLowerCase();
        setTermino(valor);

        if (valor.trim() === "") {
            setResultados([]);
            return;
        }

        const filtrados = lista.filter(item => item.name.includes(valor));
        setResultados(filtrados);
    };

    const seleccionarItem = (item) => {
        onSeleccionar(item);
        setTermino('');
        setResultados([]);
    };

    return (
        <div className="buscador">
            <input
                type="text"
                placeholder={placeholder}
                value={termino}
                onChange={manejarCambio}
            />
            {resultados.length > 0 && (
                <ul className="lista-busqueda">
                    {resultados.map((item, index) => (
                        <li
                            key={index}
                            className="objeto-lista"
                            onClick={() => seleccionarItem(item)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
