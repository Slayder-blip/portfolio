# Portfolio — Léa Gallou

Portfolio statique réalisé en HTML, Sass (SCSS) et JavaScript.

## Démarrer

1. Installer Node.js si nécessaire.
2. À la racine du projet, lancer `npm install`.
3. Lancer `npm run watch` pour compiler automatiquement le SCSS en CSS.
4. Ouvrir `index.html` avec Live Server ou un serveur local.

## Scripts

- `npm run sass` : compile une fois `scss/main.scss` vers `css/style.css`.
- `npm run watch` : surveille les fichiers SCSS et recompile à chaque modification.
- `npm run build` : génère le CSS compressé pour la publication.

## Organisation SCSS (SMACSS)

- `base/` : reset et règles HTML générales
- `layout/` : grandes zones de page et header
- `modules/` : composants réutilisables
- `state/` : états et comportements visuels
- `theme/` : couleurs, typographies et variables
- `pages/` : styles spécifiques aux pages

Les classes HTML suivent BEM : `bloc__element--modificateur`.

## Publication Vercel

Le site est statique. Pour compiler lors du déploiement, configure la commande de build `npm run build` et le répertoire de sortie `.`. Le fichier CSS compilé est aussi inclus pour pouvoir prévisualiser le site immédiatement.
