import { useState } from 'react';
import logoImage from '../images/LogoTipoCDL_Express.png';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfUse } from './TermsOfUse';

export function Footer() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfUseOpen, setIsTermsOfUseOpen] = useState(false);

  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPrivacyPolicyOpen(true);
  };

  const handleTermsOfUseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTermsOfUseOpen(true);
  };

  return (
    <footer className="bg-primary-light py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-2 md:mb-0">
            <img 
              src={logoImage} 
              alt="CDL Express Logo" 
              className="h-12 md:h-16 object-contain" 
            />
          </div>
          
          <div className="flex space-x-6">
            <button 
              onClick={handlePrivacyPolicyClick}
              className="text-metallic hover:text-accent transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1"
              type="button"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={handleTermsOfUseClick}
              className="text-metallic hover:text-accent transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 rounded px-2 py-1"
              type="button"
            >
              Termos de Uso
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-3 text-center text-sm text-metallic">
          <p> {new Date().getFullYear()} CDL Express. Todos os direitos reservados.</p>
          <p>
            Este site não é afiliado a qualquer órgão governamental. Conteúdo meramente informativo.
          </p>
        </div>
      </div>

      {/* Modais */}
      <PrivacyPolicy 
        isOpen={isPrivacyPolicyOpen} 
        onClose={() => setIsPrivacyPolicyOpen(false)} 
      />
      
      <TermsOfUse 
        isOpen={isTermsOfUseOpen} 
        onClose={() => setIsTermsOfUseOpen(false)} 
      />
    </footer>
  );
}
