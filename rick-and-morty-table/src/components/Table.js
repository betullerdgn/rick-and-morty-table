import React from 'react';
import '../style/Table.css';

const Table = ({ characters, onSelect }) => {
  return (
    <div className="character-grid">
      {characters.map((character) => (
        <div
          key={character.id}
          className="character-card"
          onClick={() => onSelect(character)}
        >
          <div className="card-inner">
            {/* Front Side */}
            <div className="card-front">
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
            {/* Back Side */}
            <div className="card-back">
              <h4>{character.name}</h4>
              <p><strong>Status:</strong> {character.status}</p>
              <p><strong>Species:</strong> {character.species}</p>
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Location:</strong> {character.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
