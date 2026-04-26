// demo.js — version avancée

import { askAssistantIA } from "./ai-core.js";
import { initAssitantIA } from "./init.js";

document.addEventListener("DOMContentLoaded", () => {
  initAssistantIA();

  const input = document.querySelector("#question");
  const send = document.querySelector("#send");
  const error = document.querySelector("#error");
  const history = document.querySelector("#chat-history");
  const themeBtn = document.querySelector("#toggle-theme");

  function addMessage(text, sender = "ai") {
    const msg = document.createElement("div");
    msg.classList.add("message");

    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = sender === "user" ? "assets/avatar-user.png" : "assets/avatar.png";

    const bubble = document.createElement("div");
    bubble.classList.add(sender === "user" ? "user-msg" : "ai-msg");
    bubble.textContent = text;

    msg.appendChild(avatar);
    msg.appendChild(bubble);
    history.appendChild(msg);

    history.scrollTop = history.scrollHeight;
  }

  function typeResponse(text) {
    let i = 0;
    const bubble = document.createElement("div");
    bubble.classList.add("message");

    const avatar = document.createElement("img");
    avatar.classList.add("avatar");
    avatar.src = "assets/avatar.png";

    const content = document.createElement("div");
    content.classList.add("ai-msg", "typing");

    bubble.appendChild(avatar);
    bubble.appendChild(content);
    history.appendChild(bubble);

    const interval = setInterval(() => {
      content.textContent += text[i];
      i++;

      if (i >= text.length) {
        clearInterval(interval);
        content.classList.remove("typing");
      }
    }, 30);
  }

  function handleSend() {
    const userInput = input.value.trim();

    if (!userInput) {
      error.textContent = "Veuillez entrer un message.";
      return;
    }

    error.textContent = "";
    addMessage(userInput, "user");

    const response = askAssistantIA(userInput);
    typeResponse(response);

    input.value = "";
  }

  send.addEventListener("click", handleSend);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });

  themeBtn.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", next);
    themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  });
});
