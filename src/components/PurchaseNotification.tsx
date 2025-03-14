import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';

// Cores para os avatares
const avatarColors = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-emerald-500',
  'bg-cyan-500',
  'bg-amber-500',
  'bg-indigo-500',
];

interface Notification {
  name: string;
  location: string;
  minutesAgo: number;
}

// Função para gerar um tempo aleatório entre min e max
const getRandomTime = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Função para gerar as iniciais do nome
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

// Função para gerar cor aleatória do avatar
const getRandomColor = () => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
};

// Componente Avatar
function Avatar({ name }: { name: string }) {
  const initials = getInitials(name);
  const color = getRandomColor();
  
  return (
    <div className={`${color} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3 flex-shrink-0`}>
      {initials}
    </div>
  );
}

// Gerar notificações com timestamps aleatórios
const generateNotifications = (): Notification[] => {
  const baseNotifications = [
    { name: 'João da Silva', location: 'São Paulo' },
    { name: 'Maria Oliveira', location: 'Orlando' },
    { name: 'Carlos Vermon', location: 'Boston' },
    { name: 'Ana Cruz', location: 'Flórida' },
    { name: 'Marcelo Dantas', location: 'Newark' },
    { name: 'Rafael Moraes', location: 'New York' },
    { name: 'Mateus Soares', location: 'Texas' },
    { name: 'Mariana E.', location: 'Las Vegas' },
    { name: 'Mike McConnell', location: 'Texas' },
    { name: 'Carlos Di Santi', location: 'Orlando' },
    { name: 'John Oliver', location: 'Orlando' },
    { name: 'Caroline M.', location: 'Massachusetts' },
  ];

  return baseNotifications.map(notification => ({
    ...notification,
    minutesAgo: getRandomTime(1, 59), // Tempo aleatório entre 1-59 minutos
  }));
};

// Configurações de tempo
const MIN_DISPLAY_TIME = 3000; // 3 segundos
const MAX_DISPLAY_TIME = 4000; // 4 segundos
const MIN_INTERVAL_TIME = 30000; // 30 segundos
const MAX_INTERVAL_TIME = 120000; // 2 minutos
const MIN_INITIAL_DELAY = 5000; // 5 segundos
const MAX_INITIAL_DELAY = 15000; // 15 segundos

export function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [notifications] = useState<Notification[]>(generateNotifications);
  const hideTimeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Função para mostrar notificação por tempo aleatório entre 3-4 segundos
    const showNotification = () => {
      setVisible(true);
      
      // Limpa qualquer timeout anterior
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Tempo de exibição aleatório entre 3-4 segundos
      const displayTime = getRandomTime(MIN_DISPLAY_TIME, MAX_DISPLAY_TIME);
      
      // Esconde a notificação após o tempo definido
      hideTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        
        // Troca para a próxima notificação após desaparecer
        window.setTimeout(() => {
          setCurrentNotification((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, displayTime);
    };
    
    // Define o tempo entre notificações (30s-120s)
    const getIntervalTime = () => {
      return getRandomTime(MIN_INTERVAL_TIME, MAX_INTERVAL_TIME);
    };
    
    // Mostra primeira notificação após tempo aleatório entre 5-15 segundos
    const initialDelay = getRandomTime(MIN_INITIAL_DELAY, MAX_INITIAL_DELAY);
    const initialTimeout = window.setTimeout(() => {
      showNotification();
      
      // Configura o ciclo de mostrar/esconder em intervalos
      intervalRef.current = window.setInterval(() => {
        showNotification();
        // Recalcula o intervalo para cada ciclo
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = window.setInterval(showNotification, getIntervalTime());
        }
      }, getIntervalTime());
    }, initialDelay);
    
    // Função de limpeza quando o componente desmonta
    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [notifications.length]);

  const notification = notifications[currentNotification];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-20 left-6 bg-[#25D366] p-3 rounded-lg shadow-lg z-40 max-w-xs text-white"
          aria-live="polite"
        >
          <div className="flex items-start">
            <Avatar name={notification.name} />
            <div>
              <p className="text-sm mb-1">
                <strong>{notification.name}</strong> de {notification.location} acabou de comprar o curso!
              </p>
              <div className="flex items-center text-xs text-white/80">
                <Clock className="mr-1 h-3 w-3" />
                <span>há {notification.minutesAgo} min</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}