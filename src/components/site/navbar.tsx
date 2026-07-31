import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { church, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

function Logo({ inverted }: { inverted: boolean }) {
  return (
    <a href="#inicio" className="flex min-w-0 items-center gap-3">
      <span
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-2xl border text-base font-black tracking-tight transition-colors",
          inverted ? "border-gold/60 text-gold" : "border-gold/60 bg-gold/10 text-earth",
        )}
      >
        E
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "block truncate text-sm font-extrabold uppercase tracking-[0.14em]",
            inverted ? "text-white" : "text-foreground",
          )}
        >
          Elim
        </span>
        <span
          className={cn(
            "block truncate text-[10px] uppercase tracking-[0.22em]",
            inverted ? "text-white/70" : "text-muted-foreground",
          )}
        >
          Batista Renovada
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inverted = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-background/95 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Logo inverted={inverted} />

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                inverted ? "text-white/85 hover:text-gold" : "text-foreground/75 hover:text-earth",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${church.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition-transform duration-300 hover:scale-[1.03]"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors xl:hidden",
            inverted ? "border-white/30 text-white" : "border-border text-foreground",
          )}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-earth"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
