import verseBg from "@/assets/verse-bg.jpg";
import { Reveal } from "./primitives";

export function Verse() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={verseBg}
        alt="Bíblia aberta sobre a mesa"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-4xl px-5 py-32 text-center lg:py-40">
        <Reveal>
          <p className="eyebrow">Palavra do dia</p>
          <blockquote className="mt-8 text-3xl font-extrabold leading-[1.2] text-white sm:text-5xl">
            “Porque dele, por ele e para ele são todas as coisas.”
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-gold">Romanos 11:36</p>
        </Reveal>
      </div>
    </section>
  );
}
