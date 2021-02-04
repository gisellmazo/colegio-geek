import React from "react";
import { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/estudiantes.css";

function verEstudiantesProfesor(props) {
  const nombreEstudiante = "Pedro García Fernandéz ";
  const gradoEstudiante = "10-1";
  const fotoEstudiante = props;

  const [datos, setdatos] = useState([{}])

  useEffect(() => {
    fetch('/ver_estudiantes_profesor?id_profesor=1')
        .then(response => response.json())
        .then(data => setdatos(data));
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
        <div className="PEP ">
          <div className="mt-4">
            <div className="main align-middle d-flex pl-5 pr-4">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {datos[0].id_grupo}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 ">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{datos[0].nombres_estudiante}</h4>
                      <div class="m-1 p-1">
                        <img
                          src="https://thispersondoesnotexist.com/image"
                          width="200em"
                          alt="50em"
                        />
                      </div>
                      <p class="h5 card-text m-1 p-1">
                        Grado: {gradoEstudiante}
                      </p>
                      <button
                        type="button"
                        // onClick={() => history.push("/estudianteId")}
                        class="btn-p btn-primary"
                      >
                        Ir a sus notas
                      </button>
                    </div>
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
      {/* </div> */}
    </>
  );
}

export default withRouter(verEstudiantesProfesor);
