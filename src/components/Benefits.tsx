import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { CTAButton } from './CTAButton';
import truckImage from '../images/ImageCaminhaoFundo.jpg';

export function Benefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    '✅ Passando na prova de primeira e comemorando sua conquista',
    '✅ Conseguindo um emprego como caminhoneiro e ganhando bem nos EUA',
    '✅ Orgulhando sua família e garantindo um futuro melhor',
    '✅ Trabalhando menos e tendo uma vida mais estável nos EUA',
    '✅ Deixando para trás empregos ruins e sem perspectiva',
  ];

  const familyImpact = [
    { icon: '💖', title: 'Esposa/marido', desc: 'mais segurança financeira, menos brigas por dinheiro' },
    { icon: '👶', title: 'Filhos', desc: 'possibilidade de uma vida melhor para eles' },
    { icon: '🤝', title: 'Amigos', desc: 'respeito por ter conseguido algo que muitos acham difícil' },
    { icon: '🇧🇷', title: 'Família no Brasil', desc: 'orgulho por ver você vencendo nos EUA' },
  ];

  return (
    <Section
      id="beneficios"
      title="🚀 Imagine Sua Vida Depois de Passar na Prova!"
      className="bg-accent bg-opacity-15 text-primary-dark"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="bg-primary-light bg-opacity-15 p-8 rounded-lg shadow-xl mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-4 text-lg text-white"
              >
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-accent">👨‍👩‍👧‍👦 E como isso impacta sua família?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {familyImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-primary-light bg-opacity-25 p-6 rounded-lg"
                >
                  <span className="text-3xl mb-2 block">{impact.icon}</span>
                  <h4 className="text-xl font-semibold text-accent mb-2">{impact.title}</h4>
                  <p className="text-white">{impact.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton size="lg" />
          </div>
        </motion.div>
        
        <div className="bg-primary rounded-lg overflow-hidden shadow-lg order-1 md:order-2 h-[500px]">
          <img 
            src={truckImage} 
            alt="Caminhão CDL Express" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}