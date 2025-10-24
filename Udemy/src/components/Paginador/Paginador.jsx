import { useState, useMemo } from "react";
import './Paginador.css';

export default function Paginador({ listaObjetos = [], objetosPorPagina = 20, render }) {
    const [pagina, setPagina] = useState(1);
    const totalPaginas = Math.max(1, Math.ceil(listaObjetos.length / objetosPorPagina));

    const totalPaginado = Math.max(objetosPorPagina, Math.ceil(listaObjetos.length / objetosPorPagina));

    const datosPaginados = useMemo(() => {
        const inicio = (pagina - 1) * objetosPorPagina;
        const fin = inicio + objetosPorPagina;
        return listaObjetos.slice(inicio, fin);
    }, [pagina, objetosPorPagina, listaObjetos]);

    const irA = (nuevaPagina) => {
        const paginaValida = Math.min(Math.max(1, nuevaPagina), totalPaginas);
        setPagina(paginaValida);
    }

    return (<>
        <div className="Paginador-list" role="region" aria-live="polite">
                {render(datosPaginados)}
            </div>
        <div className="Paginador-controls">
                <button className="paginador-btn" onClick={() => irA(pagina - 1)} disabled={pagina === 1} aria-label="Página anterior">Anterior</button>
                <span className="paginador-info" aria-live="polite">Página {pagina} de {totalPaginado}</span>
                <button className="paginador-btn" onClick={() => irA(pagina + 1)} disabled={pagina === totalPaginas} aria-label="Página siguiente">Siguiente</button>
            </div></>
    );
}
