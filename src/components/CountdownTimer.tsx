import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  className?: string;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export function CountdownTimer({ 
  className = '', 
  days = 0,
  hours = 12, 
  minutes = 0, 
  seconds = 0 
}: CountdownTimerProps) {
  // Set initial time based on props
  const [timeLeft, setTimeLeft] = useState({
    days,
    hours,
    minutes,
    seconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        // Calculate new time
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        // Reset to the initial values when it hits zero (optional)
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

  // Format numbers to always have two digits
  const formatNumber = (num: number): string => num.toString().padStart(2, '0');

  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      {timeLeft.days > 0 && (
        <>
          <div className="text-center">
            <div className="bg-primary-light px-3 py-2 rounded-md">
              <span className="text-xl md:text-2xl font-bold">{formatNumber(timeLeft.days)}</span>
            </div>
            <span className="text-xs text-metallic">dias</span>
          </div>
          <span className="text-xl md:text-2xl font-bold">:</span>
        </>
      )}
      <div className="text-center">
        <div className="bg-primary-light px-3 py-2 rounded-md">
          <span className="text-xl md:text-2xl font-bold">{formatNumber(timeLeft.hours)}</span>
        </div>
        <span className="text-xs text-metallic">horas</span>
      </div>
      <span className="text-xl md:text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-primary-light px-3 py-2 rounded-md">
          <span className="text-xl md:text-2xl font-bold">{formatNumber(timeLeft.minutes)}</span>
        </div>
        <span className="text-xs text-metallic">minutos</span>
      </div>
      <span className="text-xl md:text-2xl font-bold">:</span>
      <div className="text-center">
        <div className="bg-primary-light px-3 py-2 rounded-md">
          <span className="text-xl md:text-2xl font-bold">{formatNumber(timeLeft.seconds)}</span>
        </div>
        <span className="text-xs text-metallic">segundos</span>
      </div>
    </div>
  );
}
