import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from './Section';
import { Clock, Book, Users, Check, Award, Speech } from 'lucide-react';

export function ValueProposition() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza o tempo de estudo e preparação de meses para semanas com nosso método exclusivo para brasileiros."
    },
    {
      icon: Book,
      title: "Material Traduzido",
      description: "Todo o conteúdo necessário foi traduzido e adaptado para brasileiros, eliminando a barreira do idioma."
    },
    {
      icon: Users,
      title: "Suporte Completo",
      description: "Acesso a grupo exclusivo de alunos e professores para tirar dúvidas e receber orientação em português."
    },
    {
      icon: Speech,
      title: "Preparação Confiante",
      description: "Imagine entrar na autoescola sabendo exatamente o que falar e fazer!"
    },
    {
      icon: Award,
      title: "Transformação de Vida",
      description: "Com sua CDL em mãos, sua vida nos EUA vai mudar completamente."
    },
    {
      icon: Check,
      title: "Sem Fluência Necessária",
      description: "Você não precisa falar inglês fluentemente, só decorar o necessário para passar."
    }
  ];

  return (
    <Section
      id="propostaDeValor"
      title="PROPOSTA DE VALOR"
      dark
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center flex flex-col items-center mb-8"
            >
              <div className="w-16 h-16 bg-accent rounded-full mb-4 flex items-center justify-center">
                <benefit.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-dark">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
