// https://react.dev/reference/react-dom/server/renderToString
import { renderToString } from "react-dom/server";

export function render() {
  return renderToString(<App />);
}
