document.addEventListener("DOMContentLoaded", () => {
  const clearBtn = document.getElementById("clear-conversation");
  const exportJsonBtn = document.getElementById("export-json");
  const exportMdBtn = document.getElementById("export-md");

  clearBtn?.addEventListener("click", () => {
    localStorage.removeItem("ai-history");
    alert("Conversation effacée");
  });

  exportJsonBtn?.addEventListener("click", () => {
    const data = localStorage.getItem("ai-history") || "[]";
    download("conversation.json", data);
  });

  exportMdBtn?.addEventListener("click", () => {
    const history = JSON.parse(localStorage.getItem("ai-history") || "[]");
    const md = history.map(m => `**${m.role}** : ${m.content}`).join("\n\n");
    download("conversation.md", md);
  });

  function download(filename, content) {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }
});
