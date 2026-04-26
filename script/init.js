// init.js
// Initialisation automatique du projet The MadDoG.tmdg

import { APP, getAppInfo } from "./config.js";

export function initAssistantIA() {
  console.log("Initialisation de :", getAppInfo());

  const input = document.querySelector("#question");
  const output = document.querySelector("#answer");
  const send = document.querySelector("#send");

  if (!input || !output || !send) {
    console.warn("Éléments HTML manquants pour la démo IA.");
    return;
  }

  console.log("Assistant IA prêt.");
}
