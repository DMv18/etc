import { useState } from "react";
import VerificarGanador from "../services/verificarGanador.js";

export function useTablero(){
    const [turno, setTurno] = useState(1);
    const [valores, setValores] = useState(Array(9).fill(null));
    const [ganador, setGanador] = useState(null);
    const [puntajes, setPuntajes] = useState({ puntaje: { X: 0, O: 0 }, nombres: { X: "", O: "" } });
    const [ronda, setRonda] = useState(1);
    const [historial, setHistorial] = useState([]);
    const [isOpenContinuar, setIsOpenContinuar] = useState(false);

    function handleClick(index){
        if(valores[index] !== null) return;

        const nuevosValores = [...valores];
        nuevosValores[index] = turno % 2 === 0 ? "X" : "O";

        setValores(nuevosValores);
        setTurno(turno + 1);

        const ganadorActual = VerificarGanador(nuevosValores);

        if(ganadorActual){
            setGanador(ganadorActual);
            setPuntajes(prev => ({
                ...prev,
                puntaje: {
                    ...prev.puntaje,
                    [ganadorActual]: prev.puntaje[ganadorActual] + 1
                }
            }));
            setIsOpenContinuar(true);
        }else if(nuevosValores.every(Boolean)){
            setIsOpenContinuar(true);
        }
    }

    function Resetear(){
        setValores(Array(9).fill(null));
        setGanador(null);
        setRonda(1);
        setTurno(1);
        setPuntajes({ puntaje: { X: 0, O: 0 }, nombres: { X: "", O: "" } });
        setHistorial([]);
    }

    function continuarRonda(){
        setHistorial([...historial, { ronda, ganador, juego: valores }]);
        setRonda(ronda+1);
        setGanador(null);
        setValores(Array(9).fill(null));
        setIsOpenContinuar(false);
        setTurno(1);
    }

    return {
        turno,
        valores,
        ganador,
        puntajes,
        ronda,
        historial,
        isOpenContinuar,
        handleClick,
        Resetear,
        continuarRonda,
        setIsOpenContinuar,
    };

}