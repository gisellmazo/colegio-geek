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
        <div className="PGP"></div>
        <div className="F">
          <Footer cargo="Profesor" />
        </div>
      </div>
    </>
  );
}

export default withRouter(verGruposProfesor);
