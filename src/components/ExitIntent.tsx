import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { X } from 'lucide-react';

export function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasClosedPopup, setHasClosedPopup] = useState(
    localStorage.getItem('exitIntentClosed') === 'true'
  );

  // Usando useCallback para manter a mesma referência da função entre renderizações
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !hasClosedPopup) {
      setShowPopup(true);
    }
  }, [hasClosedPopup]);

  useEffect(() => {
    // Esperar alguns segundos antes de habilitar o exit intent
    const timer = setTimeout(() => {
      // Apenas adicionar o evento se o usuário ainda não fechou o popup
      if (!hasClosedPopup) {
        document.addEventListener('mouseleave', handleMouseLeave);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasClosedPopup, handleMouseLeave]);

  // Função para fechar o popup e salvar essa informação
  const closePopup = () => {
    setShowPopup(false);
    setHasClosedPopup(true);
    localStorage.setItem('exitIntentClosed', 'true');
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-primary border-2 border-accent rounded-lg p-8 max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-metallic hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold mb-6 text-center">ESPERE!</h2>
            <p className="text-xl mb-8 text-center">
              Quer mesmo perder a chance de conseguir sua CDL rapidamente?
            </p>

            <div className="space-y-4">
              <Button size="lg" className="w-full" onClick={closePopup}>
                Quero aproveitar esta oportunidade!
              </Button>
              
              <button
                onClick={closePopup}
                className="block w-full text-center text-metallic hover:text-white py-2"
              >
                Não, prefiro continuar tentando sozinho
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
