import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";
import infiCelebrando from "@/assets/infi-celebrando.png";
import BigBackgroundWord from "./BigBackgroundWord";
import { Sticker } from "./FloatingStickers";
import { Heart } from "lucide-react";

export default function BrandUniverse() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-deep)] py-24 sm:py-32 lg:py-40 text-primary-foreground border-y border-[var(--color-terracotta)]/20">
      {/* Subtle topographic / organic line texture background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c13.866 0 25.362 11.496 25.362 25.362 0 13.866 11.496 25.362 25.362 25.362 13.866 0 25.362 11.496 25.362 25.362' fill='none' stroke='%23ffffff' stroke-width='1' stroke-dasharray='5 5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <BigBackgroundWord word="RECUERDOS" speed={-0.2} color="var(--color-cream)" className="opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left: Infi Protagonist */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
              {/* Glow behind Infi */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-br from-[var(--color-terracotta)]/40 to-[var(--color-gold)]/20 blur-3xl" />
              
              <img
                src={infiCelebrando}
                alt="Infi Universe"
                className="relative z-10 h-auto w-full object-contain animate-float drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]"
                loading="lazy"
              />
              
              <Sticker className="top-[10%] left-[-10%]" delay="0.5s" rotate="-5deg">
                <Heart className="h-4 w-4 text-[var(--color-rose)]" fill="currentColor" />
                Momentos infinitos
              </Sticker>

              {/* Small accent elements */}
              <div className="absolute -left-4 top-1/4 h-8 w-8 animate-float-slow text-[var(--color-gold)]">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/></svg>
              </div>
              <div className="absolute -right-8 bottom-1/4 h-6 w-6 animate-float text-[var(--color-rose)]" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-display text-4xl font-semibold leading-tight text-[var(--color-cream)] sm:text-5xl lg:text-6xl animate-fade-in-up">
              Donde tus recuerdos se vuelven <span className="italic text-[var(--color-gold)]">infinitos</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--color-cream)]/80 sm:text-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Cada foto, frase o momento especial puede transformarse en un regalo único, hecho a pedido y con propósito. Nos dedicamos a capturar tu esencia en detalles que perduran.
            </p>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a
                href="#cotizar"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-8 py-4 text-sm font-bold text-[var(--color-deep)] shadow-[0_15px_30px_-10px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.5)] sm:w-auto"
              >
                Crear mi detalle
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={waLink("Hola! Quiero hablar sobre una idea para un regalo especial")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[var(--color-cream)]/20 bg-white/5 px-8 py-4 text-sm font-semibold text-[var(--color-cream)] backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
