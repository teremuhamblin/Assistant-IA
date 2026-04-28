// ai-core.js
// Cœur logique de Assistant‑IA : gestion des messages, contexte, et réponses IA.

export class AssistantCore {
  constructor(options = {}) {
    this.history = [];
    this.maxHistory = options.maxHistory || 20;
    this.mock = options.mock !== false; // mock activé par défaut
  }

  // Ajoute un message dans l'historique
  addMessage(role, content) {
    const entry = { role, content, timestamp: Date.now() };
    this.history.push(entry);

    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }

    return entry;
  }

  // Simule une réponse IA (mock)
  async generateMockResponse(prompt) {
    const responses = [
      "Intéressant, développe un peu ton idée.",
      "Je vois ce que tu veux dire.",
      "Peux‑tu préciser ce point.",
      "Bonne question, analysons cela ensemble.",
      "Je suis là, continue."
    ];

    const random = responses[Math.floor(Math.random() * responses.length)];
    return `${random}`;
  }

  // Point d’entrée principal
  async ask(prompt) {
    this.addMessage("user", prompt);

    let answer;

    if (this.mock) {
      answer = await this.generateMockResponse(prompt);
    } else {
      answer = "⚠️ API non configurée.";
    }

    const aiMessage = this.addMessage("assistant", answer);

    // Émet un événement global pour le front
    document.dispatchEvent(
      new CustomEvent("assistant:message", { detail: aiMessage })
    );

    return aiMessage;
  }
}

// Instance globale (optionnelle)
export const AssistantIA = new AssistantCore();
