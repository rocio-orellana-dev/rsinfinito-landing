import { useState, type FormEvent, type ReactNode } from "react";
import {
  Heart,
  Sparkles,
  Gift,
  Puzzle,
  Infinity as InfinityIcon,
  MessageCircle,
  Instagram,
  ArrowRight,
  Check,
  Menu,
  X,
  Plus,
  Minus,
  ShieldCheck,
  Leaf,
  Wand2,
  PackageCheck,
  HeartHandshake,
  Sun,
  Cake,
  GraduationCap,
  PawPrint,
  Users,
  Briefcase,
  Camera,
  Star,
  MousePointerClick,
  Image as ImageIcon,
  PenTool,
  CheckCircle2,
  CreditCard,
  Truck,
  ShoppingBag,
} from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";
import MugCustomizer3D from "./MugCustomizer3D";
import BigBackgroundWord from "./BigBackgroundWord";
import WaveDivider from "./WaveDivider";
import FloatingStickers from "./FloatingStickers";
import BrandUniverse from "./BrandUniverse";

import logoRsinfinito from "@/assets/logo-rsinfinito.png";
import infiTaza from "@/assets/infi-taza.png";
import infiSaludando from "@/assets/infi-saludando.png";
import infiCelebrando from "@/assets/infi-celebrando.png";
import infiDisenando from "@/assets/infi-disenando.png";
import infiPuzzle from "@/assets/infi-puzzle.png";
import infiRegalo from "@/assets/infi-regalo.png";

import productMugWhite from "@/assets/product-mug-white.png";
import productMugColor from "@/assets/product-mug-color.png";
import productPuzzle from "@/assets/product-puzzle.png";
import productPlaque from "@/assets/product-plaque.png";
import productLlavero from "@/assets/product-llavero.png";;

/* ---------------- shared ---------------- */

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-terracotta)]" />
      {children}
    </div>
  );
}

function CTAWhatsapp({
  message,
  children,
  variant = "primary",
  className = "",
}: {
  message?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-terracotta)] text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.66_0.13_38/0.6)] hover:shadow-[0_18px_40px_-12px_oklch(0.66_0.13_38/0.7)]"
      : variant === "dark"
        ? "bg-[var(--color-deep)] text-[var(--color-cream)] hover:bg-[var(--color-deep)]/90"
        : "border border-border bg-card/70 text-foreground hover:bg-card backdrop-blur";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

/* ---------------- floating decor ---------------- */

function FloatingDecor() {
  return (
    <>
      <Heart
        className="absolute left-[8%] top-[18%] h-7 w-7 text-[var(--color-terracotta)]/70 animate-float"
        fill="currentColor"
      />
      <Sparkles
        className="absolute right-[12%] top-[12%] h-8 w-8 text-[var(--color-gold)] animate-float-slow"
        style={{ animationDelay: "0.6s" }}
      />
      <InfinityIcon
        className="absolute left-[14%] bottom-[14%] h-10 w-10 text-[var(--color-gold)] animate-float"
        style={{ animationDelay: "1.2s" }}
      />
      <Gift
        className="absolute right-[8%] bottom-[18%] h-7 w-7 text-[var(--color-terracotta)]/80 animate-float-slow"
        style={{ animationDelay: "0.3s" }}
      />
      <Puzzle
        className="absolute left-[42%] top-[6%] h-6 w-6 text-[var(--color-terracotta)]/60 animate-float"
        style={{ animationDelay: "1.8s" }}
      />
      <Heart
        className="absolute right-[28%] bottom-[8%] h-5 w-5 text-[var(--color-rose)] animate-float-slow"
        fill="currentColor"
        style={{ animationDelay: "0.9s" }}
      />
      <Sparkles
        className="absolute left-[30%] bottom-[30%] h-4 w-4 text-[var(--color-gold)]/60 animate-float"
        style={{ animationDelay: "2.5s" }}
      />
      <div className="absolute right-[20%] top-[40%] rounded-full bg-[var(--color-cream)]/90 p-2 shadow-sm animate-float-slow backdrop-blur" style={{ animationDelay: "1.5s" }}>
        <PenTool className="h-4 w-4 text-[var(--color-terracotta)]" />
      </div>
    </>
  );
}

/* ---------------- header ---------------- */

const NAV = [
  { href: "#productos", label: "Productos" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#inspiracion", label: "Inspiración" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[var(--color-cream)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center transition-transform">
          <img 
            src={logoRsinfinito} 
            alt="rs infinito logo" 
            className="h-8 sm:h-10 w-auto object-contain transition-all duration-500 ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_10px_rgba(218,165,32,0.4)]"
          />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--color-terracotta)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CTAWhatsapp message="Hola! Vengo desde rsinfinito.cl y quiero cotizar un detalle personalizado ✨">
            Cotizar por WhatsApp
          </CTAWhatsapp>
        </div>
        <button
          aria-label="Abrir menú"
          className="rounded-full border border-border bg-card p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-[var(--color-cream)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <CTAWhatsapp message="Hola! Vengo desde rsinfinito.cl y quiero cotizar un detalle personalizado ✨" className="mt-2">
              Cotizar por WhatsApp
            </CTAWhatsapp>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  return (
    <Section id="top" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      <BigBackgroundWord word="INFINITO" speed={-0.15} />

      {/* organic blobs — más profundidad */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-[var(--color-rose)]/30 blur-[100px] z-0" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-32 h-[500px] w-[500px] rounded-full bg-[var(--color-gold)]/20 blur-[100px] z-0" />
      <div aria-hidden className="pointer-events-none absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--color-terracotta)]/15 blur-[100px] z-0" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:px-8 lg:pb-36">
        <div className="relative z-10 text-center lg:text-left animate-fade-in-up">
          <Eyebrow>Boutique de detalles · Creados a mano en Chile</Eyebrow>
          <h1 className="mt-5 text-balance font-display text-[2.5rem] font-semibold leading-[1.05] text-foreground sm:text-[3.5rem] lg:text-[5.2rem]">
            Detalles
            <br />
            únicos creados
            <br />
            <span className="italic text-[var(--color-terracotta)]">con amor</span>{" "}
            <InfinityIcon className="inline-block h-10 w-10 text-[var(--color-gold)] sm:h-16 sm:w-16" />
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-medium text-foreground/80 sm:text-xl lg:mx-0">
            Transformamos tus momentos más especiales en regalos que tocan el corazón. Diseñados a mano, cuidando cada detalle y listos para sorprender.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Hecho a pedido · Diseños con significado · Atención personalizada
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <CTAWhatsapp message="Hola! Quiero cotizar un detalle personalizado de rsinfinito.cl">
              Hablemos de tu idea
            </CTAWhatsapp>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-card"
            >
              Descubrir la colección
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* mini trust row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </span>
              <span className="font-semibold text-foreground">+200 detalles entregados</span>
            </span>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <span>Envíos a todo Chile</span>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[480px] lg:max-w-none">
          {/* halo dorado */}
          <div aria-hidden className="absolute inset-2 rounded-full bg-gradient-to-br from-[var(--color-rose)] via-[var(--color-cream)] to-[var(--color-gold)]/50 blur-2xl" />
          <div aria-hidden className="absolute inset-6 rounded-full border border-[var(--color-gold)]/50" />
          <div aria-hidden className="absolute inset-14 rounded-full border border-dashed border-[var(--color-terracotta)]/25" />
          <div aria-hidden className="absolute -bottom-8 left-1/2 h-12 w-[60%] -translate-x-1/2 rounded-[100%] bg-black/15 blur-[20px]" />
          <img
            src={infiTaza}
            alt="Infi, la mascota de rsinfinito.cl, sosteniendo una taza personalizada"
            width={1024}
            height={1024}
            className="relative z-10 h-full w-full scale-110 object-contain animate-float drop-shadow-[0_40px_50px_oklch(0.24_0.04_40/0.22)] sm:scale-105"
          />
          <FloatingDecor />
          <FloatingStickers />
        </div>
      </div>
      
      {/* Wave Divider at the bottom of Hero */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-0 opacity-40">
        <WaveDivider color="var(--color-rose)" />
      </div>
    </Section>
  );
}

/* ---------------- trust strip ---------------- */

const TRUST = [
  { icon: HeartHandshake, label: "Hechos a tu medida" },
  { icon: Wand2, label: "Maqueta previa para tu tranquilidad" },
  { icon: MessageCircle, label: "Asesoría cálida y cercana" },
  { icon: Gift, label: "Regalos que cuentan historias" },
  { icon: PackageCheck, label: "Envíos a todo Chile" },
];

function ProductMarquee() {
  const MARQUEE_ITEMS = [
    "Tazas",
    "Placas",
    "Tote bags",
    "Poleras",
    "Puzzles",
    "Regalos únicos",
    "Detalles personalizados",
    "Hecho con amor",
  ];

  return (
    <div className="relative overflow-hidden border-b border-border/40 py-6 sm:py-8">
      {/* gradientes laterales para suavizar entrada/salida */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {/* Renderizamos el track dos veces para el scroll infinito */}
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex shrink-0 items-center justify-around">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="flex shrink-0 items-center px-6 sm:px-10">
                <span className={`font-display text-3xl font-medium sm:text-4xl lg:text-5xl ${i % 2 === 0 ? "italic text-foreground/90" : "text-[var(--color-terracotta)]"}`}>
                  {item}
                </span>
                <span className="ml-12 text-[var(--color-gold)] sm:ml-20">
                  <InfinityIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <div className="border-y border-border/70 bg-[var(--color-cream)]/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
        {TRUST.map((t) => (
          <div key={t.label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)]">
              <t.icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-foreground">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- products ---------------- */

const PRODUCTS = [
  {
    name: "Taza Clásica Personalizada",
    price: "$4.500",
    desc: "Nuestra favorita. Tu foto, frase o ilustración plasmada en cerámica de alta calidad.",
    img: productMugWhite,
    tag: "Más pedida",
  },
  {
    name: "Taza Premium con Interior de Color",
    price: "$5.990",
    desc: "Un toque vibrante. Interior y asa de color para hacer cada sorbo aún más especial.",
    img: productMugColor,
    tag: "Premium",
  },
  {
    name: "Puzzle de Recuerdos (120 piezas)",
    price: "$8.990",
    desc: "Transforma esa foto inolvidable en una hermosa experiencia para armar en compañía.",
    img: productPuzzle,
    tag: "Para regalar",
  },
  {
    name: "Placa Fotográfica Premium con Imán",
    price: "$8.990",
    desc: "Tu recuerdo favorito impreso en aluminio brillante. Ideal para decorar con elegancia.",
    img: productPlaque,
    tag: "Edición boutique",
  },
  {
    name: "Llaveros Personalizados",
    price: "$2.990",
    desc: "Un pedacito de tu historia para llevar siempre a todas partes contigo.",
    img: productLlavero,
    tag: "Personalizable",
  },
];

function Products() {
  return (
    <Section id="productos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Colección destacada</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Cada detalle cuenta <span className="italic text-[var(--color-terracotta)]">tu historia</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explora nuestra selección boutique. Diseñamos, revisamos y creamos cada pieza con amor y dedicación, especialmente para ti.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card hover-lift highlight-top"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream)]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* etiquetas */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--color-cream)]/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-sm backdrop-blur">
                  <Sparkles className="h-3 w-3 text-[var(--color-gold)]" />
                  {p.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-[var(--color-deep)]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-cream)] backdrop-blur">
                  Personalizable
                </span>
                {/* overlay hover */}
                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-cream)]/95 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-md backdrop-blur">
                    <HeartHandshake className="h-3.5 w-3.5 text-[var(--color-terracotta)]" />
                    Hecho a pedido
                  </span>
                </div>
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
                    {p.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[var(--color-terracotta)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-terracotta)]">
                    <span className="text-[10px] uppercase tracking-wider opacity-70">Desde</span>{" "}
                    {p.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 pt-2">
                  <a
                    href="#cotizar"
                    className="inline-flex justify-center items-center gap-1.5 rounded-full bg-foreground px-4 py-3 sm:py-2 text-sm sm:text-xs font-semibold text-background transition hover:bg-foreground/90"
                  >
                    Personalizar
                    <ArrowRight className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                  </a>
                  <a
                    href={waLink(`Hola! Me interesa: ${p.name} (desde ${p.price})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center items-center gap-1.5 rounded-full border border-border px-4 py-3 sm:py-2 text-sm sm:text-xs font-semibold text-foreground transition hover:bg-muted"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- personaliza tu idea ---------------- */

function PersonalizeIdea() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[var(--color-rose)]/40 via-[var(--color-cream)] to-[var(--color-gold)]/20 px-6 py-14 sm:px-12 lg:py-20 shadow-[0_30px_60px_-15px_oklch(0.66_0.13_38/0.15)]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="relative order-2 mx-auto aspect-square w-full max-w-[440px] lg:order-1">
              <div className="absolute inset-4 rounded-full border border-dashed border-[var(--color-gold)]/40 animate-spin" style={{ animationDuration: "40s" }} />
              <div className="absolute inset-8 rounded-full bg-[var(--color-cream)] shadow-[0_30px_60px_-30px_oklch(0.24_0.04_40/0.35)]" />
              <img
                src={infiDisenando}
                alt="Infi diseñando un boceto en una tablet"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative h-full w-full object-contain animate-float drop-shadow-2xl"
              />
              <Sparkles className="absolute right-8 top-12 h-6 w-6 text-[var(--color-gold)] animate-float-slow" />
              <PenTool className="absolute left-10 bottom-12 h-5 w-5 text-[var(--color-terracotta)] animate-float" style={{ animationDelay: "1s" }} />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Personaliza tu idea</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Tu historia merece convertirse en un{" "}
                <span className="italic text-[var(--color-terracotta)]">regalo inolvidable</span>.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
                Comparte con nosotros esa foto especial, una frase, una fecha importante o simplemente tu idea. Nosotros nos encargaremos de darle vida con amor y dedicación.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#cotizar"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.66_0.13_38/0.6)] transition hover:-translate-y-0.5"
                >
                  Quiero crear mi diseño
                  <ArrowRight className="h-4 w-4" />
                </a>
                <CTAWhatsapp variant="ghost" message="Hola! Tengo una idea que quiero personalizar ✨">
                  Hablemos por WhatsApp
                </CTAWhatsapp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- how it works ---------------- */

const STEPS = [
  { t: "Elige tu lienzo", d: "Explora nuestra colección y elige el detalle perfecto para personalizar.", icon: MousePointerClick },
  { t: "Cuéntanos tu idea", d: "Envíanos esa foto especial, frase o simplemente lo que imaginas.", icon: ImageIcon },
  { t: "Creamos la magia", d: "Diseñamos una propuesta digital cuidando cada aspecto visual.", icon: PenTool },
  { t: "Apruebas tu diseño", d: "Revisamos el diseño juntos hasta asegurarnos de que lo ames.", icon: CheckCircle2 },
  { t: "Confirmamos tu pedido", d: "Te enviaremos los datos para formalizar y comenzar la producción.", icon: CreditCard },
  { t: "Llega a tus manos", d: "Coordinamos el envío o el retiro para que llegue en el momento perfecto.", icon: Truck },
];

function HowItWorks() {
  return (
    <Section id="como-funciona" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Un proceso pensado para ti,{" "}
              <span className="italic text-[var(--color-terracotta)]">cuidado en cada detalle</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Te guiamos con cariño desde tu primera idea hasta que el regalo llega a tus manos.
            </p>
            <div className="relative mt-10 mx-auto aspect-square w-full max-w-[200px] sm:max-w-xs">
              <img
                src={infiPuzzle}
                alt="Infi armando una pieza de puzzle"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-contain animate-float-slow"
              />
            </div>
          </div>

          <div>
            <ol className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Connector line desktop */}
              <div aria-hidden className="absolute left-1/2 top-10 bottom-10 hidden w-px -translate-x-1/2 border-l-2 border-dashed border-border sm:block" />
              {STEPS.map((s, i) => (
                <li
                  key={s.t}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
                >
                  <span
                    aria-hidden
                    className="absolute -right-3 -top-4 font-display text-6xl sm:text-7xl font-bold leading-none text-[var(--color-terracotta)]/[0.08]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)] transition group-hover:bg-[var(--color-terracotta)] group-hover:text-primary-foreground">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Paso {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Sin compromiso.</span> Te confirmamos el diseño antes de producir.
              </p>
              <CTAWhatsapp message="Hola! Quiero empezar mi pedido personalizado">
                Empezar mi pedido por WhatsApp
              </CTAWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- purpose (dark) ---------------- */

const PURPOSE = [
  {
    icon: Heart,
    title: "Emoción pura",
    desc: "Diseñamos regalos que trascienden. Detalles pensados para abrazar el alma y perdurar en el tiempo.",
  },
  {
    icon: Wand2,
    title: "Dedicación",
    desc: "Un proceso creativo, humano y cercano, diseñado para que disfrutes cada paso junto a nosotros.",
  },
  {
    icon: Leaf,
    title: "Conciencia",
    desc: "Producimos a pedido. Cero sobreproducción. Cada creación nace porque tiene un dueño que la espera.",
  },
];

function Purpose() {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-deep)] py-24 sm:py-32 lg:py-44 text-[var(--color-cream)]">
      {/* Sparkles / particles animated */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { l: '10%', d: '0s', dur: '18s', s: 16 },
          { l: '30%', d: '4s', dur: '22s', s: 24 },
          { l: '50%', d: '2s', dur: '16s', s: 14 },
          { l: '70%', d: '7s', dur: '24s', s: 20 },
          { l: '90%', d: '3s', dur: '19s', s: 18 },
        ].map((pt, i) => (
          <Sparkles
            key={i}
            className="absolute text-[var(--color-gold)]/20 animate-particle-up"
            style={{ left: pt.l, bottom: '-20px', width: pt.s, animationDelay: pt.d, animationDuration: pt.dur }}
          />
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--color-gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-terracotta) 0, transparent 40%)",
        }}
      />
      {/* palabra de fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center">
        <span
          className="font-display text-[26vw] font-extrabold leading-none tracking-tighter sm:text-[22vw] lg:text-[18vw]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, oklch(0.78 0.10 80 / 0.15), oklch(0.78 0.10 80 / 0.02))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          PROPÓSITO
        </span>
      </div>
      {/* línea dorada superior */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            Hecho con amor y propósito
          </div>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Detrás de cada detalle hay{" "}
            <span className="italic text-[var(--color-gold)]">una emoción sincera</span>.
          </h2>
          <p className="mt-5 text-[var(--color-cream)]/75 sm:text-lg">
            Lejos de la producción en serie. Cada pieza nace pensando en la sonrisa de quien la recibe.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {PURPOSE.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8 lg:p-10 hover-lift"
            >
              <span
                aria-hidden
                className="absolute -right-2 -top-4 font-display text-6xl sm:text-7xl font-bold leading-none text-[var(--color-gold)]/15"
              >
                0{i + 1}
              </span>
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold sm:text-3xl">{p.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-cream)]/75">{p.desc}</p>
              <div aria-hidden className="mt-8 h-px w-12 bg-[var(--color-gold)]/40 transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
    </Section>
  );
}

/* ---------------- gift ideas ---------------- */

const IDEAS = [
  { icon: Heart, t: "Día del Padre", d: "Detalles que abrazan." },
  { icon: HeartHandshake, t: "Día de la Madre", d: "Para celebrarla siempre." },
  { icon: GraduationCap, t: "Día del Profesor", d: "Gracias hechos a mano." },
  { icon: Cake, t: "Cumpleaños", d: "Sorpresas con significado." },
  { icon: Sun, t: "Aniversarios", d: "Recuerdos para atesorar." },
  { icon: PawPrint, t: "Mascotas", d: "Para los que más queremos." },
  { icon: Users, t: "Recuerdos familiares", d: "La historia, en un detalle." },
  { icon: Briefcase, t: "Regalos corporativos", d: "Detalles que marcan presencia." },
];

function GiftIdeas() {
  return (
    <Section id="inspiracion" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Ideas para regalar</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Para esos instantes que <span className="italic text-[var(--color-terracotta)]">merecen ser recordados</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Descubre la inspiración perfecta para sorprender a quienes más amas.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {IDEAS.map((i) => (
            <a
              key={i.t}
              href={waLink(`Hola! Busco un regalo para: ${i.t}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
            >
              <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[var(--color-rose)]/0 to-[var(--color-gold)]/0 opacity-0 transition-opacity duration-500 group-hover:from-[var(--color-rose)]/30 group-hover:to-[var(--color-gold)]/15 group-hover:opacity-100" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-rose)]/40 text-[var(--color-terracotta)] transition group-hover:scale-110 group-hover:bg-[var(--color-terracotta)] group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_oklch(0.66_0.13_38/0.5)]">
                  <i.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{i.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{i.d}</p>
                <ArrowRight className="absolute right-0 top-0 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-terracotta)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- instagram gallery ---------------- */

const GALLERY = [productMugWhite, productPuzzle, productPlaque, productMugColor, productLlavero];

function InstagramGallery() {
  return (
    <Section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Inspírate</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Acompáñanos e <span className="italic text-[var(--color-terracotta)]">inspírate</span>.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Explora nuestra comunidad y descubre las historias reales que hemos creado.
            </p>
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" />
            Visitar nuestro Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {GALLERY.map((src, i) => (
            <a
              key={i}
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-md transition-all duration-500 hover:z-10 hover:scale-105 hover:shadow-[0_20px_40px_-10px_oklch(0.24_0.04_40/0.3)] ${i % 2 === 0 ? '-rotate-2 hover:rotate-0' : 'rotate-2 hover:rotate-0'}`}
            >
              <img
                src={src}
                alt="Inspiración rsinfinito"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-deep)]/0 opacity-0 transition-all duration-300 group-hover:bg-[var(--color-deep)]/40 group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-[var(--color-cream)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- testimonials ---------------- */

const REVIEWS = [
  {
    name: "Viviana Eugenia Díaz Zúñiga",
    role: "Tazas Personalizadas • Día de la Madre & Regalos con Amor ☕💖",
    text: "Pedí una taza personalizada y realmente superó todo lo que imaginaba 🥹💖 Cada detalle quedó hermoso y se nota el cariño detrás de cada creación. Totalmente recomendada la creatividad de RS Infinito",
  },
  {
    name: "Rocío Belén Orellana Díaz",
    role: "Placas Personalizadas • Aniversarios & Recuerdos Especiales 🖤",
    text: "Quedé enamorada de mi placa personalizada 😭🖤 La dedicación, los detalles y lo especial que logra transmitir RS Infinito en cada diseño hacen que sea mucho más que un regalo.",
  },
];

function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--color-rose)]/25 to-transparent py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="text-center lg:text-left">
            <Eyebrow>Testimonios reales</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Historias reales, <span className="italic text-[var(--color-terracotta)]">emociones</span> que perduran.
            </h2>
            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </span>
              <span className="text-sm font-semibold text-foreground"></span>
            </div>
            <div className="relative mx-auto mt-6 aspect-square w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[420px] lg:mx-0">
              <div aria-hidden className="absolute inset-6 rounded-full bg-gradient-to-br from-[var(--color-rose)]/60 via-transparent to-[var(--color-gold)]/40 blur-2xl" />
              <div aria-hidden className="absolute -bottom-4 left-1/2 h-8 w-[60%] -translate-x-1/2 rounded-[100%] bg-black/15 blur-[15px]" />
              <img
                src={infiCelebrando}
                alt="Infi celebrando con regalos y corazones"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative h-full w-full object-contain animate-float drop-shadow-[0_40px_50px_oklch(0.24_0.04_40/0.22)]"
              />
              <Heart className="absolute left-[10%] top-[20%] h-6 w-6 text-[var(--color-rose)] animate-float" fill="currentColor" />
              <Sparkles className="absolute right-[15%] top-[10%] h-5 w-5 text-[var(--color-gold)] animate-float-slow" />
              <Gift className="absolute left-[80%] bottom-[20%] h-8 w-8 text-[var(--color-terracotta)]/80 animate-float" style={{ animationDelay: "1s" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <figure
                key={r.name}
                className={`relative rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-lg hover-lift highlight-top ${
                  i === 1 ? "sm:translate-y-8" : ""
                }`}
              >
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </span>
                <blockquote className="mt-4 text-pretty leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4 text-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-terracotta)] font-display text-base font-semibold text-primary-foreground">
                    {r.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{r.name}</span>
                    <span className="block text-xs text-muted-foreground">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  { q: "¿Puedo enviar mi propia foto?", a: "¡Por supuesto! Nos encanta trabajar con tus fotos, frases o ideas. Solo procura enviarnos la imagen en la mejor calidad posible para un resultado impecable." },
  { q: "¿Me muestran el diseño antes de producir?", a: "Siempre. Nuestra prioridad es que ames el resultado. Te enviaremos una propuesta digital para que la revisemos juntos antes de fabricar." },
  { q: "¿Cuánto demora mi pedido?", a: "Nos tomamos el tiempo necesario para hacerlo perfecto. En promedio, tardamos entre 3 y 7 días hábiles desde que apruebas el diseño final." },
  { q: "¿Hacen envíos?", a: "¡Sí! Llevamos la emoción a todo Chile. También ofrecemos retiro en Coltauco y Rancagua si prefieres buscarlo en persona." },
  { q: "¿Qué medios de pago aceptan?", a: "Aceptamos transferencia bancaria y otros medios que podemos acordar directamente por WhatsApp de forma segura." },
  { q: "¿Los productos personalizados tienen cambio?", a: "Al ser creaciones únicas hechas a tu medida, no realizamos cambios. Sin embargo, te garantizamos que revisaremos la maqueta digital juntos hasta que estés 100% feliz." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Estamos aquí para <span className="italic text-[var(--color-terracotta)]">resolver tus dudas</span>.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold text-foreground">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[var(--color-terracotta)]/10 text-[var(--color-terracotta)]">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-pretty text-muted-foreground animate-fade-in-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Quote form ---------------- */

const PRODUCT_OPTIONS = [
  "Taza blanca 11 oz",
  "Taza interior de color",
  "Puzzle 120 piezas",
  "Placa aluminio 20×30",
  "Llavero personalizado",
  "Regalo fecha especial",
  "Otro / no estoy segura",
];

function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) || "").trim();
    const summary = [
      `Hola! Quiero cotizar un detalle personalizado`,
      ``,
      `• Nombre: ${get("nombre")}`,
      `• WhatsApp: ${get("whatsapp")}`,
      `• Correo: ${get("correo")}`,
      `• Producto: ${get("producto")}`,
      `• Cantidad: ${get("cantidad")}`,
      `• Fecha requerida: ${get("fecha")}`,
      `• Frase / texto: ${get("frase")}`,
      `• Idea del diseño: ${get("idea")}`,
      `• Colores o estilo: ${get("colores")}`,
      `• Comentarios: ${get("comentarios")}`,
      ``,
      `(En seguida envío la foto/archivo de referencia)`,
    ].join("\n");
    setSent(true);
    window.open(waLink(summary), "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20 focus:shadow-[0_0_15px_oklch(0.66_0.13_38/0.15)]";

  return (
    <Section id="cotizar" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-[2.5rem] border border-border bg-card p-6 shadow-[0_40px_100px_-20px_oklch(0.66_0.13_38/0.15)] sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:p-14 highlight-top">
          <div>
            <Eyebrow>Cotización personalizada</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Cuéntanos qué imaginas y <span className="italic text-[var(--color-terracotta)]">hagámoslo realidad</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Déjanos tus datos y la esencia de tu idea. Al enviar, continuaremos la charla por WhatsApp para afinar los detalles juntos y adjuntar tus fotos.
            </p>
            <div className="relative mx-auto mt-8 aspect-square w-full max-w-[200px] sm:max-w-[260px]">
              <img
                src={infiSaludando}
                alt="Infi saludando con la patita en alto"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-contain animate-float"
              />
            </div>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {["Respuesta personalizada", "Maqueta antes de producir", "Sin compromiso de compra"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--color-terracotta)]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nombre</label>
              <input name="nombre" required className={inputCls} placeholder="Tu nombre" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</label>
              <input name="whatsapp" required className={inputCls} placeholder="+56 9 ..." />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Correo</label>
              <input name="correo" type="email" className={inputCls} placeholder="tu@correo.cl" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Producto</label>
              <select name="producto" required className={inputCls} defaultValue="">
                <option value="" disabled>Selecciona</option>
                {PRODUCT_OPTIONS.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cantidad</label>
              <input name="cantidad" type="number" min={1} defaultValue={1} className={inputCls} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fecha requerida</label>
              <input name="fecha" type="date" className={inputCls} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Colores / estilo</label>
              <input name="colores" className={inputCls} placeholder="Ej: tonos pasteles, dorado..." />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Frase o texto</label>
              <input name="frase" className={inputCls} placeholder='Ej: "Te amo infinito, mamá"' />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Idea del diseño</label>
              <textarea name="idea" rows={3} className={inputCls} placeholder="Cuéntanos qué imaginas..." />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Foto / archivo de referencia</label>
              <div className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground">
                <Camera className="h-5 w-5 text-[var(--color-terracotta)]" />
                Adjuntarás tu archivo directamente por WhatsApp después de enviar.
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Comentarios</label>
              <textarea name="comentarios" rows={2} className={inputCls} placeholder="Algo más que debamos saber" />
            </div>

            <p className="sm:col-span-2 -mt-1 flex items-start gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-terracotta)]" />
              Antes de producir, revisamos tu idea y confirmamos el diseño contigo.
            </p>
            <div className="sm:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-terracotta)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.66_0.13_38/0.6)] transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Enviar solicitud por WhatsApp
              </button>
              <a
                href={waLink("Hola! Prefiero conversar mi pedido directamente por aquí ✨")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Prefiero escribir directo
              </a>
            </div>
            {sent && (
              <p className="sm:col-span-2 flex items-center gap-2 text-sm text-[var(--color-terracotta)]">
                <ShieldCheck className="h-4 w-4" />
                Abrimos WhatsApp con tu resumen. ¡Te esperamos!
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <Section id="contacto" className="relative overflow-hidden py-28 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-rose)]/50 via-[var(--color-cream)] to-[var(--color-gold)]/35"
      />
      {/* curvas / blobs decorativos */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[440px] w-[440px] rounded-full bg-[var(--color-rose)]/60 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-gold)]/35 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-10 select-none text-center">
        <span
          className="font-display text-[22vw] font-extrabold leading-none tracking-tighter sm:text-[16vw] lg:text-[12vw]"
          style={{
            backgroundImage: "linear-gradient(180deg, oklch(0.66 0.13 38 / 0.12), oklch(0.66 0.13 38 / 0.02))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          INFINITO
        </span>
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="relative order-2 mx-auto aspect-square w-full max-w-[560px] lg:order-1">
          <div aria-hidden className="absolute inset-2 rounded-full bg-gradient-to-br from-[var(--color-rose)] via-[var(--color-cream)] to-[var(--color-gold)]/50 blur-2xl" />
          <div aria-hidden className="absolute inset-6 rounded-full bg-[var(--color-cream)] shadow-[0_40px_80px_-30px_oklch(0.24_0.04_40/0.4)]" />
          <div aria-hidden className="absolute inset-10 rounded-full border border-[var(--color-gold)]/40" />
          <div aria-hidden className="absolute inset-16 rounded-full border border-dashed border-[var(--color-terracotta)]/25 animate-spin" style={{ animationDuration: "35s" }} />
          <div aria-hidden className="absolute -bottom-8 left-1/2 h-12 w-[60%] -translate-x-1/2 rounded-[100%] bg-black/15 blur-[20px]" />
          <img
            src={infiRegalo}
            alt="Infi entregando un regalo personalizado"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative h-full w-full scale-105 object-contain animate-float drop-shadow-[0_40px_60px_oklch(0.24_0.04_40/0.3)]"
          />
          <FloatingDecor />
        </div>
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <Eyebrow>Hagámoslo realidad</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            ¿Tienes una idea en mente?{" "}
            <span className="italic text-[var(--color-terracotta)]">Hagámosla eterna</span>{" "}
            <InfinityIcon className="inline h-10 w-10 text-[var(--color-gold)]" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground lg:mx-0">
            Escríbenos y diseñemos juntos un detalle lleno de amor para atesorar tus recuerdos más hermosos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
            <CTAWhatsapp message="Hola! Quiero crear un detalle personalizado contigo">
              Cotizar por WhatsApp
            </CTAWhatsapp>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5"
            >
              <Instagram className="h-4 w-4" />
              Ver Instagram
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--color-cream)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <a href="#top" className="group inline-flex items-center transition-transform">
            <img 
              src={logoRsinfinito} 
              alt="rs infinito logo" 
              className="h-8 sm:h-10 w-auto object-contain transition-all duration-500 ease-out group-hover:-translate-y-[2px] group-hover:scale-[1.03] group-hover:drop-shadow-[0_0_10px_rgba(218,165,32,0.4)]"
            />
          </a>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {CONTACT.tagline} — Regalos hechos a pedido que convierten tus recuerdos en detalles infinitos.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">{CONTACT.location}</p>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground">Navegación</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-[var(--color-terracotta)]">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--color-terracotta)]">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--color-terracotta)]">
                <Instagram className="h-4 w-4" /> {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} rsinfinito.cl — Todos los derechos reservados.</p>
          <p>Hecho con amor en Chile</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- floating whatsapp ---------------- */

function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola! Quiero cotizar un detalle personalizado")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] px-4 py-3 sm:px-5 text-sm font-semibold text-primary-foreground shadow-[0_15px_40px_-10px_oklch(0.66_0.13_38/0.7)] animate-pulse-soft"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

/* ---------------- Landing root ---------------- */

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <ProductMarquee />
        <TrustStrip />
        <Products />
        <MugCustomizer3D />
        <BrandUniverse />
        <HowItWorks />
        <Purpose />
        <GiftIdeas />
        <InstagramGallery />
        <Testimonials />
        <FAQ />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
