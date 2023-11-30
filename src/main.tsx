import ReactDOM from "react-dom/client";

import "./style.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
