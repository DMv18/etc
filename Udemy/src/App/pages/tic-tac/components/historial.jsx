

export default function Historial({historial}){
    return(
        <div className="historial-contenedor">
            <h2>Historial de partidas</h2>
            <div className="historial-lista">
                {
                    historial.map((partida, index) => (
                        <div className="historial-lista-item" key={index}>
                            {CardHistorial(partida)}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

function CardHistorial(partida){

    const juego = partida.juego;

    const matriz = [];
    for (let i = 0; i < juego.length; i += 3) {
    matriz.push(juego.slice(i, i + 3));
    }

    return(<>
        <h3>Ronda {partida.ronda}: Ganador - {partida.ganador || "No hay ganador"}</h3>
        <div >
            {
                matriz.map((fila, i) => (
                    <div className="tabla-historial" key={i}>
                        {fila.map((valor, j) => (
                            <div key={j} className="celda-tabla">
                                {valor || "  "}
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
        
    </>);
}
               

      
               