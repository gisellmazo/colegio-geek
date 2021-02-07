import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

//Componentes
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import CampoFormulario from '../components/CampoFormulario';

function RegistrarMateria() {

  const [grado1, setgrado1]= useState(0);
  const [grado2, setgrado2]= useState(0);
  const [grado3, setgrado3]= useState(0);
  const [grado4, setgrado4]= useState(0);
  const [grado5, setgrado5]= useState(0);
  const [grado6, setgrado6]= useState(0);


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
        id_grado1:grado1,
        id_grado2:grado2,
        id_grado3:grado3,
        id_grado4:grado4,
        id_grado5:grado5,
        id_grado6:grado6
      })
    }).then(function (res) { alert(res) });
  }

  const checkboxOptions = [
    { key: 'Grado 1', value: 'grado1' },
    { key: 'Grado 2', value: 'grado2' },
    { key: 'Grado 3', value: 'grado3' },
    { key: 'Grado 4', value: 'grado4' },
    { key: 'Grado 5', value: 'grado5' },
    { key: 'Grado 6', value: 'grado6' },
  ]

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
        <div class='PM'>
          <div className='mt-4'>
            <Formik
              initialValues={{
                codigo_materia: '',
                nombre: '',
                id_profesor: '',
                id_grado1: 0,
                id_grado2: 0,
                id_grado3: 0,
                id_grado4: 0,
                id_grado5: 0,
                id_grado6: 0
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
                      <br/>
                     
                      <label className="texto-blanco">Selecciona los grados asignados a esta materia:</label>
                      <br/>
                      <div className="form-check form-check-inline">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="inlineCheckbox1" 
                          name="id_grado1" 
                          value="6" 
                          onClickCapture={(e) => {
                                  const selectedgrado = e.target.value;
                                  setgrado1(selectedgrado);

                          }}
                        />
                        <label className="form-check-label texto-blanco" for="inlineCheckbox1">6</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="inlineCheckbox2" 
                          name="id_grado2" 
                          value="7"
                          onClickCapture={(e) => {
                            const selectedgrado = e.target.value;
                            setgrado2(selectedgrado);

                          }}
                        />
                        <label className="form-check-label texto-blanco" for="inlineCheckbox2">7</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="inlineCheckbox2" 
                          name="id_grado3" 
                          value="8" 
                          onClickCapture={(e) => {
                            const selectedgrado = e.target.value;
                            setgrado3(selectedgrado);

                          }}
                        />
                        <label className="form-check-label texto-blanco" for="inlineCheckbox2">8</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="inlineCheckbox2" 
                          name="id_grado4" 
                          value="9"
                          onClickCapture={(e) => {
                            const selectedgrado = e.target.value;
                            setgrado4(selectedgrado);

                          }} 
                        />
                        <label className="form-check-label texto-blanco" for="inlineCheckbox2">9</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="inlineCheckbox2" 
                          name="id_grado5" 
                          value="10" 
                          onClickCapture={(e) => {
                            const selectedgrado = e.target.value;
                            setgrado5(selectedgrado);

                          }}
                        />
                        <label className="form-check-label texto-blanco" for="inlineCheckbox2">10</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="inlineCheckbox2" 
                          name="id_grado6" 
                          value="11" 
                          onClickCapture={(e) => {
                            const selectedgrado = e.target.value;
                            setgrado6(selectedgrado);

                          }}
                        />
                        <label className="form-check-label texto-blanco" for="inlineCheckbox2">11</label>
                      </div>
                     


                    
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
