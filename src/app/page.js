
'use client';


import { useRouter } from 'next/navigation';
import Button from './components/button';


export default function Home() {
  const router = useRouter();


  const handleVoirAnimaux = () => {
    router.push('/jadopte');
  };

 const handleAdopterAnimal = () => {
    router.push('/guide-adoption');
  };

  const handleDevenirBenevole = () => {
    router.push('/devenir-benevole');
  };

  const bannerUrl = "https://i.pinimg.com/736x/eb/76/77/eb76777430dd97353bb23d1a92439df2.jpg"; // remplace par ta vraie URL


  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Bannière avec texte à gauche, image à droite */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
          color: '#fff',
          padding: '2rem',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: '#F2785C', paddingBottom: '1rem', fontWeight: '700' }}>
            Bienvenue <br/>sur Adaopte
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '500px', color: '#416d6c9e' }}>
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
      <section style={{ backgroundColor: '#FFFFFF', padding: '3rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#46736E' }}>Notre mission</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '700px', paddingBottom: '2rem', color: '#46736E' }}>
          Chaque jour, des milliers d’animaux cherchent une seconde chance. Chez Adaopte,
          nous croyons en l’amour, la bienveillance et l’engagement pour offrir à chaque
          animal un foyer aimant.
        </p>
        <Button onClick={handleVoirAnimaux} style={{ marginTop: '2rem', gap: '1.5 rem' }}>
          Voir les animaux disponibles
        </Button>
      </section>


      {/* Section CTA */}
      <section
        style={{
          backgroundColor: '#F2CB9B',
          paddingTop:'1rem',
          paddingBottom:'2.5rem',
          textAlign: 'center',
          borderRadius: '30px',
        }}
      >
        <h2 style={{ fontSize: '1.8rem', color: '#46736E', marginBottom: '1rem', marginTop: '1.5rem' }}>
          Vous pouvez faire la différence
        </h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Bouton vert (par défaut) */}
          <Button onClick={handleAdopterAnimal}>Adopter un animal</Button>


          {/* Bouton orange (style personnalisé) */}
          <Button
            onClick={handleDevenirBenevole}
            style={{
              backgroundColor: '#F2785C',
              color: '#FFFFFF'
            }}
          >
            Devenir bénévole
          </Button>
        </div>
      </section>
    </main>
  );
}
