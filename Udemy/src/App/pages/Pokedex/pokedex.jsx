import '@pokedex/styles/pokedex.css';
import Img from '@components/Img/Img.jsx';
import { PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import CeldaLista from '@pokedex/components/celda-lista.jsx';

export default function Pokedex() {
    const [listadoPokemons, setListadoPokemons] = useState([]);
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemons = async () => {
            const api = new PokemonClient({ logs: true });
            const pokemons = await api.listPokemons(0, 1302);
            setListadoPokemons(pokemons.results);
        };

        fetchPokemons();

        if(!pokemon){
            setPokemonSeleccionado({ name: 'bulbasaur' });
        }
    }, []);

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!pokemonSeleccionado || pokemonSeleccionado.name.trim() === "") return;
            const api = new PokemonClient({ logs: true });
            const data = await api.getPokemonByName(pokemonSeleccionado.name);
            setPokemon(data);
        };

        fetchPokemon();
    }, [pokemonSeleccionado]);

    return (
        <div className="pokedex-container">
            <div className="pokedex-encabezado">
                <h2>Mi Pokédex</h2>
                <input type="text" placeholder="Buscar Pokémon..." onChange={(e) => setPokemonSeleccionado({ name: e.target.value })} />
            </div>

            <div className="pokedex-contenido">
                <div className="pokedex-parte-izquierda">
                    <div className="contenedor-informacion">
                        <h2 className="texto-informacion">{pokemon?.name ?? 'Cargando...'}</h2>
                    </div>

                    <div className="pantalla-imagen">
                        <Sprite pokemon={pokemon} />
                    </div>

                    <div className="contenedor-informacion">
                        <h4 className="texto-informacion">
                            {
                                pokemon?.types[1] ? (pokemon?.types[0]?.type?.name + ' | ' + pokemon?.types[1]?.type?.name) : (pokemon?.types[0]?.type?.name ?? 'Cargando...')
                            }
                        </h4>
                    </div>
                </div>

                <div className="pokedex-parte-derecha">
                    <div className="listado-pokemons">
                        {listadoPokemons.map((pokemon, index) => (
                            <CeldaLista
                                key={index}
                                numero={index + 1}
                                pokemon={pokemon}
                                setPokemonSeleccionado={setPokemonSeleccionado}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sprite({ pokemon }) {
    if (!pokemon || !pokemon.sprites) return <div>Cargando sprite...</div>;

    return (
        <Img img={pokemon.sprites?.front_default} alt={pokemon.name} />
    );
}
