import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchCharacters } from './services/api';
import Filters from './components/Filters';
import Table from './components/Table';
import CharacterDetails from './components/CharacterDetails';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20); 
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCharacters(page, pageSize, filters);
        setCharacters(data.results);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [page, pageSize, filters]); 

  

  return (
    <div className="App">
      <div className={selectedCharacter ? 'content-wrapper blur' : 'content-wrapper'}>
        <header className="App-header">
          <h1 className="title">Rick and Morty Characters</h1>
        </header>

        {/* Filters Section */}
        <Filters setFilters={setFilters} />

        {/* Loading/Error/Empty States */}
        {loading ? (
          <p>Loading characters...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : characters.length === 0 ? (
          <p>No characters found with the current filters.</p>
        ) : (
          <>
            {/* Table Component */}
            <Table characters={characters} onSelect={setSelectedCharacter} />

            {/* Pagination Section */}
            <Pagination
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />
          </>
        )}
      </div>

      {/* Character Details Modal */}
      {selectedCharacter && (
        <CharacterDetails
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default App;
