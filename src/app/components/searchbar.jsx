'use client'; // à ajouter car ce composant aura des interactions côté client

import { useState} from 'react';

export default function SearchBar({onSearch}) {
    const [type, setType ] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch({type, location});
    };

    return (
        <form onSubmit={handleSubmit} className='searchbar'>
            <input
            type = "text"
            placeholder = "Type d'animal (chien, chat..."
            value = {type}
            onChange={(e) => setType(e.target.value)}
            />

            <input
            type = "text"
            placeholder = "Ville ou région"
            value = {location}
            onChange={(e) => setLocation(e.target.value)}
            />

            <button type = "submit">Rechercher</button>
        </form>
    )
}