import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

function RegistrarGrupo() {
    const validate = Yup.object({
        id_profesor: Yup.number()
            .required('Campo requerido'),
        jornada: Yup.number()
            .required('Campo requerido')
            .max(3, 'solo hay 3 jornadas')
            .required('Campo requerido'),
        id_grado: Yup.number()
            .max(11, "solo hasta grado 11")
            .min(6, 'El grado mas bajo es 6')
            .required('Campo requerido'),
        codigo_grupo: Yup.number()
            .required('Campo requerido')

    })




    const [stateProfesor, setstateProfesor] = useState("");
    const [stateJornada, setstateJornada] = useState("");

    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar name1="Nuevo registro" name2="profesores" name3="estudiantes" name4="grupos" name5="materias" ruta1="/administrador" ruta2="/" ruta4="/ver_grupos_administrador" ruta5="/ver_materias_administrador" />
                </div>
                <div class="PM">
                    <div className="mt-4">


                        <Formik
                            initialValues={{

                                jornada: '',
                                codigo_grupo: '',
                                id_grado: '',
                                id_profesor: ''

                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)

                            }}
                        >
                            {formik => (
                                <Form id='formulario'>

                                    <div className="main align-middle d-flex pl-4 pr-4">
                                        <div class="container-row">
                                            <label className="texto-blanco">Profesor a cargo:</label>
                                            <select className="custom-select" onChange={(e) => {
                                                const selectedProfesor = e.target.value;
                                                setstateProfesor(selectedProfesor);

                                            }}>

                                                <option value="1">FABIO LEON RESTREPO</option>
                                                <option value="2">JAIME ALBERTO GIRALDO</option>
                                                <option value="3">ADRIANA MARIA ZULUAGA</option>
                                                <option value="4">FABIOLA RAMIREZ</option>
                                                <option value="5">MARIA DOLORES SMITH</option>
                                                <option value="6">ALBERTO CAÑAS</option>
                                                <option value="7">ALEXANDER RESTREPO</option>
                                                <option value="8">AURORA MARTINEZ</option>
                                                <option value="9">GUILLERMO ALBERTO MARÍN</option>
                                                <option value="10">FABIO RAMIREZ CASTAÑO</option>
                                            </select>
                                            <label>-</label><br />

                                            <label className="texto-blanco">Jornada</label>

                                            <select className="custom-select" onChange={(e) => {
                                                const selectedJornada = e.target.value;
                                                setstateJornada(selectedJornada);

                                            }}>

                                                <option value="1">Mañana</option>
                                                <option value="2">Tarde</option>
                                                <option value="3">Noche</option>
                                            </select>
                                            <br /><br />
                                            {/* {Fecha= Date.now()} */}
                                            <CampoFormulario label="Codigo del grupo:" type="number" name="codigo_grupo" estilo="texto-blanco" className="form-control diseno-imputs" />


                                        </div>
                                        <div class="container-row-middle"></div>
                                        <div class="container-row">
                                            <CampoFormulario label="id del profesor" id="id_profesor" type="number" name="id_profesor" estilo="texto-blanco" className="form-control diseno-imputs" defaultvalue={stateProfesor} />
                                            <CampoFormulario label=" id Jornada" type="number" name="jornada" estilo="texto-blanco" className="form-control diseno-imputs" placeholder={stateJornada} />
                                            <CampoFormulario label="Este grupo pertenece al grado:" type="number" name="id_grado" estilo="texto-blanco" className="form-control diseno-imputs" />

                                        </div>

                                    </div>
                                    <br />
                                    {/* {
                                        function borrarValores() {
                                            document.getElementById('id_profesor').value = ""

                                        }
                                    } */}
                                    <center>
                                        <button type="submit" /* onclick={borrarValores()} */>Registrar</button>
                                    </center>

                                </Form>

                            )}

                        </Formik>

                    </div>
                </div>
            </div>
            <Footer cargo="Administrador" />
        </div>
    );
}



export default withRouter(RegistrarGrupo);



