;;;; ============================================================
;;;;  The MadDoG.tmdg Interactive AI Assistant — Lisp Edition
;;;;  Couleurs ANSI, menus, animations, modules dynamiques
;;;; ============================================================

(defpackage :assistant-ai
  (:use :cl))
(in-package :assistant-ai)

;;; ------------------------------------------------------------
;;; 1. Couleurs ANSI
;;; ------------------------------------------------------------

(defparameter *reset*   "\033[0m")
(defparameter *red*     "\033[31m")
(defparameter *green*   "\033[32m")
(defparameter *yellow*  "\033[33m")
(defparameter *blue*    "\033[34m")
(defparameter *magenta* "\033[35m")
(defparameter *cyan*    "\033[36m")
(defparameter *bold*    "\033[1m")

(defun color (c text)
  (format nil "~a~a~a" c text *reset*))

;;; ------------------------------------------------------------
;;; 2. Animation simple (typing effect)
;;; ------------------------------------------------------------

(defun typewriter (text &optional (delay 0.02))
  (loop for ch across text do
       (format t "~a" ch)
       (finish-output)
       (sleep delay))
  (format t "~%"))

;;; ------------------------------------------------------------
;;; 3. Modules IA
;;; ------------------------------------------------------------

(defstruct module
  name
  description
  version)

(defparameter *modules* '())

(defun add-module (name description version)
  (push (make-module :name name
                     :description description
                     :version version)
        *modules*))

(defun show-modules ()
  (format t "~%~a~%" (color *cyan* "=== Modules disponibles ==="))
  (dolist (m *modules*)
    (format t "~a ~a (~a)~%    ~a~%"
            (color *green* "-")
            (module-name m)
            (module-version m)
            (module-description m))))

;;; ------------------------------------------------------------
;;; 4. Assistant IA (réponses simples)
;;; ------------------------------------------------------------

(defun ai-response (input)
  (cond
    ((search "bonjour" input :ignore-case t)
     "Ia Ora Nā à toi humain. Comment puis-je t’aider aujourd’hui ?")
    ((search "module" input :ignore-case t)
     "Les modules sont prêts. Utilise l’option 2 du menu.")
    ((search "aide" input :ignore-case t)
     "Je suis ton Assistant IA. Navigue avec le menu.")
    (t
     "Je ne comprends pas encore cette requête, mais j’apprends.")))

;;; ------------------------------------------------------------
;;; 5. Menu interactif
;;; ------------------------------------------------------------

(defun show-menu ()
  (format t "~%~a~%" (color *yellow* "=== Menu Principal ==="))
  (format t "1. Présentation~%")
  (format t "2. Voir les modules~%")
  (format t "3. Parler à l’IA~%")
  (format t "4. Quitter~%"))

(defun run-menu ()
  (loop
     (show-menu)
     (format t "~%Choix > ")
     (let ((choice (read-line)))
       (cond
         ((string= choice "1")
          (typewriter (color *magenta* "Bienvenue dans le système The MadDoG.tmdg."))
          (typewriter "Assistant IA opérationnel.")
          (typewriter "Modules chargés."))
         
         ((string= choice "2")
          (show-modules))

         ((string= choice "3")
          (format t "~%Pose ta question > ")
          (let* ((q (read-line))
                 (r (ai-response q)))
            (typewriter (color *blue* r))))

         ((string= choice "4")
          (typewriter (color *red* "Fermeture du système..."))
          (return))

         (t
          (format t "~a~%" (color *red* "Choix invalide.")))))))

;;; ------------------------------------------------------------
;;; 6. Modules par défaut
;;; ------------------------------------------------------------

(add-module "Core System"
            "Base du système The MadDoG.tmdg."
            "1.0.0")

(add-module "Security Engine"
            "Analyse, permissions, sandboxing."
            "1.0.0")

(add-module "Tools Pack"
            "Outils ADB, logs, exploration système."
            "1.0.0")

;;; ------------------------------------------------------------
;;; 7. Lancer l’assistant
;;; ------------------------------------------------------------
;; (run-menu)
