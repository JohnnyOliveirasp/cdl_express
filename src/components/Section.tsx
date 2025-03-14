import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  id?: string;
}

export function Section({ children, className = '', title, subtitle, dark = false, id }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`py-16 ${dark ? 'bg-primary text-white' : 'bg-white'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg md:text-xl text-center mb-8 text-metallic">
            {subtitle}
          </p>
        )}
        {children}
      </motion.div>
    </section>
  );
}

export type { SectionProps };