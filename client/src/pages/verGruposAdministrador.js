import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/gruposAdministrador.css";

function VerGruposAdministrador() {
  const [datos, setdatos] = useState([{}])
  useEffect(() => {
    fetch('/ver_grupos_administrador')
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
            name6="Generar Reportes"
            ruta1="/administrador"
            ruta2="/ver_profesores_administrador"
            ruta3="/ver_estudiantes_administrador"
            ruta4="/ver_grupos_administrador"
            ruta5="/ver_materias_administrador"
            ruta6="/generar_reportes_administrador"

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
                                    Grupo {dato.id_grupo}
                                  </h5>
                                  <p className="card-text">
                                    código de grupo: 
                                    <b>{dato.codigo_grupo}</b> <br/>
                                    este grupo pertenece al grado:  
                                    <b>{dato.id_grado}</b><br/>
                                    Jornada: 
                                    <b>{dato.jornada}</b><br/>
                                    Profesor encargado: 
                                    <b>{dato.nombres_apellidos}</b><br/>
                                  </p>
                                </div>
                              </div>
                            </div>
                  })
                }
                
              </div>
              
            </div>
            <br/><br/><br/> 
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

export default withRouter(VerGruposAdministrador);
