import { useEffect, useState } from 'react';

interface VacancyCounterProps {
  initialCount?: number;
  minCount?: number;
  className?: string;
}

export function VacancyCounter({
  initialCount = 10,
  minCount = 1,
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
        const hoursPassed = (now - lastUpdated) / (1000 * 60 * 60);
        
        // Verificamos se passaram 24 horas desde a última atualização
        if (hoursPassed >= 24) {
          // Reseta o contador após 24h de inatividade
          localStorage.setItem('vacanciesRemaining', initialCount.toString());
          localStorage.setItem('vacanciesLastUpdated', now.toString());
          return initialCount;
        }
        
        return Math.max(count, minCount);
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
    
    // Configuramos intervalo aleatório entre 60-90 segundos
    const getRandomInterval = () => {
      return Math.floor(Math.random() * (90 - 60 + 1) + 60) * 1000; // 60-90 segundos em ms
    };
    
    // Inicializamos o primeiro temporizador
    let timerId = setTimeout(function runTimer() {
      decrementVacancies();
      
      // Se ainda não atingimos o mínimo, programamos o próximo decremento
      if (vacancies > minCount) {
        // Recalculamos o intervalo para cada decremento
        timerId = setTimeout(runTimer, getRandomInterval());
      }
    }, getRandomInterval());
    
    // Limpa o temporizador na desmontagem
    return () => clearTimeout(timerId);
  }, [vacancies, minCount]);
  
  return (
    <p className={`animate-pulse ${className}`}>
      Apenas <span className="font-bold">{vacancies}</span> {vacancies === 1 ? 'vaga restante' : 'vagas restantes'} para o suporte VIP!
    </p>
  );
}
