export default function Button({ jugador, disable, onClick }) {
    const color = jugador === "X" ? "tablero-button--rojo" :
                  jugador === "O" ? "tablero-button--verde" : "";

    return (
        <button className={`tablero-button ${color}`} onClick={onClick} disabled={disable}>
            {jugador}
        </button>
    );
}