import React from "react";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/materias.css";

function verMateriasProfesor() {
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
        <div className="PMP"></div>
        <div className="F">
          <Footer cargo="Profesor" />
        </div>
      </div>
    </>
  );
}

export default withRouter(verMateriasProfesor);