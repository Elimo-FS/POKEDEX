<p align="center">
  <img src="./public/LOGO_POKEMON.png" alt="Logo du projet" width=100%>
</p>

# Pokedex <img src="./public/pokedex.jpg" alt="Logo du projet" width=10%>

Ce projet est une application web de type Pokédex, construite avec **MySQL2** et **TypeScript**. Il permet aux utilisateurs de parcourir une liste de Pokémon, de rechercher des Pokémon spécifiques et de consulter leurs détails.

## Fonctionnalités <img src="./public/pokeball.jpg" alt="Logo du projet" width=10%>

- **Liste des Pokémon** : Visualisez une liste de Pokémon disponibles.
- **Recherche** : Recherchez un Pokémon par son nom ou son numéro.
- **Détails des Pokémon** : Consultez des informations détaillées via une fenêtre modale.

## Prérequis <img src="./public/pokeball.jpg" alt="Logo du projet" width=10%>

- **Node.js** version 16 ou supérieure.
- Un gestionnaire de packages comme **npm**.

## Installation <img src="./public/pokeball.jpg" alt="Logo du projet" width=10%> 

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
   - Créez un fichier `.env` avec les informations de connexions au serveur.
   - Remplissez les variables nécessaires(par exemple DB_USER = 'UserName'.
      
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
   npm run start
   ```
   
## Architecture du projet <img src="./public/pokeball.jpg" alt="Logo du projet" width=10%> 

Voici un aperçu de la structure des fichiers principaux :

```
.
├── logs/              # Retours des logs d'erreurs et de connexions
├── src/
│   ├── configs/       # Configuration du serveur
│   ├── controllers/   # Controlleurs de l'api
│   ├── model/         # Requètes liés à la database
│   └── routes/        # Chemins http
```

## Déploiement <img src="./public/pokeball.jpg" alt="Logo du projet" width=10%> 

L'application peut être déployée sur n'importe quelle plateforme compatible avec les frameworks frontend modernes. 

---

Pour plus d'informations ou des contributions, visitez [le dépôt GitHub du projet](https://github.com/Elimo-FS/POKEDEX).
