// demo.js
// Démonstration simple de l’assistant IA

import { askMadDog } from "./ai-core.js";

document.addEventListener("DOMContentLoaded", () => {
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
