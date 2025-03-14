import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center py-4 md:py-0 md:pr-8"
    >
      <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-white">
        <li><a href="#problema" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">O Problema</a></li>
        <li><a href="#oportunidade" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">A Oportunidade</a></li>
        <li><a href="#paraQuem" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Para Quem</a></li>
        <li><a href="#propostaDeValor" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Proposta de Valor</a></li>
        <li><a href="#depoimentos" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Depoimentos</a></li>
        <li><a href="#beneficios" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Benefícios</a></li>
        <li><a href="#garantia" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Garantia</a></li>
        <li><a href="#objecoes" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Objecções</a></li>
        <li><a href="#faq" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">FAQ</a></li>
        <li><a href="#solutions" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Soluções</a></li>
        <li><a href="#oQueVaiAprender" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">O que vai aprender</a></li>
        <li><a href="#investimento" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Investimento</a></li>
      </ul>
    </motion.nav>
  );
}
