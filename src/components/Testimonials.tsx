import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { CTAButton } from './CTAButton';
import DepoimentoSormani from '../videos/DepoimentoSormani.mp4';
import DepoimentoCesar2 from '../videos/DepoimentoCesar2.mp4';
import AlexDepoimento2 from '../videos/AlexDepoimento2.mp4';
import Conversa1 from '../images/Conversa1.png';
import Conversa2 from '../images/Conversa2.png';
import Slider from 'react-slick';
import { Check, Star } from 'lucide-react';

// Importar estilos CSS do Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface TestimonialsProps {
  type?: 'problem' | 'success';
}

// Para gerar cores consistentes a partir do nome da pessoa
const getColorFromName = (name: string) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-amber-500',
    'bg-indigo-500',
  ];
  
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  
  return colors[sum % colors.length];
};

// Para obter as iniciais do nome
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

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
  const sliderRef = useRef<Slider | null>(null);

  // Função para alternar entre play/pause
  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    
    if (video.paused) {
      video.play().catch(err => console.error("Erro ao reproduzir:", err));
    } else {
      video.pause();
    }
  };

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

  // Novos depoimentos
  const testimonials = type === 'problem' 
    ? [
        {
          text: 'Tentei estudar pelo manual, mas é muita coisa e tudo em inglês.',
          author: 'Ricardo S.',
          location: 'Florida',
          stars: 4
        },
        {
          text: 'Meu amigo tentou me ensinar, mas na hora do exame esqueci tudo.',
          author: 'Amanda L.',
          location: 'Texas',
          stars: 3
        },
        {
          text: 'Paguei para fazer a prova sem estudar direito e perdi dinheiro.',
          author: 'Carlos M.',
          location: 'Massachusetts',
          stars: 2
        }
      ]
    : [
        {
          text: 'Estava super nervosa antes da prova da CDL, achando que era muita coisa para decorar. Mas graças ao material do curso, consegui passar de primeira! Foi mais tranquilo do que imaginei porque segui exatamente o que estava no manual e lembrei das dicas de direção. Hoje já estou com meu certificado e finalizando o processo no DMV!',
          author: 'Marianna C.',
          location: 'Florida',
          stars: 5
        },
        {
          text: 'Fiz a prova na auto escola e passei direto! A prova foi difícil, mas graças ao manual do curso consegui lembrar de tudo o que precisava responder. O material me ajudou muito e me senti realmente preparado. Agora estou finalizando minha DL no DMV!',
          author: 'Marcelo D.',
          location: 'Texas',
          stars: 5
        },
        {
          text: 'Mesmo sem falar inglês fluentemente, o material traduzido me deu toda a confiança que precisava. Estava ansioso no dia da prova, mas lembrei de todas as dicas do curso. Passei na primeira tentativa e mal pude acreditar! O investimento valeu cada centavo.',
          author: 'João V.',
          location: 'Massachusetts',
          stars: 5
        }
      ];

  // Configurações do carrossel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Section
      id="depoimentos"
      dark={type === 'problem'}
      title={type === 'problem' ? '🗣 O que brasileiros que tentaram sozinhos dizem:' : '📢 Depoimentos de Quem Já Conseguiu a CDL'}
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
              preload="metadata"
              aria-label={video.alt}
              onPlay={() => setPlayingVideo(index)}
              onPause={() => {/* Mantém o estado atual */}}
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={video.src} type="video/mp4" />
            </video>
            
            {/* Botão de play quando o vídeo não está reproduzindo */}
            {(playingVideo !== index || (videoRefs.current[index] && videoRefs.current[index]?.paused)) && (
              <div
                className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-30 transition-colors hover:bg-opacity-10 cursor-pointer"
                onClick={() => handleVideoPlay(index)}
                aria-label="Reproduzir vídeo"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:bg-accent-dark transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Overlay para pausar quando o vídeo está reproduzindo */}
            {playingVideo === index && videoRefs.current[index] && !videoRefs.current[index]?.paused && (
              <div 
                className="absolute inset-0 w-full h-[calc(100%-40px)] cursor-pointer"
                onClick={() => togglePlayPause(index)}
                aria-label="Pausar vídeo"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Seção de Depoimentos Textuais com Carrossel */}
      <div ref={ref} className="max-w-6xl mx-auto mb-12 px-4">
        <h3 className="text-2xl font-bold text-center mb-8">
          🌟 O que nossos alunos estão dizendo:
        </h3>
        
        <div className="slick-container">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-primary-dark p-6 rounded-lg shadow-2xl border-2 border-accent border-opacity-30 h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className={`${getColorFromName(testimonial.author)} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-3`}>
                      {getInitials(testimonial.author)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-accent">{testimonial.author}</span>
                        <span className="bg-green-500 rounded-full p-0.5 flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </span>
                      </div>
                      <div className="text-sm text-white/70">{testimonial.location}</div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < testimonial.stars ? "#FFD700" : "transparent"} 
                            stroke={i < testimonial.stars ? "#FFD700" : "#FFD700"}
                            className="mr-0.5" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white flex-grow">{testimonial.text}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="flex justify-center mt-4 gap-4">
          <button 
            onClick={() => sliderRef.current?.slickPrev()}
            className="bg-accent hover:bg-accent-dark text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Depoimento anterior"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => sliderRef.current?.slickNext()}
            className="bg-accent hover:bg-accent-dark text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Próximo depoimento"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Seção de Provas Sociais (Imagens de Conversas) */}
      <div className="max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          💬 Conversas reais com alunos que foram aprovados usando nosso método
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <img 
              src={Conversa1} 
              alt="Conversa com aluno aprovado" 
              className="w-full h-auto max-w-[200px] mx-auto" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <img 
              src={Conversa2} 
              alt="Conversa com aluno aprovado" 
              className="w-full h-auto max-w-[200px] mx-auto" 
            />
          </motion.div>
        </div>
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