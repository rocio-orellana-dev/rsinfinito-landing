import React, { useState, useEffect } from "react";
import { MessageCircle, Upload, Minus, Plus, RefreshCw } from "lucide-react";
import { waLink } from "@/lib/contact";
import infiDisenando from "@/assets/infi-disenando.png";
import Mug3DViewer from "./Mug3DViewer";

type ColorType = "Blanco" | "Rosado empolvado" | "Terracota" | "Negro" | "Dorado suave";

const COLOR_OPTIONS: { name: ColorType; hex: string }[] = [
  { name: "Blanco", hex: "#ffffff" },
  { name: "Rosado empolvado", hex: "#e4b5b2" },
  { name: "Terracota", hex: "#a64d3c" },
  { name: "Negro", hex: "#1a1a1a" },
  { name: "Dorado suave", hex: "#d4af37" },
];

export default function MugCustomizer3D() {
  const [color, setColor] = useState<ColorType>("Blanco");
  const [text, setText] = useState("");
  const [qty, setQty] = useState(1);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setImageUrl(null);
    }
  }, [imageFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleClear = () => {
    setText("");
    setImageFile(null);
    setColor("Blanco");
    setQty(1);
  };

  const handleQuote = () => {
    const hasImage = imageFile ? "Sí (Adjuntaré la imagen por WhatsApp)" : "No";
    const msg = `Hola, quiero cotizar una taza personalizada de rsinfinito.cl.

Producto: Taza personalizada 3D
Color: ${color}
Frase: ${text || "(Sin frase)"}
Cantidad: ${qty}
Imagen/referencia: ${hasImage}

Quiero revisar una propuesta antes de producir.`;
    
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Diseña tu taza en <span className="italic text-[var(--color-terracotta)]">3D</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sube una foto, escribe una frase y visualiza tu idea antes de cotizar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-start rounded-[2.5rem] bg-[var(--color-cream)]/40 p-6 sm:p-10 lg:p-14 border border-border/50 shadow-sm relative overflow-hidden highlight-top">
          
          {/* Infi Deco */}
          <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none w-48 h-48 lg:w-64 lg:h-64 z-0">
            <img src={infiDisenando} alt="Infi" className="w-full h-full object-contain" />
          </div>

          {/* Left Column: 3D Viewer */}
          <div className="relative order-1 flex aspect-[4/5] sm:aspect-square w-full flex-col items-center justify-center rounded-3xl bg-background shadow-inner border border-border z-10 overflow-hidden group">
            
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0,_transparent_70%)] pointer-events-none" />

            {/* Canvas 3D */}
            <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
              <Mug3DViewer color={color} />
            </div>

            {/* HTML Overlay for Print Simulation */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center flex-col z-10 transition-opacity duration-300">
              <div 
                className="w-[50%] sm:w-[45%] flex flex-col items-center justify-center gap-2 transform"
                style={{
                  transform: "translateY(-10%) scaleY(0.95)",
                  filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.15))"
                }}
              >
                {imageUrl && (
                  <img 
                    src={imageUrl} 
                    alt="Uploaded design" 
                    className="w-full h-auto max-h-[120px] sm:max-h-[150px] object-contain rounded-sm"
                    style={{ mixBlendMode: color === 'Blanco' ? 'multiply' : 'normal' }}
                  />
                )}
                {text && (
                  <span 
                    className="font-display font-semibold text-center text-balance w-full"
                    style={{ 
                      color: color === 'Negro' ? '#ffffff' : '#1a1a1a', 
                      fontSize: Math.max(16, 32 - (text.length / 3)) + 'px',
                      textShadow: color === 'Negro' ? '0px 1px 3px rgba(0,0,0,0.8)' : 'none'
                    }}
                  >
                    {text}
                  </span>
                )}
              </div>
            </div>

            {/* Hint overlay */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/50 uppercase tracking-widest pointer-events-none transition-opacity group-hover:opacity-0">
              Arrastra para rotar
            </div>
          </div>

          {/* Right Column: Controls */}
          <div className="relative order-2 flex flex-col gap-8 z-10">
            
            {/* 1. Color/Estilo */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">1. Selecciona el color base</label>
              <div className="flex flex-wrap gap-3">
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c.name)}
                    className={`group relative flex items-center justify-center h-10 w-10 rounded-full transition-all ${
                      color === c.name ? "ring-2 ring-offset-2 ring-[var(--color-terracotta)] scale-110" : "hover:scale-105"
                    }`}
                    style={{ 
                      backgroundColor: c.hex, 
                      border: c.name === 'Blanco' ? '1px solid var(--color-border)' : 'none' 
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* 2. Imagen */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">2. Sube una foto o diseño (opcional)</label>
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--color-terracotta)]/40 bg-[var(--color-terracotta)]/5 px-4 py-4 text-sm font-medium text-[var(--color-terracotta)] transition hover:bg-[var(--color-terracotta)]/10 text-center">
                <Upload className="h-5 w-5 shrink-0" />
                <span className="truncate max-w-[200px]">{imageFile ? imageFile.name : "Seleccionar imagen"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </label>
            </div>

            {/* 3. Frase */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">3. Escribe tu frase (opcional)</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ej: Feliz día mamá"
                maxLength={60}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20 focus:shadow-[0_0_15px_oklch(0.66_0.13_38/0.15)]"
              />
            </div>

            {/* 4. Cantidad & Limpiar */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">4. Cantidad</label>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-3 py-2 w-max">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 hover:text-[var(--color-terracotta)] transition"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center text-sm font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1 hover:text-[var(--color-terracotta)] transition"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <button 
                onClick={handleClear}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition pb-2"
              >
                <RefreshCw className="h-4 w-4" />
                Limpiar diseño
              </button>
            </div>

            {/* 5. Summary & CTA */}
            <div className="mt-4 rounded-2xl bg-card p-5 border border-border/60 shadow-sm highlight-top relative">
              <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-4">
                <span className="text-sm font-medium text-muted-foreground">Taza Personalizada 3D</span>
                <span className="font-display font-semibold text-foreground">x{qty}</span>
              </div>
              <button
                onClick={handleQuote}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-terracotta)] px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-[var(--color-terracotta)]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-terracotta)]/40"
              >
                <MessageCircle className="h-5 w-5" />
                Cotizar por WhatsApp
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
