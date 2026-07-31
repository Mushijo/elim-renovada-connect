import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { gallery } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galeria" className="section-padding bg-sand">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Momentos da nossa família"
          description="Registros dos cultos, eventos e da vida em comunhão na Elim."
        />

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {gallery.map((photo, i) => (
            <Reveal key={photo.alt} delay={(i % 3) * 0.06}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group block w-full overflow-hidden rounded-3xl shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-ink/92 p-5 backdrop-blur-sm"
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              src={gallery[active]!.src}
              alt={gallery[active]!.alt}
              className="max-h-[85vh] max-w-full rounded-3xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
