import React from 'react';
import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Card from "../components/card"


const MisNotas = () => {

    const [datos, setdatos] = useState([{}])
   
    useEffect(() => {
        fetch('/ver_mis_notas?id_estudiante=1')
            .then(response => response.json())
            .then(data => setdatos(data));
            console.log(datos)
    }, [])
    
    return (
        <div class="grid-container ">
            <div class="s">
                <Sidebar name1="Mi perfil" name2="Mis notas" ruta1="/estudiante" ruta2="/estudiante" />
            </div>
            <div class="PM">
                <div className="mt-4">
                    <div className="main align-middle d-flex pl-4 pr-4 PEP">
                        <div class="row">
                            <div class="col-sm-6">
                                {
                                    datos.map((item) => 
                                        <Card name={item.nombre} ruta="/registrarestudiante" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="F">
                <Footer cargo="Estudiante" />
            </div>
        </div>
    );
};

export default withRouter(MisNotas);