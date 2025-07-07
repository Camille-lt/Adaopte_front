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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#6A00EB', paddingBottom: '1rem'}}>
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
      <main style={{ padding: '2rem', color: '#999194'}}>
        <p>
          Chaque jour, des milliers d'animaux attendent une famille aimante.
          Trouvez votre compagnon idéal parmi nos animaux disponibles à
          l'adoption.
        </p>
        <Button onClick={handleVoirAnimaux}>Voir tous les animaux</Button>
        <Button onClick={handleVoirAnimaux}>Rechercher</Button>
        <Button onClick={handleVoirAnimaux}>Adopter un animal</Button>
        <Button onClick={handleVoirAnimaux}>Faire un don</Button>
        <Button onClick={handleVoirAnimaux}>Devenir bénévole</Button>
      </main>
    </>
  );
}
