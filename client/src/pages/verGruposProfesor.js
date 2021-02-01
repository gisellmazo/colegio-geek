import React from "react";
import { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/grupos.css";

function VerGruposProfesor() {

  const [datos, setdatos] = useState([{}])

  useEffect(() => {
    fetch('/ver_grupos_profesor?id_profesor=1')
        .then(response => response.json())
        .then(data => setdatos(data));
        console.log(datos)
}, [])


  return (
    <>
      <div className="grid-container">
        <div className="s">
          <Sidebar
            name1="Mi espacio"
            name2="Ingresar notas"
            ruta1="/profesor"
            ruta2=""
          />
        </div>
        <div className="PGP">
          <div className="mt-4">
            <div className=" pl-5 pr-4">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo} <br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia:{datos[0].id_materia} <br />
                        Número de estudiantes: {datos[0].id_estudiante}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 ">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>
                      <div class=""></div>
                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo} <br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia:{datos[0].id_materia}  <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo} <br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia: {datos[0].id_materia}  <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo} <br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia: {datos[0].id_materia} <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo}<br />
                        Código del grupo:{datos[0].codigo_grupo}  <br />
                        Materia: {datos[0].id_materia}  <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo}<br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia: {datos[0].id_materia}  <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo:{datos[0].id_grupo} <br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia: {datos[0].id_materia}  <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa pb-2">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {datos[0].id_grupo}<br />
                        Código del grupo: {datos[0].codigo_grupo} <br />
                        Materia: {datos[0].id_materia} <br />
                        Número de estudiantes:{datos[0].id_estudiante} 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="F">
          <Footer cargo="Profesor" />
        </div>
      </div>
    </>
  );
}

export default withRouter(VerGruposProfesor);
