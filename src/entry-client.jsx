import ReactDom from "react-dom/client";
import App from "./App";

// handles the App hydration
ReactDom.hydrateRoot(document.getElementById("root"), <App />);
