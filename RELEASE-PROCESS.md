
✅ release-process.md (COMPLET, PRO, MODULAIRE)

`md

🚀 Release Process — Assistant‑IA

Ce document décrit le processus complet pour créer, valider et publier une release du projet Assistant‑IA.  
Il garantit une méthode stable, reproductible et professionnelle.

---

1. 📌 Préparation de la release

1.1 Vérifier l’état du projet
- S’assurer que toutes les issues du milestone sont terminées.
- Vérifier que les PR associées sont mergées.
- Vérifier que la structure du projet est cohérente.
- Mettre à jour la documentation si nécessaire.

1.2 Mettre à jour le CHANGELOG
- Ajouter la nouvelle version.
- Lister les nouveautés, améliorations, corrections.
- Lister les fichiers modifiés.
- Ajouter la date.

---

2. 🏷 Création du tag Git

2.1 Créer le tag localement
`bash
git add .
git commit -m "Release vX.Y.Z"
git tag -a vX.Y.Z -m "Release vX.Y.Z — Description"
`

2.2 Pousser le tag vers GitHub
`bash
git push origin vX.Y.Z
`

---

3. 📦 Création de la release GitHub

3.1 Aller dans
GitHub → Releases → Draft a new release

3.2 Remplir les champs
- Tag : vX.Y.Z
- Title : vX.Y.Z — Nom de la release
- Description :  
  - Nouveautés  
  - Améliorations  
  - Corrections  
  - Fichiers modifiés  
  - Prochaines étapes  

3.3 Lier au milestone
- Sélectionner le milestone correspondant.

3.4 Publier la release
- Cliquer sur Publish Release.

---

4. 🔄 Post‑release

4.1 Créer le milestone suivant
- Exemple : après v1.1.0, créer v1.2.0.

4.2 Créer l’issue principale de la prochaine version
- Issue “Version X.Y.Z — Planification”.

4.3 Mettre à jour la roadmap
- Ajouter les objectifs de la prochaine version.

---

5. 🧪 Bonnes pratiques

- Toujours tester avant de tagger.
- Toujours mettre à jour le CHANGELOG.
- Toujours documenter les modifications.
- Toujours garder une structure propre.
- Toujours versionner selon SemVer :
  - MAJOR : rupture
  - MINOR : nouvelles features
  - PATCH : corrections

---

6. 📁 Exemple de workflow complet

1. Finir les issues du milestone  
2. Mettre à jour CHANGELOG  
3. Commit final  
4. Créer tag vX.Y.Z  
5. Push tag  
6. Créer release GitHub  
7. Créer milestone suivant  
8. Créer issue principale suivante  

---

7. 🏁 Conclusion

Ce processus garantit des releases propres, traçables, professionnelles et faciles à maintenir.  
Assistant‑IA reste ainsi stable, modulaire et évolutif.
`

---
