# Projet-final-typeScript
# Gestion des Événements – Mini TP TypeScript

## Description
Cette application web permet la gestion d’événements et des inscriptions des utilisateurs.
Toutes les données sont stockées en mémoire à l’aide de tableaux JavaScript et manipulées via des classes TypeScript.

## Fonctionnalités
- Création d’un événement (titre, description, date, lieu, catégorie, capacité)
- Affichage de la liste des événements
- Filtrage des événements par catégorie et par date
- Affichage des détails d’un événement
- Inscription d’un utilisateur à un événement
- Blocage de l’inscription si :
  - l’événement est complet
  - l’événement est déjà passé
  - l’utilisateur est déjà inscrit

## Technologies utilisées
- HTML
- CSS
- TypeScript
- JavaScript

##Arborescencee 
event-app/
│── index.html              # Page principale
│── styles/
│   └── main.css            # Styles CSS
│── src/
│   ├── models/
│   │   ├── Event.ts        # Classe Event
│   │   ├── User.ts         # Classe User
│   │   └── Registration.ts # Classe Registration
│   └── main.ts             # Logique principale
│── scripts/
│   └── start.js            # Script de lancement automatique
│── dist/                    # Fichiers JS compilés (généré)
│── package.json
│── tsconfig.json
│── .gitignore
│── README.md

##Installation & Lancement
###Étapes
##Cloner le dépôt
git clone https://github.com/isabelledanabiakan-code/Projet-final-typeScript.git
cd event-app

##Installer les dépendances
npm install

##Compile le TypeScript en JavaScript 
npx tsc

##Lancer l'application 
Ouvre le fichier index.html dans un navigateur

## capture d'écran 
### crée le fichier package.json
![Création package.json](./screenshot/cree-package-json.png)

### Installe TypeScript
![Installe TypeScript](./screenshot/installe-typescript.png)

### code html 
![index.html](./screenshot/index-html.png)

### code css 
![main.css](./screenshot/main-css.png)

### code javascript
![main.js](./screenshot/main-js.png)

### interface principale 
![interface principale](./screenshot/interface-principale.png)



