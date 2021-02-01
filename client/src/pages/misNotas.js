import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";



function MisNotas() {
    const [datos,setdatos]=useState([{}])

    useEffect(()=>{
        fetch('/ver_mis_notas?id_estudiante=1')
            .then(response => response.json())
            .then(data => setdatos(data));
    },[])

    
    return (
        <div class="grid-container ">
            {console.log(datos)}
            <div class="s">
                <Sidebar name1="Mi perfil" name2="Mis notas" ruta1="/estudiante" ruta2="/estudiante" />
            </div>
            <div class="PM">
                <div className="mt-4">
                    <div className="main align-middle d-flex pl-4 pr-4 PEP">
                        <div class="row">
                            
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