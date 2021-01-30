import React from 'react';
import ReactDOM from 'react-dom';



import { BrowserRouter, Route } from "react-router-dom";
import login from "./pages/login"
import Main_P from "./pages/main-profesor";
import Perfil from "./pages/perfil";
import Administrador from "./pages/main-administrador";
import RegistrarEstudiante from "./pages/registrarEstudiante";



const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={login} />
      <Route path="/profesor" component={Main_P} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/administrador" component={Administrador}/>
      <Route path="/registrarestudiante" component={RegistrarEstudiante}/>
    </BrowserRouter>
  ) 
}




ReactDOM.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  document.getElementById("root")
);



  