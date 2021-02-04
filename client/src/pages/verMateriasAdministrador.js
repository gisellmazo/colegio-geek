import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/materiasAdministrador.css";

function verMateriasAdministrador(props) {
 
  return (
    <>
      <div className="grid-container">
        <div className="s">
          <Sidebar
            name1="Nuevo registro"
            name2="profesores"
            name3="estudiantes"
            name4="grupos"
            name5="materias"
            ruta1="/administrador"
            ruta2="/"
            ruta4="/ver_grupos_administrador"
            ruta5="/ver_materias_administrador"

          />
        </div>
        <div className="PEP ">
          <div className="mt-4">
            <div className="main align-middle d-flex pl-5 pr-4">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">Geografía</h4>
                      <div class="m-1 p-1">
                          <h5>Profesor:</h5>
                      </div>
                      <div class="m-1 p-1">
                          <p>Fabio León Restrepo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 ">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">Historia</h4>
                      <div class="m-1 p-1">
                          <h5>Profesor:</h5>
                      </div>
                      <div class="m-1 p-1">
                          <p>Jaime Alberto Giraldo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 ">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">Inglés</h4>
                      <div class="m-1 p-1">
                          <h5>Profesor:</h5>
                      </div>
                      <div class="m-1 p-1">
                          <p>María Dolores Smith</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="F">
        <Footer cargo="Administrador" />
      </div>
      {/* </div> */}
    </>
  );
}

export default withRouter(verMateriasAdministrador);