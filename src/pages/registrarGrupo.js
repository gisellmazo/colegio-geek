import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

function RegistrarGrupo() {
    const validate = Yup.object({
        id_profesor: Yup.string()
            .required('campo requerido'),
        jornada: Yup.number()
            .required('Campo requerido')
            .max(3,'solo hay 3 jornadas')
            .required('Campo requerido'),
        id_grado: Yup.number()
            .max(11, "solo hasta grado 11")
            .min(6, 'El grado mas bajo es 6')
            .required('Campo requerido'),
        codigo_grupo: Yup.number()
            .required('Campo requerido')
        
    })
    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar name1="Nuevo registro" name2="profesores" name3="estudiantes" ruta1="/administrador" ruta2="/" />
                </div>
                <div class="PM">
                    <div className="mt-4">


                        <Formik
                            initialValues={{
                                id_profesor:'',
                                jornada:'',
                                promedio_notas:'',
                                codigo_grupo:'',
                                id_grado:'',
                                id_materias:''


                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <Form>

                                    <div className="main align-middle d-flex pl-4 pr-4">
                                        <div class="container-row">
                                            
                                            <CampoFormulario label="Profesor a cargo:" type="text" name="id_profesor" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Codigo del grupo:" type="number" name="codigo_grupo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            

                                        </div>
                                        <div class="container-row-middle"></div>
                                        <div class="container-row">
                                            <CampoFormulario label="Jornada" type="number" name="jornada" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Este grupo pertenece al grado:" type="number" name="id_grado" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            
                                        </div>

                                    </div>
                                    <br />
                                    <center>
                                        <button type="submit">Registrar</button>
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