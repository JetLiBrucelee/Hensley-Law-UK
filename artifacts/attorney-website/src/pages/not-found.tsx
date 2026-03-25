import { Link } from "wouter";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/navy-texture.png)`, backgroundSize: 'cover' }}
      />
      <div className="text-center relative z-10 px-4">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30 mx-auto mb-8">
          <Scale className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-8xl font-serif font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-sans tracking-widest uppercase text-primary mb-6">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for has been removed or relocated.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-4 bg-primary text-secondary font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
