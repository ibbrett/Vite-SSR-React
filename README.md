# Vite React JavaScript application

- created 12/8/2025

## run

```
npm run dev
```

## behavior

### pre-mods

#### index.html

Vanilla Vite React application sends an content-less html file (nothing in root) and a main.jsx script

- we first get empty white page
- then main.jsx starts hydration, injecting App into #root

```
&gt;div id="root"&lt;&gt;/div&lt;
&gt;script type="module" src="/src/main.jsx"&lt;&gt;/script&lt;
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

##### entry-server.js

renderToString [^2]

##### server.js

copy server code [^3]

## readmes

1. [Create Vite React app](md/README-CREATE.md)
1. [Commands to create app](md/README-CREATE-COMMANDS.md)

## resources

[^1]: [SSR Source Structure](https://vite.dev/guide/ssr#source-structure)
[^2]: [renderToString](https://react.dev/reference/react-dom/server/renderToString)
[^3]: [Setting Up the Dev Server](https://vite.dev/guide/ssr#setting-up-the-dev-server)
