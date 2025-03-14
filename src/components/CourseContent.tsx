import { Section } from './Section';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './Button';
import { CheckCircle, Video, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import ExemploDoCurso from '../videos/ExemplodoCurso.mp4';

export function CourseContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Erro ao iniciar vídeo:", err);
        setIsVideoPlaying(false);
      });
    }
  };

  const topics = [
    'Como passar na prova teórica e prática sem precisar de inglês avançado',
    'O passo a passo exato para tirar sua CDL sem cometer erros',
    'Quais documentos são necessários e como evitar dores de cabeça no DMV',
    'Treinamento 100% em português, com traduções e pronúncia para memorizar as respostas da prova',
    'A maneira mais rápida e econômica de conseguir sua carteira e começar a trabalhar',
  ];

  return (
    <Section
      id="oQueVaiAprender"
      dark
      title="📚 O Que Você Vai Aprender no Curso CDL Express?"
      subtitle="Este curso foi criado para que você passe na prova da CDL de forma rápida, sem complicação e sem precisar falar inglês fluentemente!"
    >
      <div
        ref={ref}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-primary-light p-8 rounded-2xl shadow-xl mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold mb-8 text-accent"
          >
            📌 Você vai aprender:
          </motion.h3>

          <div className="space-y-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="text-accent flex-shrink-0 mt-1" />
                <p className="text-lg">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Seção de conteúdo completo com vídeo demonstrativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: topics.length * 0.1 }}
          className="bg-[#0F1624] rounded-xl p-6 border border-accent border-opacity-50 shadow-xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-6 md:mb-0 md:pr-8">
              <div className="w-16 h-16 bg-accent rounded-full mb-4 flex items-center justify-center mx-auto md:mx-0">
                <Video size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-dark text-center md:text-left">Conteúdo Completo</h3>
              <p className="text-gray-300 text-center md:text-left">
                Textos e videos explicativos completos daquilo que você precisa aprender, economizando tempo e dinheiro ao estudar pelos vídeos antes de ir à autoescola.
              </p>
            </div>
            
            <div className="md:w-3/5">
              <h4 className="text-accent font-medium mb-3 text-center">Veja um exemplo real do curso em ação:</h4>
              <div className="relative w-full rounded-lg overflow-hidden border border-accent border-opacity-40 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Tag exclusiva */}
                <div className="absolute top-2 right-2 z-10 bg-accent bg-opacity-90 text-primary text-xs font-bold py-1 px-2 rounded-md">
                  DEMONSTRAÇÃO EXCLUSIVA
                </div>
                
                <video
                  ref={videoRef}
                  className="w-full aspect-video object-cover rounded-lg"
                  controls={isVideoPlaying}
                  preload="metadata"
                  aria-label="Demonstração do curso CDL Express - exemplo da plataforma e conteúdo"
                >
                  <source src={ExemploDoCurso} type="video/mp4" />
                  <track 
                    kind="captions" 
                    src="captions-pt.vtt" 
                    srcLang="pt-BR" 
                    label="Português" 
                  />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
                
                {!isVideoPlaying && (
                  <button
                    className="absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-300 hover:opacity-90"
                    onClick={handleVideoPlay}
                    aria-label="Reproduzir vídeo"
                  >
                    <div className="w-20 h-20 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300 border-2 border-accent">
                      <Play size={36} className="text-accent ml-1" />
                    </div>
                  </button>
                )}
              </div>
              <p className="text-gray-400 text-sm mt-3 text-center italic">
                Demonstração rápida da experiência que você terá ao acessar nosso material exclusivo
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg">QUERO MINHA CDL AGORA!</Button>
        </motion.div>
      </div>
    </Section>
  );
}