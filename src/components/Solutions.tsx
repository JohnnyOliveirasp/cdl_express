import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { CTAButton } from './CTAButton';

interface SolutionsProps {
  className?: string;
}

export function Solutions({ className = '' }: SolutionsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      icon: '🔹',
      title: 'Aulas 100% em português',
      description: 'Nada de se perder com material em inglês',
    },
    {
      icon: '🔹',
      title: 'Método validado',
      description: 'Aprenda exatamente o que precisa para passar na prova',
    },
    {
      icon: '🔹',
      title: 'Explicação detalhada',
      description: 'Com vídeos mostrando cada passo do processo',
    },
    {
      icon: '🔹',
      title: 'Simulados práticos',
      description: 'Testes reais para treinar antes da prova',
    },
    {
      icon: '🔹',
      title: 'Suporte VIP',
      description: 'Tire suas dúvidas direto pelo WhatsApp e Telegram',
    },
  ];

  return (
    <Section
      title="🎯 Como o Curso Resolve Seus Problemas?"
      className={`${className} bg-accent bg-opacity-15 text-primary-dark`}
    >
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-primary-light p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-4">{solution.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-accent mb-2">{solution.title}</h3>
                  <p className="text-metallic">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <CTAButton size="lg" />
        </div>
      </div>
    </Section>
  );
}