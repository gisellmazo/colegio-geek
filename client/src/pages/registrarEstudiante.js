import React, {useEffect, useState} from 'react';
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

    function registrar(datos){
        fetch('/registrar_estudiante',{
            method: 'POST',
            body: JSON.stringify(datos[0])
        })
        
    }
     
 
    const validate = Yup.object({
        numero_documento: Yup.string('')
            .required('campo requerido'),
        nombres_apellidos: Yup.string()
            .required('Campo requerido'),
        sexo: Yup.string()
            .required('Campo requerido'),
        fecha_nacimiento: Yup.date()
            .required('Campo requerido'),
        direccion_residencia: Yup.string()
            .required('Campo requerido'),
        telefono: Yup.string()
            .required('Campo requerido'),
        celular: Yup.string()
            .required('Campo requerido'),
        correo: Yup.string()
            .required('Campo requerido'),
        contrasena: Yup.string()
            .required('campo requerido'),
        tipo_documento: Yup.string('')
            .required('Campo requerido')
    })

    const [documento, setdocumento] = useState("")

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
                                nombres_apellidos: '',
                                sexo: '',
                                fecha_nacimiento: '',
                                ciudad_nacimineto: '',
                                direccion_residencia: '',
                                telefono: '',
                                celular: '',
                                correo: '',
                                //foto: '',
                                //pdf_documento: '',
                                contrasena: '',
                                id_grupo: ''

                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values);
                                registrar(values);
                            }}
                        >
                            {formik => (
                                <Form>
                                    <div className="PEP">
                                        <div className="main align-middle d-flex pl-4 pr-4">
                                            <div class="container-row">
                                                <label className="texto-blanco">tipo de documento:</label>
                                                <br />
                                                <select onChange={(e) => {
                                                    const selecteddocumento = e.target.value;
                                                    setdocumento(selecteddocumento);

                                                }}>
                                                    <option value="CC">Cedula de cuidadanía</option>
                                                    <option value="TI">Tarjeta de identidad</option>
                                                    <option value="PP">Permiso especial de permanencia</option>
                                                </select>
                                                <br /> <br />
                                                <CampoFormulario label="Nombre completo:" type="text" name="nombres_apellidos" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Sexo:" type="text" name="sexo" estilo="texto-blanco" className="form-control diseno-imputs" placeholder="F o M" />
                                                <CampoFormulario label="Ciudad de nacimiento:" type="text" name="ciudad_nacimineto" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Telefono:" type="text" name="telefono" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Correo:" type="email" name="correo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Id grupo:" type="number" name="id_grupo" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Foto:" type="file" name="foto" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            </div>
                                            <div class="container-row-middle"></div>
                                            <div class="container-row">
                                                <CampoFormulario label="tipo documento:" type="string" name="tipo_documento" estilo="texto-blanco" className="form-control diseno-imputs" placeholder={documento}/>
                                                <CampoFormulario label="Numero documento:" type="string" name="numero_documento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Fecha nacimiento:" type="date" name="fecha_nacimiento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Direccion de residencia:" type="text" name="direccion_residencia" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Celular:" type="text" name="celular" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Contraseña:" type="password" name="contrasena" estilo="texto-blanco" className="form-control diseno-imputs" />
                                                <CampoFormulario label="Documento en pdf:" type="file" name="pdf_documento" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            </div>

                                        </div>
                                        <br />
                                        <center>
                                            <button type="submit">Registrar</button>
                                        </center>
                                        <br/><br/><br/><br/><br/>
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