'use client'

import { useState } from 'react'

export default function AdoptionForm({ animals, cities }) {
    const [form, setForm] = useState({
        name: '',
        address: '',
        tel: '',
        email: '',
        date_birth: '',
        adoption_motivation: '',
        city_id: '',
        animal_id: '',
        adoption_at: '',
    })

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            const res = await fetch('/api/adoption', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })

            if (!res.ok) throw new Error('Erreur lors de l’envoi')

            setSuccess(true)
            setForm({
                name: '',
                address: '',
                tel: '',
                email: '',
                date_birth: '',
                adoption_motivation: '',
                city_id: '',
                animal_id: '',
                adoption_at: '',
            })
        } catch (err) {
            console.error(err)
            setError("Une erreur s'est produite.")
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: '600px',
                margin: '0 auto',
                padding: '2rem',
                backgroundColor: '#EBF1F2',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                color: '#46736E',
            }}
        >
            <h2 style={{ textAlign: 'center', color: '#F2785C' }}>Formulaire d’adoption</h2>

            <input
                name="name"
                placeholder="Nom complet"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                name="address"
                placeholder="Adresse"
                value={form.address}
                onChange={handleChange}
                required
                style={inputStyle}
            />
            <input
                name="tel"
                placeholder="Téléphone"
                value={form.tel}
                onChange={handleChange}
                style={inputStyle}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
            />
            <input
                type="date"
                name="date_birth"
                value={form.date_birth}
                onChange={handleChange}
                style={inputStyle}
            />
            <textarea
                name="adoption_motivation"
                placeholder="Pourquoi souhaitez-vous adopter ?"
                value={form.adoption_motivation}
                onChange={handleChange}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
            />

            <select
                name="city_id"
                value={form.city_id}
                onChange={handleChange}
                required
                style={inputStyle}
            >
                <option value="">Choisissez une ville</option>
                {cities.map((city) => (
                    <option key={city.city_id} value={city.city_id}>
                        {city.name}
                    </option>
                ))}
            </select>

            <select
                name="animal_id"
                value={form.animal_id}
                onChange={handleChange}
                required
                style={inputStyle}
            >
                <option value="">Choisissez un animal</option>
                {animals.map((animal) => (
                    <option key={animal.animal_id} value={animal.animal_id}>
                        {animal.name}
                    </option>
                ))}
            </select>

            <input
                type="date"
                name="adoption_at"
                value={form.adoption_at}
                onChange={handleChange}
                style={inputStyle}
            />

            <button
                type="submit"
                style={{
                    backgroundColor: '#F2785C',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    cursor: 'pointer',
                }}
            >
                Envoyer la demande
            </button>

            {success && <p style={{ color: 'green', textAlign: 'center' }}>Demande envoyée avec succès !</p>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </form>
    )
}

// Style réutilisable
const inputStyle = {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
}
