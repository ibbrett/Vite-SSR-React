## React client flow

<mark>index.html --&gt; main.jsx --&gt; App.jsx</mark>  
a traditional React application starts with an index file, which includes:

- a _root_ div tag, and
- a script tag taht calls _main_

### index.html

index is the entry into the app

- _root_ div provides an empty container
- _main_ script is called, renders App

```
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

### main.jsx

main.jsx starts hydration, injecting App into #root

```
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### App.jsx

returns parent (root) _App_ component of the application
