## Vite React JavaScript application

implementing SSR without Next.js

- created traditional React client app 12/8/2025 [^1][^2]
- modified for SSR, added server 12/10/2025

### run

```
npm run dev
```

### branches

| branch                                                                                        | description                     |
| --------------------------------------------------------------------------------------------- | ------------------------------- |
| [main](https://github.com/ibbrett/Vite-SSR-React/tree/main)                                   | current stable version          |
| [dev](https://github.com/ibbrett/Vite-SSR-React/tree/dev)                                     | under development               |
| [ms-01-create-app](https://github.com/ibbrett/Vite-SSR-React/tree/ms-01-create-app)           | milestone: initial app creation |
| [ms-02-ssr-implemented](https://github.com/ibbrett/Vite-SSR-React/tree/ms-02-ssr-implemented) | milestone: ssr implemented      |

### behavior

- traditional client React app [^3]
  - index.html --&gt; main.jsx --&gt; App.jsx
- SSR React app [^4]
  - index.html --&gt; entry-client.jsx --&gt; App.jsx

---

### resources

[^1]: [Create Vite React app](md/README-CREATE.md)
[^2]: [Commands to create app](md/README-CREATE-COMMANDS.md)
[^3]: [React client flow](md/README_CLIENT_FLOW.md)
[^4]: [React server (SSR) flow](md/README_SSR_FLOW.md)
