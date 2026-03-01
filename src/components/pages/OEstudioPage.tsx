import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Heart, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { StudioValues } from '@/entities';

export default function OEstudioPage() {
  const [values, setValues] = useState<StudioValues[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadValues = async () => {
      try {
        const result = await BaseCrudService.getAll<StudioValues>('studiovalues');
        setValues(result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      } catch (error) {
        console.error('Error loading studio values:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadValues();
  }, []);

  const differentials = [
    {
      icon: Shield,
      title: 'Privacidade',
      description: 'Ambiente reservado, sem pressa, respeitando seu tempo e espaço.',
    },
    {
      icon: Heart,
      title: 'Presença',
      description: 'Escuta atenta e cuidado genuíno em cada sessão.',
    },
    {
      icon: Award,
      title: 'Técnica',
      description: 'Mais de 10 anos de experiência em enfermagem e massoterapia.',
    },
    {
      icon: Clock,
      title: 'Constância',
      description: 'Planos personalizados para resultados duradouros.',
    },
  ];

  const howItWorksInside = [
    {
      step: '01',
      title: 'Boas-vindas e escuta',
      description:
        'Começamos com uma conversa tranquila. Você me conta o que sente, e eu escuto de verdade.',
    },
    {
      step: '02',
      title: 'A sessão',
      description:
        'Técnica refinada, ambiente acolhedor, sem pressa. Cada movimento é pensado para você.',
    },
    {
      step: '03',
      title: 'Fechamento com orientação',
      description:
        'Ao final, conversamos sobre o que você pode fazer em casa para continuar o cuidado.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_25d050d9d911464291ac70bdb36137f3~mv2.png?originWidth=1920&originHeight=704"
            alt="Interior do estúdio"
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
              Um lugar para desacelerar — sem perder técnica
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Aqui, o cuidado não é corrido. É humano, técnico e pensado para você.
            </motion.p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-paragraph text-sm uppercase tracking-wider text-primary font-medium mb-6">
                Nossa história
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Nascido da experiência, guiado pelo cuidado
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 font-paragraph text-lg text-text-secondary leading-relaxed"
            >
              <p>
                O Estúdio Corpo & Alma Humanizado nasceu de uma certeza: o cuidado com o corpo
                precisa ser técnico, mas também precisa ser humano.
              </p>
              <p>
                Após anos atendendo a domicílio e mais de uma década como técnica de enfermagem,
                Jana percebeu que faltava algo no mercado — um espaço onde as pessoas pudessem
                desacelerar, ser ouvidas e receber um cuidado que realmente fizesse diferença.
              </p>
              <p>
                Aqui, não trabalhamos com pressa ou protocolos genéricos. Cada sessão é pensada
                para você, com técnica refinada, ambiente reservado e a presença que você merece.
              </p>
              <p>
                Estamos no Circuito das Águas Paulista, criando um novo padrão de massoterapia
                terapêutica — onde excelência técnica e acolhimento humano caminham juntos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
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
              O que nos diferencia
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-surface rounded-[14px] p-8 border border-primary-light text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-paragraph text-base text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="min-h-[400px]">
            {isLoading ? null : values.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {values.map((value, index) => (
                  <motion.div
                    key={value._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-background rounded-[14px] p-8 lg:p-10 border border-primary-light space-y-6"
                  >
                    {value.illustration && (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={value.illustration}
                          alt={value.valueTitle || 'Valor'}
                          className="w-full h-full object-cover"
                          width={64}
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                        {value.valueTitle}
                      </h3>
                      {value.shortMotto && (
                        <p className="font-paragraph text-sm text-primary italic mb-4">
                          {value.shortMotto}
                        </p>
                      )}
                    </div>
                    <p className="font-paragraph text-base text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-text-secondary">
                  Informações em breve.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Como funciona por dentro */}
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
              Como funciona por dentro
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-paragraph text-lg text-text-secondary leading-relaxed"
            >
              Do momento em que você chega até a despedida, tudo é pensado para o seu bem-estar.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksInside.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-heading text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="font-paragraph text-base text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Link to="/agendar">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] px-8 h-14 font-paragraph font-medium text-base">
                Agendar uma sessão
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
