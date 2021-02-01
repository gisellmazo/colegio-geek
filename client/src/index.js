import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//Importación de páginas
import Login from './pages/login';
import Main_P from './pages/main-profesor';
import Perfil from './pages/perfilProfesor';
import Administrador from './pages/main-administrador';
import RegistrarEstudiante from './pages/registrarEstudiante';
import RegistrarProfesor from './pages/registrarProfesor';
import RegistrarGrupo from './pages/registrarGrupo';
import VerEstudiantesProfesor from './pages/verEstudiantesProfesor';
import VerGruposProfesor from './pages/verGruposProfesor';
import Main_estudiante from './pages/main-estudiante';
import RegistrarMateria from './pages/registrarMateria';
import MisNotas from './pages/misNotas';
import IngresarNotas from './pages/ingresarNotas';
import VerGruposAdministrador from './pages/verGruposAdministrador';
import VerMateriasAdministrador from './pages/verMateriasAdministrador';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Login} />
      <Route path='/profesor' component={Main_P} />
      <Route path='/perfil_profesor' component={Perfil} />
      <Route path='/administrador' component={Administrador} />
      <Route path='/registrar_estudiante' component={RegistrarEstudiante} />
      <Route path='/registrar_profesor' component={RegistrarProfesor} />
      <Route path='/registrar_grupo' component={RegistrarGrupo} />
      <Route path='/ver_estudiantes_profesor' component={VerEstudiantesProfesor}/>
      <Route path='/ver_grupos_profesor' component={VerGruposProfesor} />
      <Route path='/estudiante' component={Main_estudiante} />
      <Route path='/registrarmateria' component={RegistrarMateria} />
      <Route path='/vermisnotas' component={MisNotas} />
      <Route path='/ver_grupos_administrador' component={VerGruposAdministrador}/>
      <Route path='/ver_materias_administrador' component={VerMateriasAdministrador}/>
      <Route path='/registrar_materia' component={RegistrarMateria} />
      <Route path='/ver_mis_notas' component={MisNotas} />
      <Route path='/ingresar_notas' component={IngresarNotas} />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
