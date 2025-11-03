
export default function Continuar({ ganador, onContinuar}) {

    return (<>
        <div className="dialog-winer-loser" open>
            <h2>{ganador ? `El ganador es: ${ganador}` : "El juego termino en empate"}</h2>
            <div>
                <button onClick={onContinuar}>continuar</button>
            </div>
        </div>
    </>)
}