# Dev Portfolio 

### A clean, beautiful and responsive portfolio template for Developers

![Dev Portfolio](https://user-images.githubusercontent.com/33036554/126591081-71e01284-ec52-4344-8ac0-81eee5977bf4.jpg)


## Need of portfolio for a developer ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- Shows you’re more than just a resume

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use 🔧

From your command line, first clone Simplefolio:

```bash
# Clone this repository
$ git clone https://github.com/nandkk05/dev-portfolio

# Go into the repository
$ cd dev-portfolio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start the local development server
$ npm start

# Build for production
$ npm run build
```

## Template Instructions:

### Step 1 - STRUCTURE

Go to `/src/data/userData.js` and fill your information, there are serveral sections:

### Blog Section

- Add your [dev.to](https://dev.to) username if you want to show blogs section

### Projects Section

- This is a object with following structure, here you can edit information accordingly 
  ```
  {
    name: "Master app",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    techStack: "React js, Firebase, Cloud Functions",
    githubLink: "https://github.com/****",
    demo: "https://****.com",
  },
  ```

### Experince Section
  ```
   {
    company: "ABC",
    role: "XYZ member",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "https://<Company-Logo>.com",
  },
  ```

### Talks Section
  ```
  {
    community: "ABC",
    date: "Nov 28, 2020",
    title: "TITLE",
    embedLink: "https://<YOUTUBE_EMBED_ID>.com",
    slidesLink:
      "https://<SLIDES_LINK>.com",
  },
  ```

  ## Deployment 📦

Once you have done with your setup. You need to put your website online!

I recommend to use [Firebase Hosting](https://firebase.google.com/) or [Vercel](https://vercel.com) to achieve this on the EASIEST WAY

You could also host directly with Netlify by linking your own repository.

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/saadpasta/developerFolio)

For more information, read [hosting on Netlify](https://create-react-app.dev/docs/deployment/#netlify).

## Technologies used 🛠️

- [React](https://webpack.js.org/concepts/) - JavaScript library for building user interfaces
- [Material UI](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-end component library
- [Tailwind CSS](https://sass-lang.com/documentation) - CSS Utility library
- [React Router](https://www.npmjs.com/package/react-router-dom) - Router
- [Axios](https://www.npmjs.com/package/axios) - To fetch dev.to API

## Authors

- **Nand Kishor** - [Twitter](https://twitter.com/nandkk05)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Project Maintainers 

<table>
  <tr>
    <td align="center"><a href="http://nandkk05.github.io"><img src="https://avatars.githubusercontent.com/u/33036554?v=4" width="100px;" alt=""/><br /><sub><b>Nand Kishor</b></sub></a></td>
  </tr>
</table>
