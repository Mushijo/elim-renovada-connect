import { defineMcp } from "@lovable.dev/mcp-js";

import churchActivities from "./tools/church-activities";
import churchInfo from "./tools/church-info";

export default defineMcp({
  name: "elim-renovada-connect",
  title: "Elim Renovada Connect",
  version: "0.1.0",
  instructions:
    "Informações públicas da Igreja Batista Renovada Elim (Rio de Janeiro): contatos, horários de culto, missão e visão, eventos, ministérios, mensagens e FAQ.",
  tools: [churchInfo, churchActivities],
});
