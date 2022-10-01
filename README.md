<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG13.png" alt="Logo" height="90">
  </a>
  <h3 align="center">Pokemon - NextJS</h3>
  <p align="center">
    Pokemon App using different forms of Pre-rendering in NextJS.
    <br />
    <a href="https://pokemon-app-plum-one.vercel.app/">
	    View Demo »
    </a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
	<li><a href="#installation">Installation</a></li>
    <li><a href="#files-structure">Files Structure</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## Installation

If you want to run the project on your own, please follow these steps :

1. Clone the Project (`git clone git@github.com:mustaphaboudouch/pokemon-app.git`)
2. Move to the project folder
3. Install dependencies (`npm install`)
4. Run server (`npm run dev`)
5. Let's go : <a href="http://localhost:3000">http://localhost:3000</a>

## Files Structure

<pre>
pokemon-app
├── src
│   ├── components
│   │   └── Navbar
│   │       └── index.jsx : <i>Navbar component</i>
│   ├── pages
│   │   ├── _app.js : <i>Next.js App component</i>
│   │   ├── index.jsx : <i>Home page</i>
│   │   ├── csr : <i>Client side rendering</i>
│   │   │   ├── index.jsx : <i>Pokemons list page</i>
│   │   │   └── [id]
│   │   │       └── index.jsx : <i>Pokemon details page</i>
│   │   ├── isr : <i>Incremental static regeneration</i>
│   │   │   ├── index.jsx : <i>Pokemons list page</i>
│   │   │   └── [id]
│   │   │       └── index.jsx : <i>Pokemon details page</i>
│   │   ├── ssg : <i>Static site generation</i>
│   │   │   ├── index.jsx : <i>Pokemons list page</i>
│   │   │   └── [id]
│   │   │       └── index.jsx : <i>Pokemon details page</i>
│   │   └── ssr : <i>Static site generation</i>
│   │       ├── index.jsx : <i>Pokemons list page</i>
│   │       └── [id]
│   │           └── index.jsx : <i>Pokemon details page</i>
│   └──  styles
│       ├── globals.css : <i>Reset browser default styles</i>
│       ├── Navbar.module.css : <i>Navbar component styles</i>
│       ├── Home.module.css : <i>Home page styles</i>
│       ├── PokemonList.module.css : <i>Pokemons list page styles</i>
│       └── PokemonDetails.module.css : <i>Pokemon details page styles</i>
└── ...
</pre>

## License

Distributed under the MIT License.
