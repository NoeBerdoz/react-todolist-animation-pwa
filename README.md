# Documentation React Todo List
Autheur : Noé Berdoz
Repo Github: https://github.com/NoeBerdoz/react-todolist-animation-pwa.git
Ancien repo: https://github.com/NoeBerdoz/react-todolist-pwa/tree/feature/animation_component

## Start application

### `Clone the repo`

### `npm i`

### `npm start`

## Projet
L'application React Todo List a pour but de permettre à un utilisateur de créer une liste
de tâche et de pouvoir l'utiliser sur son téléphone.

## Sources et tutoriels
Créations des principales fonctionnalités.
https://www.kirupa.com/react/simple_todo_app_react.htm

Vidéos sur l'implémentation des données persistantes.
https://youtu.be/ncBSWL1tkr0

Example de projet React avec les données persistantes.
https://codepen.io/simonswiss/pen/EVrGeb

Inspiration.
https://codepen.io/saawsan/pen/jayzeq

## Stocker les données en local
Utilisation du LocalStorage
https://developer.mozilla.org/fr/docs/Web/API/Storage/LocalStorage
```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('items', JSON.stringify(this.state.items))
    }
```
Pour voir les données enregistrées :
Outil de développeur -> Application

## Design système
Mise en place du système Material-UI
Rendre le projet responsive via les grilles. 
https://material-ui.com/discover-more/backers/#diamond

## Identité visuelle
Palette de couleurs utilisée : 
https://color.adobe.com/fr/search?q=Scalable%20Foods%20Presentations

## Animation
Librairie d'animation *React Spring*
https://www.react-spring.io/
    
    - Animation du texte d'entrée
      Fichier: components/TextFlipAnimated.js

Implémentation du module *Flip Move*
https://github.com/joshwcomeau/react-flip-move
    
    - Animation des créations et suppressions des tâches
```javascript
<ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
```    
    

Utilisation des *CSS @keyframes*
https://www.w3schools.com/css/css3_animations.asp

    - Animation bounce sur le bouton
      Fichier : src/css/title.css
    - Animation au premier chargement
      Fichier : src/css/TodoList.css
    
## PWA
Implémentation du *service Worker*.
Cela permet d'utiliser l'application même en étant hors ligne.
Les services Workers pré-mettent en cache les ressources clés de l'application
et permettent à ma PWA de se charger instantanément et de fournir une expérience
instantanée et fiable aux utilisateurs, quel que soit l'état du réseau.
https://medium.com/@toricpope/transform-a-react-app-into-a-progressive-web-app-pwa-dea336bd96e6

Utilisation de l'outil Google open-source *Lighthouse* pour contrôler
l'optimisation PWA de mon application.
https://developers.google.com/web/tools/lighthouse

https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Installable_PWAs

## Suite ? 
Mettre en place un status pour les tâches (faites ou à faire) avec animations.
Ajouter une animation au scroll des éléments.
Animer le logo SVG.
Déployer l'application pour pouvoir l'installer.
Les prérequis sont les suivants :
    
    - Un manifeste web, avec les bons champs renseignés
      Dans index.html : 
      ```html
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      ```
      
    - Le site web à servir depuis un domaine sécurisé (HTTPS)
      Dépendra du serveur de déployement
      
    - Un icone représentant l'application sur l'appareil
      Fichier : /public/image/todo512.png
        
    - Un service worker enregistré pour permettre
      à l'application de fonctionner en mode déconnecté 
      (ceci n'est actuellement imposé que par Chrome pour Android)

