import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-foreground">
                Política de Privacidade
              </h1>
              <p className="font-paragraph text-base text-text-secondary">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 font-paragraph text-base text-text-secondary leading-relaxed"
            >
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  1. Introdução
                </h2>
                <p>
                  O Estúdio Corpo & Alma Humanizado respeita sua privacidade e está comprometido em
                  proteger seus dados pessoais. Esta política de privacidade explica como coletamos,
                  usamos e protegemos suas informações.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  2. Informações que Coletamos
                </h2>
                <p>Coletamos as seguintes informações quando você utiliza nossos serviços:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome completo</li>
                  <li>Telefone e e-mail para contato</li>
                  <li>Informações de saúde relevantes para o tratamento</li>
                  <li>Histórico de sessões e tratamentos</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  3. Como Usamos suas Informações
                </h2>
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Agendar e gerenciar suas sessões</li>
                  <li>Personalizar seu plano de tratamento</li>
                  <li>Enviar lembretes de agendamento</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  4. Proteção de Dados
                </h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas
                  informações contra acesso não autorizado, perda ou alteração. Seus dados de saúde
                  são tratados com sigilo profissional absoluto.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  5. Compartilhamento de Informações
                </h2>
                <p>
                  Não compartilhamos suas informações pessoais com terceiros, exceto quando
                  necessário para prestação do serviço ou exigido por lei. Seus dados de saúde são
                  mantidos em sigilo absoluto.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  6. Seus Direitos
                </h2>
                <p>Você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir informações incorretas</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar consentimentos</li>
                  <li>Solicitar portabilidade de dados</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  7. Contato
                </h2>
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em
                  contato conosco:
                </p>
                <p>
                  E-mail: contato@estudiohumanizado.com.br
                  <br />
                  Telefone: (11) 99999-9999
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  8. Alterações nesta Política
                </h2>
                <p>
                  Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças
                  significativas através dos nossos canais de comunicação.
                </p>
              </section>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
