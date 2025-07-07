'use client';

import {useState, useEffect} from 'react';
import SearchBar from '../components/searchbar';

export default function  AdoptPage() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function fetchAnimals() {
            const res = await fetch('/api/animals');
            const data = await res.json();
            setSearchResults(data);
        }
        fetchAnimals();
    }, []);

    const handleSearch = async ({type, location}) => {
        console.log('Recherche en cours pour:', type, location);

        // Exemples fictifs à remplacer par u n appel d'API plus tard

        const filteredResults = [
            {name: 'Beaudelaire', type: 'chat', location: 'Paris'},
            {name: 'Scoty', type: 'chien', location: 'Lyon'},
        ].filter(
            (animal) => (!type || animal.type.includes(type.toLowerCase())) && (!location || animal.location.toLowerCase().includes(location.toLowerCase()))
        );
        setSearchResults(filteredResults);
    };

    return (
        <div>
            <h1>Adopter un animal</h1>
            <SearchBar onSearch={handleSearch}/>

            <ul>
                {searchResults.map((animal) => (
                    <li key={animal.id}>
                        <img src={animal.image_url} alt={animal.type} width={100}/>
                        {animal.name} ({animal.type} - {animal.location || 'N/A'})
                    </li>
                ))}
            </ul>
        </div>
    );
}