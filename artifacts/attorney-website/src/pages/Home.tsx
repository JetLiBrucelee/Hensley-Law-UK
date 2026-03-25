import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Scale, 
  Users, 
  HeartPulse, 
  Building2, 
  Briefcase, 
  Globe, 
  Home as HomeIcon, 
  ScrollText,
  Award,
  ShieldCheck,
  Landmark,
  Quote,
  Send,
  MapPin,
  Mail,
  CheckCircle2,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact, contactSchema, type ContactFormData } from "@/hooks/use-contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import attorneyPortrait from "@/assets/attorney-portrait.png";

export default function Home() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Enquiry Sent",
          description: "Thank you. Mr. Hensley's chambers will respond shortly.",
        });
        reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Transmission Error",
          description: "There was an issue sending your message. Please email directly.",
        });
      }
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-[100svh] flex items-center dark-section bg-secondary pt-20 overflow-hidden">
        {/* Background Texture */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/navy-texture.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-12 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl pt-12 lg:pt-0"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-primary"></div>
                <span className="uppercase tracking-[0.25em] text-primary text-xs font-bold font-sans">
                  Solicitor of England & Wales
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6">
                Dedicated Legal <span className="text-primary italic">Representation</span> You Can Trust.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 mb-10 font-sans leading-relaxed border-l-2 border-primary/50 pl-6">
                Theodore William Hensley offers expert legal counsel across a wide range of practice areas, bringing decades of rigorous experience to clients throughout the United Kingdom.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="px-8 py-4 bg-primary text-secondary font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-center">
                  Request Consultation
                </a>
                <a href="#practice-areas" className="px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-white/5 transition-all text-center">
                  Our Expertise
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[80vh]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-secondary z-10"></div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-sm z-0 translate-x-4 translate-y-4"></div>
              <div className="absolute -inset-4 border border-primary/20 rounded-sm z-0 -translate-x-4 -translate-y-4"></div>
              
              <img 
                src={attorneyPortrait} 
                alt="Theodore William Hensley, Solicitor" 
                className="w-full h-full object-cover object-center rounded-sm relative z-0 filter contrast-125 saturate-110"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <Scale className="w-5 h-5 text-primary" />
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm font-sans">About Mr. Hensley</h2>
              </motion.div>
              
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
                A Distinguished Reputation for <span className="italic text-primary">Rigorous</span> Advocacy
              </motion.h3>
              
              <motion.div variants={fadeInUp} className="prose prose-lg text-muted-foreground font-sans space-y-6">
                <p className="text-xl text-secondary font-medium leading-relaxed">
                  Theodore William Hensley is a distinguished solicitor with over 25 years of experience practising law in England and Wales. 
                </p>
                <p>
                  Called to the profession and admitted as a solicitor, he has built a distinguished reputation for rigorous legal analysis, steadfast client advocacy, and an unwavering commitment to justice. Educated at the University of Oxford and trained at one of London's most prestigious chambers, Mr. Hensley brings exceptional expertise and personal dedication to every matter entrusted to his care.
                </p>
                <p>
                  Whether navigating complex corporate litigation or providing discrete counsel for sensitive family matters, his approach remains anchored in achieving the most favourable outcomes through meticulous preparation and strategic foresight.
                </p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-10">
                <p className="font-serif italic text-4xl text-secondary/70 tracking-wide select-none">Theodore W. Hensley</p>
                <div className="h-px w-48 bg-primary/30 mt-1 mb-2"></div>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">Senior Solicitor</p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                { icon: Clock, stat: "25+", label: "Years Experience" },
                { icon: Briefcase, stat: "1,000+", label: "Cases Handled" },
                { icon: Award, stat: "98%", label: "Client Satisfaction" },
                { icon: Landmark, stat: "SRA", label: "Regulated Solicitor" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white p-8 border-t-4 border-primary rounded-sm shadow-xl shadow-black/5 hover:-translate-y-1 transition-transform duration-300"
                >
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h4 className="text-4xl font-serif font-bold text-secondary mb-2">{item.stat}</h4>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground font-bold">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PRACTICE AREAS --- */}
      <section id="practice-areas" className="py-24 dark-section bg-secondary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-primary"></div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm font-sans">Areas of Practice</h2>
              <div className="h-[1px] w-8 bg-primary"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Expertise Across <span className="italic">Multiple</span> Disciplines</h3>
            <p className="text-gray-400 text-lg">Comprehensive legal services tailored to protect your interests and secure your future under English Law.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Criminal Defence", desc: "Rigorous defence strategies for serious allegations across all levels of the criminal justice system." },
              { icon: HeartPulse, title: "Family Law", desc: "Discrete, compassionate counsel for high-net-worth divorce, child arrangements, and financial settlements." },
              { icon: Scale, title: "Personal Injury", desc: "Fierce advocacy securing rightful compensation for catastrophic injuries and clinical negligence." },
              { icon: Building2, title: "Commercial Law", desc: "Strategic advice on contracts, corporate disputes, and business structuring for UK enterprises." },
              { icon: Briefcase, title: "Employment Law", desc: "Resolving complex workplace disputes, tribunal representation, and executive severance negotiations." },
              { icon: Globe, title: "Immigration & Visa", desc: "Expert guidance through the intricacies of UK Visas and Immigration (UKVI) applications." },
              { icon: HomeIcon, title: "Property & Conveyancing", desc: "Meticulous handling of high-value residential and commercial real estate transactions." },
              { icon: ScrollText, title: "Wills & Probate", desc: "Safeguarding your legacy with robust estate planning, trusts, and contested probate resolution." }
            ].map((area, idx) => (
              <motion.div 
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
                <area.icon className="w-10 h-10 text-primary mb-6 relative z-10" />
                <h4 className="text-xl font-serif text-white mb-3 relative z-10">{area.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">{area.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="why-choose-us" className="py-24 bg-background relative overflow-hidden">
        {/* Abstract background setup matching the generated image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:block">
          <img 
            src={`${import.meta.env.BASE_URL}images/law-library.png`} 
            alt="Law Library" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm font-sans mb-4">The Hensley Difference</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-12">An Uncompromising Standard of <span className="italic text-primary">Excellence</span></h3>
            
            <div className="space-y-8">
              {[
                { title: "Expert Legal Knowledge", desc: "Decades of deep, specialised understanding of English law and court procedures, ensuring highly strategic representation." },
                { title: "Client-Centred Approach", desc: "You are never just a case file. We provide tailored, responsive counsel that prioritises your unique circumstances." },
                { title: "Proven Track Record", desc: "A history of securing favourable verdicts and settlements in complex, high-stakes environments." },
                { title: "Confidential & Discrete", desc: "Absolute discretion is guaranteed. We regularly handle sensitive matters for high-profile clients." }
              ].map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-secondary mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 dark-section bg-[#0a0f18] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm font-sans mb-4">Client Testimonials</h2>
            <h3 className="text-4xl font-serif text-white">Words From Our <span className="italic">Clients</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Mr. Hensley's command of commercial law is unparalleled. His strategic intervention in our shareholder dispute saved our firm millions. A brilliant solicitor who commands absolute respect in the room.", author: "James T., London", role: "Commercial Litigation" },
              { text: "Navigating a highly complex divorce was terrifying until Theodore took my case. His discretion, compassion, and fierce protection of my assets were extraordinary. I cannot recommend his chambers highly enough.", author: "Eleanor W., Surrey", role: "Family Law" },
              { text: "When facing serious allegations, you need someone who knows the system inside out. Theodore's rigorous preparation dismantled the prosecution's case entirely. He gave me my life back.", author: "David M., Manchester", role: "Criminal Defence" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white/5 p-8 rounded-sm relative border border-white/5 hover:border-primary/30 transition-colors"
              >
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <p className="text-white font-serif font-bold">{testimonial.author}</p>
                  <p className="text-primary text-sm font-sans tracking-wide uppercase mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 shadow-2xl shadow-black/5 border border-border rounded-sm"
            >
              <h3 className="text-3xl font-serif text-secondary mb-2">Request a Consultation</h3>
              <p className="text-muted-foreground mb-8">All enquiries are treated with the strictest confidence. Please outline the nature of your matter below.</p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Full Name</label>
                  <input 
                    {...register("name")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Email Address</label>
                  <input 
                    {...register("email")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Legal Subject</label>
                  <select 
                    {...register("subject")}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  >
                    <option value="">Select an area of practice...</option>
                    <option value="criminal">Criminal Defence</option>
                    <option value="family">Family Law</option>
                    <option value="corporate">Commercial & Corporate</option>
                    <option value="injury">Personal Injury</option>
                    <option value="other">Other Matter</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Briefly describe your situation..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-secondary text-white font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-primary transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Enquiry <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-12">
                <h3 className="text-4xl font-serif text-secondary mb-6">Chambers & <br/><span className="italic text-primary">Contact Details</span></h3>
                <p className="text-lg text-muted-foreground">
                  Mr. Hensley operates out of prestigious chambers in the heart of London. Consultations are available strictly by prior appointment.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-colors">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-2">Chambers Address</h4>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      20 Fenchurch Street<br />
                      London EC3M 3BY<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-sm mb-2">Direct Email</h4>
                    <a href="mailto:theodorelegal@attorneytwilliamhensley.com" className="text-primary font-medium text-lg hover:underline break-all">
                      theodorelegal@attorneytwilliamhensley.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Please note: We do not publish a direct telephone line to ensure client confidentiality and focused casework. All initial contact must be via email or form.
                    </p>
                  </div>
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

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );
}
