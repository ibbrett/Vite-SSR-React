## React server (SSR) flow

index.html --&gt; entry-client.js --&gt; App.jsx

### create files, etc

```
touch server.js
touch src/entry-client.js
touch src/entry-server.js
```

#### entry-client.js

handles app hydration

```
import ReactDom from "react-dom/client";
import App from "./App";

ReactDom.hydrateRoot(document.getElementById("root"), <App />);
```

#### entry-server.js

returns HTML using renderToString

```
import { renderToString } from "react-dom/server";

export function render() {
  return renderToString(<App />);
}
```

#### server.js

copy server.js file code, the replace app.use '\*all' with handler code below ( loads index.html )

- root will be \*
- reads index.html, transform, it also calls entry-0server returning the render() function
- replace &lt;!--ssr-outlet--&gt; with rendered html from App component
- returns html response to client/browser
