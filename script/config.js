// config.js
// Configuration globale du projet

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("ai-theme") || "dark";
  document.body.className = `ai-theme-${theme}`;

  const speed = localStorage.getItem("ai-speed") || "normal";
  const avatar = localStorage.getItem("ai-avatar") || "U";

  const themeSelect = document.getElementById("theme-select");
  const speedSelect = document.getElementById("speed-select");
  const avatarInput = document.getElementById("avatar-input");

  if (themeSelect) themeSelect.value = theme;
  if (speedSelect) speedSelect.value = speed;
  if (avatarInput) avatarInput.value = avatar;

  if (themeSelect) {
    themeSelect.addEventListener("change", () => {
      localStorage.setItem("ai-theme", themeSelect.value);
      document.body.className = `ai-theme-${themeSelect.value}`;
    });
  }

  if (speedSelect) {
    speedSelect.addEventListener("change", () => {
      localStorage.setItem("ai-speed", speedSelect.value);
    });
  }

  if (avatarInput) {
    avatarInput.addEventListener("input", () => {
      localStorage.setItem("ai-avatar", avatarInput.value);
    });
  }
});
export const APP = {
  name: "Assistant-IA",
  version: "1.0.0",
  author: "Teremu Hamblin",
  mode: "development"
};

export function getAppInfo() {
  return `${APP.name} — v${APP.version}`;
}
