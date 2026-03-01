import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      lines: ['Rua das Águas Claras, 123', 'Circuito das Águas Paulista', 'CEP 12345-678'],
    },
    {
      icon: Clock,
      title: 'Horários',
      lines: ['Segunda a Sexta: 9h às 19h', 'Sábado: 9h às 14h', 'Domingo: Fechado'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      lines: ['(11) 99999-9999'],
      link: 'https://wa.me/5511999999999',
    },
    {
      icon: Mail,
      title: 'E-mail',
      lines: ['contato@estudiohumanizado.com.br'],
      link: 'mailto:contato@estudiohumanizado.com.br',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/ddbec4_cb829a2437d7423fa33ad7a9ab73183a~mv2.png?originWidth=1152&originHeight=640"
            alt="Contato"
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
              Entre em Contato
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-xl lg:text-2xl text-text-secondary leading-relaxed"
            >
              Estamos aqui para ouvir você. Entre em contato para agendar ou tirar dúvidas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-[14px] p-8 border border-primary-light text-center space-y-4"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-primary">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.lines.map((line, i) =>
                      info.link && i === 0 ? (
                        <a
                          key={i}
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-paragraph text-base text-text-secondary hover:text-primary transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="font-paragraph text-base text-text-secondary">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground">
              Como chegar
            </h2>
            <p className="font-paragraph text-lg text-text-secondary leading-relaxed">
              Estamos localizados no coração do Circuito das Águas Paulista.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video rounded-[14px] overflow-hidden border border-primary-light bg-surface flex items-center justify-center"
          >
            <div className="text-center space-y-4 p-8">
              <MapPin size={48} className="text-primary mx-auto" />
              <p className="font-paragraph text-lg text-text-secondary">
                Mapa interativo em breve
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground"
            >
              Siga-nos nas redes sociais
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://instagram.com/estudiohumanizado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-colors"
              >
                <Instagram size={28} />
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-paragraph text-base text-text-secondary"
            >
              @estudiohumanizado
            </motion.p>
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
              Prefere falar pelo WhatsApp?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button className="bg-surface text-foreground hover:bg-background rounded-[14px] px-8 h-14 font-paragraph font-medium text-base">
                  Chamar no WhatsApp
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
