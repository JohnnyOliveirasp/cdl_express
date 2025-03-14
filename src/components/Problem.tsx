import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from './Section';
import truck1Image from '../images/ImageTruck1.jpg';
import truck2Image from '../images/ImageTruck2.jpg';

export function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    'Estudar sozinho pelo manual oficial (tudo em inglês, muito difícil)',
    'Tentar traduzir as provas do DMV com Google Tradutor (ficou confuso e mal traduzido)',
    'Pedir ajuda a amigos que já tiraram a CDL (mas esqueceu tudo na hora da prova)',
    'Comprar cursos em inglês ou espanhol (não entendeu bem o conteúdo e desistiu)',
    'Ir direto na autoescola sem preparação (e falhar no teste, perdendo dinheiro)',
  ];

  const testimonials = [
    'Tentei estudar pelo manual, mas é muita coisa e tudo em inglês.',
    'Meu amigo tentou me ensinar, mas na hora do exame esqueci tudo.',
    'Paguei para fazer a prova sem estudar direito e perdi dinheiro.',
    'Baixei um aplicativo, mas não entendi metade das perguntas.',
    'Tentei sozinho e perdi tempo. Se soubesse desse curso antes, já estaria trabalhando.',
  ];

  return (
    <Section
      id="problema"
      title="O PROBLEMA"
      className="bg-accent bg-opacity-15 text-primary-dark"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-accent">
            Tirar a CDL nos EUA é um pesadelo para brasileiros
          </h3>
          
          <p className="max-w-4xl mx-auto mb-10 text-primary-dark">
            A maioria dos brasileiros que tentam tirar a CDL (Commercial Driver License) nos Estados Unidos encontram diversas barreiras: material de estudo apenas em inglês, provas técnicas complexas, e sistemas burocráticos diferentes do Brasil.
          </p>
        </div>

        {/* PRIMEIRA PARTE - PROBLEMAS COMUNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={`problem-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-50 rounded-lg p-4 flex items-start shadow-md"
              >
                <span className="text-red-500 text-xl mr-3 flex-shrink-0 mt-0.5">❌</span>
                <p className="text-primary-dark">{problem}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg h-full"
          >
            <img 
              src={truck1Image} 
              alt="Caminhão Americano" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Separador */}
        <div className="w-1/2 h-px bg-primary mx-auto mb-16 opacity-30"></div>

        {/* SEGUNDA PARTE - DEPOIMENTOS DE DIFICULDADES */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-accent">
            O que brasileiros que tentaram sozinhos dizem:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4 order-2 md:order-1">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`testimonial-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-40 rounded-lg p-4 flex items-start shadow-md"
                >
                  <span className="text-primary-dark text-xl mr-3 flex-shrink-0 mt-0.5">📌</span>
                  <p className="text-primary-dark">"<em>{testimonial}</em>"</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-lg h-full order-1 md:order-2"
            >
              <img 
                src={truck2Image} 
                alt="Caminhão Americano - Outro Ângulo" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="my-8 space-y-6"
        >
          <h3 className="text-xl font-semibold text-accent text-center mb-6">
            Sentimentos comuns de quem tenta tirar a CDL
          </h3>
        
          {/* Linha de Emoções */}
          <div className="space-y-4">
            <h4 className="text-white text-opacity-80 text-center mb-2">Emoções comuns</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                "😰 Ansiedade – medo de falhar nas provas",
                "😤 Frustração – informações desorganizadas",
                "😟 Insegurança – inglês insuficiente",
                "🙏 Esperança – ver outros conseguindo",
                "⏱️ Pressão – necessidade de trabalhar rápido"
              ].map((emotion, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-8 rounded-lg p-3 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-sm text-black text-opacity-90">{emotion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        
          {/* Linha de Medos */}
          <div className="space-y-4 pt-4">
            <h4 className="text-white text-opacity-80 text-center mb-2">Maiores medos</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                "💸 Investir e não passar na prova",
                "🚫 Ser enganado por escolas ruins",
                "🔍 Não conseguir trabalho depois",
                "⏳ Perder tempo com material errado",
                "👥 Desmotivação de familiares"
              ].map((fear, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-8 rounded-lg p-3 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-sm text-black text-opacity-90">{fear}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CONCLUSÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-primary bg-opacity-10 rounded-lg p-6 text-center shadow-lg"
        >
          <p className="text-xl font-semibold text-primary-dark">
            💡 Se você já passou por isso, o problema não é você. O sistema não facilita para brasileiros. Mas existe um método que funciona!
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}
