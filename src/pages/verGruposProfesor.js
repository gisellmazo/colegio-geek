import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/grupos.css";

function verGruposProfesor() {
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
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
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
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mt-5 bottom-pa pb-2">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">{}</h4>

                      <p class="h5 card-text m-1 p-1">
                        Grupo: {} <br />
                        Código del grupo: <br />
                        Materia: <br />
                        Número de estudiantes:
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

export default withRouter(verGruposProfesor);
