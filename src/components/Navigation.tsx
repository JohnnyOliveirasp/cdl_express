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
        <li><a href="#paraquem" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Para Quem</a></li>
        <li><a href="#investimento" className="text-base md:text-lg font-medium hover:text-accent transition-colors py-2 px-1 inline-block">Investimento</a></li>
      </ul>
    </motion.nav>
  );
}
