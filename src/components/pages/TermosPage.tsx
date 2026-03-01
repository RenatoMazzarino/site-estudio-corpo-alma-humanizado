import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermosPage() {
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
                Termos de Uso
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
                  1. Aceitação dos Termos
                </h2>
                <p>
                  Ao utilizar os serviços do Estúdio Corpo & Alma Humanizado, você concorda com
                  estes termos de uso. Se não concordar, por favor, não utilize nossos serviços.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  2. Serviços Oferecidos
                </h2>
                <p>
                  Oferecemos serviços de massoterapia terapêutica, incluindo drenagem linfática,
                  massagem terapêutica, tratamento conservador para lipedema, ofurô de pés e pernas,
                  quick massage e planos personalizados.
                </p>
                <p>
                  Nossos serviços não substituem tratamento médico. Recomendamos consultar um médico
                  antes de iniciar qualquer tratamento terapêutico.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  3. Agendamentos
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Agendamentos devem ser feitos com antecedência mínima de 24 horas através dos
                    nossos canais oficiais
                  </li>
                  <li>
                    Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência
                  </li>
                  <li>
                    Cancelamentos com menos de 24 horas de antecedência ou faltas sem aviso prévio
                    podem resultar em cobrança de taxa
                  </li>
                  <li>Atrasos superiores a 15 minutos podem resultar em redução do tempo de sessão</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  4. Pagamento
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O pagamento deve ser realizado no momento da sessão</li>
                  <li>Aceitamos dinheiro, cartões de débito e crédito, e PIX</li>
                  <li>Planos personalizados têm condições de pagamento específicas</li>
                  <li>Valores estão sujeitos a alteração mediante aviso prévio</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  5. Responsabilidades do Cliente
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Informar condições de saúde relevantes antes do início do tratamento
                  </li>
                  <li>Comunicar desconfortos durante a sessão</li>
                  <li>Seguir orientações pós-sessão fornecidas pela terapeuta</li>
                  <li>Respeitar horários agendados</li>
                  <li>Manter comportamento respeitoso e adequado</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  6. Responsabilidades do Estúdio
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prestar serviços com técnica e qualidade</li>
                  <li>Manter ambiente limpo, seguro e acolhedor</li>
                  <li>Respeitar a privacidade e confidencialidade do cliente</li>
                  <li>Utilizar produtos de qualidade</li>
                  <li>Cumprir horários agendados</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  7. Contraindicações
                </h2>
                <p>
                  Alguns serviços podem ter contraindicações. É responsabilidade do cliente informar
                  condições de saúde que possam impedir ou limitar o tratamento, incluindo mas não
                  limitado a:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gravidez</li>
                  <li>Infecções ou feridas abertas</li>
                  <li>Trombose ou problemas circulatórios graves</li>
                  <li>Câncer em tratamento ativo</li>
                  <li>Febre ou doenças infecciosas</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  8. Propriedade Intelectual
                </h2>
                <p>
                  Todo o conteúdo deste site, incluindo textos, imagens, logos e design, é
                  propriedade do Estúdio Corpo & Alma Humanizado e protegido por leis de direitos
                  autorais.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  9. Limitação de Responsabilidade
                </h2>
                <p>
                  O Estúdio Corpo & Alma Humanizado não se responsabiliza por resultados não
                  alcançados devido a não seguimento de orientações, falta de constância no
                  tratamento ou condições de saúde não informadas.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  10. Alterações nos Termos
                </h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações
                  significativas serão comunicadas através dos nossos canais oficiais.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  11. Contato
                </h2>
                <p>Para dúvidas sobre estes termos, entre em contato:</p>
                <p>
                  E-mail: contato@estudiohumanizado.com.br
                  <br />
                  Telefone: (11) 99999-9999
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
