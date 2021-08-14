
import React, { useRef } from 'react';
import {baseDeDatos} from '../ConfigFirebase';
import './Contactos';

function NuevoContacto({ agregarNuevoContacto }) {
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);

    function agregarContacto() {
        const contacto = {
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
            telefono: telefonoRef.current.value,
        }

        baseDeDatos.collection('contactos').add(contacto);
        nombreRef.current.value = "";
        apellidoRef.current.value = "";
        telefonoRef.current.value = "";
        agregarNuevoContacto(contacto);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    Nombre
                </div>
                <div className="column">
                    <input type="text" className="text" ref={nombreRef} />
                </div>
            </div>

            <div className="row">
                <div className="column">
                    Apellido
                </div>
                <div className="column">
                    <input type="text" className="text" ref={apellidoRef} />
                </div>
            </div>

            <div className="row">
                <div className="column">
                    Telefono
                </div>
                <div className="column">
                    <input type="text" className="text" ref={telefonoRef} />
                </div>

                <div className="row">
                    <div className="column">
                        <button className="button" onClick={agregarContacto}>Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoContacto;