import { IonRouterOutlet } from "@ionic/react";
import "./App.css";
import Layout from "./components/layout";
import { Redirect, Route } from "react-router";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/home";

function App() {
  return (
   
      <Layout>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </Layout>
    
  );
}

export default App;
