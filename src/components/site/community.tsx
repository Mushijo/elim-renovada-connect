import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { testimonials, timeline } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index]!;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="Depoimentos" title="Histórias que Deus escreveu" />

        <div className="relative mt-14 rounded-3xl border border-border bg-card p-10 shadow-soft sm:p-14">
          <Quote className="text-gold" size={34} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-6 text-xl leading-relaxed font-medium sm:text-2xl">{current.text}</p>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em]">{current.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{current.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-earth"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-earth"
            >
              <ChevronRight size={18} />
            </button>
            <span className="ml-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {index + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <section className="section-padding bg-sand">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="Nossa história" title="Uma caminhada de fidelidade" />

        <ol className="relative mt-16 border-l border-gold/35 pl-8">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <li className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] grid h-4 w-4 place-items-center rounded-full bg-gold ring-4 ring-sand" />
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">{item.year}</p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
