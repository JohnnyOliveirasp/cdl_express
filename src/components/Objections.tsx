import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from './Section';

export function Objections() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const objections = [
    {
      title: "MAS EU NÃO FALO INGLÊS",
      text: "Não se preocupe! Todo o material de estudo é traduzido para português. E desenvolvemos técnicas específicas para você passar na prova mesmo com conhecimento limitado de inglês."
    },
    {
      title: "ESTOU PREOCUPADO COM O INVESTIMENTO",
      text: "Entendemos sua preocupação. Por isso oferecemos garantia de 07 dias. Se não estiver satisfeito por qualquer motivo, devolveremos 100% do seu dinheiro. Sem perguntas."
    },
    {
      title: "SERÁ QUE VAI FUNCIONAR PARA MIM?",
      text: "Nosso método já ajudou alguns brasileiros a conseguirem acelerar seu aprendizado e tirar suas CDL. Se você seguir o passo a passo, temos certeza que conseguirá também. E lembre-se da nossa garantia incondicional."
    }
  ];

  return (
    <Section
      className="bg-accent bg-opacity-15 text-primary-dark"
      title="OBJEÇÕES PRINCIPAIS"
      subtitle="Talvez você ainda tenha algumas dúvidas..."
    >
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {objections.map((objection, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-primary-light p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">{objection.title}</h3>
            <p className="text-metallic">{objection.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
