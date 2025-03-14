import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import truckImage from '../images/ImageCaminhaoFundo.jpg';

export function TruckBanner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-primary-light rounded-lg overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary z-10"></div>
              
              {/* Imagem do caminhão */}
              <img 
                src={truckImage} 
                alt="Caminhão CDL Express" 
                className="w-full object-cover max-h-[400px]"
              />
              
              {/* Texto sobreposto na imagem */}
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container mx-auto px-6">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      Sua Carreira Como Caminhoneiro Nos EUA Começa Aqui
                    </h2>
                    <p className="text-lg text-accent mb-8">
                      Obtenha sua CDL em tempo recorde com nosso método exclusivo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
