import { defineTool } from "@lovable.dev/mcp-js";

import { about, church, services } from "@/data/site";

export default defineTool({
  name: "get_church_info",
  title: "Informações da igreja",
  description: "Retorna endereço, contatos, redes sociais, missão, visão, valores e horários de culto da Igreja Batista Renovada Elim.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      name: church.name,
      address: church.address,
      phone: church.phone,
      whatsapp: `https://wa.me/${church.whatsapp}`,
      email: church.email,
      social: { ...church.social },
      mission: about.mission,
      vision: about.vision,
      values: [...about.values],
      services: services.map((s) => ({ name: s.name, day: s.day, time: s.time, note: s.note })),
    };
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }], structuredContent: data };
  },
});
