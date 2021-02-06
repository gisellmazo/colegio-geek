import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import CampoFormulario from '../components/CampoFormulario';

function RegistrarMateria() {
  function registrar(datos) {
    fetch('/registrar_materia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigo_materia: datos.codigo_materia,
        nombre: datos.nombre,
        id_profesor: datos.id_profesor,
        id_grados: '9',
      })
    }).then(function(res){ alert(res) });
  }
  const validate = Yup.object({
    nombre: Yup.string().required('campo requerido'),
    codigo_materia: Yup.string().required('Campo requerido'),
    id_profesor: Yup.number().required('Campo requerido'),
  });
  return (
    <div>
      <div class='grid-container'>
        <div class='s'>
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
            ruta6="/generar_reportes_administrador"
          />
        </div>
        <div class='PM'>
          <div className='mt-4'>
            <Formik
              initialValues={{
                codigo_materia: '',
                nombre: '',
                id_profesor: '',
                id_grados: '',
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
                registrar(values);
              }}>
              {(formik) => (
                <Form>
                  <div className='main align-middle d-flex pl-4 pr-4'>
                    <div class='container-row'>
                      <CampoFormulario
                        label='Nombre de la materia:'
                        type='text'
                        name='nombre'
                        estilo='texto-blanco'
                        className='form-control diseno-imputs'
                      />
                      <CampoFormulario
                        label='Profesor encargado:'
                        type='number'
                        name='id_profesor'
                        estilo='texto-blanco'
                        className='form-control diseno-imputs'
                      />
                    </div>
                    <div class='container-row-middle'></div>
                    <div class='container-row'>
                      <CampoFormulario
                        label='Codigo de la materia'
                        type='text'
                        name='codigo_materia'
                        estilo='texto-blanco'
                        className='form-control diseno-imputs'
                      />
                    </div>
                  </div>
                  <br />
                  <center>
                    <button type='submit'>Registrar</button>
                  </center>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer cargo='Administrador' />
    </div>
  );
}

export default withRouter(RegistrarMateria);
