import '@pokedex/styles/pokedex.css';
import { PokemonClient } from 'pokenode-ts';
import { useEffect, useState, useMemo } from 'react';
import { CeldaLista } from '@pokedex/components/celda-lista.jsx';
import Buscador from '@components/Buscador/Buscador.jsx';
import Paginador from '@components/Paginador/Paginador.jsx';
import RadarPentagonChart from '@components/RadarPentagonChart/RadarPentagonChart.jsx';
import ImgGrupal from '@components/ImgGrupal/ImgGrupal.jsx';
import Layout from '@components/Layout/Layout.jsx';

export default function Pokedex() {
    const [listadoPokemons, setListadoPokemons] = useState([]);
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null);
    const [pokemonDetalle, setPokemonDetalle] = useState(null);
    const [pokemonCache, setPokemonCache] = useState(new Map()); 
    const [imagenesCache, setImagenesCache] = useState(new Map()); 
    const api = useMemo(() => new PokemonClient(), []);


    useEffect(() => {
        if (listadoPokemons.length > 0) return;

        const fetchPokemons = async () => {
            try {
                const pokemons = await api.listPokemons(0, 1302);
                setListadoPokemons(pokemons.results);
                
                if (pokemons.results.length > 0 && !pokemonSeleccionado) {
                    setPokemonSeleccionado(pokemons.results[0]);
                }
            } catch (error) {
                console.error('Error cargando lista de Pokémon:', error);
            }
        };

        fetchPokemons();
    }, []);

    useEffect(() => {
        const fetchPokemonDetalle = async () => {
            if (!pokemonSeleccionado || !pokemonSeleccionado.name) return;

            if (pokemonCache.has(pokemonSeleccionado.name)) {
                setPokemonDetalle(pokemonCache.get(pokemonSeleccionado.name));
                return;
            }

            try {
                const data = await api.getPokemonByName(pokemonSeleccionado.name);
                
                setPokemonCache(prev => new Map(prev).set(pokemonSeleccionado.name, data));
                setPokemonDetalle(data);
            } catch (error) {
                console.error('Error cargando detalles del Pokémon:', error);
            }
        };

        fetchPokemonDetalle();
    }, [pokemonSeleccionado, api]);

    const obtenerImagenPokemon = async (pokemonName) => {
        if (imagenesCache.has(pokemonName)) {
            return imagenesCache.get(pokemonName);
        }

        const cachedPokemon = pokemonCache.get(pokemonName);
        if (cachedPokemon?.sprites) {
            const imagen = cachedPokemon.sprites?.versions?.['generation-vii']?.icons?.front_default;
            if (imagen) {
            setImagenesCache(prev => new Map(prev).set(pokemonName, imagen));
            return imagen;
            }
        }

        try {
            const data = await api.getPokemonByName(pokemonName);
            const imagen = data.sprites?.versions?.['generation-vii']?.icons?.front_default;
            if (imagen) {
            setImagenesCache(prev => new Map(prev).set(pokemonName, imagen));
            }
            return imagen;
        } catch (error) {
            console.error(`Error cargando imagen para ${pokemonName}:`, error);
            return null;
        }
    };


    const tiposPokemon = useMemo(() => {
        if (!pokemonDetalle?.types) return 'Cargando...';
        
        return pokemonDetalle.types
            .map(t => t.type.name)
            .join(' | ');
    }, [pokemonDetalle]);

    return (
        <div className="pokedex-container">
            <div className="pokedex-encabezado">
                <h2>Mi Pokédex</h2>
                <Buscador
                    lista={listadoPokemons}
                    onSeleccionar={setPokemonSeleccionado}
                    placeholder="Buscar Pokémon..."
                />
            </div>

            <div className="pokedex-contenido">
                <Layout className="page-products">
                    <div className="pokedex-parte-izquierda">
                        <div className="contenedor-informacion">
                            <h2 className="texto-informacion nombre-pokemon">
                                {pokemonDetalle?.name ? pokemonDetalle.name.charAt(0).toUpperCase() + pokemonDetalle.name.slice(1) : 'Cargando...'}
                            </h2>
                        </div>

                        <div className="pantalla-imagen">
                            <Sprite pokemon={pokemonDetalle} />
                        </div>

                        <div className="contenedor-informacion">
                            <h4 className="texto-informacion tipos-pokemon">
                                {tiposPokemon}
                            </h4>
                        </div>
                    </div>

                    <div className='pokedex-parte-central'>
                        <div className='contenedor-grafico'>
                            {pokemonDetalle?.stats ? (
                                <RadarPentagonChart
                                    labels={pokemonDetalle.stats.map(s => 
                                        s.stat.name.replace('special-', 'Sp. ').replace('-', ' ')
                                    )}
                                    datos={pokemonDetalle.stats.map(s => s.base_stat)}
                                    maxVal={180}
                                />
                            ) : (
                                <p className="texto-carga">Cargando estadísticas...</p>
                            )}
                        </div>
                    </div>

                    <div className="pokedex-parte-derecha">
                        <div className="listado-pokemons">
                            <Paginador listaObjetos={listadoPokemons} objetosPorPagina={20} className="pokedex-paginador" render={(datos) => (
                                    <div className="grid-pokemons">
                                        {datos.map((poke, index) => (
                                            <CeldaLista
                                                key={index}
                                                numero={listadoPokemons.findIndex(p => p.name === poke.name) + 1}
                                                pokemon={poke}
                                                setPokemonSeleccionado={setPokemonSeleccionado}
                                                esSeleccionado={pokemonSeleccionado?.name === poke.name}
                                                obtenerImagen={obtenerImagenPokemon}
                                            />
                                        ))}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    );
}

function Sprite({ pokemon }) {
    if (!pokemon || !pokemon.sprites) {
        return (
            <div className="sprite-carga">
                Selecciona un Pokémon
            </div>
        );
    }

    const imagenes = [];

    if (pokemon.sprites.front_default) {
        imagenes.push(pokemon.sprites.front_default);
    }

    const otherSprites = pokemon.sprites.other || {};

    for (const key in otherSprites) {
        const item = otherSprites[key];
        if (item?.front_default) imagenes.push(item.front_default);
    }

    if (imagenes.length === 0) {
        return <div className="sprite-carga">No hay sprites</div>;
    }

    return (
        <ImgGrupal 
            imagenes={imagenes} 
            alt={pokemon.name}
            className="sprite-pokemon"
        />
    );
}
