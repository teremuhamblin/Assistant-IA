import { mountChat } from "./ui-components.js";

const routes = {
  "/": renderHome,
  "/demo": renderDemo,
};

function renderHome(root) {
  root.innerHTML = `
    <section class="ai-hero">
      <h1>Assistant‑IA</h1>
      <p>Un assistant modulaire, documenté, prêt à être intégré à tes projets.</p>
    </section>
  `;
}

function renderDemo(root) {
  root.innerHTML = "";
  const { messages } = mountChat(root);
  messages.appendChild(
    createMessage({
      role: "assistant",
      content: "Salut, je suis Assistant‑IA. Que veux‑tu explorer aujourd’hui ?",
    }),
  );
}

export function navigate(path) {
  const root = document.getElementById("app");
  const handler = routes[path] || routes["/"];
  handler(root);
}

window.addEventListener("DOMContentLoaded", () => navigate("/"));
