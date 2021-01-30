import React from "react";
import "../styles/login.css";
import CampoFormulario from "../components/CampoFormulario"
import * as Yup from 'yup';


import { withRouter } from "react-router-dom";

import { Formik, Form } from 'formik';

const login = () => {
    const validate = Yup.object({
        usuario: Yup.number()
            .required('El usuario es requerido'),
        contraseña: Yup.string()
            .required('Contraseña requerida')
            .min(8, "la contraseña debe tener al menos 8 caractéres")

    })
    return (
        <body id="body-container">
            <div id="main-container">
                <div className="imagen">
                    <img src="../images/logo-colegio-geek.png" alt="logo colegio" width="50%" />
                </div>
                <br /><br /><br />
                <div>
                    <Formik
                        initialValues={{
                            tipo_usuario: undefined,
                            usuario: '',
                            contraseña: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        {formik => (
                            <div>
                                
                                <Form>
                                    <div class="row g-3 align-items-center">
                                        <label>tipo usuario:</label>
                                        <select name="tipo_usuario" className="diseno-imputs">
                                            <option value="0"> </option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Profesor</option>
                                            <option value="3">Estudiante</option>
                                        </select>

                                        <CampoFormulario label="Usuario:" type="number" name="usuario" className="form-control diseno-imputs"/>
                                        <CampoFormulario label="Contraseña:" type="password"  name="contraseña" className="form-control diseno-imputs" />
                                        <br />
                                        <button type="submit" className="diseno-imputs">Ingresar</button>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>

                </div>
            </div>
        </body>

    );
};

export default withRouter(login); 