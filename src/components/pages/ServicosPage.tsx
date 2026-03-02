import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';

export default function ServicosPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const result = await BaseCrudService.getAll<Services>('services');
        setServices(result.items);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_7667156808724664a97d4015b140e01c~mv2.png?originWidth=1920&originHeight=640"
            alt="Serviços de massoterapia"
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
              Nossos Serviços
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Você escolhe — ou me conta o que sente e eu te guio.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Roteador de Serviços */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl lg:text-4xl font-bold text-foreground"
            >
              Qual serviço é para mim?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link
                  to={service.slug.startsWith('/') ? service.slug : `/servicos/${service.slug}`}
                  className="group block bg-background rounded-[14px] p-6 border border-primary-light hover:border-primary transition-all duration-300 h-full"
                >
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="font-paragraph text-sm text-text-secondary mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-paragraph font-medium text-sm">
                    <span>Ver detalhes</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listagem Completa */}
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
              Todos os Serviços
            </motion.h2>
          </div>

          <div className="min-h-[600px]">
            {isLoading ? null : services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="group block bg-surface rounded-[14px] overflow-hidden border border-primary-light hover:border-primary transition-all duration-300 h-full"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <Image
                          src={
                            service.serviceImage ||
                            'https://static.wixstatic.com/media/ddbec4_9e0819d7476849a1a42d0406839098e4~mv2.png?originWidth=576&originHeight=448'
                          }
                          alt={service.serviceName || 'Serviço'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          width={600}
                        />
                        {service.aceitaDomiciliar && (
                          <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full border border-primary">
                            Domiciliar
                          </div>
                        )}
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-heading text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {service.serviceName}
                          </h3>
                          {service.duration && (
                            <span className="font-paragraph text-sm text-text-secondary whitespace-nowrap">
                              {service.duration} min
                            </span>
                          )}
                        </div>
                        <p className="font-paragraph text-base text-text-secondary leading-relaxed line-clamp-3">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 text-primary font-paragraph font-medium text-sm">
                            <span>Saiba mais</span>
                            <ArrowRight
                              size={16}
                              className="group-hover:translate-x-1 transition-transform"
                            />
                          </div>
                          {service.price && (
                            <span className="font-paragraph text-lg font-semibold text-foreground">
                              R$ {service.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-text-secondary">
                  Nenhum serviço disponível no momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
