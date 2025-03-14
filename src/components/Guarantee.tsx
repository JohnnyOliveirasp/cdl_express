import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { Shield } from 'lucide-react';
import guaranteeImage from '../images/guarantee.png';
import { TermsOfUse } from './TermsOfUse';

export function Guarantee() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isTermsOfUseOpen, setIsTermsOfUseOpen] = useState(false);

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTermsOfUseOpen(true);
  };

  return (
    <Section 
     title="GARANTIAS"
     dark>
      <div 
        ref={ref} 
        className="max-w-5xl mx-auto border border-[#CFAC78] rounded-lg p-8 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
          {/* Coluna de Texto (70%) */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Shield size={28} className="text-[#CFAC78] mr-3" />
              <h3 className="text-2xl font-bold text-[#CFAC78]">
                GARANTIA INCONDICIONAL DE <span className="underline">7 DIAS</span>
              </h3>
            </div>
            
            <div className="space-y-4 text-white">
              <p>
                Queremos que você tenha total confiança ao investir no curso CDL Express. Por isso, oferecemos uma garantia de satisfação de <span className="font-bold text-[#CFAC78]">7 dias</span>.
              </p>
              
              <p>
                Se por qualquer motivo você não estiver satisfeito com o conteúdo do curso nos primeiros 7 dias após a compra, basta nos enviar um e-mail solicitando o reembolso e devolveremos <span className="font-bold text-[#CFAC78]">100% do seu dinheiro</span>.
              </p>
              
              <p className="font-semibold">
                Sem questionamentos, sem burocracia, sem perguntas difíceis.
              </p>
              
              <p>
                Esta garantia existe porque confiamos na qualidade do nosso método e queremos que você possa testar o conteúdo sem nenhum risco financeiro.
              </p>
              
              <p>
                Nosso compromisso é com o seu sucesso na obtenção da CDL!
              </p>
              
              <button 
                onClick={handleTermsClick}
                className="text-sm text-[#CFAC78] underline mt-4 hover:text-white transition-colors duration-300"
                type="button"
              >
                Ver termos completos
              </button>
            </div>
          </motion.div>
          
          {/* Selo de Garantia (30%) */}
          <motion.div 
            className="md:col-span-3 flex justify-center animate-pulse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={guaranteeImage} 
              alt="Selo de garantia incondicional de 7 dias" 
              className="w-4/5"
            />
          </motion.div>
        </div>
      </div>

      {/* Modal de Termos de Uso */}
      <TermsOfUse 
        isOpen={isTermsOfUseOpen} 
        onClose={() => setIsTermsOfUseOpen(false)} 
      />
    </Section>
  );
}
