import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Card from "../components/card"
import "../styles/pantallasPrincipales.css";

const GenerarReportesAdministrador = () => {
    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar 
                        name1="Nuevo registro"
                        name2="profesores"
                        name3="estudiantes"
                        name4="grupos"
                        name5="materias"
                        name6="Generar Reportes"
                        ruta1="/administrador"
                        ruta2="/ver_profesores_administrador"
                        ruta3="/ver_estudiantes_administrador"
                        ruta4="/ver_grupos_administrador"
                        ruta5="/ver_materias_administrador"
                        ruta6="/generar_reportes_administrador"
                    />
                </div>
                <div class="PM PEP">
                    <div className="mt-4">
                        <div className="main align-middle d-flex pl-4 pr-4">
                            <div class="row">
                                <div class="col-sm-6">
                                    <Card name="Reporte de cantidad de estudiantes por asignaturas" ruta=""/>
                                </div>
                                <div class="col-sm-6 ">
                                    <Card name="Reporte de cantidad de estudiantes por profesor según el grado" ruta=""/>
                                </div>
                                <div class="col-sm-6 mt-5 bottom-pa">
                                    <Card name="Reporte de calificaciones filtradas por estudiante" ruta=""/>
                                </div>
                                <div class="col-sm-6 mt-5 bottom-pa">
                                    <Card name="Reporte promedio de notas por grupo de estudiantes" ruta=""/>
                                </div>
                                <div class="col-sm-6 mt-5 bottom-pa">
                                    <Card name="Reporte promedio de notas por materia" ruta=""/>
                                </div>
                                <div class="col-sm-6 mt-5 bottom-pa">
                                    <Card name="Reporte promedio de notas por grado" ruta=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

        <Footer cargo="Administrador"/>
        </div>
    );
};

export default withRouter(GenerarReportesAdministrador);