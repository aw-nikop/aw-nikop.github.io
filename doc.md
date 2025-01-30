# altoncomputersolutions rework
Niko Permilovsky
niko@altonworks.com
nikopermilovsky@gmail.com

## Structure

The architecture is Vite.js with Handlebars and GitHub pages for static deployment. 

`src` folder contains all the files needed for the website, as defined in `vite.config.mjs`.

Since vite supports only one entry point, we can trick it into serving many files by using folders and a "router" to route it to the correct pages. We still need an html file for every endpoint, which sucks.

### altons-articles
`altons-articles` contains the skeletons and router for the articles. `index.html` is the entry point.

### partials
All of the Handlebars templates

### solutions
`solutions` contains the skeletons and the router for all the "solutions" that altonworks offers. No entry point.

### src

`index.html` is the main entry point to the site. It loads templates, such as `navbar`, `footer`, and `copyright`, and renders the rest of the content. The css is a mix of bootstrap-5 classes, `scss` files located in `styles.scss` (note that `styles.scss` imports more files from `solutions`, `partials`, and `altons-articles`).

`main.js` is the main controller. It handles Form events, popups and adds extra utilities.