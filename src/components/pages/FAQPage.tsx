import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { FrequentlyAskedQuestions } from '@/entities';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<FrequentlyAskedQuestions[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        const result = await BaseCrudService.getAll<FrequentlyAskedQuestions>('faq');
        const activeFaqs = result.items
          .filter((faq) => faq.isActive)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setFaqs(activeFaqs);
      } catch (error) {
        console.error('Error loading FAQs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFAQs();
  }, []);

  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category || 'Geral';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, FrequentlyAskedQuestions[]>);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_5d39229fe83d4a15adbd2a1b07ccbcb4~mv2.png?originWidth=1920&originHeight=640"
            alt="Perguntas Frequentes"
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
              Perguntas Frequentes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Tire suas dúvidas sobre nossos serviços e atendimento.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="min-h-[400px]">
              {isLoading ? null : faqs.length > 0 ? (
                <div className="space-y-12">
                  {Object.entries(groupedFaqs).map(([category, categoryFaqs], catIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        {category}
                      </h2>
                      <Accordion type="single" collapsible className="space-y-4">
                        {categoryFaqs.map((faq) => (
                          <AccordionItem
                            key={faq._id}
                            value={faq._id}
                            className="bg-background rounded-[14px] border border-primary-light px-6 py-2"
                          >
                            <AccordionTrigger className="font-paragraph text-lg font-semibold text-foreground hover:text-primary text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="font-paragraph text-base text-text-secondary leading-relaxed pt-2">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="font-paragraph text-lg text-text-secondary">
                    Nenhuma pergunta disponível no momento.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
