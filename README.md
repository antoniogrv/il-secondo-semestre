# il-secondo-semestre

Questa webapp è stata sviluppata al fine di **collezionare in modo ordinato degli appunti personali** relativi, in particolare, alle lezioni del secondo semestre del secondo anno del corso di laurea in Informatica dell'Università di Salerno. Le informazioni contenute sulle pagine del sito non sono da ritenersi affidabili, valide o approvate dai docenti. L'applicativo è stato creato per puro scopo didattico e per intrattenimento.

Il sito è disponibile su [il-secondo-semestre](https://v1enna.github.io/il-secondo-semestre/). 

E' stato sviluppato per Google Chrome e potrebbe non funzionare correttamente su altri browser.


## Tech-Stack

L'applicativo è stato pensato ed elaborato per essere **totalmente statico**, e cioè funzionare su una qualsiasi macchina a prescindere dalla connessione alla rete. Il sito non si collega ad alcun server e le pagine sono generate dinamicamente in funzione di determinate collezioni di file rinvenute nella directory del progetto.

- La **logica** e le routine (routing, fetching e così via) sono sviluppate in [React](https://it.reactjs.org/) e [JavaScript](https://developer.mozilla.org/it/docs/Web/JavaScript). 
- Il **markup** è in [JSX](https://facebook.github.io/jsx/). 
- I **layout** e la grafica sono in [SASS](https://sass-lang.com/) e [Ant](https://ant.design/).
- Le **dipendenze** sono gestite tramite [Node](https://nodejs.org/it/) e [npm/npx](https://www.npmjs.com/).


## Build & Deploy

Per clonare la repository è possibile lanciare da terminale il comando `git clone https://github.com/v1enna/il-secondo-semestre.git` o scaricare [qui](https://github.com/v1enna/il-secondo-semestre/archive/main.zip) un archivio compresso. La repository ha due branch fissi: `main` e `gh-pages`.

### `branch: main`

`main` è il master-branch e non corrisponde necessariamente alla versione pubblica che, invece, è disponibile a *gh-pages*. Il branch principale contiene la versione di produzione dell'applicativo che ancora fa affidamento a `npm` per essere avviata. Una volta clonata la repository, è possibile lanciare `npm install` e `npm start` per visualizzare l'attuale versione di produzione. Il primo comando, `npm install`, scaricherà in `/node_modules` le dipendenze elencate in `package.json`. Non vengono usate librerie particolarmente pesanti, e l'installazione dovrebbe durare poco. Invece, `npm start` permetterà di visualizzare su `localhost:3000` il routing specificato in `App.js`. 

### `branch: gh-pages`

`gh-pages` è il branch di deploy e contiene la build effettiva dell'applicativo, e cioè la sequenza di file statici (markup HTML, script JS, CSS precompilato da SASS, immagini e così via) necessari alla corretta visualizzazione delle pagine web. Il branch non viene aggiornato manualmente: la pubblicazione della versione pubblica è affidata a `npm run deploy` che spingerà sul branch la build corretta in riferimento all'attuale versione locale. Ciò significa che i contenuti di `main` e `gh-pages` possono differire senza problemi.


## Routine

L'applicativo fondamentalmente si occupa di generare in modo automatico delle pagine web statiche in base agli appunti disponibili. In particolare, gli appunti disponibili sono elencati in `index.html` e sono indicati in tag `<Note>`. Il file dunque conterrà, oltre al markup della build, anche una lista non necessariamente ordinata di tag `<Note>`, i quali faranno riferimento ad un preciso file JavaScript in `static/raw-notes`. Come suggerisce il nome, in `raw-notes` sono depositati gli appunti in sé, e cioè il testo grezzo formattato in HTML ed esportato in JSX. 

Da questa logica ne consegue che per aggiungere un nuovo blocco di appunti è necessario:
1. Aggiungere un tag `<Note> {subject}-{id}.js </Note>` in `index.html`
2. Aggiungere un file denominato `{subject}-{id}.js` in `static/raw-notes`

E nient'altro. Le routine di React provvederanno a generare le pagine web necessarie alla visualizzazione del contenuto.

**Nota bene:** il contenuto del file `{subject}-{id}.js` deve rispettare la seguente formattazione:

`module.exports = '<div>Hello World! [... html markup ...]</div>';`

Per minimizzare il peso dell'HTML è consigliato usare [HTML Minifier](https://www.willpeavy.com/tools/minifier/). Per eventuali demo, invece, si suggerisce [WebFX](https://www.webfx.com/tools/lorem-ipsum-generator/).


## To-do
- [X] Design responsive per Android e iPhone
- [ ] *(Opzionale)* Migrare da JavaScript a [TypeScript](https://www.typescriptlang.org/)


## Failure Handling
- **@JSX_AppRouting** > Impossibile trovare la pagina richiesta
- **@JSX_NotesRouting** > Impossibile trovare il blocco di appunti specificato in `notes/{subject}/{id}`
