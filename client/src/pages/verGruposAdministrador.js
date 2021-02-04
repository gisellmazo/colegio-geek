import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/gruposAdministrador.css";

function verGruposAdministrador(props) {
 
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
                      <h4 class="card-title">Grupo 1</h4>
                      <div class="m-1 p-1">
                          <ol>
                              <li>María Gomez</li>
                              <li>Juan Luís Londoño Aria</li>
                              <li>Juan Pablo Villamil</li>
                              <li>Mariana Esposito</li>
                              <li>Martina García</li>
                              <li>Julián Gonzalez</li>
                          </ol>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 ">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">Grupo 2</h4>
                      <div class="m-1 p-1">
                      <ol>
                              <li>María Gomez</li>
                              <li>Juan Luís Londoño Aria</li>
                              <li>Juan Pablo Villamil</li>
                              <li>Mariana Esposito</li>
                              <li>Martina García</li>
                              <li>Julián Gonzalez</li>
                          </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 ">
                  <div class="card">
                    <div class="card-body align-self-center">
                      <h4 class="card-title">Grupo 3</h4>
                      <div class="m-1 p-1">
                      <ol>
                              <li>María Gomez</li>
                              <li>Juan Luís Londoño Aria</li>
                              <li>Juan Pablo Villamil</li>
                              <li>Mariana Esposito</li>
                              <li>Martina García</li>
                              <li>Julián Gonzalez</li>
                          </ol>
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

export default withRouter(verGruposAdministrador);
