import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"


function RegistrarProfesor() {

    function registrarProfesor(datos){
        fetch('/registrar_profesor',{
             method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                 
                tipo_documento: datos.tipo_documento,
                numero_documento: datos.numero_documento,
                nombres_apellidos: datos.nombres_apellidos,
                correo: datos.correo,    
                contrasena: datos.contrasena,
                })
        }).then(function(res){ alert(res) })
        
    }

    const [documento, setdocumento] = useState("")
    



    const validate = Yup.object({
        numero_documento: Yup.string('el documento no debe contener letras o simbolos')
            .required('campo requerido'),
        nombres_apellidos: Yup.string()
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
                    <Sidebar 
                        name1="Nuevo registro"
                        name2="profesores"
                        name3="estudiantes"
                        name4="grupos"
                        name5="materias"
                        ruta1="/administrador"
                        ruta2="/ver_profesores_administrador"
                        ruta3="/ver_estudiantes_administrador"
                        ruta4="/ver_grupos_administrador"
                        ruta5="/ver_materias_administrador"
                    />
                </div>
                <div class="PM">
                    <div className="mt-4">


                        <Formik
                            initialValues={{
                                tipo_documento: '',
                                numero_documento: '',
                                nombres_apellidos: '',
                                correo: '',
                                contrasena: ''
                                

                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values);
                                registrarProfesor(values);
                            }}
                        >
                            {formik => (
                                <Form>

                                    <div className="main align-middle d-flex pl-4 pr-4">
                                        <div class="container-row">
                                            <label className="texto-blanco">tipo de documento:</label>
                                            <br />
                                            <select onChange={(e) => {
                                                    const selecteddocumento = e.target.value;
                                                    setdocumento(selecteddocumento);

                                                }}>
                                                    <option value="CC">Cedula de ciudadanía</option>
                                                    <option value="TI">Tarjeta de identidad</option>
                                                    <option value="PP">Permiso especial de permanencia</option>
                                                </select>
                                            <br /> <br />
                                            <CampoFormulario label="Nombre Completo:" type="text" name="nombres_apellidos" estilo="texto-blanco" className="form-control diseno-imputs" />
                                            <CampoFormulario label="Correo:" type="email" name="correo" estilo="texto-blanco" className="form-control diseno-imputs" />

                                        </div>
                                        <div class="container-row-middle"></div>
                                        <div class="container-row">
                                            <CampoFormulario label="tipo documento:" type="string" name="tipo_documento" estilo="texto-blanco" className="form-control diseno-imputs" placeholder={documento}/>
                                            <CampoFormulario label="Numero documento:" type="text" name="numero_documento" estilo="texto-blanco" className="form-control diseno-imputs" />
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