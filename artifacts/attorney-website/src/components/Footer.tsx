import { Scale, MapPin, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f18] text-gray-400 py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.03)_0%,transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl text-white tracking-wide">
                  HENSLEY <span className="text-primary font-serif italic">Legal</span>
                </h2>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Excellence in legal representation. Theodore William Hensley provides rigorous advocacy and strategic counsel to clients throughout England and Wales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Mr. Hensley', 'Practice Areas', 'Client Testimonials'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors text-sm group">
                    <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Expertise</h3>
            <ul className="space-y-3">
              {['Criminal Defence', 'Family & Divorce', 'Commercial Law', 'Property & Conveyancing'].map((area) => (
                <li key={area}>
                  <a href="#practice-areas" className="flex items-center gap-2 hover:text-primary transition-colors text-sm group">
                    <ChevronRight className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-white font-serif text-lg mb-6">Chambers</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  20 Fenchurch Street<br />
                  London EC3M 3BY<br />
                  United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:theodorelegal@attorneytwilliamhensley.com" className="text-sm hover:text-primary transition-colors break-all">
                  theodorelegal@<br/>attorneytwilliamhensley.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Theodore William Hensley, Solicitor. All rights reserved.</p>
          <p className="text-gray-500 max-w-2xl text-right">
            Regulated by the Solicitors Regulation Authority (SRA). The information provided on this website does not, and is not intended to, constitute formal legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
