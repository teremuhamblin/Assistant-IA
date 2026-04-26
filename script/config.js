// config.js
// Configuration globale du projet

export const APP = {
  name: "Assistant-IA",
  version: "1.0.0",
  author: "Teremu Hamblin",
  mode: "development"
};

export function getAppInfo() {
  return `${APP.name} — v${APP.version}`;
}
