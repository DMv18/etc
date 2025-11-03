import '@tic-tac/styles/tablero.css';
import Button from '@tic-tac/components/Button.jsx';
import Historial from '@tic-tac/components/historial.jsx';
import NombreJugador from '@tic-tac/components/nombre_jugador.jsx';
import Continuar from '@tic-tac/components/continuar.jsx';
import { useTablero } from '@tic-tac/hooks/useTablero.js';


export default function Tablero() {
    const { turno, valores, ganador, puntajes, ronda, historial, isOpenContinuar, handleClick, Resetear, continuarRonda, setIsOpenContinuar } = useTablero();

    return (
        <>
            <div className={isOpenContinuar ? "blur-background" : ""}>
                <div className="tablero-contenedor">
                    <h2 className="turno">Ronda N°: {ronda}   el turno es de: <p>{turno % 2 === 0 ? "X" : "O"}</p></h2>
                </div>


                <div className='contenedor-juego'>
                    <div>
                        <table className='tabla-puntaje'>
                            <thead>
                                <tr>
                                    <th className='tablero-button--rojo'>X</th>
                                    <th className='tablero-button--verde'>O</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><NombreJugador /></td>
                                    <td><NombreJugador /></td>
                                </tr>
                                <tr>
                                    <td>{puntajes.puntaje.X}</td>
                                    <td>{puntajes.puntaje.O}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

 
                    <div className="tablero">
                        {
                            valores.map((valor, index)=>
                                <Button key={index} jugador={valor} disable={ganador} onClick={() => handleClick(index)}/>
                            )
                        }
                    </div>

                    <Historial historial={historial} />
                </div>

                <h2 className="turno">
                    {(!ganador && valores.every(Boolean)) ? "¡La ronda terminó en empate!" : ""}
                </h2>

                <div className='container-reset'>
                    <button className="tablero-button--reset" onClick={Resetear}>
                        Reset
                    </button>
                </div>
            </div>
            

            {isOpenContinuar && <Continuar ganador={ganador} onContinuar={continuarRonda}/>}
        </>
    );
}