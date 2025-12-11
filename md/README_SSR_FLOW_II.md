## React ssr flow

<mark>index.html --&gt; entry-client.jsx --&gt; App.jsx</mark>  
<mark>server --&gt; entry-server.jsx --&gt; App.jsx</mark>

our modified React application starts with an index file, which includes:

- a _root_ div tag with, including a placeholder, and
- a script tag for _entry-client.jsx_

### index.html

index is the entry into the app

- _root_ div provides a container with a child marker to be replaced by rendered/hydrated content
- _entry-client_ script is called, renders App

```
<div id="root"><!--ssr-outlet--></div>
<script type="module" src="/src/entry-client.jsx"></script>
```

### entry-client.jsx

hydrateRoot() run, starts hydration, injecting App into #root

- hydrating with the rendered HTML

```
ReactDom.hydrateRoot(document.getElementById("root"), <App />);
```

---

### server.jsx

- calls entry-server, which returns a render function
- calls render function to get html
- replace _root_ placeholder with redered html in template (index.html file)

```
// load the server entry
const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

// render the app HTML
const appHtml = await render(url);

// inject the app-rendered HTML into the template.
const html = template.replace(`<!--ssr-outlet-->`, () => appHtml);
```

### entry-server.jsx

return a render() function

- renderToString() [^3] renders App to HTML
- HTML is injected into root in the index.html file, will show up in page source

```
export function render() {
  return renderToString(<App />);
}
```

### App.jsx

```
function App() {
  return <h1>Vite + React + SSR</h1>;
}
```

returns parent (root) _App_ component of the application

### vite.config.js

set ssr to true, add build to defaultConfig

```
export default defineConfig({
  plugins: [react()],
  build: { ssr: true },
});
```

### package.json

change dev script to load node server.js

```
"scripts": {
    "dev": "node server",
}
```

---

### resources

[^1]: [SSR Source Structure](https://vite.dev/guide/ssr#source-structure)
[^2]: [entry-client.jsx: Hydrating server-rendered HTML](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)
[^3]: [entry-server.jsx: renderToString](https://react.dev/reference/react-dom/server/renderToString)
