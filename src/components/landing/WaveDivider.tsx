export default function WaveDivider({ color = "var(--color-background)", className = "" }: { color?: string, className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none z-10 relative ${className}`} style={{ transform: "rotate(180deg)" }}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[80px]"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={color}
        />
      </svg>
    </div>
  );
}
