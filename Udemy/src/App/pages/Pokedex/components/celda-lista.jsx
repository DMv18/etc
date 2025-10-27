import { useState, useEffect } from 'react';

export function CeldaLista({ numero, pokemon, setPokemonSeleccionado, esSeleccionado = false, obtenerImagen }) {
    const [imagen, setImagen] = useState(null);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const cargarImagen = async () => {
            if (!obtenerImagen) return;
            
            setCargando(true);
            try {
                const img = await obtenerImagen(pokemon.name);
                setImagen(img);
            } catch (error) {
                console.error(`Error cargando imagen para ${pokemon.name}:`, error);
            } finally {
                setCargando(false);
            }
        };

        cargarImagen();
    }, [pokemon.name, obtenerImagen]);

    const handleClick = () => {
        setPokemonSeleccionado(pokemon);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick();
        }
    };

    return (
        <div 
            className={`celda-lista ${esSeleccionado ? 'seleccionado' : ''}`} 
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyPress={handleKeyPress}
        >
            <div className="pokeball-container">
                {cargando ? (
                    <div className="cargando-imagen">...</div>
                ) : imagen ? (
                    <img
                        className="pokemon-icon"
                        src={imagen}
                        alt={pokemon.name}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            const respaldo = document.querySelector('.pokeball-respaldo');
                            if (respaldo) {
                                respaldo.style.display = 'block';
                            }
                        }}
                    />
                ) : null}
                
                <img
                    className="pokeball-respaldo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"
                    alt="Pokéball"
                    style={{ display: imagen ? 'none' : 'block' }}
                />
            </div>
            
            <span className="numero-pokemon">#{numero.toString().padStart(3, '0')}</span>
            <span className="nombre-pokemon-lista">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </span>
        </div>
    );
}