import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/gruposAdministrador.css";

function VerEstudiantesAdministrador() {
  const [datos, setdatos] = useState([{}])
  useEffect(() => {
    fetch('/ver_estudiantes_administrador')
      .then(response => response.json())
      .then(data => setdatos(data));
  }, [])

  return (
    <>
      <div className="grid-container">
        <div className="s">
        {console.log(datos)}
          <Sidebar
            name1="Nuevo registro"
            name2="profesores"
            name3="estudiantes"
            name4="grupos"
            name5="materias"
            ruta1="/administrador"
            ruta2="/ver_profesores_administrador"
            ruta3="/ver_estudiantes_administrador"
            ruta4="/ver_grupos_administrador"
            ruta5="/ver_materias_administrador"

          />
        </div>
        <div className="PEP ">
          <div className="mt-4">
            <div className="main align-middle d-flex pl-5 pr-4">
              <div className="row">
                {
                  datos.map(function (dato, index) {
                    return  <div class="col-sm-6 mt-5 bottom-pa">
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title">
                                    Nombre: <br/> <b>{dato.nombres_apellidos}</b>
                                  </h5>
                                  <p className="card-text">
                                    pertenece al grupo: 
                                    <b>{dato.id_grupo}</b> <br/>
                                    código del grupo:  
                                    <b>{dato.codigo_grupo}</b><br/>
                                    Grado en curso: 
                                    <b>{dato.id_grado}</b><br/>
                                  </p>
                                </div>
                              </div>
                            </div>
                  })
                }
              </div>
              <br/><br/><br/><br/>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="F">
        <Footer cargo="Administrador" />
      </div>
      
    </>
  );
}

export default withRouter(VerEstudiantesAdministrador);