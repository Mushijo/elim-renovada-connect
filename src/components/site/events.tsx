import { ArrowRight, CalendarDays } from "lucide-react";

import { events } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Events() {
  return (
    <section id="eventos" className="section-padding bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Agenda</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl">Próximos eventos</h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Momentos preparados para aproximar famílias, gerações e a cidade do coração de Deus.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:ring-gold/50">
                <div className="overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    <CalendarDays size={15} /> {event.date}
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{event.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{event.description}</p>
                  <a
                    href="#contato"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Saiba mais <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
