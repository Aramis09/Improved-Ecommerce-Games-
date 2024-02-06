import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProviderRedux from "./redux/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={`${import.meta.env.VITE_SOME_DOMAIN_AUTH0}`}
    clientId={`${import.meta.env.VITE_SOME_CLIENTID_AUTH0}`}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <ProviderRedux>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProviderRedux>
    </React.StrictMode>
  </Auth0Provider>
);
