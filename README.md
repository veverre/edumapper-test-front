# Projet Nuxt 3 - Gestion des Lycées

Ce projet est une application web développée avec Nuxt 4.  
Il vise à afficher une liste de lycées, permettre la sélection d’un lycée, et préremplir certains formulaires avec des données fournies via une API locale.

---

## Fonctionnalités principales

- Affichage d’une liste de lycées récupérée depuis une API locale (server/api)
- Composant Select simple pour choisir un lycée
- Backend minimal en API serverless intégré avec Nuxt 4 (dans `server/api`)
- Utilisation de Tailwind CSS pour le style
- Architecture composants avec dossier `components/atoms`, `components/molecules` et `components/organisms`

---

## État du projet

⚠️ **Ce projet est actuellement en cours de développement et n’est pas encore terminé.**  
Certaines fonctionnalités ne sont pas implémentées ou ne fonctionnent pas encore complètement, notamment :  

- Gestion avancée de l’autocomplétion dans le select  
- Pages supplémentaires pour modifier les lycées  
- Gestion des cartes "Spécialités" et "Notes"

---

## Installation & Lancement

1. Cloner le repo  
2. Installer les dépendances :  
   ```bash
   npm install