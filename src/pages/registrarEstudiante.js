import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import Card from "../components/card"
import "../styles/pantallasPrincipales.css";

function RegistrarEstudiante() {
    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar name1="Nuevo registro" name2="profesores" name3="estudiantes" ruta1="/administrador" ruta2="/"/>
                </div>
                <div class="PM">
                    <div className="mt-4">
                        <div className="main align-middle d-flex pl-4 pr-4">
                            <div class="row">
                                
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>

        <Footer />
        </div>
    )
}

export default withRouter(RegistrarEstudiante);