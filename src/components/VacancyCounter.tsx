import { useEffect, useState } from 'react';

interface VacancyCounterProps {
  initialCount?: number;
  minCount?: number;
  intervalMinutes?: number;
  className?: string;
}

export function VacancyCounter({
  initialCount = 10,
  minCount = 1,
  intervalMinutes = 1,
  className = '',
}: VacancyCounterProps) {
  // Verificamos o localStorage para manter a contagem persistente entre recargas da página
  const getInitialVacancies = () => {
    if (typeof window !== 'undefined') {
      const storedCount = localStorage.getItem('vacanciesRemaining');
      const storedTime = localStorage.getItem('vacanciesLastUpdated');
      
      if (storedCount && storedTime) {
        const count = parseInt(storedCount);
        const lastUpdated = parseInt(storedTime);
        const now = Date.now();
        const minutesPassed = Math.floor((now - lastUpdated) / (1000 * 60));
        
        // Calculamos quantas vagas devem ter sido reduzidas desde a última visita
        let newCount = Math.max(count - minutesPassed, minCount);
        
        // Atualizamos o localStorage se o valor mudou
        if (newCount !== count) {
          localStorage.setItem('vacanciesRemaining', newCount.toString());
          localStorage.setItem('vacanciesLastUpdated', now.toString());
        }
        
        return newCount;
      }
      
      // Se não houver dados no localStorage, inicializamos
      localStorage.setItem('vacanciesRemaining', initialCount.toString());
      localStorage.setItem('vacanciesLastUpdated', Date.now().toString());
    }
    
    return initialCount;
  };
  
  const [vacancies, setVacancies] = useState(getInitialVacancies);
  
  useEffect(() => {
    // Função para diminuir o contador
    const decrementVacancies = () => {
      setVacancies(prev => {
        const newCount = prev > minCount ? prev - 1 : minCount;
        
        // Atualizamos o localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('vacanciesRemaining', newCount.toString());
          localStorage.setItem('vacanciesLastUpdated', Date.now().toString());
        }
        
        return newCount;
      });
    };
    
    // Configuramos o intervalo (convertendo minutos para milissegundos)
    const interval = setInterval(decrementVacancies, intervalMinutes * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [minCount, intervalMinutes]);
  
  return (
    <p className={`animate-pulse ${className}`}>
      Apenas <span className="font-bold">{vacancies}</span> {vacancies === 1 ? 'vaga restante' : 'vagas restantes'} para o suporte VIP!
    </p>
  );
}
