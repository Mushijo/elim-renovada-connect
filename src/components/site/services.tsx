import { Clock } from "lucide-react";

import { services } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Services() {
  return (
    <section id="cultos" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Cultos & Horários"
          title="Venha adorar conosco"
          description="Nossas portas estão abertas. Chegue alguns minutos antes e será recebido pela nossa equipe de acolhimento."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                <p className="eyebrow">{service.day}</p>
                <h3 className="mt-4 text-2xl font-extrabold leading-tight">{service.name}</h3>
                <p className="mt-6 flex items-center gap-2 text-4xl font-extrabold text-earth">
                  <Clock size={22} className="text-gold" />
                  {service.time}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{service.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
