import { motion } from 'framer-motion';
import { Section } from './Section';
import { useInView } from 'react-intersection-observer';
import { CountdownTimer } from './CountdownTimer';
import { CreditCard, Check } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { config } from '../utils/config';

export function SpecialOffer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section className="bg-accent bg-opacity-15 text-primary-dark" title="O INVESTIMENTO">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-12 text-center text-white"
        >
          Escolha o plano que melhor se adapta a você
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pacote Básico (baixa opacidade) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 0.3, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary-light rounded-xl p-6 shadow-lg relative"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold mb-2 text-accent">BÁSICO</h4>
              <p className="text-sm text-gray-300 mb-4">Para iniciantes</p>
              <div className="text-3xl font-bold mb-2">US$ 97</div>
              <p className="text-sm text-gray-400">Acesso por 3 meses</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Material básico</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Acesso à comunidade</span>
              </li>
              <li className="flex items-center opacity-50">
                <Check size={18} className="text-accent mr-2" />
                <span>Atualizações</span>
              </li>
              <li className="flex items-center opacity-50">
                <Check size={18} className="text-accent mr-2" />
                <span>Suporte VIP</span>
              </li>
            </ul>
            
            <div className="text-center mt-auto">
              <CTAButton variant="outline" className="w-full" text="ESCOLHER" />
            </div>
          </motion.div>
          
          {/* Pacote Mais Popular (Destacado) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-light rounded-xl p-6 shadow-xl relative border-2 border-[#CFAC78] transform scale-105 z-10"
          >
            {/* Badge de Oferta de Lançamento */}
            <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-[#CFAC78] text-black rounded-full text-sm font-bold">
              OFERTA DE LANÇAMENTO
            </div>
            
            <div className="absolute -right-2 -top-2 bg-accent text-primary text-xs font-bold py-1 px-3 rounded-full">
              MAIS POPULAR
            </div>
            
            <div className="text-center mb-6 pt-2">
              <h4 className="text-2xl font-semibold mb-2 text-accent">COMPLETO</h4>
              <p className="text-sm text-gray-300 mb-4">Melhor custo-benefício</p>
              
              <div className="text-lg line-through text-gray-400 mb-1">De US$ 197</div>
              <div className="text-3xl font-bold mb-1 text-[#CFAC78]">Por apenas US$ 47</div>
              <p className="text-sm text-gray-400">Pagamento único - Acesso vitalício</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Material completo</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Acesso à comunidade VIP</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Atualizações vitalícias</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Bônus exclusivos</span>
              </li>
            </ul>
            
            <div className="text-center mt-auto">
              <a 
                href={config.checkoutLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block bg-[#CFAC78] hover:bg-[#b69968] text-black font-semibold rounded-lg px-8 py-4 text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                ASSINAR
              </a>
              <p className="text-xs mt-2 text-gray-400">Oferta por tempo limitado</p>
            </div>
          </motion.div>
          
          {/* Pacote Premium (baixa opacidade) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 0.3, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-primary-light rounded-xl p-6 shadow-lg relative"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold mb-2 text-accent">PREMIUM</h4>
              <p className="text-sm text-gray-300 mb-4">Suporte personalizado</p>
              <div className="text-3xl font-bold mb-2">US$ 297</div>
              <p className="text-sm text-gray-400">Acesso vitalício + mentoria</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Tudo do plano COMPLETO</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Mentoria individual</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Simulados exclusivos</span>
              </li>
              <li className="flex items-center">
                <Check size={18} className="text-accent mr-2" />
                <span>Grupo de WhatsApp VIP</span>
              </li>
            </ul>
            
            <div className="text-center mt-auto">
              <CTAButton variant="outline" className="w-full" text="ESCOLHER" />
            </div>
          </motion.div>
        </div>
        
        {/* Contador regressivo */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-light p-6 rounded-lg">
            <p className="text-accent font-semibold mb-3">Esta oferta termina em:</p>
            <CountdownTimer 
              className="text-2xl font-bold" 
              days={config.offerDuration.days}
              hours={config.offerDuration.hours}
              minutes={config.offerDuration.minutes}
              seconds={config.offerDuration.seconds}
            />
          </div>
        </div>
        
        {/* Formas de pagamento */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-4">
            <CreditCard className="inline-block mr-2" size={24} />
            Aceitamos todos os cartões de crédito e pagamento via PIX
          </p>
          <p className="text-sm text-gray-400">
            Compra 100% segura com criptografia SSL. Garantia de 7 dias ou seu dinheiro de volta.
          </p>
        </div>
      </div>
    </Section>
  );
}