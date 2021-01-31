import React from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

import "../styles/pantallasPrincipales.css";
import "../styles/registros.css"


function RegistrarEstudiante() {
    const validate = Yup.object({
        numero_documento: Yup.number('el documento no debe contener letras o simbolos')
            .required('campo requerido'),
        nombres: Yup.string()
            .required('Campo requerido'),
        apellidos: Yup.string()
            .required('Campo requerido'),
        sexo: Yup.string()
            .required('Campo requerido'),
        fecha_nacimiento: Yup.date()
            .required('Campo requerido'),
        ciudad_nacimineto: Yup.string()
            .required('Campo requerido'),
        direccion_residencia: Yup.string()
            .required('Campo requerido'),
        telefono: Yup.number()
            .required('Campo requerido'),
        celular: Yup.number()
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
                    <Sidebar name1="Nuevo registro" name2="profesores" name3="estudiantes" ruta1="/administrador" ruta2="/" />
                </div>
                <div class="PM">
                    <div className="mt-4">


                        <Formik
                            initialValues={{
                                tipo_documento: '',
                                numero_documento: '',
                                nombres: '',
                                apellidos: '',
                                sexo: '',
                                fecha_nacimiento: '',
                                ciudad_nacimineto: '',
                                direccion_residencia: '',
                                telefono: '',
                                celular: '',
                                correo: '',
                                foto: '',
                                pdf_documento: '',
                                contrasena: ''

                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <Form>
                                    <div className="PEP">
                                        <div className="main align-middle d-flex pl-4 pr-4">
                                            <div class="container-row">
                                                <label className="texto-blanco">tipo de documento:</label>
                                                <br />
                                                <select name="tipo_documento">
                                                    <option value="cc">Cedula de cuidadanía</option>
                                                    <option value="ti">Tarjeta de identidad</option>
                                                    <option value="pp">Permiso especial de permanencia</option>
                                                </select>
                                                <br /> <br />
                                                <CampoFormulario label="Nombres:" type="text" name="nombres" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Sexo:" type="text" name="sexo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Ciudad de nacimiento:" type="text" name="ciudad_nacimineto" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Telefono:" type="number" name="telefono" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Correo:" type="email" name="correo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Foto:" type="file" name="foto" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            </div>
                                            <div class="container-row-middle"></div>
                                            <div class="container-row">
                                                <CampoFormulario label="Numero documento:" type="number" name="numero_documento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Apellidos:" type="text" name="apellidos" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Fecha nacimiento:" type="date" name="fecha_nacimiento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Direccion de residencia:" type="text" name="direccion_residencia" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Celular:" type="number" name="celular" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Contraseña:" type="password" name="contrasena" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Documento en pdf:" type="file" name="pdf_documento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            </div>

                                        </div>
                                        <br />
                                        <center>
                                            <button type="submit">Registrar</button>
                                        </center>
                                        <br/><br/><br/>
                                    </div>
                                    

                                </Form>

                            )}
                        </Formik>

                    </div>
                </div>
            </div>
            <Footer cargo="Administrador" />
        </div>
    )
}

export default withRouter(RegistrarEstudiante);