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
import verGruposProfesor from "./pages/verGruposProfesor"
import verMateriasProfesor from "./pages/verMateriasProfesor"
import Main_estudiante from './pages/main-estudiante'
import RegistrarMateria from "./pages/registrarMateria";
import MisNotas from './pages/misNotas'





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
      <Route path="/vermisestudiantes" component={VerEstudiantesProfesor} />
      <Route path="/grupos" component={verGruposProfesor}/>
      <Route path="/materias" component={verMateriasProfesor}/>
      <Route path="/estudiante" component={Main_estudiante}/>
      <Route path="/registrarmateria" component={RegistrarMateria}/>
      <Route path="/vermisnotas" component={MisNotas}/>
    </BrowserRouter>
  ) 
}




ReactDOM.render(
  <React.StrictMode>
   <App />    
  </React.StrictMode>,
  document.getElementById("root")
);



  