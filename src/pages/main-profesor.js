import React from "react";
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
            ruta2=""
          />
        </div>
        <div class="PM">
          <div className="mt-4">
            <div className="main align-middle d-flex pl-4 pr-4">
              <div class="row">
                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Ver tu perfil</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
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
                        With supporting text below as a natural lead-in to
                        additional content.
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
                <div class="col-sm-6 mt-5 bottom-pa">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Ver tus grupos</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <button
                        type="button"
                        onClick={() => history.push("/ver_grupos_profesor")}
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
