import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

function RegistrarProfesor() {
    const validate = Yup.object({
        numero_documento: Yup.number('el documento no debe contener letras o simbolos')
            .required('campo requerido'),
        nombres: Yup.string()
            .required('Campo requerido'),
        apellidos: Yup.string()
            .required('Campo requerido'),
        correo: Yup.string()
            .required('Campo requerido'),
        contrasena: Yup.string()
            .required('campo requerido')
    })
    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar name1="Nuevo registro" name2="profesores" name3="estudiantes" name4="grupos" name5="materias" ruta1="/administrador" ruta2="/" ruta4="/ver_grupos_administrador" ruta5="/ver_materias_administrador"/>
                </div>
                <div class="PM">
                    <div className="mt-4">


                        <Formik
                            initialValues={{
                                tipo_documento: '',
                                numero_documento: '',
                                nombres: '',
                                apellidos: '',
                                correo: '',
                                contrasena: '',
                                materia: ''

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
                                            <label className="texto-blanco">tipo de documento:</label>
                                            <br />
                                            <select name="tipo_documento">
                                                <option value="cc">Cedula de cuidadanía</option>
                                                <option value="pp">Permiso especial de permanencia</option>
                                            </select>
                                            <br /> <br />
                                            <CampoFormulario label="Nombres:" type="text" name="nombres" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Correo:" type="email" name="correo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Materia asignada:" type="text" name="materia" estilo="texto-blanco" className="form-control diseno-imputs" />

                                        </div>
                                        <div class="container-row-middle"></div>
                                        <div class="container-row">
                                            <CampoFormulario label="Numero documento:" type="number" name="numero_documento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Apellidos:" type="text" name="apellidos" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Contraseña:" type="password" name="contrasena" estilo="texto-blanco" className="form-control diseno-imputs" />
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

export default withRouter(RegistrarProfesor);