import { Facebook, Instagram, MessageCircle, Send, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { church } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(20, "Telefone inválido"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  message: z.string().trim().min(5, "Escreva sua mensagem").max(1000, "Mensagem muito longa"),
});

const socials = [
  { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${church.whatsapp}` },
  { icon: Instagram, label: "Instagram", href: church.social.instagram },
  { icon: Facebook, label: "Facebook", href: church.social.facebook },
  { icon: Youtube, label: "YouTube", href: church.social.youtube },
];

const fieldClass =
  "w-full rounded-2xl border border-border bg-background px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      message: form.get("message"),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }

    setErrors({});
    e.currentTarget.reset();
    // Pronto para integração futura com o painel administrativo / Cloud.
    toast.success("Mensagem enviada!", {
      description: "Nossa equipe entrará em contato em breve. Deus abençoe.",
    });
  };

  return (
    <section id="contato" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Fale com a gente"
          description="Pedidos de oração, visitas, dúvidas ou apenas um olá — estamos por perto."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Nome
                  </label>
                  <input id="name" name="name" className={`mt-2 ${fieldClass}`} placeholder="Seu nome completo" />
                  {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Telefone
                  </label>
                  <input id="phone" name="phone" className={`mt-2 ${fieldClass}`} placeholder="(00) 00000-0000" />
                  {errors.phone ? <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p> : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.16em]">
                  E-mail
                </label>
                <input id="email" name="email" className={`mt-2 ${fieldClass}`} placeholder="voce@email.com" />
                {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`mt-2 resize-none ${fieldClass}`}
                  placeholder="Como podemos orar por você?"
                />
                {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-soft transition-transform duration-300 hover:scale-[1.02]"
              >
                <Send size={16} /> Enviar
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-sand p-8 sm:p-10">
              <div>
                <h3 className="text-xl font-bold">Prefere falar direto?</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Nossas redes estão sempre abertas. Envie uma mensagem e receba nossa programação semanal.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-soft"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                      <social.icon size={18} />
                    </span>
                    <span className="text-sm font-semibold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
