import { Check, Compass, Target } from "lucide-react";

import { about, stats } from "@/data/site";
import { Counter, Reveal, SectionHeading } from "./primitives";

export function About() {
  return (
    <section id="sobre" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={about.image}
                alt="Fachada da Igreja Batista Renovada Elim"
                width={1200}
                height={1400}
                loading="lazy"
                className="aspect-4/5 w-full rounded-3xl object-cover shadow-lift"
              />
              <div className="absolute -bottom-8 -right-4 hidden rounded-3xl bg-ink px-8 py-6 text-white shadow-lift sm:block lg:-right-8">
                <p className="text-4xl font-extrabold text-gold">
                  <Counter value={27} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">Anos de história</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Sobre nós" title="Uma igreja que acolhe, ensina e envia" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{about.text}</p>
            </Reveal>

            <div className="mt-10 space-y-6">
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <Target className="text-gold" size={20} />
                    <h3 className="text-lg font-bold">Nossa missão</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{about.mission}</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <Compass className="text-gold" size={20} />
                    <h3 className="text-lg font-bold">Nossa visão</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{about.vision}</p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="rounded-2xl bg-sand p-6">
                  <h3 className="text-lg font-bold">Nossos valores</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {about.values.map((value) => (
                      <li key={value} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 rounded-3xl bg-ink px-8 py-12 text-white sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="text-4xl font-extrabold text-gold sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/65">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
