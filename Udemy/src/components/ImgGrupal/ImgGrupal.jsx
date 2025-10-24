import React, { useMemo, useState } from 'react';
import Img from '@components/Img/Img.jsx';
import './ImgGrupal.css';

function ImgGrupal({ imagenes = [] }) {
    const validImages = useMemo(() => {
        if (!Array.isArray(imagenes)) return [];
        return imagenes.filter(img => img && img !== 'https://cdn-icons-png.flaticon.com/512/11542/11542598.png');
    }, [imagenes]);

    if (validImages.length === 0) return <div className="img-grupal--empty">No hay imágenes disponibles.</div>;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const mainSrc = validImages[selectedIndex] || validImages[0];

    return (
        <div className="ImgGrupal">
            <div className="ImgGrupal-main">
                <img className='imagen-muestra' src={mainSrc} alt={`Imagen ${selectedIndex + 1}`} />
            </div>

            {validImages.length > 1 && (
                <div className="ImgGrupal-thumbs">
                    {validImages.map((src, idx) => (
                        <button
                            key={`${src}-${idx}`}
                            type="button"
                            className={`thumb-btn ${idx === selectedIndex ? 'active' : ''}`}
                            onClick={() => setSelectedIndex(idx)}
                            aria-pressed={idx === selectedIndex}
                            aria-label={`Mostrar imagen ${idx + 1}`}>
                            <div className="thumb-wrapper">
                                <Img img={src} alt={`Miniatura ${idx + 1}`} />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ImgGrupal;