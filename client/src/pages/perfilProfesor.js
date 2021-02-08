import React from "react";
import { useEffect, useState } from 'react';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import "../styles/perfil.css";



function Perfil() {

  const [datos, setdatos] = useState([{}])
  const id_usuario= localStorage.getItem('id')
    useEffect(() => {
        fetch(`/perfil_profesor?id_profesor=${id_usuario}`)
            .then(response => response.json())
            .then(data => setdatos(data));
            console.log(datos)
    }, [])

  return (
    <>
      <div class="grid-container ">
        {console.log(datos)}
        <div class="s">
        <Sidebar 
          name1="Mi espacio" 
          name2="Ingresar notas" 
          ruta1="/profesor" 
          ruta2="/ingresar_notas"/>
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
                  Nombres y Apellidos: { datos[0].nombres_apellidos}
                </li>

                <li class="list-group-item text-center">
                Esta a cargo del grupo: { datos[0].id_grupo}
                </li>
                <li class="list-group-item text-center">
                  Materia: { datos[0].nombre}
                </li>
                <li class="list-group-item text-center">
                 El código de su grupo a cargo: { datos[0].codigo_grupo}
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
