<div id="top"></div>

<br/>
<div align="center">
  <a href="https://vitesse-simple-learn-app.netlify.app/">
    <img src="./public/logo.png" alt="Logo" width="40" height="40">
  </a>

  <h3 align="center">My Learn APP - Vitesse</h3>

  <p align="center">
    This is a simple learning class app. Shows list of class, detail of class and you can register to that.
    <br />
    <a href="https://github.com/pujakesuma/my-vitesse-learn-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://vitesse-simple-learn-app.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/pujakesuma/my-vitesse-learn-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/pujakesuma/my-vitesse-learn-app/issues">Request Feature</a>
  </p>
</div>

<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-local">Run Local</a></li>
        <li><a href="#build-setup">Build Setup</a></li>
        <li><a href="#deploy-to-netlify">Deploy to Netlify</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>
<br/>

## About The Project

![Web Page Screen Shot](https://res.cloudinary.com/pujakesuma/image/upload/v1647194391/screenshot/learn_app_uwj7sf.png)

![Detail Page Screen Shot](https://res.cloudinary.com/pujakesuma/image/upload/v1647194394/screenshot/learn_app_detail_b1arem.png)

![Register](https://res.cloudinary.com/pujakesuma/image/upload/v1647194483/screenshot/learn_app_reg_avpp9p.png)

This app has 2 page, main page to show list of class and the other to show detail of class. In main page, user can see card list of class, with basic information (title and description).

Detail page show more detail about the class such an Image (static image), title, mentors, etc. In this page, user can register to the class with pop up form when button register clicked

I choose Vue 3 even though I'm new to this because this project require TypeScript, and Vue 3 (with Composition API) is fully supported and recommended for kick this project. I also started with template from [Anthony Fu](https://github.com/antfu) called [Vitesse Lite](https://github.com/antfu/vitesse-lite) because as he said, "Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time", so from this template I tweaked for this project, I can start another projects easily.

More detail about project's tech stack is shown below

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

Here are list any major frameworks/libraries used to bootstrap this project.

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in [Pure CSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 🔥 Use the [new `<script setup>` style](https://github.com/vuejs/rfcs/pull/227)

- ✅ Use [Vitest](http://vitest.dev/) for unit and components testing

- 🦾 TypeScript

- ☁️ Deploy on Netlify, zero-config

- [Vue Router](https://github.com/vuejs/vue-router)

- [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages)

- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing

- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import

- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs


<br>
<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

This project use pnpm for package manager. You should have npm installed on your computer.

```bash
# install npm
$ npm install npm@latest -g

# install pnpm
$ npm install -g pnpm

```

### Run Local

```bash
# clone the repository
$ git clone https://github.com/pujakesuma/my-vitesse-learn-app.git

# create file .env and copy a whole contents of env.example
$ touch .env

# Install dependencies
$ pnpm i

# run on development mode
$ pnpm dev

```

### Build Setup

```bash

# build for production
$ pnpm run build

```

### Deploy to Netlify

This project use Netlify as static hosting. Deploying to Netlify is a low friction option for getting a statically generated site online quickly.

Simple things I do is:

- Open [Netlify](https://www.netlify.com/) and login with your account
- Create site by Import your project in git providers (Github, Bitbucket, or Gitlab)
- Add environment variable (API server)
- just click ok because this project is zero-config

For detailed explanation on how things work, check out the [documentation](https://vitejs.dev/guide/static-deploy.html#netlify).

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] Add List Classes
- [x] Detail Class
- [x] Register into Class

See the [open issues](https://github.com/pujakesuma/my-vitesse-learn-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ahmad Ridwan - [Website](https://ahmadridwan.id) - ahmadridwan.3107@gmail.com

Project Link: [https://github.com/pujakesuma/my-vitesse-learn-app/](https://github.com/pujakesuma/my-vitesse-learn-app/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Here a list resources I find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Tailwind Toolbox](https://www.tailwindtoolbox.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
