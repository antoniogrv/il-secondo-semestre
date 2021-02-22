# il-secondo-semestre

This webapp (_the-second-semester_) has been developed in order to **collect and display personal notes in an orderly fashion**. These notes are related, in particular, to the lessons of the second semester of the second year of the degree course in Computer Science at the University of Salerno, Italy. The information contained on the pages of the site are not to be considered reliable, valid or approved by the teachers. The application has been created purely for educational purposes and entertainment.

![Preview](https://i.ibb.co/tZQJRXm/f43407ea6af616a28d90bc256f35209f.png)

The site is available at [the-second-semester](https://v1enna.github.io/il-secondo-semestre/) and has been developed for Google Chrome, which is why it may not work properly on other browsers, especially Mozilla Firefox. The public website only shows a demo with random Lorem Ipsum paragraphs.


## Tech-Stack

The application has been designed and developed to be **totally static**, meaning it will run on any machine regardless of network connection. The site does not connect to any server and pages are generated dynamically according to certain collections of files found in the project directory.

- The **logic** and routines (routing, fetching and so on) are developed in [React](https://it.reactjs.org/) and [JavaScript](https://developer.mozilla.org/it/docs/Web/JavaScript). 
- The **markup** is in [JSX](https://facebook.github.io/jsx/). 
- The **layouts** and graphics are in [SASS](https://sass-lang.com/) and [Ant](https://ant.design/).
- The **dependencies** are handled via [Node](https://nodejs.org/it/) and [npm/npx](https://www.npmjs.com/).


## Build & Deploy

To clone the repository you can run the terminal command `git clone https://github.com/v1enna/il-secondo-semestre.git` or download [here](https://github.com/v1enna/il-secondo-semestre/archive/main.zip) a compressed archive. The repository has two permanent branches: `main` and `gh-pages`.

### `branch: main`

`main` is the master-branch and does not necessarily correspond to the public version which, instead, is available at *gh-pages*. The main branch contains the development version of the application. Once the repository is cloned, you can run `npm install` and `npm start` to view the current development version. The first command, `npm install`, will download into `/node_modules` the dependencies listed in `package.json`. No particularly heavy libraries are used, and the installation should take a short time. `npm start` will allow `localhost:3000` to display the routing specified in `App.js`. 

### `branch: gh-pages`

`gh-pages` is the deployment branch and contains the actual production build of the application, i.e. the sequence of static files (HTML markup, JS scripts, CSS precompiled by SASS, images, and so on) needed to properly display the web pages. The branch is not manually updated: the publication of the public version is done by `npm run deploy` which will push the correct build to the branch with reference to the current local version. This means that the contents of `main` and `gh-pages` can differ without problems.


## Routine

The application basically takes care of automatically generating static web pages based on the available notes. In particular, the available notes are listed in `index.html` and are indicated in `<Note>` tags. The file will therefore contain, in addition to the build markup, also a not necessarily ordered list of `<Note>` tags, which will refer to a specific JavaScript file in `static/raw-notes`. As the name suggests, `raw-notes` stores the notes themselves, i.e. the raw text formatted in HTML and exported in JavaScript. 

From this logic it follows that to add a new clipboard you need to:
1. Add a `<Note> {subject}-{id}.js </Note>` tag in `index.html`.
2. Add a file named `{subject}-{id}.js` in `static/raw-notes`.

And nothing else. React's routines will generate the web pages needed to display the content.

**Please note:** the content of the file `{subject}-{id}.js` must adhere to the following formatting:

`module.exports = '<div>Hello World! [... html markup ...]</div>';`

To generate the markup needed to display the notes, it is suggested to use [HTML Minifier](https://www.willpeavy.com/tools/minifier/). For testing out the layout, [WebFX](https://www.webfx.com/tools/lorem-ipsum-generator/) is the tool to go.


## To-do
- [X] Responsive Design


## Failure Handling
- **@JSX_AppRouting** > Can't find the requested page
- **@JSX_NotesRouting** > Can't find the requested note in `notes/{subject}/{id}`
