import { useEffect, useRef, ReactNode, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  showAgreeButton?: boolean;
  agreeButtonText?: string;
  onAgree?: () => void;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  showAgreeButton = true,
  agreeButtonText = "Entendi e concordo",
  onAgree
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Bloquear rolagem da página quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Manipulador para tecla ESC
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey as any);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey as any);
    };
  }, [onClose]);
  
  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isOpen]);
  
  // Manipulador de cliques fora do modal
  const handleOutsideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };
  
  const handleAgreeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAgree) {
      onAgree();
    }
    onClose();
  };

  // Usar um portal para renderizar o modal fora da hierarquia do DOM
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-70"
          onClick={handleOutsideClick}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-primary-light border border-accent rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 
                id="modal-title"
                className="text-xl md:text-2xl font-bold text-accent"
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Fechar"
                type="button"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Conteúdo com rolagem */}
            <div 
              ref={contentRef}
              className="p-6 md:p-8 text-white overflow-y-auto max-h-[60vh] md:max-h-[65vh] custom-scrollbar"
            >
              {children}
            </div>
            
            {/* Rodapé */}
            {showAgreeButton && (
              <div className="p-4 border-t border-gray-700 flex justify-end">
                <button
                  onClick={handleAgreeClick}
                  className="bg-accent hover:bg-accent-dark text-black font-medium py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                  type="button"
                >
                  {agreeButtonText}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Verificar se estamos no navegador antes de criar o portal
  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }
  
  // Fallback para SSR
  return null;
}
