import { useState, useMemo } from "react";

export default function Paginador({ listaObjetos, objetosPorPagina = 20, render}) {
    const [pagina, setPagina] = useState(1);
    const totalPaginas = Math.max(1, Math.ceil(listaObjetos.length / objetosPorPagina));

    const [grupo, setGrupo] = useState([]);
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

    return (
        <>
            {render(datosPaginados)}

            <div className="Paginador">
                
                <button onClick={() => irA(pagina - objetosPorPagina)} disabled={pagina === 1}>Anterior</button>
                <span>Página {pagina} de {totalPaginado}</span>
                <button onClick={() => irA(pagina + objetosPorPagina)} disabled={pagina === totalPaginas}>Siguiente</button>
            </div>
        </>
    );
}
