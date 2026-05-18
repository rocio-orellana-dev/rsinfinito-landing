import { Star, Heart } from "lucide-react";

export function Sticker({ children, className = "", delay = "0s", rotate = "0deg" }: { children: React.ReactNode, className?: string, delay?: string, rotate?: string }) {
  return (
    <div className={`absolute z-20 hidden md:block ${className}`}>
      <div 
        className="animate-float"
        style={{ animationDelay: delay }}
      >
        <div 
          className="flex items-center gap-2 rounded-full bg-card px-4 py-2.5 shadow-[0_15px_30px_-10px_oklch(0.24_0.04_40/0.15)] border border-border text-xs sm:text-sm font-semibold text-foreground transition-transform hover:scale-105"
          style={{ transform: `rotate(${rotate})` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FloatingStickers() {
  return (
    <>
      <Sticker className="top-[15%] left-[2%]" delay="0s" rotate="-6deg">
        <Heart className="h-4 w-4 text-[var(--color-rose)]" fill="currentColor" />
        Hecho a pedido
      </Sticker>
      
      <Sticker className="top-[60%] left-[-2%]" delay="1.5s" rotate="4deg">
        <Star className="h-4 w-4 text-[var(--color-gold)]" fill="currentColor" />
        Diseños con significado
      </Sticker>
      
      <Sticker className="top-[25%] right-[2%]" delay="0.5s" rotate="8deg">
        Confirmas antes de producir
      </Sticker>

      <Sticker className="bottom-[15%] right-[5%]" delay="2.5s" rotate="-3deg">
        <span className="text-lg leading-none">♾️</span>
        Con amor
      </Sticker>
    </>
  );
}
