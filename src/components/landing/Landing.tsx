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
  Coffee,
  Frame,
  ShoppingBag,
} from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact";

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
    <Section id="top" className="overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      {/* big background word — sutil pero visible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-28 select-none text-center sm:top-32 lg:top-40"
      >
        <span
          className="font-display text-[22vw] font-extrabold leading-none tracking-tighter sm:text-[20vw] lg:text-[16vw]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, oklch(0.66 0.13 38 / 0.18), oklch(0.66 0.13 38 / 0.04))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          INFINITO
        </span>
      </div>

      {/* organic blobs — más profundidad */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-[var(--color-rose)]/55 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-32 h-[460px] w-[460px] rounded-full bg-[var(--color-gold)]/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute left-1/3 bottom-0 h-[360px] w-[360px] rounded-full bg-[var(--color-terracotta)]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:px-8 lg:pb-36">
        <div className="relative z-10 text-center lg:text-left animate-fade-in-up">
          <Eyebrow>Boutique de detalles · Hecho a pedido en Chile</Eyebrow>
          <h1 className="mt-5 text-balance font-display text-[2.5rem] font-semibold leading-[1.05] text-foreground sm:text-[3.5rem] lg:text-[5.2rem]">
            Detalles
            <br />
            personalizados
            <br />
            <span className="italic text-[var(--color-terracotta)]">con amor</span>{" "}
            <InfinityIcon className="inline-block h-10 w-10 text-[var(--color-gold)] sm:h-16 sm:w-16" />
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-medium text-foreground/80 sm:text-xl lg:mx-0">
            Convertimos tus fotos, frases y recuerdos en regalos únicos que emocionan de verdad. Diseñados a mano, hechos a pedido, listos para regalar.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Hecho a pedido · Diseños con significado · Atención personalizada
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <CTAWhatsapp message="Hola! Quiero cotizar un detalle personalizado de rsinfinito.cl">
              Cotizar por WhatsApp
            </CTAWhatsapp>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-card"
            >
              Ver productos
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
          <img
            src={infiTaza}
            alt="Infi, la mascota de rsinfinito.cl, sosteniendo una taza personalizada"
            width={1024}
            height={1024}
            className="relative z-10 h-full w-full scale-110 object-contain animate-float drop-shadow-[0_40px_50px_oklch(0.24_0.04_40/0.22)] sm:scale-105"
          />
          <FloatingDecor />

          {/* sticker label flotante */}
          <div className="absolute -left-2 top-10 z-20 hidden rotate-[-8deg] rounded-2xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-[0_15px_30px_-15px_oklch(0.24_0.04_40/0.4)] sm:block">
            <span className="flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 fill-[var(--color-terracotta)] text-[var(--color-terracotta)]" />
              Hecho a pedido
            </span>
          </div>
          <div className="absolute -right-2 bottom-12 z-20 hidden rotate-[6deg] rounded-2xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground shadow-[0_15px_30px_-15px_oklch(0.24_0.04_40/0.4)] sm:block">
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]" />
              Diseño único
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- trust strip ---------------- */

const TRUST = [
  { icon: HeartHandshake, label: "Hecho a pedido" },
  { icon: Wand2, label: "Diseño revisado antes de producir" },
  { icon: MessageCircle, label: "Atención personalizada" },
  { icon: Gift, label: "Regalos con significado" },
  { icon: PackageCheck, label: "Retiro o entrega coordinada" },
];

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
    name: "Taza blanca personalizada 11 oz",
    price: "$4.500",
    desc: "La clásica favorita. Tu foto, frase o diseño en cerámica brillante.",
    img: productMugWhite,
    tag: "Más pedida",
  },
  {
    name: "Taza con interior de color",
    price: "$5.990",
    desc: "Un detalle premium con interior intenso que destaca cada sorbo.",
    img: productMugColor,
    tag: "Premium",
  },
  {
    name: "Puzzle personalizado 120 piezas",
    price: "$8.990",
    desc: "Convierte un recuerdo en una experiencia para armar juntos.",
    img: productPuzzle,
    tag: "Para regalar",
  },
  {
    name: "Placa aluminio 20×30 con imán",
    price: "$8.990",
    desc: "Sublimación full color con acabado premium y soporte magnético.",
    img: productPlaque,
    tag: "Edición boutique",
  },
  {
    name: "Llavero personalizado",
    price: "$2.990",
    desc: "El detalle perfecto para llevar siempre contigo.",
    img: productLlavero,
    tag: "Personalizable",
  },
];

function Products() {
  return (
    <Section id="productos" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Productos destacados</Eyebrow>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Cada detalle cuenta <span className="italic text-[var(--color-terracotta)]">una historia</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Selección curada de productos personalizables. Cada uno se diseña, revisa y produce especialmente para ti.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-[var(--color-terracotta)]/40 hover:shadow-[0_40px_80px_-30px_oklch(0.24_0.04_40/0.35)]"
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
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-[var(--color-rose)]/40 via-[var(--color-cream)] to-[var(--color-gold)]/20 px-6 py-14 sm:px-12 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="relative order-2 mx-auto aspect-square w-full max-w-[440px] lg:order-1">
              <div className="absolute inset-8 rounded-full bg-[var(--color-cream)] shadow-[0_30px_60px_-30px_oklch(0.24_0.04_40/0.35)]" />
              <img
                src={infiDisenando}
                alt="Infi diseñando un boceto en una tablet"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative h-full w-full object-contain animate-float"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Personaliza tu idea</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Tu idea puede convertirse en un{" "}
                <span className="italic text-[var(--color-terracotta)]">regalo único</span>.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-muted-foreground">
                Envíanos una foto, frase, nombre, fecha especial o referencia, y te ayudamos a transformarla en un detalle personalizado con significado.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#cotizar"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.66_0.13_38/0.6)] transition hover:-translate-y-0.5"
                >
                  Enviar mi idea
                  <ArrowRight className="h-4 w-4" />
                </a>
                <CTAWhatsapp variant="ghost" message="Hola! Tengo una idea que quiero personalizar ✨">
                  Hablar por WhatsApp
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
  { t: "Elige tu producto", d: "Selecciona el detalle que quieres personalizar.", icon: MousePointerClick },
  { t: "Envía tu idea", d: "Mándanos foto, frase, fecha o referencia visual.", icon: ImageIcon },
  { t: "Preparamos tu diseño", d: "Trabajamos una maqueta cuidada y personalizada.", icon: PenTool },
  { t: "Confirmas la maqueta", d: "Revisamos juntos hasta dejarla perfecta.", icon: CheckCircle2 },
  { t: "Realizas el pago", d: "Te enviamos los medios disponibles.", icon: CreditCard },
  { t: "Retiro o envío", d: "Coordinamos la entrega como te acomode.", icon: Truck },
];

function HowItWorks() {
  return (
    <Section id="como-funciona" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Un proceso simple,{" "}
              <span className="italic text-[var(--color-terracotta)]">cuidado en cada paso</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Te acompañamos desde la primera idea hasta tener el detalle en tus manos.
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
              {STEPS.map((s, i) => (
                <li
                  key={s.t}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-[var(--color-terracotta)]/40 hover:shadow-lg"
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
    title: "Impacto",
    desc: "Creamos regalos que emocionan de verdad: detalles pensados para quedarse en la memoria.",
  },
  {
    icon: Wand2,
    title: "Innovación",
    desc: "Personalización creativa y una experiencia simple, humana y cercana de principio a fin.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Producción a pedido. Sin sobreproducción innecesaria. Cada pieza tiene un destino.",
  },
];

function Purpose() {
  return (
    <Section className="relative overflow-hidden bg-[var(--color-deep)] py-24 sm:py-32 lg:py-44 text-[var(--color-cream)]">
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
          className="font-display text-[22vw] font-extrabold leading-none tracking-tighter sm:text-[18vw] lg:text-[14vw]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, oklch(0.78 0.10 80 / 0.10), oklch(0.78 0.10 80 / 0.02))",
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
            <span className="italic text-[var(--color-gold)]">una intención</span>.
          </h2>
          <p className="mt-5 text-[var(--color-cream)]/75 sm:text-lg">
            No fabricamos en masa. Diseñamos pensando en quien recibe el regalo.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {PURPOSE.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-[var(--color-gold)]/15 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur transition hover:-translate-y-1 hover:border-[var(--color-gold)]/50"
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
            Para esos momentos que <span className="italic text-[var(--color-terracotta)]">merecen</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Inspírate con ocasiones para regalar algo único.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {IDEAS.map((i) => (
            <a
              key={i.t}
              href={waLink(`Hola! Busco un regalo para: ${i.t}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-[var(--color-terracotta)]/40 hover:shadow-[0_25px_50px_-25px_oklch(0.24_0.04_40/0.25)]"
            >
              <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-[var(--color-rose)]/0 to-[var(--color-gold)]/0 opacity-0 transition-opacity duration-500 group-hover:from-[var(--color-rose)]/30 group-hover:to-[var(--color-gold)]/15 group-hover:opacity-100" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--color-rose)]/40 text-[var(--color-terracotta)] transition group-hover:scale-110 group-hover:bg-[var(--color-terracotta)] group-hover:text-primary-foreground">
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
              Síguenos e <span className="italic text-[var(--color-terracotta)]">inspírate</span>.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Descubre ideas reales en nuestra vitrina visual.
            </p>
          </div>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5"
          >
            <Instagram className="h-4 w-4" />
            Ver Instagram
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {GALLERY.map((src, i) => (
            <a
              key={i}
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
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
              Detalles que <span className="italic text-[var(--color-terracotta)]">emocionan</span> de verdad.
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
              <img
                src={infiCelebrando}
                alt="Infi celebrando con regalos y corazones"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative h-full w-full object-contain animate-float drop-shadow-[0_30px_40px_oklch(0.24_0.04_40/0.2)]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <figure
                key={r.name}
                className={`relative rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_oklch(0.24_0.04_40/0.25)] ${
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
  { q: "¿Puedo enviar mi propia foto?", a: "¡Sí! Nos puedes enviar fotos, frases, nombres o referencias. Te recomendamos la mejor calidad posible para un resultado premium." },
  { q: "¿Me muestran el diseño antes de producir?", a: "Siempre. Trabajamos una maqueta digital y solo producimos cuando tú la apruebas." },
  { q: "¿Cuánto demora mi pedido?", a: "Depende del producto y la fecha. En promedio entre 3 y 7 días hábiles desde que apruebas el diseño." },
  { q: "¿Hacen envíos?", a: "Sí. Coordinamos envíos a todo Chile y también puedes retirar en Coltauco/Rancagua." },
  { q: "¿Qué medios de pago aceptan?", a: "Transferencia bancaria y otros medios acordados directamente por WhatsApp." },
  { q: "¿Los productos personalizados tienen cambio?", a: "Por ser hechos a pedido no tienen cambio, pero garantizamos calidad y revisión previa del diseño." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Todo lo que necesitas <span className="italic text-[var(--color-terracotta)]">saber</span>.
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
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--color-terracotta)] focus:ring-2 focus:ring-[var(--color-terracotta)]/20";

  return (
    <Section id="cotizar" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-[2.5rem] border border-border bg-card p-6 shadow-[0_30px_80px_-40px_oklch(0.24_0.04_40/0.3)] sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12 lg:p-14">
          <div>
            <Eyebrow>Cotización personalizada</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Cuéntanos tu idea y te <span className="italic text-[var(--color-terracotta)]">respondemos</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Completa el formulario y al enviar abriremos WhatsApp con el resumen listo para que adjuntes tu foto de referencia.
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
          <div aria-hidden className="absolute inset-16 rounded-full border border-dashed border-[var(--color-terracotta)]/25" />
          <img
            src={infiRegalo}
            alt="Infi entregando un regalo personalizado"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative h-full w-full scale-105 object-contain animate-float drop-shadow-[0_40px_50px_oklch(0.24_0.04_40/0.25)]"
          />
          <FloatingDecor />
        </div>
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <Eyebrow>Hagámoslo realidad</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            ¿Tienes una idea especial?{" "}
            <span className="italic text-[var(--color-terracotta)]">Hagámosla infinita</span>{" "}
            <InfinityIcon className="inline h-10 w-10 text-[var(--color-gold)]" />
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground lg:mx-0">
            Escríbenos y creemos juntas/os un detalle personalizado para ese momento que quieres recordar.
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
        <TrustStrip />
        <Products />
        <PersonalizeIdea />
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
