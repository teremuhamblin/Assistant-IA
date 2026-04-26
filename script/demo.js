// demo.js
// Démonstration simple de l’assistant IA

import { askMadDog } from "./ai-core.js";
import { initMadDog } from "./init.js";   // ← ajout demandé

document.addEventListener("DOMContentLoaded", () => {
  initMadDog(); // ← initialisation automatique

  const input = document.querySelector("#question");
  const output = document.querySelector("#answer");
  const send = document.querySelector("#send");

  if (!input || !output || !send) return;

  send.addEventListener("click", () => {
    const userInput = input.value;
    const response = askMadDog(userInput);
    output.textContent = response;
  });
});
