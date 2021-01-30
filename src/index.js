import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter, Route } from "react-router-dom";
import login from "./pages/login"
import Main_P from "./pages/main-profesor";
import Perfil from "./pages/perfil";



const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={login} />
      <Route path="/Profesor" component={Main_P} />
      <Route path="/Perfil" component={Perfil} />
    </BrowserRouter>
  ) 
}




ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById("root")
);



  