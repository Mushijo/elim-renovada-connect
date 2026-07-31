import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { Testimonials, Timeline } from "@/components/site/community";
import { Contact } from "@/components/site/contact";
import { Events } from "@/components/site/events";
import { Faq } from "@/components/site/faq";
import { FloatingActions, Loader } from "@/components/site/floating";
import { Footer } from "@/components/site/footer";
import { Gallery } from "@/components/site/gallery";
import { Hero } from "@/components/site/hero";
import { Location } from "@/components/site/location";
import { Ministries } from "@/components/site/ministries";
import { Navbar } from "@/components/site/navbar";
import { Sermons } from "@/components/site/sermons";
import { Services } from "@/components/site/services";
import { Verse } from "@/components/site/verse";
import { church } from "@/data/site";

const title = "Igreja Batista Renovada Elim | Cultos, Ministérios e Comunhão";
const description =
  "Conheça a Igreja Batista Renovada Elim: cultos, ministérios, eventos e mensagens. Um lugar para crescer em Deus e viver em comunhão.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Church",
          name: church.name,
          description,
          address: church.address,
          telephone: church.phone,
          email: church.email,
          sameAs: [church.social.instagram, church.social.facebook, church.social.youtube],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ministries />
        <Services />
        <Events />
        <Sermons />
        <Verse />
        <Gallery />
        <Testimonials />
        <Timeline />
        <Location />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
