import React from 'react';
import '../styles/login.css';
import { useEffect, useState } from 'react';
import CampoFormulario from '../components/CampoFormulario';
import * as Yup from 'yup';

import { withRouter } from 'react-router-dom';

import { Formik, Form } from 'formik';



function Login() {
  const [datos, setdatos] = useState([{}]);

function iniciarSesion(values) {
     fetch('/inicio_sesion?' + new URLSearchParams({
   
         tipo_usuario: values.tipo_usuario,
         numero_documento: values.usuario,
         contrasena: values.contrasena
     
     }))
      .then((response) => response.json())
      .then((data) => setdatos(data))
      .then(()=>{
        console.log(datos)
        if(datos.length >0){
          let respuesta = datos[0];
          console.log(respuesta.tipo_usuario)
          if(respuesta.tipo_usuario == 1){
            
            localStorage.setItem('id', respuesta.id_admin, { path: "/" })
            window.location.href = '/administrador'
          }else if(respuesta.tipo_usuario == 2){
            localStorage.setItem('id', respuesta.id_profesor, { path: "/" })
            window.location.href = '/profesor'
          }else if(respuesta.tipo_usuario == 3){
            localStorage.setItem('id', respuesta.id_estudiante, { path: "/" })
            window.location.href = '/estudiante'
          }

        }
      })
    }
  //    
  console.log(datos[0].id_estudiante)
  const validate = Yup.object({
    usuario: Yup.number().required('El usuario es requerido'),
    contrasena: Yup.string()
      .required('Contraseña requerida'),
    tipo_usuario: Yup.number()
  });

  return (
    <body id='body-container'>
      <div id='main-container'>
        <div className='imagen'>
          <img
            src='../images/logo-colegio-geek.png'
            alt='logo colegio'
            width='50%'
          />
        </div>
        <br />
        <br />
        <br />
        <div>
          <Formik
            initialValues={{
              tipo_usuario: '',
              usuario: '',
              contrasena: '',
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
              iniciarSesion(values)
            }}>
            {(formik) => (
              <div>
                <Form>
                  <div class='row g-3 align-items-center'>
              
                    <CampoFormulario
                      label='Tipo usuario:'
                      type='number'
                      name='tipo_usuario'
                      className='form-control diseno-imputs color-letra'
                    />
                    <CampoFormulario
                      label='Usuario:'
                      type='number'
                      name='usuario'
                      className='form-control diseno-imputs color-letra'
                    />
                    <CampoFormulario
                      label='Contraseña:'
                      type='password'
                      name='contrasena'
                      className='form-control diseno-imputs'
                    />
                    <br />
                    <button type='submit' className='diseno-imputs'>
                      Ingresar
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
          
        </div>
      </div>
    </body>
  );
}

export default withRouter(Login);
