import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//import $ from 'jquery';

//Componentes
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import CampoFormulario from "../components/CampoFormulario"

import "../styles/pantallasPrincipales.css";
import "../styles/registros.css"

/* $(function(){
  const form = $("#formulario_registrar_estudiante")

  form.on("submit", function(event){
    event.preventDefault()

    const file = $("#image")[0].files[0]

    console.log(file)

    const formData = new FormData

    formData.append("file", file)

    $.ajax({
      type: 'POST',
      url: "/upload_image",
      data: FormData,
      contentType:false,
      processData: false
    }).then(result => {
      console.log(result);
      return false;
    })

    })
}) */

function RegistrarEstudiante() {

  const [documento, setdocumento] = useState("");

  function registrar(datos) {
    const fecha = new Date().getFullYear() + '0';

    fetch('ver_id_estudiante')
      .then((response) => response.json())
      .then((data) =>
        fetch('/registrar_estudiante', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            codigo_estudiante: fecha + (data[0].ultimo_id + 1),
            tipo_documento: documento,
            correo: datos.correo,
            contrasena: datos.contrasena,
            nombres_apellidos: datos.nombres_apellidos,
            sexo: datos.sexo,
            fecha_nacimiento: datos.fecha_nacimiento,
            direccion: datos.direccion_residencia,
            ciudad: datos.ciudad,
            telefono_fijo: datos.telefono,
            celular: datos.celular,
            id_grupo: datos.id_grupo,
            numero_documento: datos.numero_documento,
          })
        }).then(function (res) {
          if (res.status != 200) {
            alert('ERROR!! al registrar estudiante compruebe que los datos son correctos')
          } else {
            alert('Estudiante registrado con exito')
          }
        })

      );

    fetch('/send_mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: datos.correo,
        subject: 'Bienvenido al Colegio Geek!,  ' + datos.nombres_apellidos,
        username: datos.numero_documento,
        password: datos.contrasena,
        full_name: datos.nombres_apellidos,
      }),
    });
  }

    

    
  const validate = Yup.object({
    numero_documento: Yup.string('').required('campo requerido'),
    nombres_apellidos: Yup.string().required('Campo requerido'),
    sexo: Yup.string().required('Campo requerido'),
    fecha_nacimiento: Yup.date().required('Campo requerido'),
    direccion_residencia: Yup.string().required('Campo requerido'),
    telefono: Yup.string().required('Campo requerido'),
    celular: Yup.string().required('Campo requerido'),
    correo: Yup.string().required('Campo requerido'),
    contrasena: Yup.string().required('campo requerido')
  });

    return (
      <div>
        <div class='grid-container'>
          <div class='s'>
            <Sidebar
              name1='Nuevo registro'
              name2='Profesores'
              name3='Estudiantes'
              name4='Grupos'
              name5='materias'
              name6='Generar reportes'
              ruta1='/administrador'
              ruta2='/ver_profesores_administrador'
              ruta3='/ver_estudiantes_administrador'
              ruta4='/ver_grupos_administrador'
              ruta5='/ver_materias_administrador'
              ruta6='/generar_reportes_administrador'
            />
          </div>
          <div class='PM'>
            <div className='mt-4'>
              <Formik
                initialValues={{
                  tipo_documento: '',
                  numero_documento: '',
                  nombres_apellidos: '',
                  sexo: '',
                  fecha_nacimiento: '',
                  ciudad: '',
                  direccion_residencia: '',
                  telefono: '',
                  celular: '',
                  correo: '',
                  foto: '',
                  pdf_documento: '',
                  contrasena: '',
                  id_grupo: '',
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                  registrar(values);
                }}>
                {(formik) => (
                  <Form id="formulario_registrar_estudiante">
                    <div className='PEP'>
                      <div className='main align-middle d-flex pl-4 pr-4'>
                        <div class='container-row'>
                          <label className='texto-blanco'>
                            tipo de documento:
                          </label>
                          <br />
                          <select
                            onChange={(e) => {
                              const selecteddocumento = e.target.value;
                              setdocumento(selecteddocumento);
                            }}>
                            <option>-</option>
                            <option value='CC'>Cedula de ciudadanía</option>
                            <option value='TI'>Tarjeta de identidad</option>
                            <option value='PP'>
                              Permiso especial de permanencia
                            </option>
                          </select>
                          <br /> <br />
                          <CampoFormulario
                            label='Nombre completo:'
                            type='text'
                            name='nombres_apellidos'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Sexo:'
                            type='text'
                            name='sexo'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                            placeholder='F o M'
                          />
                          <CampoFormulario
                            label='Ciudad de nacimiento:'
                            type='text'
                            name='ciudad'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Telefono:'
                            type='text'
                            name='telefono'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Correo:'
                            type='email'
                            name='correo'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          
                          <CampoFormulario
                            label='Foto:'
                            type='file'
                            name='foto'
                            id="image"
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                        </div>
                        <div class='container-row-middle'></div>
                        <div class='container-row'>
                          <CampoFormulario
                            label='Numero documento:'
                            type='string'
                            name='numero_documento'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Fecha nacimiento:'
                            type='date'
                            name='fecha_nacimiento'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Direccion de residencia:'
                            type='text'
                            name='direccion_residencia'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Celular:'
                            type='text'
                            name='celular'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Contraseña:'
                            type='password'
                            name='contrasena'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Id grupo:'
                            type='number'
                            name='id_grupo'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                          <CampoFormulario
                            label='Documento en pdf:'
                            type='file'
                            name='pdf_documento'
                            estilo='texto-blanco'
                            className='form-control diseno-imputs'
                          />
                        </div>
                      </div>
                      <br />
                      <center>
                        <button type='submit'>Registrar</button>
                      </center>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <Footer cargo='Administrador' />
      </div>
    )
}

export default withRouter(RegistrarEstudiante);