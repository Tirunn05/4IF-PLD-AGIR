# 💻 1 Tonne de Bonnes Pratiques Green IT - Version Digitalisée

Bienvenue sur la version digitalisée du jeu de cartes **1 Tonne de Bonnes Pratiques Green IT**, développé initialement par CGI. Ce jeu a pour objectif de sensibiliser de façon ludique aux pratiques numériques responsables.

---
## 📖 Sommaire
- [💻 1 Tonne de Bonnes Pratiques Green IT - Version Digitalisée](#-1-tonne-de-bonnes-pratiques-green-it---version-digitalisée)
  - [📖 Sommaire](#-sommaire)
  - [🎮 Fonctionnement du jeu](#-fonctionnement-du-jeu)
    - [👥 Nombre de participants](#-nombre-de-participants)
    - [🧰 Mise en place](#-mise-en-place)
    - [🔄 Déroulement d'un tour](#-déroulement-dun-tour)
    - [🃏 Types de cartes](#-types-de-cartes)
      - [✅ Bonnes pratiques](#-bonnes-pratiques)
      - [🚫 Mauvaises pratiques](#-mauvaises-pratiques)
      - [🎓 Cartes Formation](#-cartes-formation)
      - [🧠 Cartes Expert](#-cartes-expert)
    - [💡 Mécanique de sensibilisation](#-mécanique-de-sensibilisation)
    - [🔁 Défausse automatique](#-défausse-automatique)
    - [🏁 Fin de la partie](#-fin-de-la-partie)
  - [⚙️ Installation locale](#️-installation-locale)
    - [1. Prérequis](#1-prérequis)
    - [2. Clonage du projet](#2-clonage-du-projet)
    - [3. Installation des dépendances](#3-installation-des-dépendances)
    - [4. Configuration des variables d'environnement](#4-configuration-des-variables-denvironnement)
      - [Back-end (`workspaces/api/.env`)](#back-end-workspacesapienv)
      - [Front-end (`workspaces/front/.env`)](#front-end-workspacesfrontenv)
    - [5. Base de données : initialisation](#5-base-de-données--initialisation)
    - [6. Lancement de l'application](#6-lancement-de-lapplication)
      - [Serveur (NestJS)](#serveur-nestjs)
      - [Client (React)](#client-react)
  - [⚙️ Installation via docker](#️-installation-via-docker)
    - [1. Prérequis](#1-prérequis-1)
    - [2. Clonage du projet](#2-clonage-du-projet-1)
    - [3. Configuration des variables d'environnement](#3-configuration-des-variables-denvironnement-1)
      - [Back-end (`workspaces/api/.env`)](#back-end-workspacesapienv-1)
      - [Front-end (`workspaces/front/.env`)](#front-end-workspacesfrontenv-1)
    - [4. Construction des images via docker et lancement de l'application](#4-construction-des-images-via-docker-et-lancement-de-lapplication)
    - [5. Base de données : initialisation](#5-base-de-données--initialisation-1)
  - [🔐 Accès et interface d'administration](#-accès-et-interface-dadministration)
    - [Connexion administrateur](#connexion-administrateur)
    - [Fonctionnalités disponibles](#fonctionnalités-disponibles)
  - [📬 Support \& contribution](#-support--contribution)
  - [📘 Ressources complémentaires](#-ressources-complémentaires)
---

## 🎮 Fonctionnement du jeu

Le jeu est une adaptation numérique du jeu de cartes « 1 Tonne de Bonnes Pratiques Green IT », inspiré de la mécanique du _1000 Bornes_. L'objectif est d'être le premier à atteindre une économie d'au moins **1000 kg de CO₂**, en posant des cartes représentant de **bonnes pratiques Green IT**.

> 🎯 Si vous manquez de temps, l'objectif peut être abaissé jusqu'à 500 kg.

### 👥 Nombre de participants

- 2 à 4 joueurs
- Le jeu se joue en ligne via navigateur (un par joueur)

---

### 🧰 Mise en place

- Chaque joueur reçoit **7 cartes aléatoires** au début.
- Une **question de sensibilisation à choix multiple** est posée.
  - Le premier joueur à répondre correctement **débute la partie**.
  - Les autres attendent leur tour (tourne dans le sens horaire).

---

### 🔄 Déroulement d'un tour

À son tour, un joueur peut :

- Poser une carte **Bonne pratique** (gain de CO₂)
- Jouer une **carte Mauvaise pratique** pour bloquer un autre joueur
- Utiliser une **carte Formation** ou **Expert** pour se débloquer
- Si aucune carte n'est jouable, une carte est **défaussée** et remplacée

---

### 🃏 Types de cartes

#### ✅ Bonnes pratiques

- Font gagner entre **25 kg** et **200 kg** de CO₂ économisé
- À chaque pose, les autres joueurs peuvent indiquer si cette pratique est applicable à leur cas : elle est alors ajoutée à leur _carnet Green IT_

#### 🚫 Mauvaises pratiques

- Utilisées pour **bloquer** un joueur (il ne peut plus jouer de bonnes pratiques)
- Le joueur ciblé ne doit pas déjà être bloqué
- Il doit poser une carte **Formation** ou **Expert** du **même acteur** (dev, PO, etc.) pour se libérer

#### 🎓 Cartes Formation

- Permettent de se débloquer d'une **mauvaise pratique**
- Doivent être du **même type d'acteur** que la carte qui bloque
- Peuvent être piochées grâce aux points de sensibilisation

#### 🧠 Cartes Expert

- Fonctionnent comme des **jokers**
- Peuvent être posées **préventivement** pour se protéger
- Ou utilisées **en réaction** pour se libérer d'un blocage
- Elles immunisent contre les mauvaises pratiques **du même acteur**

---

### 💡 Mécanique de sensibilisation

- À la fin de chaque tour, une **question QCM** est affichée à tous
- Les joueurs ont **15 secondes** pour y répondre
- Une bonne réponse donne des **points de sensibilisation**
  - 1 point pour piocher une carte formation
  - 3 points pour choisir la carte formation désirée

---

### 🔁 Défausse automatique

- Si aucune carte n'est jouable, une carte aléatoire de la main du joueur est défaussée et remplacée par une carte de la pioche

---

### 🏁 Fin de la partie

- Le premier joueur à atteindre ou dépasser l'objectif CO₂ (par défaut **1000 kg**) gagne la partie

---

## ⚙️ Installation locale

> 🧪 Cette application peut aussi être lancée via Docker (voir section suivante). Suivez les instructions ci-dessous pour l'exécuter en local.

### 1. Prérequis

- [Node.js](https://nodejs.org/) ≥ v18
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/)
- [Postman](https://www.postman.com/) ou un outil similaire pour les requêtes HTTP

---

### 2. Clonage du projet

```bash
git clone https://github.com/Tirunn05/4IF-PLD-AGIR
```

---

### 3. Installation des dépendances

```bash
npm install
```

---

### 4. Configuration des variables d'environnement

#### Back-end (`workspaces/api/.env`)

```env
DATABASE_USER = <votre_utilisateur_postgres>
DATABASE_PASSWORD = <votre_mot_de_passe>
DATABASE_HOST = localhost
DATABASE_PORT = 5432
DATABASE_URL = <nom_de_votre_base>
CORS_ALLOW_ORIGIN = http://localhost:8083
```

#### Front-end (`workspaces/front/.env`)

```env
VITE_API_URL = http://localhost:8083
VITE_APP_PREFIX = /gameNR
```

---

### 5. Base de données : initialisation

Créez une base PostgreSQL vide avec les identifiants renseignés dans le `.env`.

Puis, chargez les données via deux requêtes **POST** dans Postman :

- **Quiz**  
  `POST http://localhost:3000/sensibilisation/csv`

  - Body : `form-data`
  - Key : `csvFile`, fichier : `dataQuizz.csv`

- **Cartes de jeu**  
  `POST http://localhost:3000/card/csv`
  - Body : `form-data`
  - Key : `csvFile`, fichier : `dataCard.csv`

> 📂 Les fichiers sont situés dans `workspaces/api/src/`

---

### 6. Lancement de l'application en local

#### Serveur (NestJS)

```bash
npm run server
```

#### Client (React)

```bash
npm run client
```

Application disponible sur :  
👉 [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Installation via docker

> 🧪 Cette application peut aussi être lancée via Docker (voir section suivante). Suivez les instructions ci-dessous pour l'exécuter en local.

### 1. Prérequis

- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/) ou un outil similaire pour les requêtes HTTP

---

### 2. Clonage du projet

```bash
git clone https://github.com/Tirunn05/4IF-PLD-AGIR
```

---

### 3. Configuration des variables d'environnement

#### Back-end (`workspaces/api/.env`)

```env
DATABASE_USER = <votre_utilisateur_postgres>
DATABASE_PASSWORD = <votre_mot_de_passe>
DATABASE_HOST = localhost
DATABASE_PORT = 5432
DATABASE_URL = <nom_de_votre_base>
CORS_ALLOW_ORIGIN = http://localhost:8083
```

#### Front-end (`workspaces/front/.env`)

```env
VITE_API_URL = http://localhost:8083
VITE_APP_PREFIX = /gameNR
```

---

### 4. Construction des images via docker et lancement de l'application

```bash
docker compose -f docker-compose-xxx.yml build --no-cache

docker compose -f docker-compose-xxx.yml up -d
```
**Attention : À chaque changement il est nécessaire de refaire un build sans cache pour prendre en compte les changements**

*Valeur possible pour xxx*
- bd-only : Lancement de la base de données seulement
- dev : Lancement des serveurs back et front (contenant NGINX) et de la BD
- prod : Lancement des serveurs back et front (contenant NGINX) sans la BD

---

Si NGINX lancée, application disponible sur :  
👉 [http://localhost:8083](http://localhost:8083)

Sinon 
👉 [http://localhost:5173](http://localhost:5173)

---

### 5. Base de données : initialisation

Créez une base PostgreSQL vide avec les identifiants renseignés dans le `.env`.

Puis, chargez les données via deux requêtes **POST** dans Postman :

- **Quiz**  
  `POST http://localhost:8083/gameNR/api/sensibilisation/csv`

  - Body : `form-data`
  - Key : `csvFile`, fichier : `dataQuizz.csv`

- **Cartes de jeu**  
  `POST http://localhost:8083/gameNR/api/card/csv`
  - Body : `form-data`
  - Key : `csvFile`, fichier : `dataCard.csv`

> 📂 Les fichiers sont situés dans `workspaces/api/src/`

---

## 🔐 Accès et interface d'administration

### Connexion administrateur

Pour accéder à l'interface d'administration, connectez-vous avec les identifiants pré-définis (stockés en dur dans `workspaces/api/src/authentification/constants.ts`).

### Fonctionnalités disponibles

- ✅ Ajouter, modifier ou supprimer :
  - Les **cartes de bonnes pratiques**
  - Les **questions de sensibilisation**
- 📊 Visualiser les éléments existants
- 🔒 Interface sécurisée uniquement accessible avec les bons identifiants

---

## 📬 Support & contribution

Pour toute suggestion, bug ou amélioration, vous pouvez :

- Créer une issue sur [le repo GitHub](https://github.com/Tirunn05/4IF-PLD-AGIR)
- Ou contribuer via une Pull Request

---

## 📘 Ressources complémentaires

- 🚀 Perspectives d'amélioration du projet : dans le dossier `/docs`
- 📄 Documentation développeur : dans le dossier `/docs`
- 🧠 Référentiel Green IT : [Club Green IT - 2022](https://club.greenit.fr/doc/2022-06-GREENIT-Referentiel_maturite-v3.pdf)
