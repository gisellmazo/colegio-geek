import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

function RegistrarGrupo() {

    function registrar(datos){
        fetch('/registrar_grupo',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                jornada: datos.jornada,
                codigo_grupo: datos.codigo_grupo,
                id_grado: datos.id_grado,
                id_profesor: datos.id_profesor  })
        }).then(function (res) {
            if (res.status != 200) {
              alert('ERROR!! al grupo estudiante compruebe que los datos son correctos')
            } else {
              alert('Grupo registrado con exito')
            }
          })
        
    }

    const validate = Yup.object({
        id_profesor: Yup.number()
            .required('Campo requerido'),
        jornada: Yup.string()
            .required('Campo requerido')
            .max(3, 'solo hay 3 jornadas')
            .required('Campo requerido'),
        id_grado: Yup.number()
            .max(11, "solo hasta grado 11")
            .min(6, 'El grado mas bajo es 6')
            .required('Campo requerido'),
        codigo_grupo: Yup.string()
            .required('Campo requerido')

    })

    const [stateProfesor, setstateProfesor] = useState("");
    const [stateJornada, setstateJornada] = useState("");

    const [datosProfesores, setdatosProfesores] = useState([{}])

    useEffect(()=>{
        fetch('/ver_profesores_administrador')
        .then(response => response.json())
        .then(data => setdatosProfesores(data));
       
    },[])
    console.log(datosProfesores)
    return (
        <div>
            <div class="grid-container">
                <div class="s">
                    <Sidebar 
                        name1="Nuevo registro"
                        name2="Profesores"
                        name3="Estudiantes"
                        name4="Grupos"
                        name5="Materias"
                        name6="Generar Reportes"
                        ruta1="/administrador"
                        ruta2="/ver_profesores_administrador"
                        ruta3="/ver_estudiantes_administrador"
                        ruta4="/ver_grupos_administrador"
                        ruta5="/ver_materias_administrador"
                        ruta6="/generar_reportes_administrador"
                    />
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
                                registrar(values);
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
                                            {
                                                datosProfesores.map((dato) =>
                                                    <option value={dato.id_profesor}>{dato.nombres_apellidos}</option>
                                                )
                                            }
                                                
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
                                            <CampoFormulario label="Codigo del grupo:" type="text" name="codigo_grupo" estilo="texto-blanco" className="form-control diseno-imputs" />


                                        </div>
                                        <div class="container-row-middle"></div>
                                        <div class="container-row">
                                            <CampoFormulario label="id del profesor" id="id_profesor" type="number" name="id_profesor" estilo="texto-blanco" className="form-control diseno-imputs" placeholder={stateProfesor} />
                                            <CampoFormulario label=" id Jornada" type="text" name="jornada" estilo="texto-blanco" className="form-control diseno-imputs" placeholder={stateJornada} />
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



