import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";


//Importación de páginas
import login from "./pages/login"
import Main_P from "./pages/main-profesor";
import Perfil from "./pages/perfilProfesor";
import Administrador from "./pages/main-administrador";
import RegistrarEstudiante from "./pages/registrarEstudiante";
import RegistrarProfesor from "./pages/registrarProfesor"
import RegistrarGrupo from "./pages/registrarGrupo";
import VerEstudiantesProfesor from "./pages/verEstudiantesProfesor";



const App = () => {
  return(
    <BrowserRouter>
      <Route exact path="/" component={login} />
      <Route path="/profesor" component={Main_P} />
      <Route path="/perfil" component={Perfil} />
      <Route path="/administrador" component={Administrador}/>
      <Route path="/registrarestudiante" component={RegistrarEstudiante}/>
      <Route path="/registrarprofesor" component={RegistrarProfesor}/>
      <Route path="/registrargrupo" component={RegistrarGrupo}/>
      <Route path="/estudiantes" component={VerEstudiantesProfesor} estudianteId="perfil" nombreEstudiante="Pedro"/>
    </BrowserRouter>
  ) 
}




ReactDOM.render(
  <React.StrictMode>
   <App />    
  </React.StrictMode>,
  document.getElementById("root")
);



  