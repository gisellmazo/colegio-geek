import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

const IngresarNotas = () => {
    function IngresarNotas(values){
        console.log(values)
        fetch('/ingresar_notas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                id_estudiante: 1,
                id_grupo: 10,
                id_materia: 3,
                tipo_nota: 'seguimiento',
                nota: 2
            })
        }).then(function(res){ alert(res) })
    }

    const validate = Yup.object({
        id_estudiante: Yup.number()
            .required('Campo requerido'),
        id_grupo: Yup.number()
            .required('Campo requerido'),
        nota: Yup.number()
            .required('Campo requerido'),
        tipo_nota: Yup.string()
            .required('Campo requerido')

    })
    return (
        <div class="grid-container ">
            <div class="s">
                <Sidebar
                    name1="Mi espacio"
                    name2="Ingresar notas"
                    ruta1="/profesor"
                    ruta2="/ingresar_notas"
                />
            </div>
            <div class="PM">
                <div className="mt-4">
                    <div className="main align-middle d-flex pl-4 pr-4">
                        <div className="row PEP">


                            <Formik
                                initialValues={{
                                    id_estudiante: '',
                                    id_grupo: '',
                                    id_materia: '',
                                    tipo_nota: '',
                                    nota: '',
                                }}
                                validationSchema={validate}
                                onSubmit={values => {
                                    
                                    IngresarNotas(values)
                                }}
                            >
                                {formik => (
                                    <Form>

                                        <div className="main align-middle d-flex pl-4 pr-4">
                                            <div class="container-row">

                                                <CampoFormulario label="id grupo:" type="number" name="id_grupo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="tipo de nota:" type="text" name="tipo_nota" estilo="texto-blanco" className="form-control diseno-imputs" />


                                            </div>
                                            <div class="container-row-middle"></div>
                                            <div class="container-row">
                                                <CampoFormulario label="Id estudiante:" type="number" name="id_estudiante" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Nota:" type="number" name="nota" estilo="texto-blanco" className="form-control diseno-imputs" />


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
            </div>
            <div class="F">
                <Footer cargo="Profesor" />
            </div>
        </div>
    );
};

export default withRouter(IngresarNotas);