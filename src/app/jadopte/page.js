'use client';

import { useState, useEffect } from 'react';
import SearchBar from '../components/searchbar';

export default function AdoptPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [animals, setAnimals] = useState([]);

  const handleSearch = async ({ type, location }) => {
    try {
      const queryParams = new URLSearchParams();
      if (type) queryParams.append('type', type);
      if (location) queryParams.append('location', location);

      const res = await fetch(`/api/animal?${queryParams.toString()}`);
      const data = await res.json();

      setSearchResults(data);
    } catch (error) {
      console.error("Erreur pendant la recherche :", error);
    }
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await fetch('http://localhost:3001/animal');
        const data = await res.json();
        setAnimals(data);
      } catch (error) {
        console.error('Erreur lors du chargement des animaux', error);
      }
    };

    fetchAnimals();
  }, []);

  const animalsToDisplay = searchResults.length > 0 ? searchResults : animals;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem', paddingTop:'2rem', paddingBottom:'4rem' }}>
      <h1 style={{ textAlign: 'center', color:'#46736E' }}>Adopter un animal</h1>
      <SearchBar onSearch={handleSearch} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {animalsToDisplay.map((animal, index) => (
          <article key={index} style={{
            // border: '1px solid #ccc',
            borderRadius:'8px',
            padding: '1rem',
            boxShadow: '2px 3px 10px rgba(0, 0, 0, 0.12)',
            backgroundColor: 'rgba(241, 238, 230, 0.42)'
          }}>
            <img
              src={animal.img_url}
              alt={animal.name}
              style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: 180, marginBottom:'0.5rem' }}
            />
            <h2 style={{ marginTop: '0.5rem', paddingBottom:'0.5rem', color:'rgb(242, 120, 92)', fontSize:'2rem', fontWeight:'800' }}>{animal.name}</h2>
            <p><strong>Race :</strong> {animal.breed}</p>
            <p><strong>Type :</strong> {animal.type}</p>
            <p><strong>Âge :</strong> {getAge(animal.date_birth)}</p>
            <p><strong>Sexe :</strong> {animal.sexe}</p>
            <p style={{ marginTop: '1rem',color: '#46736E', paddingTop:'0.5rem', paddingBottom:'1rem' }}>{animal.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

// Petite fonction pour calculer l'âge approximatif à partir de la date de naissance
function getAge(dateString) {
  if (!dateString) return 'Inconnu';
  const birthDate = new Date(dateString);
  const diffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(diffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970) + ' ans';
}