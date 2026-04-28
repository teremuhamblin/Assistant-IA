###### CHANGELOG.md * markdown
>structure couvrant toutes les versions de v1.0.0 à v1.3.0 pour le projet Assistant‑IA.

Ensembles :  
- architecture modulaire  
- design system  
- SPA  
- IA core  
- mémoire  
- paramètres  
- UX avancée  

Placer à la racine du projet :

```rst
Assistant-IA/
└── CHANGELOG.md
```

---

📘 CHANGELOG.md — Assistant‑IA

Toutes les modifications majeures du projet sont documentées ici.  
Format : Keep a Changelog — versionné selon SemVer.

---

🟩 [1.3.0] — Mode Conversation Avancé + Mémoire + Paramètres
📅 2026‑05‑25  
Statut : Stable

✨ Nouveautés
- Ajout de la mémoire IA (session + persistante)
- Ajout du résumé automatique du contexte
- Ajout de la gestion du contexte long
- Ajout de la page Settings
- Ajout du thème clair / sombre
- Ajout du choix avatar utilisateur
- Ajout de la vitesse IA (instant / normal / lent)
- Ajout du mode conversation continue
- Ajout de l’export JSON
- Ajout de l’export Markdown
- Ajout du bouton Effacer conversation
- Ajout du scroll intelligent
- Ajout des transitions messages (fade‑in)
- Ajout du loader IA amélioré
- Ajout de l’animation typing avancée
- Ajout de la navigation animée

🛠 Fichiers modifiés
```text
script/ai-core.js
script/ui-components.js
script/router.js
script/config.js
design/components.css
design/tokens.css
public/index.html
public/settings.html (nouveau)
```

---

🟦 [1.2.0] — Design System Avancé + Animations + Loader IA
📅 2026‑05‑10  
Statut : Stable

✨ Nouveautés
- Ajout du loader IA animé
- Ajout de l’animation typing (3 dots)
- Ajout des transitions UI
- Ajout du thème clair
- Ajout du switch thème
- Ajout des tokens étendus
- Ajout des composants enrichis
- Ajout de la page Settings (structure)
- Ajout de la navigation animée

🛠 Fichiers modifiés
```text
design/tokens.css
design/components.css
script/ui-components.js
script/ai-core.js
script/router.js
public/index.html
```

---

🟩 [1.1.0] — Stabilisation UI + Core IA + SPA
📅 2026‑04‑28  
Statut : Stable

✨ Nouveautés
- Refonte complète de ai-core.js
  - pipeline de messages
  - mock IA intelligent
  - gestion de l’historique
  - événements assistant:message
- Refonte complète de ui-components.js
  - messages user/assistant
  - input bar
  - scroll automatique
- Compatibilité totale avec router.js
- Ajout du design system
  - tokens.css
  - components.css
- Ajout de la structure SPA
  - / et /demo
  - injection dynamique dans #app

🛠 Fichiers modifiés
```text
script/ai-core.js
script/ui-components.js
script/router.js
design/tokens.css
design/components.css
public/index.html
```

---

🟧 [1.0.0] — Initialisation du projet
📅 2026‑04‑15  
Statut : Stable

✨ Contenu initial
- Création de la structure du projet
- Ajout des dossiers :
  - .github/
  - docs/
  - design/
  - script/
  - assets/
  - public/
- Ajout des fichiers :
  - README.md
  - LICENSE
  - .gitignore
- Ajout des premières pages :
  - overview.md
  - features.md
  - assistant-ia.md
  - roadmap.md
- Ajout des premiers scripts :
  - ai-core.js (version simple)
  - config.js
  - demo.js
  - init.js
- Ajout des premiers assets :
  - logo, avatar, banner, preview

🛠 Fichiers créés
```text
/docs/*
/design/system.css
/script/*
/assets/*
/public/index.html
README.md
LICENSE
.gitignore
```

---

🏁 Résumé des versions

| Version | Date | Description |
|--------|------|-------------|
| 1.3.0 | 2026‑05‑25 | Mémoire IA, paramètres, conversation avancée, UX améliorée |
| 1.2.0 | 2026‑05‑10 | Design system avancé, animations, loader IA |
| 1.1.0 | 2026‑04‑28 | Stabilisation UI + Core IA + SPA |
| 1.0.0 | 2026‑04‑15 | Initialisation du projet |

---
