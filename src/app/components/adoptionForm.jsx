'use client'

import { useState, useEffect } from 'react'

export default function AdoptionForm() {
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

    const [animals, setAnimals] = useState([])
    const [cities, setCities] = useState([])
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const resAnimals = await fetch('https://adaopte-back.vercel.app/animal')
                const resCities = await fetch('https://adaopte-back.vercel.app/city')

                if (!resAnimals.ok || !resCities.ok) {
                    throw new Error('Erreur lors du chargement des données.')
                }

                const animalsData = await resAnimals.json()
                const citiesData = await resCities.json()

                setAnimals(animalsData)
                setCities(citiesData)
            } catch (err) {
                console.error('Erreur chargement données :', err)
                setError("Erreur lors du chargement des données.")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setSuccess(false)
        setLoading(true)

        try {
            // Étape 1 : créer l’adoptant
            const adopterRes = await fetch('https://adaopte-back.vercel.app/adopter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: form.name,
                    address: form.address,
                    tel: form.tel,
                    email: form.email,
                    date_birth: form.date_birth,
                    adoption_motivation: form.adoption_motivation,
                    city_id: parseInt(form.city_id)
                })
            })

            if (!adopterRes.ok) {
                const data = await adopterRes.json()
                throw new Error(data.message || 'Erreur lors de la création de l’adoptant.')
            }

            const adopterData = await adopterRes.json()
            const adopter_id = adopterData.adopter_id

            // Étape 2 : créer l’adoption
            const adoptionRes = await fetch('https://adaopte-back.vercel.app/adoption', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    animal_id: parseInt(form.animal_id),
                    adopter_id: adopter_id,
                    adoption_at: form.adoption_at
                })
            })

            if (!adoptionRes.ok) {
                const data = await adoptionRes.json()
                throw new Error(data.message || 'Erreur lors de la création de l’adoption.')
            }

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
            setError("Une erreur s'est produite lors de l'envoi.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <h2 style={{ textAlign: 'center', color: '#F2785C' }}>Formulaire d’adoption</h2>

            <input name="name" placeholder="Nom complet" value={form.name} onChange={handleChange} required style={inputStyle} />
            <input name="address" placeholder="Adresse" value={form.address} onChange={handleChange} required style={inputStyle} />
            <input name="tel" placeholder="Téléphone" value={form.tel} onChange={handleChange} style={inputStyle} />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
            <input type="date" name="date_birth" value={form.date_birth} onChange={handleChange} style={inputStyle} />
            <textarea name="adoption_motivation" placeholder="Pourquoi souhaitez-vous adopter ?" value={form.adoption_motivation} onChange={handleChange} rows={4} style={{ ...inputStyle, resize: 'vertical' }} />

            <select name="city_id" value={form.city_id} onChange={handleChange} required style={inputStyle}>
                <option value="">Choisissez une ville</option>
                {cities.map((city) => (
                    <option key={city.city_id} value={city.city_id}>
                        {city.name}
                    </option>
                ))}
            </select>

            <select name="animal_id" value={form.animal_id} onChange={handleChange} required style={inputStyle}>
                <option value="">Choisissez un animal</option>
                {animals.map((animal) => (
                    <option key={animal.animal_id} value={animal.animal_id}>
                        {animal.name}
                    </option>
                ))}
            </select>

            <input type="date" name="adoption_at" value={form.adoption_at} onChange={handleChange} style={inputStyle} />

            <button type="submit" style={buttonStyle} disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>

            {success && <p style={{ color: 'green', textAlign: 'center' }}>Demande envoyée avec succès !</p>}
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        </form>
    )
}

// Styles
const formStyle = {
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
}

const inputStyle = {
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
}

const buttonStyle = {
    backgroundColor: '#F2785C',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    cursor: 'pointer',
}

