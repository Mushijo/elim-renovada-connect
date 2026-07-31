import { ArrowUp, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { church } from "@/data/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {visible ? (
          <motion.button
            key="top"
            type="button"
            aria-label="Voltar ao topo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-foreground shadow-lift transition-colors hover:border-gold hover:text-earth"
          >
            <ArrowUp size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href={`https://wa.me/${church.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink shadow-lift transition-transform duration-300 hover:scale-105"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink"
        >
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-3xl border border-gold/60 text-2xl font-black text-gold"
            >
              E
            </motion.span>
            <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-white/55">
              Igreja Batista Renovada Elim
            </p>
            <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
                className="h-full w-full bg-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
