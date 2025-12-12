## React server setup

<mark>index.html --&gt; entry-client.jsx --&gt; App.jsx</mark>  
<mark>server --&gt; entry-server.jsx --&gt; App.jsx</mark>

### create files, etc [^1]

```
touch server.js
touch src/entry-client.jsx
touch src/entry-server.jsx
```

### entry-client.jsx [^2]

handles app hydration

```
import ReactDom from "react-dom/client";
import App from "./App";

ReactDom.hydrateRoot(document.getElementById("root"), <App />);
```

### entry-server.jsx [^3]

returns HTML using renderToString

```
import { renderToString } from "react-dom/server";
import App from "./App";

export function render() {
  return renderToString(<App />);
}
```

### server.js [^4]

copy server.js file code, the replace app.use '\*all' with handler code below ( loads index.html )

- root will be \*
- reads index.html, transform, it also calls entry-server returning the render() function
- replace &lt;!--ssr-outlet--&gt; with rendered html from App component
- returns html response to client/browser

---

### resources

[^1]: [SSR Source Structure](https://vite.dev/guide/ssr#source-structure)
[^2]: [entry-client.jsx: Hydrating server-rendered HTML](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)
[^3]: [entry-server.jsx: renderToString](https://react.dev/reference/react-dom/server/renderToString)
[^4]: [server.js: Setting Up the Dev Server](https://vite.dev/guide/ssr#setting-up-the-dev-server)
