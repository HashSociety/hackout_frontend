import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import "./index.css";

/* Core Ionic framework styles */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import Login from "./Pages/Login";
import Layout from "./components/layout";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { UserProvider } from "./hooks/UserProvider";
import Signup from "./Pages/Signup";
/* Ionic Theme variables */
// import "./variables.css";

const queryClient = new QueryClient();

setupIonicReact();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <IonApp>
          <IonReactRouter>
            <App />
          </IonReactRouter>
        </IonApp>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
