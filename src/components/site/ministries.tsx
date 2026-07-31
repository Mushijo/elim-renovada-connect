import {
  Baby,
  Flame,
  Flower2,
  Hand,
  HeartHandshake,
  Megaphone,
  Music,
  Shield,
  type LucideIcon,
} from "lucide-react";

import { ministries } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

const icons: Record<string, LucideIcon> = {
  Baby,
  Flame,
  Flower2,
  Shield,
  HeartHandshake,
  Music,
  Hand,
  Megaphone,
};

export function Ministries() {
  return (
    <section id="ministerios" className="section-padding bg-sand">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Ministérios"
          title="Há um lugar para você servir"
          description="Cada ministério existe para cuidar de pessoas em cada fase da vida e mobilizar a igreja para o Reino."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map((ministry, i) => {
            const Icon = icons[ministry.icon] ?? Flame;
            return (
              <Reveal key={ministry.name} delay={i * 0.05}>
                <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/12 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold">{ministry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ministry.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
