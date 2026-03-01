import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Equipe } from '@/entities';

export default function JanaPage() {
  const [jana, setJana] = useState<Equipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadJana = async () => {
      try {
        const result = await BaseCrudService.getAll<Equipe>('team');
        const janaData = result.items.find((member) =>
          member.name?.toLowerCase().includes('jana')
        );
        setJana(janaData || result.items[0] || null);
      } catch (error) {
        console.error('Error loading Jana:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadJana();
  }, []);

  const approach = [
    'Leitura corporal real — não é massagem genérica',
    'Ambiente reservado e acolhedor',
    'Personalização em cada sessão',
    'Planos de constância para resultados duradouros',
  ];

  const specialties = [
    'Drenagem Linfática Manual',
    'Massagem Terapêutica e Relaxante',
    'Tratamento Conservador para Lipedema',
    'Técnicas de Liberação Miofascial',
    'Massagem Desportiva',
    'Quick Massage para alívio rápido',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_d1ff4af94e6245efae3a1cd8208f1b6a~mv2.png?originWidth=1920&originHeight=640"
            alt="Jana, terapeuta"
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
              Jana. O coração do estúdio.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Mais de 10 anos de experiência em enfermagem + anos de atendimento a domicílio =
              cuidado técnico e humano.
            </motion.p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-[3/4] rounded-[14px] overflow-hidden">
                <Image
                  src={
                    jana?.photo ||
                    'https://static.wixstatic.com/media/ddbec4_f18e5934cab846b1829a4a7a5ede62c4~mv2.png?originWidth=768&originHeight=1024'
                  }
                  alt={jana?.name || 'Jana'}
                  className="w-full h-full object-cover"
                  width={800}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <p className="font-paragraph text-sm uppercase tracking-wider text-primary font-medium">
                Minha história
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                {jana?.name || 'Jana'}
              </h2>
              {jana?.role && (
                <p className="font-paragraph text-lg text-primary italic">{jana.role}</p>
              )}

              <div className="min-h-[200px]">
                {isLoading ? null : jana ? (
                  <div className="space-y-6 font-paragraph text-lg text-text-secondary leading-relaxed">
                    {jana.biography && <p>{jana.biography}</p>}
                    {!jana.biography && (
                      <>
                        <p>
                          Minha jornada no cuidado começou há mais de 10 anos, como técnica de
                          enfermagem. Ali, aprendi que cuidar de pessoas vai muito além da técnica
                          — é sobre presença, escuta e respeito.
                        </p>
                        <p>
                          Depois de anos atendendo a domicílio, percebi que faltava algo no
                          mercado: um espaço onde as pessoas pudessem desacelerar, ser ouvidas e
                          receber um cuidado que realmente fizesse diferença.
                        </p>
                        <p>
                          Foi assim que nasceu o Estúdio Corpo & Alma Humanizado — um lugar onde
                          técnica e humanização caminham juntas, e cada sessão é pensada para
                          você.
                        </p>
                      </>
                    )}
                  </div>
                ) : (
                  <p className="font-paragraph text-lg text-text-secondary">
                    Informações em breve.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section className="py-24 lg:py-32 bg-background">
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
                Minha abordagem
              </h2>
              <p className="font-paragraph text-lg text-text-secondary leading-relaxed">
                {jana?.approach ||
                  'Cada corpo é único. Cada sessão é pensada para você, com técnica refinada e escuta atenta.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-surface rounded-[14px] p-6 border border-primary-light"
                >
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-base text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
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
                Especialidades
              </h2>
              <p className="font-paragraph text-lg text-text-secondary leading-relaxed">
                {jana?.specialties ||
                  'Técnicas refinadas para diferentes necessidades, sempre com o mesmo cuidado.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-background rounded-[14px] p-6 border border-primary-light text-center"
                >
                  <p className="font-paragraph text-base text-foreground font-medium">
                    {specialty}
                  </p>
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
              Pronta para cuidar de você
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-paragraph text-lg leading-relaxed opacity-90"
            >
              Agende sua sessão e descubra o que é ser cuidado com técnica e presença.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/agendar">
                <Button className="bg-surface text-foreground hover:bg-background rounded-[14px] px-8 h-14 font-paragraph font-medium text-base">
                  Agendar agora
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
