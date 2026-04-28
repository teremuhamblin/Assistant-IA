export function createMessage({ role, content }) {
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

  return { messages, input, send };
}
