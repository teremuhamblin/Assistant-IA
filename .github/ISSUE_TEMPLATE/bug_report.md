name: Bug Report
description: Signaler un bug dans Assistant‑IA
title: "[BUG] "
labels: ["bug"]
body:
  - type: textarea
    attributes:
      label: Description
      placeholder: Décris le problème rencontré
    validations:
      required: true
  - type: textarea
    attributes:
      label: Étapes pour reproduire
      placeholder: 1. …
  - type: textarea
    attributes:
      label: Logs / Console
