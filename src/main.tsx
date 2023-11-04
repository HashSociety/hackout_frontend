import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

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

import { UserProvider } from "./hooks/UserProvider";
import { IonRouterOutlet } from "@ionic/react";
import "./App.css";
import Layout from "./components/layout";
import { Redirect, Route } from "react-router";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/home";
import CreateRoom from "./Pages/createRoom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();



setupIonicReact();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <IonApp>
        <IonReactRouter>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <IonRouterOutlet>
                <Route path="/dashboard" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/create" component={CreateRoom} />
                <Redirect exact from="/" to="/dashboard" />
              </IonRouterOutlet>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </IonReactRouter>
      </IonApp>
    </UserProvider>
  </React.StrictMode>
);
