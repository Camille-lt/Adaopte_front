'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ type, location });
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '600px', // Limite la largeur sur desktop
      margin: '0 auto'    // Centre horizontalement
    }}>
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
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#46736E',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Rechercher
        </button>
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
