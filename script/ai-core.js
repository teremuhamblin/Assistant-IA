// ai-core.js
// Module IA minimal pour Assistant-IA

export function askMadDog(question) {
  const q = question.toLowerCase().trim();

  const responses = {
    "bonjour": "Ia ora na, je suis MadDoG.tmdg, ton assistant IA.",
    "salut": "Bonjour, comment puis-je t’aider.",
    "qui es-tu": "Je suis un assistant IA minimal conçu pour ce projet.",
    "aide": "Pose-moi une question simple et je te répondrai."
  };

  return responses[q] || "Je suis encore en apprentissage.";
}
