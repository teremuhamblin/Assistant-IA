// ui-components.js
// Composants UI pour le chat Assistant‑IA

import { AssistantIA } from "./ai-core.js";

export function createMessageElement({ role, content }) {
  const wrapper = document.createElement("div");
  wrapper.className = `ai-message ai-message--${role}`;

  const avatar = document.createElement("div");
  avatar.className = "ai-message-avatar";
  avatar.textContent = role === "user" ? "U" : "AI";

  const bubble = document.createElement("div");
  bubble.className = "ai-message-bubble";
  bubble.textContent = content;

  wrapper.appendChild(avatar);
  wrapper.appendChild(bubble);

  return wrapper;
}

export function mountChat(container) {
  const chat = document.createElement("section");
  chat.className = "ai-chat";

  const messages = document.createElement("div");
  messages.dataset.aiMessages = "true";

  const inputBar = document.createElement("div");
  inputBar.className = "ai-input-bar";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Pose une question à Assistant‑IA…";

  const send = document.createElement("button");
  send.textContent = "Envoyer";

  inputBar.appendChild(input);
  inputBar.appendChild(send);

  chat.appendChild(messages);
  chat.appendChild(inputBar);
  container.appendChild(chat);

  // Envoi message
  send.addEventListener("click", () => {
    if (!input.value.trim()) return;
    AssistantIA.ask(input.value.trim());
    addUserMessage(messages, input.value.trim());
    input.value = "";
  });

  // Entrée clavier
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") send.click();
  });

  // Écoute des réponses IA
  document.addEventListener("assistant:message", (event) => {
    if (event.detail.role === "assistant") {
      addAIMessage(messages, event.detail.content);
    }
  });

  return { messages, input, send };
}

function addUserMessage(container, text) {
  const el = createMessageElement({ role: "user", content: text });
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

function addAIMessage(container, text) {
  const el = createMessageElement({ role: "assistant", content: text });
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}
