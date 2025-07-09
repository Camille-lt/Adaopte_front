'use client'; // Obligatoire pour utiliser useRouter (hook React)

import { useRouter } from 'next/navigation'; // Hook navigation dans app dir
import Button from './components/button'; // chemin relatif vers ton composant

export default function Home() {
  const router = useRouter();

  const handleVoirAnimaux = () => {
    router.push('/animaux'); // redirection vers la page /animaux
  };

  return (
    <>
      <header style={{
        padding: '2rem 1rem',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}>
        <h1 style={{
          fontSize: '2rem',
          margin: 0
        }}>
          Bienvenue sur Adaopte
        </h1>
      </header>

      <main style={{
        padding: '1.5rem',
        maxWidth: '600px',
        margin: '0 auto',
        fontSize: '1rem',
        lineHeight: '1.6'
      }}>
        <p style={{ marginBottom: '1rem' }}>
          Donnons-leur autant qu'ils nous apportent
        </p>
        <p>
          Chaque jour, des milliers d'animaux attendent une famille aimante.
          Trouvez votre compagnon idéal parmi nos animaux disponibles à
          l'adoption.
        </p>
      </main>
    </>
  );
}

