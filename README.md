# Vite React JavaScript application

- created 12/8/2025

## run

```
npm run dev
```

## behavior

### pre-mods

index.html --&gt; main.jsx --&gt; App.jsx

#### index.html

Vanilla Vite React application sends an content-less html file (nothing in root) and a main.jsx script

- we first get empty white page
- then main.jsx starts hydration, injecting App into #root

```
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

#### main.jsx

returns App

#### App.jsx

returns App root/parent code

---

### post-mods: add server, implement SSR [^1]

#### create files, etc

```
touch server.js
touch src/entry-client.js
touch src/entry-server.js
```

##### entry-client.js [^2]

handles app hydration

```
import ReactDom from "react-dom/client";
import App from "./App";

ReactDom.hydrateRoot(document.getElementById("root"), <App />);
```

##### entry-server.js [^3]

returns HTML using renderToString

```
import { renderToString } from "react-dom/server";

export function render() {
  return renderToString(<App />);
}
```

##### server.js [^4]

copy server code

## readmes

1. [Create Vite React app](md/README-CREATE.md)
1. [Commands to create app](md/README-CREATE-COMMANDS.md)

## resources

[^1]: [SSR Source Structure](https://vite.dev/guide/ssr#source-structure)
[^2]: [entry-client.js: Hydrating server-rendered HTML](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)
[^3]: [entry-server.js: renderToString](https://react.dev/reference/react-dom/server/renderToString)
[^4]: [server.js: Setting Up the Dev Server](https://vite.dev/guide/ssr#setting-up-the-dev-server)
