import { motion } from 'framer-motion';
import logoImage from '../images/LogoTipoCDL_Express.png';
import truckImage from '../images/ImageCaminhaoFundo.jpg';
import { Navigation } from './Navigation';
import { CTAButton } from './CTAButton';
import { VacancyCounter } from './VacancyCounter';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-primary text-white overflow-hidden">
      {/* Imagem de fundo do caminhão com overlay gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-120"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 25, 41, 0.85), rgba(18, 25, 41, 0.95)), url(${truckImage})`,
        }}
      />
      
      <div className="container mx-auto relative z-10">
        {/* Header com logo em destaque e menu de navegação */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between py-5 md:pl-12">
          <div className="my-5 md:ml-0">
            <img 
              src={logoImage} 
              alt="CDL Express Logo" 
              className="h-32 md:h-[240px] object-contain" 
            />
          </div>
          <Navigation />
        </div>
        
        <div className="px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Acelere seu aprendizado para tirar a sua CDL nos EUA, Mesmo Sem Falar Inglês!
            </h1>
            
            <p className="text-xl md:text-1xl mb-4 font-bold text-metallic">
              Sem gastar fortunas, sem passar aperto e sem perder tempo com métodos errados!
            </p>
            
            <p className="text-lg md:text-x0 mb-12">
              📌 O caminho mais rápido e seguro para conseguir sua CDL e começar a ganhar bem como caminhoneiro nos EUA!
            </p>
            
            {/* Perguntas numeradas */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span className="font-bold">1</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">O que eu te ofereço?</h3>
                  <p className="text-metallic">Um método exclusivo para tirar sua CDL nos EUA, mesmo sem falar inglês, com materiais traduzidos e apoio total a sanar todas suas dúvidas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span className="font-bold">2</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">Como isso irá melhorar a sua vida?</h3>
                  <p className="text-metallic">Com sua CDL, você poderá trabalhar como caminhoneiro nos EUA, com salários de até $100.000 por ano, transformando sua realidade financeira.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-accent rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  <span className="font-bold">3</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-2">Qual é o próximo passo?</h3>
                  <p className="text-metallic">Inscreva-se no curso, receba acesso ao material e comece seus estudos hoje mesmo. Você estará pronto para fazer o teste em semanas!</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <CTAButton 
                size="lg" 
                className="w-full md:w-auto"
                text="SAIBA MAIS"
              />
              
              <VacancyCounter className="text-accent text-lg font-semibold mt-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}