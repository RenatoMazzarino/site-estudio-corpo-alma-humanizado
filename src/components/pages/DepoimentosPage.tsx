import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Testimonials } from '@/entities';

export default function DepoimentosPage() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const result = await BaseCrudService.getAll<Testimonials>('testimonials');
        setTestimonials(result.items.filter((t) => t.approved));
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadTestimonials();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_2eff37b3f0a1468484724238224efe12~mv2.png?originWidth=1920&originHeight=640"
            alt="Depoimentos"
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
              Depoimentos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              O que nossos clientes dizem sobre o cuidado que receberam.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="min-h-[600px]">
            {isLoading ? null : testimonials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="bg-background rounded-[14px] p-8 border border-primary-light space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      {testimonial.clientPhoto && (
                        <Image
                          src={testimonial.clientPhoto}
                          alt={testimonial.clientName || 'Cliente'}
                          className="w-14 h-14 rounded-full object-cover"
                          width={56}
                        />
                      )}
                      <div>
                        <p className="font-paragraph font-semibold text-foreground text-lg">
                          {testimonial.clientName}
                        </p>
                        {testimonial.rating && (
                          <div className="flex gap-1 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span
                                key={i}
                                className={`text-base ${
                                  i < testimonial.rating!
                                    ? 'text-accent-gold-matte'
                                    : 'text-primary-light'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="font-paragraph text-base text-text-secondary leading-relaxed italic">
                      "{testimonial.testimonialText}"
                    </p>
                    {testimonial.sourcePlatform && (
                      <p className="font-paragraph text-sm text-text-secondary">
                        Via {testimonial.sourcePlatform}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-paragraph text-lg text-text-secondary">
                  Nenhum depoimento disponível no momento.
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
