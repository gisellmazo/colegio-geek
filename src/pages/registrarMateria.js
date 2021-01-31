import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

function RegistrarMateria() {
    const validate = Yup.object({
        nombre: Yup.string()
            .required('campo requerido'),
        codigo_materia: Yup.string()
            .required('Campo requerido'),
        id_profesor: Yup.number()
            .required('Campo requerido'),
    
        
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
                                nombre:'',
                                codigo_materia:'',
                                id_profesor:'',
                                promedio_notas:'',


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
                                            
                                            <CampoFormulario label="Nombre de la materia:" type="text" name="nombre" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Profesor encargado:" type="number" name="id_profesor" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            

                                        </div>
                                        <div class="container-row-middle"></div>
                                        <div class="container-row">
                                            <CampoFormulario label="Codigo de la materia" type="text" name="codigo_materia" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            
                                            
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

export default withRouter(RegistrarMateria);