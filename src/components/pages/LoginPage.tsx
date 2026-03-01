import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const [step, setStep] = useState<'contact' | 'code'>('contact');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('code');
    }, 1500);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="aspect-[3/4] rounded-[14px] overflow-hidden">
                <Image
                  src="https://static.wixstatic.com/media/ddbec4_a2852b58b99c42d182c9455da962f59c~mv2.png?originWidth=768&originHeight=1024"
                  alt="Portal do Cliente"
                  className="w-full h-full object-cover"
                  width={800}
                />
              </div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md mx-auto lg:mx-0 w-full"
            >
              <div className="bg-surface rounded-[14px] p-8 lg:p-12 border border-primary-light space-y-8">
                <div className="text-center space-y-4">
                  <h1 className="font-heading text-4xl font-bold text-foreground">
                    Portal do Cliente
                  </h1>
                  <p className="font-paragraph text-base text-text-secondary">
                    Acesso reservado para clientes
                  </p>
                </div>

                {step === 'contact' ? (
                  <form onSubmit={handleSendCode} className="space-y-6">
                    {/* Contact Method Selection */}
                    <div className="space-y-3">
                      <Label className="font-paragraph text-sm font-medium text-foreground">
                        Como deseja receber o código?
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setContactMethod('whatsapp')}
                          className={`flex items-center justify-center gap-2 p-4 rounded-[14px] border-2 transition-all ${
                            contactMethod === 'whatsapp'
                              ? 'border-primary bg-primary-light text-primary'
                              : 'border-primary-light bg-background text-text-secondary hover:border-primary'
                          }`}
                        >
                          <Phone size={20} />
                          <span className="font-paragraph text-sm font-medium">WhatsApp</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setContactMethod('email')}
                          className={`flex items-center justify-center gap-2 p-4 rounded-[14px] border-2 transition-all ${
                            contactMethod === 'email'
                              ? 'border-primary bg-primary-light text-primary'
                              : 'border-primary-light bg-background text-text-secondary hover:border-primary'
                          }`}
                        >
                          <Mail size={20} />
                          <span className="font-paragraph text-sm font-medium">E-mail</span>
                        </button>
                      </div>
                    </div>

                    {/* Contact Input */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="contact"
                        className="font-paragraph text-sm font-medium text-foreground"
                      >
                        {contactMethod === 'whatsapp' ? 'WhatsApp' : 'E-mail'}
                      </Label>
                      <Input
                        id="contact"
                        type={contactMethod === 'whatsapp' ? 'tel' : 'email'}
                        placeholder={
                          contactMethod === 'whatsapp'
                            ? '(11) 99999-9999'
                            : 'seu@email.com.br'
                        }
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        required
                        className="h-12 rounded-[14px] border-primary-light focus:border-primary font-paragraph"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading || !contactValue}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] h-12 font-paragraph font-medium"
                    >
                      {isLoading ? 'Enviando...' : 'Receber código'}
                      {!isLoading && <ArrowRight className="ml-2" size={18} />}
                    </Button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyCode} className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="code"
                        className="font-paragraph text-sm font-medium text-foreground"
                      >
                        Código de verificação
                      </Label>
                      <Input
                        id="code"
                        type="text"
                        placeholder="000000"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        maxLength={6}
                        className="h-12 rounded-[14px] border-primary-light focus:border-primary font-paragraph text-center text-2xl tracking-widest"
                      />
                      <p className="font-paragraph text-sm text-text-secondary text-center">
                        Código enviado para{' '}
                        {contactMethod === 'whatsapp' ? 'seu WhatsApp' : 'seu e-mail'}
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading || code.length !== 6}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary-dark rounded-[14px] h-12 font-paragraph font-medium"
                    >
                      {isLoading ? 'Verificando...' : 'Entrar'}
                      {!isLoading && <ArrowRight className="ml-2" size={18} />}
                    </Button>

                    <button
                      type="button"
                      onClick={() => setStep('contact')}
                      className="w-full font-paragraph text-sm text-primary hover:underline"
                    >
                      Voltar
                    </button>
                  </form>
                )}

                <div className="pt-6 border-t border-primary-light text-center">
                  <p className="font-paragraph text-sm text-text-secondary">
                    Ainda não é cliente?{' '}
                    <a href="/agendar" className="text-primary font-medium hover:underline">
                      Agende sua primeira sessão
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
