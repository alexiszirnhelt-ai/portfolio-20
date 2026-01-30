# Portfolio de John Doe - Projet React.js

## Description du projet
Ce projet est un **portfolio responsive** développé dans le cadre du devoir du **Centre Européen de Formation (CEF)**, visant à valider les compétences en **développement front-end d'une application web sécurisée** avec React.js.

Il présente les compétences, services et réalisations de **John Doe**, un développeur web en formation, en respectant une charte graphique précise (police Nunito Sans, palette Bootstrap) et des maquettes fournies.

**Fonctionnalités clés** :
- Site responsive (mobile, tablette, desktop)
- Navigation avec React Router
- Modale dynamique récupérant les données du profil GitHub via l'API
- Formulaire de contact et mentions légales
- Validation W3C et bonnes pratiques SEO

---

## Prérequis
Pour exécuter ce projet localement, vous aurez besoin de :
- **Node.js** (version recommandée)
- **npm** (inclus avec Node.js)
- Un navigateur moderne (Chrome, Firefox, Edge)

**Dépendances installées** :
- React.js
- Bootstrap 5
- React Router DOM

---

# Structure du projet

src/
├── assets/          # Images et médias (flaticon, photos, etc.)
├── components/      # Composants réutilisables
│   ├── Header.jsx   # Barre de navigation
│   └── Footer.jsx   # Pied de page
├── layout/          # Structure globale
│   └── Layout.jsx   # Conteneur avec React Router
├── pages/           # Pages principales
│   ├── Home.jsx     # Page d'accueil
│   ├── Services.jsx # Page services
│   ├── Portfolio.jsx# Page réalisations
│   ├── Contact.jsx  # Page contact
│   └── Legal.jsx    # Mentions légales
├── styles/          # Fichiers CSS
│   ├── header.css   # Styles demandés par CEF      
│   ├── footer.css   # Styles demandés par CEF
│   └── stylessheets.css # styles police
├── App.jsx          # Routing principal
└── main.jsx         # Point d'entrée React


---


# Ressources externes

Élément : Icônes, Favicon, Images et Police Nunito

Source : Bootstrap icons, Flaticon, images envoyés par CEF, Google Fonts


# Contact

John Doe : john.doe@gmail.com (adresse fictive pour le projet)


# Mentions légales

Ce projet est réalisé dans le cadre d'un devoir pédagogique pour le Centre Européen de Formation.
Crédits :

Développement : [Alexis ZIRNHELT]
Formation : Développeur Web - CEF
