import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck } from 'lucide-react';

const notifications = [
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

// Defina um intervalo mais curto para testes (ajuste para produção quando necessário)
const NOTIFICATION_DISPLAY_TIME = 5000; // 5 segundos
const MIN_INTERVAL_TIME = 15000; // 15 segundos
const MAX_INTERVAL_TIME = 30000; // 30 segundos

export function PurchaseNotification() {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const hideTimeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // Função para mostrar notificação por 5 segundos e depois escondê-la
    const showNotification = () => {
      setVisible(true);
      
      // Limpa qualquer timeout anterior
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
      
      // Esconde a notificação após o tempo definido
      hideTimeoutRef.current = window.setTimeout(() => {
        setVisible(false);
        
        // Troca para a próxima notificação após desaparecer
        window.setTimeout(() => {
          setCurrentNotification((prev) => (prev + 1) % notifications.length);
        }, 500);
      }, NOTIFICATION_DISPLAY_TIME);
    };
    
    // Define o tempo entre notificações
    const getIntervalTime = () => {
      return Math.floor(Math.random() * (MAX_INTERVAL_TIME - MIN_INTERVAL_TIME + 1) + MIN_INTERVAL_TIME);
    };
    
    // Mostra primeira notificação após 10 segundos do carregamento da página
    const initialTimeout = window.setTimeout(() => {
      showNotification();
      
      // Configura o ciclo de mostrar/esconder em intervalos
      intervalRef.current = window.setInterval(showNotification, getIntervalTime());
    }, 10000);
    
    // Função de limpeza quando o componente desmonta
    return () => {
      if (initialTimeout) clearTimeout(initialTimeout);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const notification = notifications[currentNotification];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-20 left-6 bg-[#25D366] p-3 rounded-lg shadow-lg z-40 max-w-xs text-white"
        >
          <div className="flex items-center">
            <Truck className="mr-2 text-white h-4 w-4" />
            <p className="text-sm">
              <strong>{notification.name}</strong> de {notification.location} acabou de comprar o curso!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}