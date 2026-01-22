'use client';

import { useState, useEffect } from 'react';
import SearchBar from '../components/searchbar';
import Image from 'next/image';

export default function AdoptPage() {
  const [animals, setAnimals] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSearch = ({ type, location }) => {
    setFilterType(type || '');
    setFilterLocation(location || '');
  };

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // Le cache 'no-store' est vital pour voir tes changements Neon immédiatement
const res = await fetch('https://adaopte-back.vercel.app/animal', { cache: 'no-store' });
 const data = await res.json();
        setAnimals(data);
      } catch (error) {
        console.error('Erreur chargement :', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  const animalsToDisplay = animals.filter((animal) => {
    const searchType = filterType.toLowerCase().trim();
    const searchLocation = filterLocation.toLowerCase().trim();

    const animalType = (animal.type || '').toLowerCase().trim();
    // On lit 'city_name' car c'est le nom dans ta table Neon
    const animalCity = (animal.city_name || '').toLowerCase().trim();

    const matchType = searchType === '' || animalType.includes(searchType);
    const matchLocation = searchLocation === '' || animalCity.includes(searchLocation);

    return matchType && matchLocation;
  });

  if (loading) return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Chargement des animaux...</p>;

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', color: '#46736E' }}>Adopter un animal</h1>
      <SearchBar onSearch={handleSearch} />

      <p style={{ marginTop: '1.5rem', color: '#46736E', fontWeight: 'bold' }}>
        {animalsToDisplay.length} animal/animaux trouvé(s)
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
        {animalsToDisplay.map((animal) => (
          <article key={animal.animal_id} style={{ borderRadius: '8px', padding: '1rem', boxShadow: '2px 3px 10px rgba(0,0,0,0.1)', backgroundColor: 'rgba(241, 238, 230, 0.42)' }}>
            <Image
              src={animal.img_url?.trim() || ""} 
              alt={animal.name} 
              width={900} height={500}
              style={{ width: '100%', borderRadius: '6px', objectFit: 'cover', height: 180 }}
            />
            <h2 style={{ color: 'rgb(242, 120, 92)', fontSize: '2rem' }}>{animal.name}</h2>
            <p><strong>Type :</strong> {animal.type}</p>
            {/* ⚡ Affiche la ville dynamique de Neon */}
            <p><strong>Ville :</strong> {animal.city_name || 'Non renseignée'}</p>
            <p style={{ marginTop: '1rem', color: '#46736E' }}>{animal.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function getAge(dateString) {
  if (!dateString) return 'Inconnu';
  const birthDate = new Date(dateString);
  return Math.abs(new Date(Date.now() - birthDate.getTime()).getUTCFullYear() - 1970) + ' ans';
}