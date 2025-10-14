import { useState } from "react";

export default function Continuar({setValores, setGanador, setRonda, setTurno, setPuntajes, setHistorial, ronda, ganador, valores, historial, setIsOpenContinuar, isOpenContinuar}) {
    if(!isOpenContinuar) return null;

    function handlecontinuar(){
        setValores(Array(9).fill(null));
        setGanador(false);
        setRonda(ronda + 1);
        setTurno(0);
        setHistorial([...historial, { ronda: ronda, ganador: ganador, juego: valores }]);
        setIsOpenContinuar(false);
    }


    return (<>
        <modal className="dialog-winer-loser" open>
            <h2>{ganador ? `El ganador es: ${ganador}` : "El juego termino en empate"}</h2>
            <div>
                <button onClick={handlecontinuar}>continuar</button>
            </div>
        </modal>
    </>)
}