import '@pokedex/styles/pokedex.css';
import Img from '@components/Img/Img.jsx';
import { PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { CeldaLista } from '@pokedex/components/celda-lista.jsx';
import Buscador from '@components/Buscador/Buscador.jsx';
import Paginador from '@components/Paginador/Paginador.jsx';
import RadarPentagonChart from '@components/RadarPentagonChart/RadarPentagonChart.jsx';

export default function Pokedex() {
    const [listadoPokemons, setListadoPokemons] = useState([]);
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState({ name: 'bulbasaur' });
    const [pokemon, setPokemon] = useState({ name: 'bulbasaur' });
    

    useEffect(() => {
        if (listadoPokemons.length > 0) return;

        const fetchPokemons = async () => {
            const api = new PokemonClient({ logs: true });
            const pokemons = await api.listPokemons(0, 1302);
            setListadoPokemons(pokemons.results);
        };

        fetchPokemons();
    }, []);

    useEffect(() => {
        const fetchPokemon = async () => {
            if (!pokemonSeleccionado || !pokemonSeleccionado.name) return;
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
                <Buscador
                    lista={listadoPokemons}
                    onSeleccionar={(pokemon) => setPokemonSeleccionado(pokemon)}
                    placeholder="Buscar Pokémon..."
                />
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
                                pokemon?.types?.[1]
                                    ? `${pokemon?.types?.[0]?.type?.name} | ${pokemon?.types?.[1]?.type?.name}`
                                    : `${pokemon?.types?.[0]?.type?.name ?? 'Cargando...'}`
                            }
                        </h4>
                    </div>
                </div>

                <div className='pokedex-parte-central'>
                    <div className='texto-informacion'>
                        {pokemon?.stats ? (
                        <RadarPentagonChart
                            labels={pokemon.stats.map((s) => s.stat.name)}
                            datos={pokemon.stats.map((s) => s.base_stat)}
                        />
                        ) : (
                        <p>Cargando estadísticas...</p>
                        )}
                    </div>
                </div>


                <div className="pokedex-parte-derecha">
                    <div className="listado-pokemons">
                        <Paginador
                            listaObjetos={listadoPokemons}
                            objetosPorPagina={1}
                            render={(datos) => (
                                <div className="grid">
                                    {datos.map((poke, index) => (
                                        <CeldaLista
                                            key={index}
                                            numero={index + 1}
                                            pokemon={poke}
                                            setPokemonSeleccionado={setPokemonSeleccionado}
                                        />
                                    ))}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sprite({ pokemon }) {
    if (!pokemon || !pokemon.sprites) return <div>Cargando sprite...</div>;
    return<>
        <Img img={pokemon.sprites.front_default} alt={pokemon.name} />
        <Img img={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
        <Img img={pokemon.sprites.versions['generation-vii']['icons'].front_default} alt={pokemon.name} />
    </>;
}
