'use client'


import { useState } from 'react'
import { HandHeart, BookOpen, Home, Rabbit } from 'lucide-react'
import AdoptionForm from '../components/adoptionForm'
import Image from 'next/image'


export default function GuideAdoption({ animals = [], cities = [] }) {
    const [showForm, setShowForm] = useState(false)


    const bannerAdoptURL =
        'https://i.pinimg.com/736x/e5/15/a5/e515a509fac7260f67ae42e844f8cc6a.jpg'


const steps = [
    {
        icon: <HandHeart size={50} color="#F2785C" />,
        title: '1. Trouver votre compagnon',
        text: "Parcourez notre base de données d&apos;animaux disponibles et utilisez nos filtres pour trouver celui qui correspond à votre mode de vie.",
    },
    {
        icon: <BookOpen size={40} color="#F2785C" />,
        title: '2. Remplissez une demande',
        text: "Soumettez votre formulaire d&apos;adoption pour l&apos;animal qui vous intéresse. Nous examinons chaque demande avec soin.",
    },
    {
        icon: <Rabbit size={40} color="#F2785C" />,
        title: "3. Rencontrez l&apos;animal",
        text: "Visitez le refuge pour rencontrer l&apos;animal et voir si vous êtes compatibles. C&apos;est une étape essentielle du processus.",
    },
    {
        icon: <Home size={40} color="#F2785C" />,
        title: '4. Bienvenue à la maison',
        text: "Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller.",
    },
]


    return (
        <main style={{ maxWidth: 960, margin: '0 auto', paddingBottom: '2rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#46736E' }}>
                Guide de l'adoption
            </h1>


            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '500px',
                    marginBottom: '5rem',
                }}
            >
                <Image
                    src={bannerAdoptURL}
                    alt="Bannière animaux"
                    width={500}
                    height={500}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '30px',
                    }}
                />


                <div
                    style={{
                        position: 'absolute',
                        bottom: '-50px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#ffffff',
                        padding: '2rem',
                        borderRadius: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        maxWidth: 600,
                        width: '110%',
                        color: '#46736E',
                        textAlign: 'center',
                        zIndex: 3,
                    }}
                >
                    <p style={{ fontSize: '1.1rem', margin: 0, color: '#46736E' }}>
                        <b>Adopter un animal</b>, c&apos;est <b>offrir une seconde chance </b> à un
                        compagnon qui mérite <b>amour et sécurité.</b> C&apos;est{' '}
                        <b>un engagement sur le long terme</b>, pour{' '}
                        <b>lequel nous vous accompagnons pas à pas.</b>
                    </p>
                </div>
            </div>


            <section style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#F2785C', marginBottom: '1.5rem', paddingTop: '3.5rem' }}>COMMENT ÇA MARCHE</h3>
                <p style={{ paddingBottom: '1.5rem', lineHeight: 1.5, color: '#555555' }}>
                    Vous l&apos;aurez compris, adopter un animal est un engagement sérieux et à long
                    terme ! Lancez-vous dans l&apos;une des plus belles aventures de votre vie : celle
                    d&apos;accueillir un petit animal qui ne recherche qu&apos;un foyer aimant.
                </p>
                <p style={{ paddingBottom: '1.5rem', color: '#46736E', fontWeight: 'bold', paddingTop: '1.5rem', paddingBottom: '3rem', }}>
                    Voici notre processus d&apos;adoption en quelques étapes simples :
                </p>


                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        justifyContent: 'center',
                        paddingBottom: '4rem',
                    }}
                >
                    {steps.map(({ icon, title, text }) => (
                        <div
                            key={title}
                            style={{
                                flex: '1 1 250px',
                                backgroundColor: '#EBF1F2',
                                borderRadius: 8,
                                padding: '1.5rem',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                color: '#46736E',
                                textAlign: 'left',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                {icon}
                                <h4 style={{ margin: 0, color: '#F2785C' }}>{title}</h4>
                            </div>
                            <p style={{ fontSize: '1rem', lineHeight: 1.4 }}>{text}</p>
                        </div>
                    ))}
                </div>
            </section>


            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <button
                    onClick={() => setShowForm(!showForm)}
                    style={{
                        backgroundColor: '#F2785C',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
{showForm ? 'Masquer le formulaire' : 'Afficher le formulaire d&apos;adoption'}            
    </button>
            </div>

            {showForm && (
                <div style={{ marginBottom: '5rem' }}>
                    <AdoptionForm animals={animals} cities={cities} />
                </div>
            )}
        </main>
    )
}
