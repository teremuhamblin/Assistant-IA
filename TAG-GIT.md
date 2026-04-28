
✅ tag-git.md (COMPLET, PRO, AVEC EXEMPLES)

`md

🏷 Tag Git — Assistant‑IA

Ce document explique comment créer, annoter et publier un tag Git pour les versions du projet Assistant‑IA.

---

1. 📌 Qu’est‑ce qu’un tag Git ?

Un tag Git est un marqueur immuable utilisé pour identifier une version stable du projet.  
Il est utilisé pour :

- Les releases GitHub  
- Le versioning SemVer  
- Les déploiements  
- Les rollbacks  

---

2. 🏷 Créer un tag annoté

Les tags annotés sont recommandés car ils contiennent :
- auteur  
- date  
- message  
- hash  

Commande :
`bash
git tag -a vX.Y.Z -m "Release vX.Y.Z — Description"
`

---

3. 🚀 Pousser un tag vers GitHub

`bash
git push origin vX.Y.Z
`

---

4. 🗑 Supprimer un tag (si erreur)

4.1 Local
`bash
git tag -d vX.Y.Z
`

4.2 Distant
`bash
git push origin :refs/tags/vX.Y.Z
`

---

5. 📦 Lister les tags existants

`bash
git tag
`

---

6. 🧪 Vérifier un tag

`bash
git show vX.Y.Z
`

---

7. 🧭 Exemple complet pour Assistant‑IA

7.1 Créer la release v1.1.0
`bash
git add .
git commit -m "Release v1.1.0 — Stabilisation UI + Core IA + SPA"
git tag -a v1.1.0 -m "Release v1.1.0 — Stabilisation UI + Core IA + SPA"
git push origin v1.1.0
`

7.2 Créer la release v1.2.0
`bash
git add .
git commit -m "Release v1.2.0 — Design System Avancé + Animations + Loader IA"
git tag -a v1.2.0 -m "Release v1.2.0 — Design System Avancé + Animations + Loader IA"
git push origin v1.2.0
`

---

8. 🏁 Conclusion

Les tags Git sont essentiels pour un versioning propre, stable et professionnel.  
Ils permettent de suivre l’évolution du projet Assistant‑IA avec précision et rigueur.
`

---
