export default function CeldaLista({ numero, pokemon, setPokemonSeleccionado }) {
    return (
        <div className="celda-lista" onClick={() => setPokemonSeleccionado(pokemon)}>
            <img className="pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png" alt={pokemon.name} />
            <h1>{numero}</h1>
            <p>{pokemon.name}</p>
        </div>
    );
}