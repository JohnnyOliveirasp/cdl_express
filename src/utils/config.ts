/**
 * Arquivo de configuração centralizada para a landing page CDL Express
 * 
 * Este arquivo contém variáveis globais que são usadas em toda a aplicação,
 * facilitando a manutenção e atualizações. Ao invés de alterar valores
 * em múltiplos lugares, basta atualizar aqui.
 */

interface Config {
  // Links principais
  checkoutLink: string;
  
  // Informações da empresa/curso
  courseName: string;
  supportEmail: string;
  whatsappNumber: string;
  
  // Textos dos CTAs
  ctaMainText: string;
  ctaSecondaryText: string;
  
  // Cores principais
  colors: {
    accent: string;
    primary: string;
    primaryLight: string;
    primaryDark: string;
    metallic: string;
  };
  
  // Outras configurações
  offerDuration: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  // Configurações de garantia
  guaranteeDays: number;
  
  // Informações de contato para o rodapé
  companyInfo: {
    fullName: string;
    address: string;
    copyright: string;
  };
}

export const config: Config = {
  // Links principais
  checkoutLink: "https://pay.hotmart.com/A98100961C",
  
  // Informações da empresa/curso
  courseName: "CDL Express",
  supportEmail: "suporte@cdlexpress.com", // Substituir pelo email real
  whatsappNumber: "1234567890", // Substituir pelo número real
  
  // Textos dos CTAs
  ctaMainText: "QUERO MEU ACESSO AGORA!",
  ctaSecondaryText: "GARANTIR MINHA VAGA",
  
  // Cores principais (caso precise alterar globalmente)
  colors: {
    accent: "#CFAC78", // Dourado
    primary: "#121929", // Azul escuro
    primaryLight: "#10172A", // Azul escuro mais claro
    primaryDark: "#0A0F1D", // Azul escuro mais escuro
    metallic: "#BBC3D0", // Cinza metálico para textos secundários
  },
  
  // Outras configurações
  offerDuration: {
    days: 0,
    hours: 12,
    minutes: 0,
    seconds: 0
  },
  
  // Configurações de garantia
  guaranteeDays: 7,
  
  // Informações de contato para o rodapé
  companyInfo: {
    fullName: "CDL Express Treinamentos",
    address: "123 Main St, Orlando, FL", // Substituir pelo endereço real
    copyright: `© ${new Date().getFullYear()} CDL Express. Todos os direitos reservados.`
  }
};

/**
 * Como alterar o link de checkout:
 * 
 * 1. Apenas modifique o valor da propriedade 'checkoutLink' acima
 * 2. Salve este arquivo
 * 3. Todos os botões CTA da landing page serão atualizados automaticamente
 */
