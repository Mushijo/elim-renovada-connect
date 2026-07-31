import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/site";
import { Reveal, SectionHeading } from "./primitives";

export function Faq() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="Dúvidas frequentes" title="Tudo o que você precisa saber" />
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-14 w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
