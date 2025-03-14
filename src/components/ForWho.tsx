import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from './Section';
import brasileirosEUAImage from '../images/BrasileironosEUA.png';
import profissionalTransicaoImage from '../images/ProfissionalTransicao.png';
import estudantesImage from '../images/BrasileirosEstudandoEUA.png';

export function ForWho() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const targetGroups = [
    {
      title: 'Brasileiros nos EUA',
      description: 'Que querem trabalhar como caminhoneiros profissionais mas não conseguiram tirar a CDL',
      image: brasileirosEUAImage,
    },
    {
      title: 'Profissionais em Transição',
      description: 'Que estão mudando de carreira e buscam uma oportunidade estável e bem remunerada',
      image: profissionalTransicaoImage,
    },
    {
      title: 'Motoristas de Caminhão',
      description: 'Que já trabalham na área mas querem validar sua CDL para atuar nos Estados Unidos',
      image: estudantesImage,
    },
  ];

  return (
    <Section
      id="para-quem"
      title="Para Quem Destina-se este curso ?"
      className="bg-accent bg-opacity-15 text-primary-dark"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {targetGroups.map((group, index) => (
          <div key={index} className="text-center p-6">
            <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 overflow-hidden shadow-lg">
              <img 
                src={group.image} 
                alt={group.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
            <p className="text-primary-dark">{group.description}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
