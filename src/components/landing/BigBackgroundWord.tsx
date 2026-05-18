import { useParallax } from "@/hooks/useParallax";

interface Props {
  word: string;
  speed?: number;
  className?: string;
  color?: string;
}

export default function BigBackgroundWord({ word, speed = 0.15, className = "", color = "var(--color-terracotta)" }: Props) {
  const offsetY = useParallax(speed);

  return (
    <div className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      <span 
        className="font-display font-bold whitespace-nowrap text-center"
        style={{
          fontSize: "clamp(6rem, 22vw, 22rem)",
          lineHeight: 1,
          color: color,
          opacity: 0.04,
          transform: `translateY(${offsetY}px)`,
        }}
        aria-hidden="true"
      >
        {word}
      </span>
    </div>
  );
}
