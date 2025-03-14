import { useState } from 'react';
import { Modal } from './Modal';
import { config } from '../utils/config';

// Formatar a data atual no formato brasileiro
const getCurrentDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function PrivacyPolicy({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [hasAgreed, setHasAgreed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('privacy_policy_agreed') === 'true';
    }
    return false;
  });
  
  const handleAgree = () => {
    setHasAgreed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('privacy_policy_agreed', 'true');
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="POLÍTICA DE PRIVACIDADE"
      showAgreeButton={!hasAgreed}
      onAgree={handleAgree}
    >
      <div className="privacy-policy-content">
        <p className="text-sm text-metallic mb-6">
          <strong>Última atualização:</strong> {getCurrentDate()}
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">1. INTRODUÇÃO</h2>
        <p className="mb-4">
          Bem-vindo à Política de Privacidade do {config.courseName}. Nós respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta política de privacidade informará como cuidamos dos seus dados pessoais quando você visita nosso site e informa sobre seus direitos de privacidade e como a lei protege você.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">2. DADOS QUE COLETAMOS</h2>
        <p className="mb-4">
          Podemos coletar, usar, armazenar e transferir diferentes tipos de dados pessoais sobre você, incluindo:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Dados de Identidade:</strong> nome completo, endereço de e-mail</li>
          <li><strong>Dados de Contato:</strong> endereço de cobrança, endereço de entrega, e-mail e números de telefone</li>
          <li><strong>Dados Financeiros:</strong> detalhes de cartão de pagamento (processados pela Hotmart, nossa plataforma de pagamento)</li>
          <li><strong>Dados de Transação:</strong> detalhes sobre pagamentos de e para você e detalhes de produtos e serviços que você adquiriu</li>
          <li><strong>Dados Técnicos:</strong> endereço IP, dados de login, tipo e versão do navegador, configuração de fuso horário, tipos e versões de plug-ins, sistema operacional e plataforma</li>
          <li><strong>Dados de Perfil:</strong> suas compras ou pedidos feitos por você, seus interesses, preferências, feedback e respostas a pesquisas</li>
          <li><strong>Dados de Uso:</strong> informações sobre como você usa nosso site e serviços</li>
        </ul>

        <h2 className="text-xl font-bold text-accent mb-4">3. COMO USAMOS SEUS DADOS</h2>
        <p className="mb-4">
          Usaremos seus dados pessoais apenas quando a lei nos permitir. Mais comumente, usaremos seus dados nas seguintes circunstâncias:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Para registrar você como aluno</li>
          <li>Para processar e entregar seu pedido</li>
          <li>Para gerenciar nosso relacionamento com você</li>
          <li>Para melhorar nosso site, produtos/serviços e marketing</li>
          <li>Para recomendar produtos ou serviços que possam ser do seu interesse</li>
        </ul>

        <h2 className="text-xl font-bold text-accent mb-4">4. COMPARTILHAMENTO DE DADOS</h2>
        <p className="mb-4">
          Seus dados pessoais poderão ser compartilhados com:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Hotmart:</strong> nossa plataforma de processamento de pagamentos e hospedagem de curso</li>
          <li><strong>Provedores de serviço:</strong> que fornecem serviços de administração de TI e sistema</li>
          <li><strong>Consultores profissionais:</strong> incluindo advogados, banqueiros, auditores e seguradoras</li>
          <li><strong>Autoridades fiscais, reguladoras e outras autoridades</strong></li>
        </ul>

        <h2 className="text-xl font-bold text-accent mb-4">5. SEGURANÇA DE DADOS</h2>
        <p className="mb-4">
          Implementamos medidas de segurança apropriadas para evitar que seus dados pessoais sejam acidentalmente perdidos, usados ou acessados de forma não autorizada, alterados ou divulgados.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">6. RETENÇÃO DE DADOS</h2>
        <p className="mb-4">
          Manteremos seus dados pessoais apenas pelo tempo necessário para cumprir os propósitos para os quais os coletamos, inclusive para fins de cumprimento de quaisquer requisitos legais, contábeis ou de relatórios.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">7. SEUS DIREITOS LEGAIS</h2>
        <p className="mb-4">
          Sob certas circunstâncias, você tem direitos sob as leis de proteção de dados em relação aos seus dados pessoais, incluindo o direito de:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Solicitar acesso aos seus dados pessoais</li>
          <li>Solicitar a correção de seus dados pessoais</li>
          <li>Solicitar a exclusão de seus dados pessoais</li>
          <li>Opor-se ao processamento de seus dados pessoais</li>
          <li>Solicitar a restrição do processamento de seus dados pessoais</li>
          <li>Solicitar a transferência de seus dados pessoais</li>
          <li>Direito de retirar o consentimento</li>
        </ul>
        <p className="mb-4">
          Se você deseja exercer qualquer um dos direitos acima, entre em contato conosco através do e-mail: {config.supportEmail}
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">8. COOKIES</h2>
        <p className="mb-4">
          Você pode configurar seu navegador para recusar todos ou alguns cookies do navegador, ou para alertá-lo quando os sites definirem ou acessarem cookies. Se você desativar ou recusar cookies, observe que algumas partes deste site podem se tornar inacessíveis ou não funcionar adequadamente.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">9. ALTERAÇÕES NA POLÍTICA DE PRIVACIDADE</h2>
        <p className="mb-4">
          Quaisquer alterações que fizermos em nossa política de privacidade no futuro serão publicadas nesta página. Verifique periodicamente para se manter informado sobre atualizações ou mudanças em nossa política de privacidade.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">10. CONTATO</h2>
        <p className="mb-4">
          Se você tiver dúvidas sobre esta política de privacidade ou nossas práticas de privacidade, entre em contato conosco pelo e-mail: {config.supportEmail}
        </p>
      </div>
    </Modal>
  );
}
