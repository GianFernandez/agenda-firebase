import React from 'react';
import '../CSS/Contacto.css'

function Contacto({ nombre, apellido, telefono }) {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    Nombre
                </div>
                <div className="column">
                    {nombre}
                </div>
            </div>

            <div className="row">
                <div className="column">
                    Apellido
                </div>
                <div className="column">
                    {apellido}
                </div>
            </div>

            <div className="row">
                <div className="column">
                    Telefono
                </div>
                <div className="column">
                    {telefono}
                </div>
            </div>
        </div>
    );
}

export default Contacto;