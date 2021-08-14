import {useState} from 'react';
import {baseDeDatos} from './ConfigFirebase';
import NuevoContacto from './componentes/NuevoContacto';
import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const [contactos, setContactos] = useState([]);

  function agregarNuevoContacto(contactos) {
    const copyContactos = contactos.slice();
    copyContactos.push(contactos);
    setContactos(copyContactos);
  };

  function cargarContactos() {
    const list = [];
    baseDeDatos.collection('contactos').get()
      .then(resultado => {
        resultado.forEach(contacto => {
          list.push(contacto.data());
        })
        setContactos(list);
      }).catch(error => console.log(error));
  }

  useEffect(cargarContactos, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NuevoContacto agregarNuevoContacto={agregarNuevoContacto} />
      </header>
    </div>
  );
}

export default App;
