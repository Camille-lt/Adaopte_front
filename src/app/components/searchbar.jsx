'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ type, location });
  };

  const handleReset = () => {
    setType('');
    setLocation('');
    onSearch({ type: '', location: '' });
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          width: '100%',
        }}
      >
        <input
          type="text"
          placeholder="Type d'animal (ex : chien, chat...)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Ville"
          list="villes-suggestions"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />

        <datalist id="villes-suggestions">
          <option value="Paris" />
          <option value="Lyon" />
          <option value="Marseille" />
        </datalist>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            style={{ ...buttonStyle, backgroundColor: '#46736E', flex: 2 }}
          >
            Rechercher
          </button>

          <button
            type="button"
            onClick={handleReset}
            style={{
              ...buttonStyle,
              backgroundColor: '#ccc',
              flex: 1,
              color: '#333',
            }}
          >
            Effacer
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
  width: '100%',
};

const buttonStyle = {
  padding: '0.75rem',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'opacity 0.2s',
};
