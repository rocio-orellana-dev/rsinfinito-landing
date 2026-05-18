import React, { useState } from "react";
import { MessageCircle, Upload, Minus, Plus, Image as ImageIcon, Box, LayoutPanelLeft, ShoppingBag } from "lucide-react";
import { waLink } from "@/lib/contact";
import infiDisenando from "@/assets/infi-disenando.png";

type ProductType = "Taza" | "Puzzle" | "Placa" | "Tote bag";
type ColorType = "Crema" | "Terracota" | "Rosado" | "Dorado" | "Café";

const COLOR_MAP: Record<ColorType, string> = {
  Crema: "var(--color-cream)",
  Terracota: "var(--color-terracotta)",
  Rosado: "var(--color-rose)",
  Dorado: "var(--color-gold)",
  Café: "var(--color-deep)",
};

const PRODUCT_ICONS: Record<ProductType, React.ElementType> = {
  "Taza": Box,
  "Puzzle": LayoutPanelLeft,
  "Placa": ImageIcon,
  "Tote bag": ShoppingBag,
};

export default function LiveCustomizer() {
  const [product, setProduct] = useState<ProductType>("Taza");
  const [color, setColor] = useState<ColorType>("Terracota");
  const [text, setText] = useState("");
  const [qty, setQty] = useState(1);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleQuote = () => {
    const hasImage = fileName ? "Sí (la envío a continuación)" : "No";
    const msg = `Hola, quiero cotizar un producto personalizado de rsinfinito.cl.

Producto: ${product}
Estilo/color: ${color}
Frase: ${text || "(Sin frase)"}
Cantidad: ${qty}
Imagen/referencia: ${hasImage}

Quiero revisar una propuesta antes de producir.`;
    
    window.open(waLink(msg), "_blank");
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Diseña tu detalle en <span className="italic text-[var(--color-terracotta)]">tiempo real</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Prueba una frase, elige un producto y cuéntanos tu idea antes de cotizar.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start rounded-[2.5rem] bg-[var(--color-cream)]/40 p-6 sm:p-10 lg:p-14 border border-border/50 shadow-sm relative overflow-hidden">
          
          {/* Infi Deco */}
          <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none w-48 h-48 lg:w-64 lg:h-64">
            <img src={infiDisenando} alt="Infi" className="w-full h-full object-contain" />
          </div>

          {/* Left Column: Mockup */}
          <div className="relative order-1 flex aspect-square w-full flex-col items-center justify-center rounded-3xl bg-background shadow-inner overflow-hidden border border-border">
            
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0,_transparent_70%)]" />

            {/* Dynamic Product Shape */}
            <div className="relative z-10 flex h-3/4 w-3/4 items-center justify-center animate-fade-in-up">
              {product === "Taza" && (
                <div className="relative h-[60%] w-[50%] rounded-b-3xl rounded-t-lg bg-card shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05),_0_20px_40px_-10px_rgba(0,0,0,0.15)] border-2" style={{ borderColor: COLOR_MAP[color], backgroundColor: color === 'Crema' ? '#fff' : color === 'Café' ? '#fff' : `${COLOR_MAP[color]}20` }}>
                  {/* Mug Ear */}
                  <div className="absolute -right-8 top-8 h-1/2 w-8 rounded-r-3xl border-4 border-l-0" style={{ borderColor: COLOR_MAP[color] }} />
                  <div className="flex h-full w-full items-center justify-center p-4 text-center">
                    <span className="font-display font-medium text-balance text-foreground drop-shadow-sm" style={{ color: color === 'Café' ? COLOR_MAP.Café : 'inherit', fontSize: Math.max(12, 24 - (text.length / 3)) + 'px' }}>
                      {text || "Tu frase aquí"}
                    </span>
                  </div>
                </div>
              )}

              {product === "Puzzle" && (
                <div className="relative h-[70%] w-[80%] rounded-xl shadow-lg border" style={{ backgroundColor: COLOR_MAP[color], borderColor: 'rgba(0,0,0,0.1)' }}>
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19%, #000 20%), repeating-linear-gradient(90deg, transparent, transparent 19%, #000 20%)', backgroundSize: '50px 50px' }} />
                  <div className="flex h-full w-full items-center justify-center p-6 text-center z-10 relative">
                    <span className="font-display font-semibold text-balance" style={{ color: ['Café', 'Terracota'].includes(color) ? '#fff' : 'var(--color-deep)', fontSize: Math.max(14, 28 - (text.length / 3)) + 'px' }}>
                      {text || "Tu frase aquí"}
                    </span>
                  </div>
                </div>
              )}

              {product === "Placa" && (
                <div className="relative h-[60%] w-[80%] rounded-sm shadow-xl border overflow-hidden highlight-top" style={{ backgroundColor: color === 'Crema' ? '#e0e0e0' : COLOR_MAP[color], borderColor: 'rgba(0,0,0,0.2)' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                  <div className="flex h-full w-full items-center justify-center p-6 text-center">
                    <span className="font-display font-medium tracking-wide text-balance" style={{ color: ['Café', 'Terracota'].includes(color) ? '#fff' : 'var(--color-deep)', fontSize: Math.max(12, 24 - (text.length / 3)) + 'px' }}>
                      {text || "Tu frase aquí"}
                    </span>
                  </div>
                </div>
              )}

              {product === "Tote bag" && (
                <div className="relative h-[80%] w-[60%] rounded-b-xl rounded-t-sm shadow-md border-x border-b" style={{ backgroundColor: COLOR_MAP[color], borderColor: 'rgba(0,0,0,0.1)' }}>
                  {/* Straps */}
                  <div className="absolute -top-12 left-1/4 h-16 w-4 rounded-t-full border-2 border-b-0" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div className="absolute -top-12 right-1/4 h-16 w-4 rounded-t-full border-2 border-b-0" style={{ borderColor: 'rgba(0,0,0,0.1)' }} />
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')] mix-blend-multiply" />
                  <div className="flex h-full w-full items-center justify-center p-4 text-center z-10 relative">
                    <span className="font-display font-medium text-balance" style={{ color: ['Café', 'Terracota'].includes(color) ? '#fff' : 'var(--color-deep)', fontSize: Math.max(14, 26 - (text.length / 3)) + 'px' }}>
                      {text || "Tu frase aquí"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-muted-foreground/50 uppercase tracking-widest">
              Previsualización Referencial
            </div>
          </div>

          {/* Right Column: Controls */}
          <div className="relative order-2 flex flex-col gap-8 z-10">
            
            {/* 1. Producto */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">1. Elige el producto</label>
              <div className="flex flex-wrap gap-2">
                {(["Taza", "Puzzle", "Placa", "Tote bag"] as ProductType[]).map((p) => {
                  const Icon = PRODUCT_ICONS[p];
                  return (
                    <button
                      key={p}
                      onClick={() => setProduct(p)}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        product === p 
                          ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)]" 
                          : "border-border bg-card text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Color/Estilo */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">2. Selecciona un tono</label>
              <div className="flex flex-wrap gap-3">
                {(["Crema", "Terracota", "Rosado", "Dorado", "Café"] as ColorType[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`group relative flex items-center justify-center h-10 w-10 rounded-full transition-all ${
                      color === c ? "ring-2 ring-offset-2 ring-[var(--color-terracotta)] scale-110" : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: COLOR_MAP[c], border: c === 'Crema' ? '1px solid var(--color-border)' : 'none' }}
                    title={c}
                  />
                ))}
              </div>
            </div>

            {/* 3. Frase */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">3. Escribe tu frase</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Ej: Con amor, mamá"
                maxLength={60}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20 focus:shadow-[0_0_15px_oklch(0.66_0.13_38/0.15)]"
              />
            </div>

            {/* 4 & 5. Cantidad y Foto */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">4. Cantidad</label>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-3 py-2 w-max">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 hover:text-[var(--color-terracotta)] transition"><Minus className="h-4 w-4" /></button>
                  <span className="w-6 text-center text-sm font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1 hover:text-[var(--color-terracotta)] transition"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">5. Referencia visual (opcional)</label>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--color-terracotta)]/40 bg-[var(--color-terracotta)]/5 px-4 py-3 text-sm font-medium text-[var(--color-terracotta)] transition hover:bg-[var(--color-terracotta)]/10">
                  <Upload className="h-4 w-4" />
                  <span className="truncate max-w-[120px]">{fileName || "Subir foto"}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
                <p className="mt-2 text-[10px] text-muted-foreground leading-tight">La imagen se adjuntará por WhatsApp. Confirmamos el diseño antes de producir.</p>
              </div>
            </div>

            {/* 6. Summary & CTA */}
            <div className="mt-4 rounded-2xl bg-card p-5 border border-border/60 shadow-sm highlight-top relative">
              <div className="flex justify-between items-center mb-4 border-b border-border/50 pb-4">
                <span className="text-sm font-medium text-muted-foreground">Resumen de tu idea</span>
                <span className="font-display font-semibold text-foreground">{product} ({qty})</span>
              </div>
              <button
                onClick={handleQuote}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-terracotta)] px-6 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-[var(--color-terracotta)]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[var(--color-terracotta)]/40"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir por WhatsApp
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
