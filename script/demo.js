// demo.js
// Démonstration simple de l’assistant IA

import { askAssitantIA } from "./ai-core.js";
import { initAssistantIA } from "./init.js";   // ← ajout demandé

document.addEventListener("DOMContentLoaded", () => {
  initAssistantIA(); // ← initialisation automatique

  const input = document.querySelector("#question");
  const output = document.querySelector("#answer");
  const send = document.querySelector("#send");

  if (!input || !output || !send) return;

  send.addEventListener("click", () => {
    const userInput = input.value;
    const response = askAssistantIA(userInput);
    output.textContent = response;
  });
});
