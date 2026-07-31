import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react";

import { church, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-gold/60 text-lg font-black text-gold">
                E
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-extrabold uppercase tracking-[0.16em]">Elim</span>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Batista Renovada
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              Uma igreja comprometida com a Palavra, com a comunhão e com o cuidado de cada pessoa. Você é
              nosso convidado.
            </p>
            <div className="mt-7 flex gap-3">
              {[
                { icon: MessageCircle, href: `https://wa.me/${church.whatsapp}`, label: "WhatsApp" },
                { icon: Instagram, href: church.social.instagram, label: "Instagram" },
                { icon: Facebook, href: church.social.facebook, label: "Facebook" },
                { icon: Youtube, href: church.social.youtube, label: "YouTube" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/75 transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Links rápidos</h3>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Contato</h3>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>{church.address}</li>
              <li>{church.phone}</li>
              <li>{church.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {church.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
