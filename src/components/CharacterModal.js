// CharacterModal.js
import React from 'react';
import './Lista.css'


//Este es el modal que se usa al darle click a cualquier nombre de la lista de lado izquiedo de la pagina App.js
const CharacterModal = ({ character, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={character.image} alt={character.name} className='ting' />
        <h2>{character.name}</h2>
        <p>Genero: {character.gender}</p>
        <p>Especie: {character.species}</p>
        <p>Origen: {character.origin.name}</p>
        <p>Estado: {character.status}</p>
        <p>Fecha: {new Date(character.created).toLocaleDateString('es-ES')}</p>
      </div>
    </div>
  );
};

export default CharacterModal;
