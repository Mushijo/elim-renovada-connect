import { defineTool } from "@lovable.dev/mcp-js";

import { events, faqs, ministries, sermons } from "@/data/site";

export default defineTool({
  name: "get_church_activities",
  title: "Eventos, ministérios e mensagens",
  description: "Lista os próximos eventos, ministérios, mensagens recentes e perguntas frequentes da igreja.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      events: events.map((e) => ({ title: e.title, date: e.date, description: e.description })),
      ministries: ministries.map((m) => ({ name: m.name, description: m.description })),
      sermons: sermons.map((s) => ({ title: s.title, preacher: s.preacher, date: s.date })),
      faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    };
    return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }], structuredContent: data };
  },
});
