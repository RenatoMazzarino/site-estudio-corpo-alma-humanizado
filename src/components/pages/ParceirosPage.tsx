import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Partners } from '@/entities';

export default function ParceirosPage() {
  const [partners, setPartners] = useState<Partners[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const result = await BaseCrudService.getAll<Partners>('partners');
        setPartners(result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      } catch (error) {
        console.error('Error loading partners:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadPartners();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_2b7a89676a6b472780af9c67824aded3~mv2.png?originWidth=1920&originHeight=640"
            alt="Parceiros"
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
              Nossos Parceiros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Confiança construída em parceria com profissionais e marcas de excelência.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="min-h-[400px]">
            {isLoading ? null : partners.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-background rounded-[14px] overflow-hidden border border-primary-light hover:border-primary transition-all duration-300"
                  >
                    {partner.logoImage && (
                      <div className="aspect-video flex items-center justify-center p-8 bg-surface">
                        <Image
                          src={partner.logoImage}
                          alt={partner.partnerName || 'Parceiro'}
                          className="max-w-full max-h-full object-contain"
                          width={400}
                        />
                      </div>
                    )}
                    <div className="p-6 space-y-4">
                      <h3 className="font-heading text-2xl font-semibold text-foreground">
                        {partner.partnerName}
                      </h3>
                      {partner.description && (
                        <p className="font-paragraph text-base text-text-secondary leading-relaxed">
                          {partner.description}
                        </p>
                      )}
                      {partner.websiteUrl && (
                        <a
                          href={partner.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-paragraph font-medium text-sm hover:underline"
                        >
                          <span>Visitar site</span>
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-text-secondary">
                  Nenhum parceiro disponível no momento.
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
