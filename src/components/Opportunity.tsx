import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from './Section';
import truckImage from '../images/ImageTruck3.jpg';

export function Opportunity() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section
      id="oportunidade"
      dark
      title="A OPORTUNIDADE"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
      >
        <div className="text-justify order-2 md:order-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-accent">
            Um método criado especialmente para brasileiros
          </h3>
          
          <div className="space-y-6 text-white">
            <p>
              Com nosso método exclusivo, você conseguirá tirar sua CDL nos EUA em tempo recorde, mesmo sem falar inglês. Todos os materiais são traduzidos, adaptados e simplificados para brasileiros.
            </p>
            
            <p>
              Desenvolvemos técnicas específicas para memorizar o conteúdo exato das provas, e preparamos você para lidar com os examinadores, mesmo com pouco inglês. Isso reduz drasticamente o tempo de estudo e a taxa de reprovação.
            </p>
            
            <p>
              Com a CDL em mãos, você terá acesso a empregos como caminhoneiro nos EUA, com salários iniciais a partir de $60.000/ano, podendo chegar a $100.000 ou mais com experiência. Uma transformação financeira completa para você e sua família.
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
          <img 
            src={truckImage} 
            alt="Caminhão CDL Express" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </Section>
  );
}
