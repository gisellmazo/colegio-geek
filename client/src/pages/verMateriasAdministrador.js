import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/materiasAdministrador.css";

function VerMateriasAdministrador() {

  const [datos, setdatos] = useState([{}])

  useEffect(() => {
    fetch('/ver_materias_administrador')
      .then(response => response.json())
      .then(data => setdatos(data));
  }, [])

  return (
    <div>
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
                {
                  datos.map(function (dato, index, array) {
                    return <div class="col-sm-6 mt-5 bottom-pa">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">
                                  {dato.nombre}
                                </h5>
                                <p className="card-text">
                                  Profesor encargado del area: <br/>
                                  <b>{dato.nombres_apellidos}</b>
                                </p>
                              </div>
                            </div>
                          </div>

                  })
                }
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="F">
        <Footer cargo="Administrador" />
      </div>

    </div>
  );
}

export default withRouter(VerMateriasAdministrador);