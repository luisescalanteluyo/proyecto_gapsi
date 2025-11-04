import { useQuery } from '@tanstack/react-query';
import { getWelcomeData } from '../services/welcomeService';
import WelcomeCard from '../components/WelcomeCard';

export default function WelcomePage() {
const { data, isLoading } = useQuery({ queryKey: ['welcome'], queryFn: getWelcomeData });

  if (isLoading) return <p>Cargando...</p>;

   const handleContinue = () => {
    alert('Continuar clickeado');
  };
    return <WelcomeCard message={data?.message} onContinue={handleContinue} />;
  //return <WelcomeCard message={data?.message} onContinue={handleContinue} />;
}