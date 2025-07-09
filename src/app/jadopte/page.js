'use client';

import {useState} from 'react';
import SearchBar from '../components/searchbar';

export default function  AdoptPage() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async ({ type, location }) => {
  try {
    const queryParams = new URLSearchParams();
    if (type) queryParams.append('type', type);
    if (location) queryParams.append('location', location);

    const res = await fetch(`/api/animals?${queryParams.toString()}`);
    const data = await res.json();

    setSearchResults(data);
  } catch (error) {
    console.error("Erreur pendant la recherche :", error);
  }
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