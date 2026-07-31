import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { church, services } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Location() {
  const query = encodeURIComponent(church.address);

  return (
    <section id="localizacao" className="section-padding bg-sand">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Localização"
          title="Estamos à sua espera"
          description="Venha nos visitar. Há estacionamento próximo e uma equipe pronta para recebê-lo."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.25fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-soft">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 shrink-0 text-gold" size={20} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.14em]">Endereço</p>
                    <p className="mt-1 text-sm text-muted-foreground">{church.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="mt-0.5 shrink-0 text-gold" size={20} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.14em]">Telefone</p>
                    <p className="mt-1 text-sm text-muted-foreground">{church.phone}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="mt-0.5 shrink-0 text-gold" size={20} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.14em]">Horários</p>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {services.map((service) => (
                        <li key={service.name}>
                          {service.name} — {service.day}, {service.time}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink shadow-soft transition-transform duration-300 hover:scale-[1.03]"
              >
                <Navigation size={16} /> Como chegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <iframe
              title="Mapa da Igreja Batista Renovada Elim"
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-3xl border border-border shadow-soft lg:h-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
