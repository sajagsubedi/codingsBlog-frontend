import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BlogState, GlobalState ,ComponentState,AuthState} from "./context/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
    <ComponentState>
    <AuthState>
      <BlogState>
          <App />
      </BlogState>
      </AuthState>
      </ComponentState>
    </GlobalState>
  </React.StrictMode>
);
