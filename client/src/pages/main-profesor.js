import React from "react";
import {useEffect,useState} from 'react';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { withRouter } from "react-router-dom";
import "../styles/pantallasPrincipales.css";

function Main({ history }) {


  return (
    <>
      <div className="grid-container">
        <div class="s">
          <Sidebar
            name1="Mi espacio"
            name2="Ingresar notas"
            ruta1="/profesor"
            ruta2="/ingresar_notas"
          />
        </div>
        <div class="PM">
          <div className="mt-4">
            <div className="main align-middle d-flex pl-4 pr-4">
              <div class="row PEP">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Ver tu perfil</h5>
                      <p class="card-text">
                        ver mi materia, código de mi grupo, grupo.
                      </p>
                      <button
                        type="button"
                        onClick={() => history.push("/perfil_profesor")}

                        class="btn-p btn-primary"
                      >
                        Ir
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 ">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Ver tus estudiantes</h5>
                      <p class="card-text">
                        clic para ver todos los estudiantes matriculados a mi materia
                      </p>
                      <button
                        type="button"
                        onClick={() => history.push("/ver_estudiantes_profesor")}
                        class="btn-p btn-primary"
                      >
                        Ir
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="F">
          <Footer cargo="Profesor" />
        </div>
        l
      </div>
    </>
  );
}

export default withRouter(Main);
