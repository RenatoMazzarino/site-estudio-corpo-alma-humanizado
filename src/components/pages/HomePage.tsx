// HPI 1.7-V
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Heart, Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Services, Testimonials, Partners } from '@/entities';

// --- Utility Components for Design System ---

const SectionDivider = () => (
  <div className="w-full flex justify-center py-12 opacity-20">
    <div className="h-px w-24 bg-primary-dark" />
  </div>
);

const VerticalLine = ({ className }: { className?: string }) => (
  <div className={`w-px bg-primary-dark/20 ${className}`} />
);

// --- Main Component ---

export default function HomePage() {
  // --- 1. Data Fidelity Protocol: Canonical Data Sources ---
  const [services, setServices] = useState<Services[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [partners, setPartners] = useState<Partners[]>([]);
  const [isLoadingServices, setIsLoadingServices] = useState(true);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [isLoadingPartners, setIsLoadingPartners] = useState(true);

  // Preserve original data fetching logic
  useEffect(() => {
    const loadData = async () => {
      try {
        const servicesResult = await BaseCrudService.getAll<Services>('services', [], {
          limit: 6,
        });
        setServices(servicesResult.items);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setIsLoadingServices(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const testimonialsResult = await BaseCrudService.getAll<Testimonials>(
          'testimonials',
          [],
          { limit: 6 }
        );
        setTestimonials(testimonialsResult.items.filter((t) => t.approved));
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setIsLoadingTestimonials(false);
      }
    };
    loadTestimonials();
  }, []);

  useEffect(() => {
    const loadPartners = async () => {
      try {
        const partnersResult = await BaseCrudService.getAll<Partners>('partners', [], {
          limit: 8,
        });
        setPartners(partnersResult.items);
      } catch (error) {
        console.error('Error loading partners:', error);
      } finally {
        setIsLoadingPartners(false);
      }
    };
    loadPartners();
  }, []);

  // --- Static Data (Preserved & Enhanced) ---
  const careAreas = [
    {
      title: 'Alívio de tensões',
      description: 'Massagem terapêutica para dores crônicas, posturais e musculares.',
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Drenagem e leveza',
      description: 'Técnicas manuais para reduzir inchaço e melhorar circulação.',
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Cuidado para lipedema',
      description: 'Protocolo conservador especializado com acolhimento técnico.',
      icon: <Heart className="w-6 h-6 text-primary" />,
    },
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'Escolha ou Orientação',
      description: 'Você escolhe o serviço ou me conta o que sente — eu te guio pelo melhor caminho.',
    },
    {
      number: '02',
      title: 'Agendamento Sereno',
      description: 'Hora marcada, ambiente reservado. Sem espera, sem pressa.',
    },
    {
      number: '03',
      title: 'Sessão & Cuidado',
      description: 'Técnica apurada, presença total e orientação final para manter o bem-estar.',
    },
  ];

  // --- Animation Hooks ---
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground font-paragraph overflow-clip selection:bg-primary-light selection:text-primary-dark">
      <Header />

      {/* --- HERO SECTION: The Sanctuary Entrance --- */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://static.wixstatic.com/media/ddbec4_e12d5d68f1a841e58e4b3c0b0d9603f8~mv2.png?originWidth=1920&originHeight=1024"
            alt="Ambiente sereno do estúdio com luz natural e plantas"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-background/30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 max-w-5xl"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary-dark/40" />
              <span className="font-heading italic text-primary-dark text-lg tracking-wide">
                Estúdio Corpo & Alma
              </span>
              <div className="h-px w-12 bg-primary-dark/40" />
            </div>

            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] tracking-tight">
              Toque que alivia, <br />
              <span className="italic font-normal text-primary-dark">cuidado que transforma.</span>
            </h1>

            <p className="font-paragraph text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Terapia manual premium com acolhimento real. Desinflame o corpo, alivie tensões e reencontre sua presença.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/agendar">
                <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-10 h-14 text-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                  Agendar Sessão
                </Button>
              </Link>
              <Link to="/servicos">
                <Button variant="outline" className="border-primary-dark text-primary-dark hover:bg-primary-light/50 rounded-full px-10 h-14 text-lg transition-all duration-300">
                  Explorar Serviços
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-dark/60"
          >
            <span className="text-xs uppercase tracking-widest">Descubra</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary-dark/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION: "O que você sente" --- */}
      <section className="relative py-24 lg:py-32 bg-surface overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-dark/20 to-transparent" />
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Title Column */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="block font-paragraph text-sm uppercase tracking-widest text-primary mb-4">
                    Nossa Filosofia
                  </span>
                  <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                    Menos ruído. <br />
                    <span className="italic text-primary-dark">Mais corpo no lugar.</span>
                  </h2>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    Não tratamos apenas sintomas. Olhamos para o ser humano por trás da tensão. Um espaço onde o tempo desacelera para que você possa se ouvir.
                  </p>
                  <div className="pt-8">
                    <Link to="/o-estudio" className="inline-flex items-center text-primary-dark hover:text-primary font-medium transition-colors group">
                      Conheça o Estúdio
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Cards Column */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {careAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`group p-10 bg-background rounded-2xl border border-primary-light/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${index === 2 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
                  >
                    <div className="mb-6 p-4 bg-surface rounded-full w-fit border border-primary-light group-hover:scale-110 transition-transform duration-500">
                      {area.icon}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary-dark transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL BREATHER --- */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden my-12">
        <div className="absolute inset-0 z-0">
           <Image
            src="https://static.wixstatic.com/media/ddbec4_e0c9d238dab44ebbb8816afd79d0c4bd~mv2.png?originWidth=1920&originHeight=704"
            alt="Detalhe de massagem relaxante"
            className="w-full h-full object-cover opacity-90"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary-dark/20 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight italic"
          >
            "O corpo fala o que a alma cala. <br/> Nós escutamos ambos."
          </motion.blockquote>
        </div>
      </section>

      {/* --- SERVICES SECTION: Editorial Grid --- */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="font-paragraph text-sm uppercase tracking-widest text-primary mb-2 block">
                Menu de Cuidados
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
                Nossos Serviços
              </h2>
            </div>
            <Link to="/servicos">
              <Button variant="outline" className="border-primary-dark text-primary-dark hover:bg-primary-light rounded-full px-8">
                Ver Menu Completo
              </Button>
            </Link>
          </div>

          {isLoadingServices ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[500px] bg-surface animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group flex flex-col h-full"
                >
                  <Link to={`/servicos/${service.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative aspect-[4/5]">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                    <Image
                      src={service.serviceImage || "https://static.wixstatic.com/media/ddbec4_386454b1fb4940789f04d1d62be9bee7~mv2.png?originWidth=576&originHeight=704"}
                      alt={service.serviceName || "Serviço"}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      width={600}
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                        <span className="text-primary-dark font-medium flex items-center gap-2">
                          Detalhes da Sessão <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary-dark transition-colors">
                        {service.serviceName}
                      </h3>
                      {service.duration && (
                        <span className="text-sm font-medium text-text-secondary bg-surface px-3 py-1 rounded-full border border-primary-light">
                          {service.duration} min
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3 flex-1">
                      {service.shortDescription}
                    </p>
                    <div className="w-full h-px bg-primary-light group-hover:bg-primary transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- JANA SECTION: Asymmetrical Layout --- */}
      <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary-light/20 skew-x-12 translate-x-20" />
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Composition */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-primary-dark/10">
                <Image
                  src="https://static.wixstatic.com/media/ddbec4_42d23824fd684a578efc611d7055e02d~mv2.png?originWidth=768&originHeight=1024"
                  alt="Jana Santos"
                  className="w-full h-full object-cover"
                  width={800}
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-background p-8 rounded-full shadow-xl border border-primary-light hidden md:block">
                <div className="text-center">
                  <span className="block font-heading text-3xl font-bold text-primary-dark">+10</span>
                  <span className="text-xs uppercase tracking-wider text-text-secondary">Anos de<br/>Experiência</span>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div>
                <span className="font-paragraph text-sm uppercase tracking-widest text-primary mb-2 block">
                  A Especialista
                </span>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Jana: técnica, presença e <span className="italic text-primary-dark">cuidado de verdade.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  Após anos de atendimento domiciliar e mais de uma década como técnica de enfermagem, criei um espaço onde o cuidado não é corrido — é humano.
                </p>
                <p>
                  Minha abordagem une o rigor técnico da saúde com a sensibilidade das terapias manuais. Aqui, cada sessão é desenhada exclusivamente para o seu momento, respeitando seus limites e sua história corporal.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-white px-4 py-2 rounded-full border border-primary-light">
                  <CheckCircle size={16} className="text-secondary" /> Técnica de Enfermagem
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-white px-4 py-2 rounded-full border border-primary-light">
                  <CheckCircle size={16} className="text-secondary" /> Especialista em Drenagem
                </div>
              </div>

              <div className="pt-8">
                <Link to="/jana">
                  <Button className="bg-primary-dark text-white hover:bg-primary rounded-full px-8 h-12 text-base">
                    Conhecer Minha História
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS: Process Steps --- */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Como funciona
            </h2>
            <p className="text-text-secondary text-lg">
              Simplificamos o processo para que seu relaxamento comece antes mesmo de chegar ao estúdio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-light to-transparent z-0" />

            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-surface border border-primary-light flex items-center justify-center mb-8 shadow-sm group hover:border-primary transition-colors duration-300">
                  <span className="font-heading text-3xl text-primary-dark font-bold">{step.number}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/agendar">
              <Button className="bg-primary hover:bg-primary-dark text-white rounded-full px-10 h-14 text-lg shadow-lg shadow-primary/20">
                Ver Horários Disponíveis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: Horizontal Flow --- */}
      <section className="py-24 lg:py-32 bg-surface border-y border-primary-light/30">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              Vozes de quem confia
            </h2>
            <div className="flex gap-2 mt-4 md:mt-0">
              <div className="flex text-accent-gold-matte">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-text-secondary font-medium ml-2">Excelência comprovada</span>
            </div>
          </div>

          {isLoadingTestimonials ? (
            <div className="flex gap-8 overflow-hidden">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[350px] h-64 bg-background animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial._id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background p-8 rounded-2xl border border-primary-light shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface border border-primary-light">
                      {testimonial.clientPhoto ? (
                        <Image 
                          src={testimonial.clientPhoto} 
                          alt={testimonial.clientName || "Cliente"}
                          className="w-full h-full object-cover"
                          width={48}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary font-bold text-lg">
                          {testimonial.clientName?.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.clientName}</h4>
                      <span className="text-xs text-text-secondary uppercase tracking-wider">{testimonial.sourcePlatform || "Cliente Verificado"}</span>
                    </div>
                  </div>
                  <p className="text-text-secondary italic leading-relaxed flex-1">
                    "{testimonial.testimonialText}"
                  </p>
                </motion.div>
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center">
             <Link to="/depoimentos" className="text-primary-dark hover:text-primary font-medium underline underline-offset-4 decoration-1 transition-colors">
                Ler todos os depoimentos
             </Link>
          </div>
        </div>
      </section>

      {/* --- PARTNERS: Trust Section --- */}
      <section className="py-20 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <p className="text-center text-sm uppercase tracking-widest text-text-secondary mb-12 opacity-60">
            Parceiros e Certificações
          </p>
          
          {isLoadingPartners ? (
            <div className="flex justify-center gap-12">
               <div className="w-32 h-12 bg-surface animate-pulse rounded" />
               <div className="w-32 h-12 bg-surface animate-pulse rounded" />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner) => (
                <div key={partner._id} className="w-32 h-16 flex items-center justify-center">
                  {partner.logoImage ? (
                    <Image 
                      src={partner.logoImage} 
                      alt={partner.partnerName || "Parceiro"}
                      className="max-w-full max-h-full object-contain"
                      width={128}
                    />
                  ) : (
                    <span className="font-heading font-bold text-xl text-primary-dark">{partner.partnerName}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- CONTACT CTA: Final Invitation --- */}
      <section className="relative py-24 lg:py-32 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-8">
            Pronto para cuidar de você?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp para tirar dúvidas ou agende diretamente seu horário online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-primary-dark hover:bg-surface rounded-full px-10 h-14 text-lg font-medium">
                <Phone className="mr-2 w-5 h-5" />
                Conversar no WhatsApp
              </Button>
            </a>
            <Link to="/contato">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg font-medium bg-transparent">
                <MapPin className="mr-2 w-5 h-5" />
                Ver Localização
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}