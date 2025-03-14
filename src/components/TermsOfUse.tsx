import { useState } from 'react';
import { Modal } from './Modal';
import { config } from '../utils/config';

// Formatar a data atual no formato brasileiro
const getCurrentDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export function TermsOfUse({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [hasAgreed, setHasAgreed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('terms_of_use_agreed') === 'true';
    }
    return false;
  });
  
  const handleAgree = () => {
    setHasAgreed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('terms_of_use_agreed', 'true');
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="TERMOS DE USO"
      showAgreeButton={!hasAgreed}
      onAgree={handleAgree}
    >
      <div className="terms-of-use-content">
        <p className="text-sm text-metallic mb-6">
          <strong>Última atualização:</strong> {getCurrentDate()}
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">1. ACEITAÇÃO DOS TERMOS</h2>
        <p className="mb-4">
          Ao acessar e utilizar o curso {config.courseName}, você concorda em cumprir e estar vinculado aos seguintes Termos e Condições de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nossos serviços.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">2. DESCRIÇÃO DO SERVIÇO</h2>
        <p className="mb-4">
          O {config.courseName} é um curso online que apresenta um meio de acelerar o aprendizado para se obter a Carteira de Motorista Comercial (CDL) nos Estados Unidos, focado especialmente para brasileiros. O curso é vendido através da plataforma Hotmart e entregue em formato digital.
        </p>
        <p className="mb-4 bg-gray-800 p-4 rounded-lg border-l-4 border-accent">
          O Autor do Curso ele não emite nenhum certificado que lhe dará o direito de adquirir uma CDL, ele é apenas uma pessoa que criou o curso segundo o que aprendeu, qualquer uso indevido ou indiscrimidado e por conta da pessoa que comprou o curso.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">3. PROPRIEDADE INTELECTUAL</h2>
        <p className="mb-4">
          Todo o conteúdo disponibilizado no curso {config.courseName}, incluindo, mas não limitado a, textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade exclusiva da {config.courseName} e está protegido por leis de direitos autorais nacionais e internacionais.
        </p>
        <p className="mb-4">
          Você não está autorizado a modificar, reproduzir, publicar, transmitir, distribuir, exibir, criar trabalhos derivados, vender ou explorar de qualquer forma qualquer conteúdo do curso sem autorização prévia por escrito.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">4. LICENÇA DE USO</h2>
        <p className="mb-4">
          Após a compra, você recebe uma licença pessoal, limitada, não transferível e não exclusiva para acessar e utilizar o curso {config.courseName} para fins educacionais e não comerciais. Esta licença é válida apenas para você e não pode ser compartilhada ou transferida.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">5. RESTRIÇÕES DE USO</h2>
        <p className="mb-4">
          Ao utilizar o curso {config.courseName}, você concorda em NÃO:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Compartilhar suas credenciais de acesso com terceiros</li>
          <li>Copiar, distribuir ou divulgar qualquer parte do curso em qualquer meio</li>
          <li>Tentar descompilar, fazer engenharia reversa ou desmontar qualquer software contido no curso</li>
          <li>Remover quaisquer avisos de direitos autorais dos materiais</li>
          <li>Transferir o curso ou materiais para outra pessoa</li>
          <li>Utilizar o curso para qualquer finalidade ilegal ou proibida pelos presentes Termos</li>
        </ul>

        <h2 className="text-xl font-bold text-accent mb-4">6. CONDIÇÕES DE PAGAMENTO</h2>
        <p className="mb-4">
          Todos os pagamentos são processados pela plataforma Hotmart. Ao realizar a compra, você estará sujeito também aos termos e condições da Hotmart.
        </p>
        <p className="mb-4">
          Os preços podem ser alterados a qualquer momento, mas as alterações não afetarão as compras já concluídas.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">7. POLÍTICA DE REEMBOLSO</h2>
        <p className="mb-4">
          Oferecemos uma garantia de satisfação de {config.guaranteeDays} dias. Se por qualquer motivo você não estiver satisfeito com o curso dentro deste período, você poderá solicitar o reembolso completo através da plataforma Hotmart.
        </p>
        <p className="mb-4">
          Após o período de {config.guaranteeDays} dias, não serão concedidos reembolsos.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">8. RESPONSABILIDADE E GARANTIAS</h2>
        <p className="mb-4">
          O curso {config.courseName} é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas.
        </p>
        <p className="mb-4">
          Não garantimos que o curso atenderá a todos os seus requisitos, ou que estará disponível de forma ininterrupta, oportuna, segura ou livre de erros.
        </p>
        <p className="mb-4">
          Não garantimos aprovação nas provas de CDL, uma vez que o resultado depende do esforço individual, dedicação aos estudos e outros fatores externos fora de nosso controle.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">9. LIMITAÇÃO DE RESPONSABILIDADE</h2>
        <p className="mb-4">
          Em nenhuma circunstância a {config.courseName}, seus diretores, funcionários ou agentes serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais, punitivos ou consequentes decorrentes do uso ou incapacidade de usar o curso.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">10. MUDANÇAS NOS TERMOS</h2>
        <p className="mb-4">
          Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos termos revisados. O uso contínuo do curso após tais alterações constitui sua aceitação dos novos termos.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">11. LEI APLICÁVEL</h2>
        <p className="mb-4">
          Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, independentemente de seus princípios de conflito de leis.
        </p>

        <h2 className="text-xl font-bold text-accent mb-4">12. CONTATO</h2>
        <p className="mb-4">
          Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através do e-mail: {config.supportEmail}
        </p>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg border-l-4 border-accent">
          <h2 className="text-xl font-bold text-accent mb-4">ISENÇÃO DE RESPONSABILIDADE SOBRE CERTIFICAÇÃO</h2>
          <p className="mb-4">
            O {config.courseName} é um curso educacional independente que oferece orientação e preparação para o processo de obtenção da Carteira de Motorista Comercial (CDL) nos Estados Unidos. O autor/instrutor do curso NÃO é uma entidade oficial de certificação e NÃO emite qualquer certificado, licença ou documento que dê ao aluno o direito de adquirir ou operar com uma CDL. Este curso baseia-se exclusivamente na experiência pessoal do autor e nas informações publicamente disponíveis sobre o processo de obtenção da CDL.
          </p>
          <p className="mb-4">
            O conteúdo oferecido serve apenas como material de estudo complementar. A obtenção da CDL requer que o aluno passe pelos canais oficiais, incluindo testes teóricos e práticos administrados pelas autoridades competentes de trânsito americanas. O uso do conteúdo deste curso para qualquer finalidade que não seja o estudo pessoal, incluindo qualquer uso indevido ou indiscriminado das informações apresentadas, é de total responsabilidade do aluno que adquiriu o curso.
          </p>
          <p className="mb-4">
            Ao adquirir este curso, você reconhece que o sucesso na obtenção da CDL depende de diversos fatores, incluindo seu próprio esforço, dedicação, situação legal nos EUA e cumprimento dos requisitos oficiais estabelecidos pelos órgãos governamentais americanos.
          </p>
        </div>
      </div>
    </Modal>
  );
}
