import React from 'react';
import '../style/CharacterDetails.css';

const CharacterDetails = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{character.name}</h2>
        <div className="details-content">
          <img src={character.image} alt={character.name} />
          <div className="details-info">
            <p><strong>Status:</strong> {character.status}</p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Location:</strong> {character.location.name}</p>
            <p><strong>First Seen in Episode:</strong> {character.episode[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
