import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterModal from './CharacterModal';


//Aqui esta el codigo para la lista que se muestra al costado izquierdo de la pagina en App.js
//Parte de lo mismo que se ven en el componente Listaper.js

const Lista = () => {
  const [characters, setCharacters] = useState([]);
  
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error al traer los datos', error);
      }
    };

    fetchCharacters();
  }, []);


//Debajo estan las funciones para abrir y cerrar el modal.

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id} onClick={() => openModal(character)}>
            {character.name}
          </li>
        ))}
      </ul>
      
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default Lista;
