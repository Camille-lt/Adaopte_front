'use client';

import {useState} from 'react';
import SearchBar from '../components/searchbar';

export default function  AdoptPage() {
    const [searchResults, setSearchResults] = useState([]);

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
                {searchResults.map((animal, index) => (
                    <li key={index}>
                        {animal.name} ({animal.type} - {animal.location})
                    </li>
                ) 
                )}
            </ul>
        </div>
    );
}