// Modal.js
import React from 'react';
import './ModalCH.css';


//Este es el modal, utilizado para las tarjetas.

const Modal = ({ character, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={character.image} alt={character.name} className="modal-image" />
        <div className="modal-details">
          <h2>{character.name}</h2>
          <p>Genero: {character.gender}</p>
          <p>Especie: {character.species}</p>
          <p>Origen: {character.origin.name}</p>
          <p>Estado: {character.status}</p>
          <p>Fecha: {new Date(character.created).toLocaleDateString('es-ES')}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
