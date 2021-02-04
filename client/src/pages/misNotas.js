import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Card from "../components/card"



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
                            {/* {()=>{
                                let notas=[]
                                for(let i = 0; i <= datos.length; i++){
                                    for(let j = i+1; j <= datos.length; j++){
                                        if(datos[i].nombre == datos[j]){
                                            notas.push({datos}[i].notas)
                                        }

                                    }

                                }
                                console.log(notas)
                            }
                            
                            } */}


                            <div class="col-sm-6">
                                <Card name={datos[0].nombre} />
                            </div>
                            <div class="col-sm-6 ">
                                <Card name="Registrar profesor" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar grupo" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar materia" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar materia" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar materia" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar materia" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar materia" />
                            </div>
                            <div class="col-sm-6 mt-5 bottom-pa">
                                <Card name="Registrar materia" />
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