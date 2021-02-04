import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Card from "../components/card"




const MisNotas = () => {
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
                                <Card name="nombre materia 1" ruta="/registrarestudiante" />
                            </div>
                            <div class="col-sm-6 ">
                                <Card name="Registrar profesor" ruta="/registrarprofesor" />
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