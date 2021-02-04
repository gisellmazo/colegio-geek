import React from 'react';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";


function Main_estudiante() {

    const [datos, setdatos] = useState([{}])
    
    useEffect(() => {
        fetch('/perfil_estudiante?id_estudiante=1')
            .then(response => response.json())
            .then(data => setdatos(data));
            console.log(datos)
    }, [])
    //

    return (
        <div className="grid-container">

            <div className="s">
                <Sidebar name1="Mi perfil" name2="Mis notas" ruta1="/estudiante" ruta2="/ver_mis_notas" />
            </div>
            <div className="PP">
                <div className="mt-3 profile-photo ">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 img-photo">
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
                        <ul className="list-group mt-4 pr-5 pl-5  ">
                            <li className="list-group-item text-center">
                                Nombres y Apellidos: { datos[0].nombre_estudiante}
                            </li>

                            <li className="list-group-item text-center">
                                Código de mi grupo:  { datos[0].codigo_grupo}
                            </li>
                            <li className="list-group-item text-center">
                                Grado:   { datos[0].id_grado}
                            </li>
                            <li className="list-group-item text-center">
                                Director de grupo: { datos[0].nombres_apellidos}
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="F">
                <Footer cargo="Estudiante" />
            </div>
        </div>
    );
}

export default withRouter(Main_estudiante);