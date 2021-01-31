import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";


function Main_estudiante() {
    return (
        <div class="grid-container ">
            <div class="s">
                <Sidebar name1="Mi perfil" name2="Mis notas" ruta1="/estudiante" ruta2="/vermisnotas" />
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
                                Nombres y Apellidos:
                            </li>

                            <li class="list-group-item text-center">
                                Código de mi grupo: 
                            </li>
                            <li class="list-group-item text-center">
                                Grado: 
                            </li>
                            <li class="list-group-item text-center">
                                telefono: 
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="F">
                <Footer cargo="Estudiante" />
            </div>
        </div>
    );
}

export default withRouter(Main_estudiante);