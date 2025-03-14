import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { CTAButton } from './CTAButton';
import DepoimentoSormani from '../videos/DepoimentoSormani.mp4';
import DepoimentoCesar2 from '../videos/DepoimentoCesar2.mp4';
import AlexDepoimento2 from '../videos/AlexDepoimento2.mp4';

interface TestimonialsProps {
  type?: 'problem' | 'success';
}

export function Testimonials({ type = 'success' }: TestimonialsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videos = [
    { src: DepoimentoSormani, alt: 'Depoimento Sormani' },
    { src: DepoimentoCesar2, alt: 'Depoimento César' },
    { src: AlexDepoimento2, alt: 'Depoimento Alex' }
  ];

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoPlay = (index: number) => {
    // Pausa o vídeo atual que está sendo reproduzido (se houver)
    if (playingVideo !== null && playingVideo !== index) {
      const currentVideo = videoRefs.current[playingVideo];
      if (currentVideo) {
        currentVideo.pause();
      }
    }
    
    // Define o novo vídeo como o atual e inicia a reprodução
    setPlayingVideo(index);
    
    // Reproduzir o vídeo programaticamente
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch(err => {
        console.error("Erro ao iniciar vídeo:", err);
      });
    }
  };

  const testimonials = type === 'problem' 
    ? [
        {
          text: 'Tentei estudar pelo manual, mas é muita coisa e tudo em inglês.',
          author: 'Ricardo S.',
          image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100'
        },
        {
          text: 'Meu amigo tentou me ensinar, mas na hora do exame esqueci tudo.',
          author: 'Amanda L.',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
        },
        {
          text: 'Paguei para fazer a prova sem estudar direito e perdi dinheiro.',
          author: 'Carlos M.',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
        }
      ]
    : [
        {
          text: 'Tentei sozinho 3 vezes e reprovei. Depois do curso, passei na primeira tentativa!',
          author: 'Rodrigo A.',
          image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100'
        },
        {
          text: 'Não sabia nada de inglês e tinha medo de errar. Com o método do curso, decorei tudo e passei sem dificuldade!',
          author: 'Fernanda M.',
          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
        },
        {
          text: 'Economizei muito dinheiro porque fui preparado para a prova. Valeu cada centavo!',
          author: 'José L.',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
        }
      ];

  return (
    <Section
      dark={type === 'problem'}
      title={type === 'problem' ? '🗣 O que brasileiros que tentaram sozinhos dizem:' : '📢 Depoimentos de Quem Já Conseguiu já fez o Curso'}
      className="bg-accent bg-opacity-15 text-primary-dark"
    >
      {/* Seção de Vídeos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-primary-dark rounded-lg shadow-2xl overflow-hidden aspect-[9/16] border-2 border-accent border-opacity-30"
          >
            <video
              ref={el => videoRefs.current[index] = el}
              className="w-full h-full object-cover"
              controls={playingVideo === index}
              onClick={() => playingVideo === index && videoRefs.current[index]?.paused 
                ? videoRefs.current[index]?.play() 
                : videoRefs.current[index]?.pause()
              }
              preload="metadata"
              aria-label={video.alt}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            
            {playingVideo !== index && (
              <button
                className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 transition-colors hover:bg-opacity-10"
                onClick={() => handleVideoPlay(index)}
                aria-label="Reproduzir vídeo"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:bg-accent-dark transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Seção de Depoimentos Textuais */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-primary-dark p-6 rounded-lg shadow-2xl border-2 border-accent border-opacity-30"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <span className="font-semibold text-accent">{testimonial.author}</span>
            </div>
            <p className="text-white">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Seção de CTA após os depoimentos */}
      <div className="text-center mt-12">
        <h3 className="text-2xl text-center font-bold text-accent mb-8">
          🚀 Agora é a sua vez! Entre para essa lista de aprovados!
        </h3>
        <CTAButton size="lg" className="mt-4" />
      </div>
    </Section>
  );
}