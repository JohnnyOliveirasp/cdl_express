import { Section } from './Section';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function VideoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section dark>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative aspect-video mb-8">
          {/* This is a placeholder for the video that will be added later */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg border-2 border-accent">
            <p className="text-2xl text-center p-8">
              Espaço reservado para vídeo<br />
              <span className="text-sm block mt-2 text-metallic">(o vídeo será adicionado posteriormente)</span>
            </p>
          </div>
        </div>
        
        <p className="text-lg text-center mb-8">
          Assista este vídeo para entender como você pode conseguir sua CDL rapidamente!
        </p>
        
        <div className="text-center">
          <Button size="lg">QUERO MINHA CDL AGORA!</Button>
        </div>
      </motion.div>
    </Section>
  );
}
