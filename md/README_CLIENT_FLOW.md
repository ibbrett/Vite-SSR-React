## React client flow

index.html --&gt; main.jsx --&gt; App.jsx

### index.html

Traditional React client application sends a content-less file (nothing in root) and a main.jsx script

- we first get empty white page
- then main.jsx starts hydration, injecting App into #root

```
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
```

### main.jsx

returns App

### App.jsx

returns App root/parent code
