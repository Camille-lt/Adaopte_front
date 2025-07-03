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
      <header>
        <h1>Bienvenue sur Adaopte</h1>
      </header>
      <main>
        <p>Donnons-leur autant qu'ils nous apportent</p>
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
