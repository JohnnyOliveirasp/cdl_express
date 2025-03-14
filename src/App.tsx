import { Hero } from './components/Hero';
// import { Section } from './components/Section';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
// import { CourseContent } from './components/CourseContent';
import { Solutions } from './components/Solutions';
import { FAQ } from './components/FAQ';
import { SpecialOffer } from './components/SpecialOffer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PurchaseNotification } from './components/PurchaseNotification';
// import { VideoSection } from './components/VideoSection';
import { ExitIntent } from './components/ExitIntent';
import { Footer } from './components/Footer';
import { Problem } from './components/Problem';
import { Opportunity } from './components/Opportunity';
import { ForWho } from './components/ForWho';
import { ValueProposition } from './components/ValueProposition';
import { Objections } from './components/Objections';
import { Guarantee } from './components/Guarantee';

function App() {
  return (
    <div className="bg-primary">
      {/* 1. Cabeçalho e Chamada Principal */}
      <Hero />
      
      {/* 2. Seção "O Problema" */}
      <Problem />
      
      {/* 3. Seção "A Oportunidade" */}
      <Opportunity />
      
      {/* 4. Seção "Para Quem É" */}
      <ForWho />
      
      {/* 5. Seção "Proposta de Valor" */}
      <ValueProposition />
      
      {/* 6. Seção "Depoimentos/Provas" */}
      <Testimonials type="success" />
      
      {/* 8. Bloco Triplo - 8a. A História de Origem */}
      {/* <VideoSection /> */}
      
      {/* 9. Seção "Dimensionalização" */}
      <Benefits />
      
      {/* 10. Seção "O Investimento" */}
      <SpecialOffer />
      
      {/* 11. Seção "Garantias" */}
      <Guarantee />
      
      {/* 12. Seções "Futuro Presumido" - Já cobertas nos componentes existentes */}
      <Objections />
      
      {/* 13. Seção "Perguntas Frequentes" */}
      <FAQ />
      
      {/* 14. Seção "Chamada Final / CTA" - O Solutions serve para isso */}
      <Solutions className="py-10" />

      {/* Elementos de UI que aparecem em todas as páginas */}
      <WhatsAppButton />
      <PurchaseNotification />
      <ExitIntent />
      <Footer />
    </div>
  );
}

export default App;