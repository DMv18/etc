import { useState, useMemo } from "react";
import '@components/Paginador/Paginador.css';

export default function Paginador({ listaObjetos = [], objetosPorPagina = 20, render, className = "" }) {
    const [pagina, setPagina] = useState(1);
    
    const totalPaginas = Math.max(1, Math.ceil(listaObjetos.length / objetosPorPagina));
    
    const datosPaginados = useMemo(() => {
        const inicio = (pagina - 1) * objetosPorPagina;
        const fin = inicio + objetosPorPagina;
        return listaObjetos.slice(inicio, fin);
    }, [pagina, objetosPorPagina, listaObjetos]);

    const irA = (nuevaPagina) => {
        const paginaValida = Math.min(Math.max(1, nuevaPagina), totalPaginas);
        setPagina(paginaValida);
    }

    const generarRangoPaginas = () => {
        if (totalPaginas <= 7) {
            return Array.from({ length: totalPaginas }, (_, i) => i + 1);
        }
        
        const paginas = [];
        paginas.push(1, 2);
        
        if (pagina > 4) paginas.push('...');
        
        const inicio = Math.max(3, pagina - 1);
        const fin = Math.min(totalPaginas - 2, pagina + 1);
        
        for (let i = inicio; i <= fin; i++) {
            paginas.push(i);
        }
        
        if (pagina < totalPaginas - 3) paginas.push('...');
        paginas.push(totalPaginas - 1, totalPaginas);
        
        return paginas;
    };

    return (
        <div className={`Paginador-wrapper ${className}`}>

            <div className="Paginador-list" role="region" aria-live="polite">
                {render(datosPaginados)}
            </div>
            
            {totalPaginas > 1 && (
                <div className="Paginador-controls">
                    <button className="paginador-btn paginador-prev" onClick={() => irA(pagina - 1)} disabled={pagina === 1}>
                        Anterior
                    </button>
                    
                    <div className="paginador-numeros">
                        {generarRangoPaginas().map((num, index) => 
                            typeof num === 'number' ? (
                                <button key={num} className={`paginador-btn paginador-numero ${pagina === num ? 'active' : ''}`} onClick={() => irA(num)}>
                                    {num}
                                </button>
                            ) : (
                                <span key={`ellipsis-${index}`} className="paginador-ellipsis">...</span>
                            )
                        )}
                    </div>
                    
                    <span className="paginador-info">
                        {pagina} / {totalPaginas}
                    </span>

                    <button className="paginador-btn paginador-next" onClick={() => irA(pagina + 1)} disabled={pagina === totalPaginas}>
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}