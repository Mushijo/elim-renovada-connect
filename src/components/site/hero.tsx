import { PlayCircle } from "lucide-react";
import { motion } from "motion/react";

import heroImage from "@/assets/hero-worship.jpg";
import { church } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Igreja cheia adorando durante o culto"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, oklch(0.12 0.006 60 / 0.75), oklch(0.12 0.006 60 / 0.35) 45%, oklch(0.12 0.006 60 / 0.9))" }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="eyebrow"
        >
          Uma casa de fé, esperança e comunhão
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Bem-vindo à <span className="text-gradient-gold">{church.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {church.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#localizacao"
            className="rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink shadow-lift transition-transform duration-300 hover:scale-[1.03]"
          >
            Visitar a igreja
          </a>
          <a
            href="#mensagens"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white/10"
          >
            <PlayCircle size={18} /> Assistir online
          </a>
        </motion.div>
      </div>
    </section>
  );
}
