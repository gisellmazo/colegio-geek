import React from 'react';
import '../styles/login.css';
import { useEffect, useState } from 'react';
import CampoFormulario from '../components/CampoFormulario';
import * as Yup from 'yup';

import { withRouter } from 'react-router-dom';

import { Formik, Form } from 'formik';



function Login() {
  const [datos, setdatos] = useState([{}]);

function iniciarSesion() {
     fetch('/inicio_sesion')
      .then((response) => response.json())
      .then((data) => setdatos(data))
      .then(response=>{
        if(response.length>0){
          let respuesta = response[0];
          if(respuesta.tipo_usuario == 1){
            localStorage.setItem('id', response.id_admin)
            window.location.href = '/administrador'
          }else if(respuesta.tipo_usuario == 2){
            localStorage.setItem('id', response.id_profesor)
            window.location.href = '/profesor'
          }else if(respuesta.tipo_usuario == 3){
            localStorage.setItem('id', response.id_estudiante)
            window.location.href = '/estudiante'
          }


        }
      })
    }
  //    
  console.log(datos[0].id_estudiante)
  const validate = Yup.object({
    usuario: Yup.number().required('El usuario es requerido'),
    contraseña: Yup.string()
      .required('Contraseña requerida')
      .min(8, 'la contraseña debe tener al menos 8 caractéres'),
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
              contraseña: '',
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
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
                      name='contraseña'
                      className='form-control diseno-imputs'
                    />
                    <br />
                    <button type='submit' onClick={iniciarSesion()} className='diseno-imputs'>
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
