export default function VerificarGanador(valores, setPuntajes, puntajes) {
    const combinacionesGanadoras = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (
            valores[a] &&
            valores[a] === valores[b] &&
            valores[a] === valores[c]
        ) {
            if(valores[a] === "X"){
                setPuntajes({ ...puntajes, puntaje: { ...puntajes.puntaje, X: puntajes.puntaje.X + 1 } });
            } else {
                setPuntajes({ ...puntajes, puntaje: { ...puntajes.puntaje, O: puntajes.puntaje.O + 1 } });
            }
            return valores[a]; 
        }
    }

    return null;
}