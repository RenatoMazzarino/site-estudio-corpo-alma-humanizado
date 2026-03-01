import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Calendar, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlanoPersonalizadoPage() {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Entrevista breve',
      description:
        'Conversamos sobre o que você sente, seu histórico e seus objetivos. Sem pressa, com escuta atenta.',
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Primeira sessão + leitura',
      description:
        'Na primeira sessão, faço uma leitura corporal detalhada e já começo o trabalho terapêutico.',
    },
    {
      icon: FileText,
      number: '03',
      title: 'Plano sugerido',
      description:
        'Com base na avaliação, sugiro um plano personalizado: frequência, técnicas e duração ideal.',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Acompanhamento',
      description:
        'Ajustamos o plano conforme sua evolução. O cuidado é constante e adaptado às suas necessidades.',
    },
  ];

  const benefits = [
    'Avaliação corporal completa',
    'Plano adaptado às suas necessidades',
    'Acompanhamento contínuo',
    'Flexibilidade para ajustes',
    'Resultados duradouros',
    'Orientações para casa',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_0ff9c7c332ae4d888236f6523b4c868c~mv2.png?originWidth=1920&originHeight=640"
            alt="Plano personalizado"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-5xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Plano Personalizado
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Um caminho feito para você — não um pacote genérico.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                Cuidado sob medida
              </h2>
              <p className="font-paragraph text-lg text-text-secondary leading-relaxed">
                Cada corpo é único. Cada história é diferente. Por isso, o Plano Personalizado não
                segue um protocolo fixo — ele é construído a partir da sua realidade, das suas
                necessidades e dos seus objetivos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background rounded-[14px] p-8 lg:p-12 border border-primary-light"
            >
              <p className="font-paragraph text-lg text-text-secondary leading-relaxed">
                Aqui, você não é apenas mais um cliente. Você é ouvido, avaliado com cuidado e
                acompanhado de perto. O plano evolui com você, garantindo que cada sessão faça
                sentido para o seu momento.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground"
            >
              Como funciona
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-surface rounded-[14px] p-8 border border-primary-light space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <div className="font-heading text-3xl font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="font-paragraph text-base text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                O que está incluído
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-background rounded-[14px] p-6 border border-primary-light flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-surface text-xs">✓</span>
                  </div>
                  <p className="font-paragraph text-base text-foreground font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl lg:text-5xl font-bold"
            >
              Pronto para começar seu plano?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-paragraph text-lg leading-relaxed opacity-90"
            >
              Agende sua primeira sessão e vamos construir juntos o caminho ideal para você.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/agendar">
                <Button className="bg-surface text-foreground hover:bg-background rounded-[14px] px-8 h-14 font-paragraph font-medium text-base">
                  Quero meu plano
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-2 border-surface text-surface hover:bg-surface/10 rounded-[14px] px-8 h-14 font-paragraph font-medium text-base"
                >
                  Tirar dúvidas no WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
