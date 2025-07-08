'use client';

import { useRouter } from 'next/navigation';
import Button from './components/button';

export default function Home() {
  const router = useRouter();

  const handleVoirAnimaux = () => {
    router.push('/animaux');
  };

  const bannerUrl = "https://i.pinimg.com/736x/eb/76/77/eb76777430dd97353bb23d1a92439df2.jpg"; // remplace par ta vraie URL

  return (
    <>
      {/* Bannière avec texte à gauche, image à droite */}
      <div
        style={{
          display: 'flex',
          height: '400px',
          width: '700px',
          backgroundColor: 'white',
          color: '#fff',
        }}
      >
        {/* Texte à gauche */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#6A00EB', paddingBottom: '1rem' }}>
            Bienvenue sur Adaopte
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '500px', color: '#F2785C' }}>
            Donnons-leur autant qu'ils nous apportent.
          </p>
        </div>

        {/* Image à droite */}
        <div style={{ flex: 1 }}>
          <img
            src={bannerUrl}
            alt="Bannière animaux"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Le reste du contenu sous la bannière */}
      {/* À propos */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '3rem 2rem', color: '#46736E' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Notre mission</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
          Chaque jour, des milliers d’animaux cherchent une seconde chance. Chez Adaopte,
          nous croyons en l’amour, la bienveillance et l’engagement pour offrir à chaque
          animal un foyer aimant.
        </p>
        <Button onClick={handleVoirAnimaux} style={{ marginTop: '1.5rem' }}>
          Voir les animaux disponibles
        </Button>
      </section>

      {/* Section CTA */}
      <section
        style={{
          backgroundColor: '#F2CB9B',
          padding: '3rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', color: '#46736E', marginBottom: '1rem' }}>
          Vous pouvez faire la différence
        </h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button onClick={handleVoirAnimaux}>Adopter un animal</Button>
          <div><Button onClick={handleVoirAnimaux} style={{ backgroundColor: '#F2785C', color: '#FFFFFF', border: 'none' }}>Devenir bénévole</Button>
        </div>
        </div>
      </section>
    </>
  );
}
