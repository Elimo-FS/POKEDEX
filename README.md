
# Pokedex

Ce projet est une application web de type Pokédex, construite avec **Vue 3**, **TypeScript**, et **Pinia**. Il permet aux utilisateurs de parcourir une liste de Pokémon, de rechercher des Pokémon spécifiques, de marquer leurs favoris et de consulter leurs détails via une interface utilisateur conviviale et responsive.

## Fonctionnalités

- **Liste des Pokémon** : Visualisez une liste de Pokémon disponibles.
- **Recherche** : Recherchez un Pokémon par son nom ou son numéro.
- **Favoris** : Ajoutez des Pokémon à votre liste de favoris.
- **Détails des Pokémon** : Consultez des informations détaillées via une fenêtre modale.
- **Interface responsive** : Compatible avec les mobiles et les ordinateurs.

## Prérequis

- **Node.js** version 16 ou supérieure.
- Un gestionnaire de packages comme **npm** ou **yarn**.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Elimo-FS/POKEDEX.git
   cd POKEDEX
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   - Copiez le fichier `.env.example` et renommez-le `.env`.
   - Remplissez les variables nécessaires (par exemple, les clés d'API).

4. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

5. Pour créer une version de production :
   ```bash
   npm run build
   ```

6. Prévisualisez la version de production :
   ```bash
   npm run serve
   ```

## Tests

Des tests unitaires sont inclus dans le projet, utilisant **Vitest** :

- Pour exécuter tous les tests :
  ```bash
  npm run test:unit
  ```

## Architecture du projet

Voici un aperçu de la structure des fichiers principaux :

```
.
├── src/
│   ├── assets/        # Fichiers statiques (images, CSS)
│   ├── components/    # Composants Vue (unités fonctionnelles de l'interface)
│   ├── router/        # Configuration du routeur Vue
│   ├── services/      # Services pour appeler l'API Pokémon
│   ├── views/         # Pages principales
│   └── store/         # Gestion de l'état avec Pinia
├── public/            # Fichiers publics
└── .env.example       # Exemple de fichier de configuration d'environnement
```

## Déploiement

L'application peut être déployée sur n'importe quelle plateforme compatible avec les frameworks frontend modernes. Utilisez le fichier `vite.config.ts` pour adapter les paramètres en fonction de vos besoins.

---

Pour plus d'informations ou des contributions, visitez [le dépôt GitHub du projet](https://github.com/Elimo-FS/POKEDEX).
