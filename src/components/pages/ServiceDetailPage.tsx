import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Services | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const result = await BaseCrudService.getAll<Services>('services');
        const foundService = result.items.find((s) => s.slug === slug);
        setService(foundService || null);
      } catch (error) {
        console.error('Error loading service:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadService();
  }, [slug]);

  const parseListItems = (text: string | undefined): string[] => {
    if (!text) return [];
    return text
      .split(/[;\n]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-20 min-h-[80vh]">
        {isLoading ? (
          <div className="flex items-center justify-center py-32">
            <LoadingSpinner />
          </div>
        ) : !service ? (
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-32 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Serviço não encontrado
            </h2>
            <p className="font-paragraph text-lg text-text-secondary mb-8">
              O serviço que você procura não está disponível.
            </p>
            <Link to="/servicos">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] px-8 h-12 font-paragraph font-medium">
                Ver todos os serviços
              </Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Hero */}
            <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src={
                    service.serviceImage ||
                    'https://static.wixstatic.com/media/ddbec4_80bd83634f3942a28e1cb654ee0d4616~mv2.png?originWidth=1152&originHeight=640'
                  }
                  alt={service.serviceName || 'Serviço'}
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
                    {service.serviceName}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
                  >
                    {service.shortDescription}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-6 pt-4"
                  >
                    {service.duration && (
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock size={20} className="text-primary" />
                        <span className="font-paragraph text-base">{service.duration} minutos</span>
                      </div>
                    )}
                    {service.price && (
                      <div className="flex items-center gap-2 text-foreground">
                        <DollarSign size={20} className="text-primary" />
                        <span className="font-paragraph text-base font-semibold">
                          R$ {service.price}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Descrição Completa */}
            <section className="py-24 lg:py-32 bg-surface">
              <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                      Sobre este serviço
                    </h2>
                    <div className="font-paragraph text-lg text-text-secondary leading-relaxed space-y-4">
                      {service.fullDescription
                        ?.split('\n')
                        .filter((p) => p.trim())
                        .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Ideal Para */}
            {service.idealFor && (
              <section className="py-24 lg:py-32 bg-background">
                <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                  <div className="max-w-4xl mx-auto space-y-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center"
                    >
                      Ideal para
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {parseListItems(service.idealFor).map((item, index) => (
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
            )}

            {/* Como é a sessão */}
            {service.sessionDetails && (
              <section className="py-24 lg:py-32 bg-surface">
                <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
                  <div className="max-w-4xl mx-auto space-y-8">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center"
                    >
                      Como é a sessão
                    </motion.h2>
                    <div className="space-y-6">
                      {parseListItems(service.sessionDetails).map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="flex items-start gap-4 bg-background rounded-[14px] p-6 border border-primary-light"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                            {index + 1}
                          </div>
                          <p className="font-paragraph text-base text-foreground pt-1">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

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
                    Pronto para agendar?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-paragraph text-lg leading-relaxed opacity-90"
                  >
                    Reserve seu horário e descubra o cuidado que você merece.
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
