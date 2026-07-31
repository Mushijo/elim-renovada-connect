import { CalendarDays, Play, User } from "lucide-react";

import { church, sermons } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Sermons() {
  return (
    <section id="mensagens" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Mensagens"
          title="Palavra que transforma"
          description="Assista às pregações mais recentes e leve a Palavra para a sua semana."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {sermons.map((sermon, i) => (
            <Reveal key={sermon.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink">
                      <Play size={22} />
                    </span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-bold leading-snug">{sermon.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-gold" /> {sermon.preacher}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-gold" /> {sermon.date}
                    </span>
                  </div>
                  <a
                    href={
                      sermon.youtubeId
                        ? `https://www.youtube.com/watch?v=${sermon.youtubeId}`
                        : church.social.youtube
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:border-gold hover:text-earth"
                  >
                    <Play size={14} /> Assistir
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
