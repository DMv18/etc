import { useState } from 'react';
import './ImgGrupal.css';

export default function ImgGrupal({ imagenes = [], alt = "Imagen", className = "" }) {
    const [imagenActual, setImagenActual] = useState(0);

    if (!imagenes || imagenes.length === 0) {
        return (
            <div className={`img-grupal-container ${className}`}>
                <div className="no-image">No hay imágenes disponibles</div>
            </div>
        );
    }

    const siguienteImagen = () => {
        setImagenActual((prev) => (prev + 1) % imagenes.length);
    };

    const anteriorImagen = () => {
        setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    };

    const imagenSrc = imagenes[imagenActual];

    return (
        <div className={`img-grupal-container ${className}`}>
            <div className="img-grupal-image-area">
                <img
                    src={imagenSrc}
                    alt={`${alt} ${imagenActual + 1}`}
                    className="img-grupal-main"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        if (imagenes.length > 1) {
                            setTimeout(() => siguienteImagen(), 100);
                        }
                    }}
                />
            </div>
            
            {imagenes.length > 1 && (
                <div className="img-grupal-controls">
                    <button className="img-grupal-btn img-grupal-prev" onClick={anteriorImagen} disabled={imagenes.length === 1}>
                        Anterior
                    </button>
                    
                    <div className="img-grupal-info">
                        <span className="img-grupal-counter">
                            {imagenActual + 1} / {imagenes.length}
                        </span>
                    </div>
                    
                    <button className="img-grupal-btn img-grupal-next" onClick={siguienteImagen} disabled={imagenes.length === 1}>
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}