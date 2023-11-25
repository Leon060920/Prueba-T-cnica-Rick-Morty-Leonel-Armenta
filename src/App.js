import React, { useEffect, useState } from "react";
import axios from "axios"; //Implemente la libreria Axios por que es mucho mas simple para usar API's que el fetch tradicional de Javascript.

import Navbar from "./components/Navbar";
import Listaper from "./components/Listaper";
import Lista from "./components/Lista";
import Modal from "./components/ModalCH";
import './App.css'




function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  
  const [searchTerm, setSearchTerm] = useState(""); // Este search term se usa para buscar un termino o un nombre especifico en la barra de busqueda y se compara con los personajes de la API

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const url = "https://rickandmortyapi.com/api/character"; //Url de la API

  //Este es la funcion principal que utilice para hacer el pull o fetch de los datos de la API

  const fetchCharacters = (url) => {
    axios
      .get(url, {
        params: {
          name: searchTerm,
        },
      })
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error); //Mensaje de error por si no se obtienen datos.
      });
  };

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  

// Este handle se encarga de avanzar una pagina en la lista de personajes 

//HandleNext  se encarga de realizar una solicitud para obtener datos de la página anterior del JSON de la API.

  const handleNextPage = () => {
    fetchCharacters(info.next); 
    window.scrollTo(0, 0);
  };

//handlePreviousPage  hace algo similar pero con la pagina anterior del JSON de la API
  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };


//Como su nombre lo indica los siguientes cons se encarga de abrir y cerrar los modals cuando se le da click al nombre del personaje

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  
  //Aqui se declara el seach term, como effect
  useEffect(() => {
    fetchCharacters(url);
    //En la parte de abajo agregue ese comentario para quitar un error que me salia "React Hook useEffect has a missing dependency: 'fetchCharacters'. Either include it or remove the dependency array "
    // eslint-disable-next-line
  }, [searchTerm]);


//Aqui esta la seccion del HTML cabe mencionar que Utilice React Bootstrap

  return (
    <>
      <Navbar brand="App Rick & Morty Leonel Armenta" />

      <br />
      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
              
          </ul>
        </nav>
      </div>

      <div className="app-container">
        <div className="sidebar">
          <h1>Lista de Personajes</h1>
          <Lista openModal={openModal} />
          <strong>Al presionar el nombre se abre el modal</strong>
        </div>

        <div className="content">
          <Listaper characters={characters} openModal={openModal} />
        </div>
      </div>

      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
