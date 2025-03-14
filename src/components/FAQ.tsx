import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { CTAButton } from './CTAButton';
import truckImage from '../images/ImageTruck4.jpg';

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: 'E se eu não souber inglês?',
      answer: 'Você só precisa decorar frases-chave, já traduzidas e explicadas no curso',
    },
    {
      question: 'Já tentei estudar sozinho e não consegui.',
      answer: 'O método é simples e direto ao ponto',
    },
    {
      question: 'Será que isso realmente funciona?',
      answer: 'Criado por quem já tirou a CDL e ajudou outros brasileiros',
    },
    {
      question: 'Isso parece muito complicado para mim.',
      answer: 'Você só segue o passo a passo, sem complicação',
    },
    {
      question: 'Vale a pena investir nesse curso?',
      answer: 'Quanto custa ficar preso em empregos ruins nos EUA?',
    },
  ];

  return (
    <Section
      id="faq"
      dark
      title="❓ Suas Dúvidas Respondidas"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-primary-light p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-accent mb-2">🤔 {faq.question}</h3>
                <p className="text-metallic">→ {faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-accent mb-6">💡 Não perca tempo tentando sozinho! O curso foi criado para te levar direto para a aprovação!</p>
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