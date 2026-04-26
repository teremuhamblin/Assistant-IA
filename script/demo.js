// demo.js — version améliorée

import { askMadDog } from "./ai-core.js";
import { initMadDog } from "./init.js";

document.addEventListener("DOMContentLoaded", () => {
  initMadDog();

  const input = document.querySelector("#question");
  const output = document.querySelector("#answer");
  const error = document.querySelector("#error");
  const send = document.querySelector("#send");

  if (!input || !output || !send) return;

  function typeText(element, text) {
    element.textContent = "";
    let i = 0;

    const interval = setInterval(() => {
      element.textContent += text[i];
      i++;

      if (i >= text.length) clearInterval(interval);
    }, 30);
  }

  function handleSend() {
    const userInput = input.value.trim();

    if (!userInput) {
      error.textContent = "Veuillez entrer une question.";
      output.textContent = "";
      return;
    }

    error.textContent = "";
    const response = askMadDog(userInput);

    output.classList.add("typing");
    typeText(output, response);

    setTimeout(() => output.classList.remove("typing"), response.length * 30);
  }

  send.addEventListener("click", handleSend);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });
});
