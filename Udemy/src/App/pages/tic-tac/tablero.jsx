import '@tic-tac/styles/tablero.css';
import Button from '@tic-tac/components/Button.jsx';
import { useState } from 'react';
import Historial from '@tic-tac/components/historial.jsx';
import VerificarGanador from '@tic-tac/components/ganador.jsx';
import NombreJugador from '@tic-tac/components/nombre_jugador.jsx';
import Continuar from '@tic-tac/components/continuar.jsx';

export default function Tablero() {
    const [turno, setTurno] = useState(1);
    const [valores, setValores] = useState(Array(9).fill(null));
    const [ganador, setGanador] = useState(false);
    const [puntajes, setPuntajes] = useState({ puntaje: { X: 0, O: 0 }, nombres: { X: "", O: "" } });
    const [ronda, setRonda] = useState(1);
    const [historial, setHistorial] = useState([]);
    const [isOpenContinuar, setIsOpenContinuar] = useState(false)

    function handleClick(index) {
        if(valores[index] !== null) return; 

        const nuevosValores = valores.slice();
        nuevosValores[index] = turno % 2 === 0 ? "X" : "O";

        setValores(nuevosValores);
        setTurno(turno + 1);

        setGanador(VerificarGanador(nuevosValores, setPuntajes, puntajes));
        const todosLlenos = nuevosValores.every(valor => valor !== null);
        if(todosLlenos || VerificarGanador(nuevosValores, setPuntajes, puntajes)){
            setIsOpenContinuar(true);
        }
    }


    function Resetear(){
        setValores(Array(9).fill(null));
        setGanador(false);
        setRonda(1);
        setTurno(0);
        setPuntajes({ puntaje: { X: 0, O: 0 }, nombres: { X: "", O: "" } });
        setHistorial([]);
    }

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


                {ganador ? (<h2 className="turno">El ganador de la ronda {ronda} es: <span className="tablero-button--reset">{ganador}</span></h2>) : (<h2 className="turno">Aún no hay ganador (⊙_◎)</h2>)}
                <div className='container-reset'>
                    <button className="tablero-button--reset" onClick={() => {
                        Resetear();
                    }}>Reset</button>
                </div>
            </div>
            

            {isOpenContinuar && <Continuar setValores={setValores} setGanador={setGanador} setRonda={setRonda} setTurno={setTurno} setPuntajes={setPuntajes} setHistorial={setHistorial} ronda={ronda} ganador={ganador} valores={valores} historial={historial} setIsOpenContinuar={setIsOpenContinuar} isOpenContinuar={isOpenContinuar}/>}
        </>
    );
}