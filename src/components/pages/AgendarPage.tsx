import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AgendarPage() {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const services = [
    {
      title: 'Drenagem Linfática',
      description: 'Para reduzir inchaço e melhorar circulação',
      slug: 'drenagem-linfatica',
    },
    {
      title: 'Massagem Terapêutica',
      description: 'Para dores crônicas e tensões musculares',
      slug: 'massagem-terapeutica',
    },
    {
      title: 'Lipedema',
      description: 'Tratamento conservador especializado',
      slug: 'lipedema',
    },
    {
      title: 'Ofurô de Pés e Pernas',
      description: 'Relaxamento profundo e alívio imediato',
      slug: 'ofuro-pes-e-pernas',
    },
    {
      title: 'Quick Massage',
      description: 'Alívio rápido em 30 minutos',
      slug: 'quick-massage',
    },
    {
      title: 'Plano Personalizado',
      description: 'Cuidado sob medida para você',
      slug: '/plano-personalizado',
    },
  ];

  const helpQuestions = [
    {
      question: 'Sinto dores musculares e tensão constante',
      answer: 'Recomendamos a Massagem Terapêutica',
    },
    {
      question: 'Tenho inchaço nas pernas e retenção de líquidos',
      answer: 'A Drenagem Linfática é ideal para você',
    },
    {
      question: 'Tenho lipedema diagnosticado',
      answer: 'Nosso tratamento especializado para Lipedema é o mais indicado',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_2651c9e638b4415fa616d9b2b291a3a1~mv2.png?originWidth=1920&originHeight=640"
            alt="Agendar horário"
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
              Agendar um horário
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Escolha o serviço — ou peça ajuda para decidir.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <button
                onClick={() => setIsHelpModalOpen(true)}
                className="inline-flex items-center gap-2 text-primary font-paragraph font-medium text-base hover:underline"
              >
                <HelpCircle size={20} />
                <span>Não sei qual escolher</span>
              </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={service.slug.startsWith('/') ? service.slug : `/servicos/${service.slug}`}
                    className="group block bg-background rounded-[14px] p-8 border-2 border-primary-light hover:border-primary transition-all duration-300 h-full"
                  >
                    <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                      {service.title}
                    </h3>
                    <p className="font-paragraph text-base text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center space-y-4"
            >
              <p className="font-paragraph text-base text-text-secondary">
                Prefere falar diretamente?
              </p>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary-dark rounded-[14px] px-8 h-12 font-paragraph font-medium">
                  Chamar no WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Modal */}
      <Dialog open={isHelpModalOpen} onOpenChange={setIsHelpModalOpen}>
        <DialogContent className="bg-surface rounded-[14px] max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-3xl font-bold text-foreground">
              Qual serviço é ideal para você?
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <p className="font-paragraph text-base text-text-secondary leading-relaxed">
              Responda estas perguntas para encontrar o serviço ideal:
            </p>
            <div className="space-y-4">
              {helpQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-[14px] p-6 border border-primary-light space-y-2"
                >
                  <p className="font-paragraph text-base font-semibold text-foreground">
                    {item.question}
                  </p>
                  <p className="font-paragraph text-sm text-primary italic">→ {item.answer}</p>
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-4">
              <p className="font-paragraph text-base text-text-secondary text-center">
                Ainda com dúvidas? Fale diretamente comigo:
              </p>
              <div className="flex justify-center">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] px-8 h-12 font-paragraph font-medium">
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
