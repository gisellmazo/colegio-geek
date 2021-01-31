import React from "react";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/perfil.css";

let nombre = "Juan Esteban Cifuentes Castañeda";
let numGrupos = 23;
let telefono= 25330505;
let numEstudiantes = 230;

function Perfil() {
  return (
    <>
      <div class="grid-container ">
        <div class="s">
        <Sidebar name1="Mi espacio" name2="Ingresar notas" ruta1="/profesor" ruta2=""/>
        </div>
        <div class="PP">
          <div className="mt-3 profile-photo ">
            <div class="row">
              <div class="col-md-6 offset-md-3 img-photo">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUuC-VE9AlCZKatywv50H0TpGGCAEsvwN-aQ&usqp=CAU"
                  alt="Profile"
                  className="img-round"
                  width="185em"
                  height="179em"
                ></img>
              </div>
            </div>
            <div>
              <ul class="list-group mt-4 pr-5 pl-5  ">
                <li class="list-group-item text-center">
                  Nombres y Apellidos:&nbsp; {nombre}
                </li>

                <li class="list-group-item text-center">
                  Número de grupos a cargo: &nbsp; {numGrupos}
                </li>
                <li class="list-group-item text-center">
                  Teléfono: &nbsp; {telefono}
                </li>
                <li class="list-group-item text-center">
                  Número de estudiantes a cargo: &nbsp; {numEstudiantes}
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="F">
          <Footer cargo="Profesor"/>
        </div>
      </div>
    </>
  );
}

export default Perfil;
