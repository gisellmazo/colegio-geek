const { Router } = require('express');
const router = Router();
const {
  validacion_registrarEstudiante,
  validacion_grupos,
  validacion_Profesor,
  validacion_registro_materia,
} = require('../../validaciones/validaciones');

const jwt = require('jsonwebtoken');
const PDF = require('pdfkit');
const fs = require('fs');
const { pool } = require('../../database/database');



router.get('/inicio_sesion', async (req, res) => {
  let client = await pool.connect();
  const { numero_documento, contrasena, tipo_usuario } = req.query;

  const token = jwt.sign(contrasena, 'token_contrasena');
  
  try {
    if (tipo_usuario == 1) {
      let result = await client.query(
        `select id_admin, tipo_usuario from administrador where contrasena = $1 and numero_documento = $2`,
        [token, numero_documento]
      );
      if (result.rowCount == 0) {
        return res.json('usuario no encontrado verifica datos');
      }
      return res.json(result.rows);
    } else if (tipo_usuario == 2) {
      let result = await client.query(
        `select id_profesor, tipo_usuario from profesores where contrasena = $1 and numero_documento = $2 `,
        [token, numero_documento]
      );
      if (result.rowCount == 0) {
        return res.json('usuario no encontrado verifica datos');
      }
      return res.json(result.rows);
    } else if (tipo_usuario == 3) {
      let result = await client.query(
        `select id_estudiante, tipo_usuario from estudiantes where contrasena = $1 and numero_documento = $2`,
        [token, numero_documento]
      );
      if (result.rowCount == 0) {
        return res.json('usuario no encontrado verifica datos');
      }
      return res.json(result.rows);
    } else {
      return res.json('usuario no encontrado verifica datos');
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.release(true);
  }
});

router.post('/registrar_estudiante', async (req, res) => {
  try {
    const {
      id_grupo,
      codigo_estudiante,
      tipo_documento,
      numero_documento,
      correo,
      contrasena,
      nombres_apellidos,
      sexo,
      fecha_nacimiento,
      direccion,
      ciudad,
      telefono_fijo,
      celular,
    } = req.body;

    

    const validacion = await validacion_registrarEstudiante.validateAsync(
      req.body
    );

    const token = jwt.sign(contrasena, 'token_contrasena');

    const client = await pool.connect();
    const response = await client.query(
      `INSERT INTO estudiantes(
            id_grupo,
            codigo_estudiante,
            tipo_documento,
            numero_documento,
            correo,
            contrasena,
            nombres_apellidos,
            sexo,
            fecha_nacimiento,
            direccion,
            ciudad,
            telefono_fijo,
            celular) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id_estudiante`,
      [
        id_grupo,
        codigo_estudiante,
        tipo_documento,
        numero_documento,
        correo,
        token,
        nombres_apellidos,
        sexo,
        fecha_nacimiento,
        direccion,
        ciudad,
        telefono_fijo,
        celular,
      ]
    );

    if (response.rowsCount > 0) {
      res.json({
        id_estudiante: response.rows[0].id_estudiante,
        id_grupo,
        codigo_estudiante,
        tipo_documento,
        numero_documento,
        correo,
        contrasena,
        nombres_apellidos,
        sexo,
        fecha_nacimiento,
        direccion,
        ciudad,
        telefono_fijo,
        celular,
      });
    } else {
      res.json('estudiante registrado');
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ errorCode: e.errno, message: 'Error en el servidor' });
  }
});



router.post('/registrar_profesor', async (req, res) => {
  try {
    const {
      tipo_documento,
      numero_documento,
      nombres_apellidos,
      correo,
      contrasena,
    } = req.body;
    const validaciones = await validacion_Profesor.validateAsync(req.body);
    const token = jwt.sign(contrasena, 'token_contrasena');
    const client = await pool.connect();
    const response = await client.query(
      `INSERT INTO profesores(
            tipo_documento,
            numero_documento,
            nombres_apellidos,
            correo,
            contrasena) VALUES ($1, $2, $3, $4, $5)RETURNING id_profesor`,
      [tipo_documento, numero_documento, nombres_apellidos, correo, token]
    );

    if (response.rowsCount > 0) {
      res.json({
        id_profesor: response.rows[0].id_profesor,
        tipo_documento,
        numero_documento,
        nombres_apellidos,
        correo,
        contrasena,
        tipo_usuario,
      });
    } else {
      res.json('profesor registrado');
    }
  } catch (e) {
    res
      .status(500)
      .json({ errorCode: e.errno, message: 'Error en el servidor' });
    console.log(e);
  }
});

router.post('/registrar_materia', async (req, res) => {
  try {
    const validacion = await validacion_registro_materia.validateAsync(
      req.body
    );
    const { codigo_materia, nombre, id_profesor, id_grado1, id_grado2, id_grado3, id_grado4, id_grado5, id_grado6 } = req.body;
    const client = await pool.connect();
    const response = await client.query(
      `INSERT INTO materias(
            codigo_materia,
            nombre,
            id_profesor,
            id_grado1, 
            id_grado2, 
            id_grado3, 
            id_grado4, 
            id_grado5, 
            id_grado6) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [codigo_materia, nombre, id_profesor, id_grado1, id_grado2, id_grado3, id_grado4, id_grado5, id_grado6]
    );

    if (response.rowsCount > 0) {
      res.json({
        id_materia: response.rows[0].id_materia,
        codigo_materia,
        nombre,
        id_profesor,
        id_grado1, 
        id_grado2, 
        id_grado3, 
        id_grado4, 
        id_grado5, 
        id_grado6
      });
    } else {
      res.send('Materia registrada');
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ errorCode: e.errno, message: 'Error en el servidor' });
  }
});

router.post('/registrar_grupo', async (req, res) => {
  try {
    const validacion = await validacion_grupos.validateAsync(req.body);
    const { codigo_grupo, id_profesor, id_grado, jornada } = req.body;
    const client = await pool.connect();
    const response = await client.query(
      `INSERT INTO grupos(
            codigo_grupo,
            id_profesor,
            id_grado,
            jornada) VALUES ($1, $2, $3, $4)`,
      [codigo_grupo, id_profesor, id_grado, jornada]
    );

    if (response.rowsCount > 0) {
      res.json({
        id_grupo: response.rows[0].id_grupo,
        codigo_grupo,
        id_profesor,
        id_grado,
        jornada,
      });
    } else {
      res.json('Grupo registrado');
    }
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ errorCode: e.errno, message: 'Error en el servidor' });
  }
});

router.get('/ver_materias', async (req, res) => {
  const client = await pool.connect();
  client.query(`SELECT * FROM  materias`, (error, resulset) => {
    client.release(true);
    if (error) {
      return res.status(500).send('Se presento un error en la base de datos.');
    } else {
      return res.json(resulset.rows);
    }
  });
});

router.get('/ver_grupos_administrador', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT grupos.id_grupo, grupos.codigo_grupo, grupos.id_grado, grupos.jornada, profesores.nombres_apellidos FROM  grupos INNER JOIN profesores ON grupos.id_profesor= profesores.id_profesor`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        return res.json(resulset.rows);
      }
    }
  );
});

router.get('/ver_materias_administrador', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT materias.nombre, profesores.nombres_apellidos FROM  materias INNER JOIN profesores ON materias.id_profesor=profesores.id_profesor`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        return res.json(resulset.rows);
      }
    }
  );
});

router.get('/ver_estudiantes_administrador', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT estudiantes.nombres_apellidos, grupos.id_grado, estudiantes.id_grupo, grupos.codigo_grupo
  FROM estudiantes 
  INNER JOIN grupos ON estudiantes.id_grupo=grupos.id_grupo
  ORDER BY grupos.id_grado`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        return res.json(resulset.rows);
      }
    }
  );
});

router.get('/ver_profesores_administrador', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT profesores.nombres_apellidos, profesores.id_profesor, materias.nombre 
  FROM profesores
  INNER JOIN materias ON profesores.id_profesor = materias.id_profesor
  `,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        return res.json(resulset.rows);
      }
    }
  );
});


router.get('/cantidad_estudiantes_asignatura', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT COUNT(id_estudiante) as cantidad_estudiantes, materias.nombre as nombre_materia
  FROM estudiantes
  INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo
  INNER JOIN materias ON grupos.id_grado = materias.id_grado1 OR grupos.id_grado = materias.id_grado2 OR grupos.id_grado = materias.id_grado3 OR grupos.id_grado = materias.id_grado4 OR grupos.id_grado = materias.id_grado5 OR grupos.id_grado = materias.id_grado6
  GROUP BY materias.nombre`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(
            __dirname + '/reportes/cantidad_estudiantes_por_asignatura.pdf'
          )
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Cantidad estudiantes por asignatura:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });
        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text('Materia: ' + respuesta[i].nombre_materia + ':', {
            align: 'left',
          });
          doc.text(
            'Cantidad de estudiantes: ' + respuesta[i].cantidad_estudiantes,
            {
              align: 'left',
            }
          );

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end();
      }
    }
  );
});

router.get('/descargar_cantidad_estudiantes_materia', function (req, res) {
  var file = __dirname + '/reportes/cantidad_estudiantes_por_asignatura.pdf';
  res.download(file);
});

router.get('/ver_id_estudiante', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT MAX(id_estudiante) as ultimo_id FROM estudiantes`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        return res.json(resulset.rows);
      }
    }
  );
});

router.get('/cantidad_estudiantes_profesor_grado', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT COUNT(id_estudiante) as cantidad_estudiantes, profesores.nombres_apellidos as nombre_profesor, grupos.id_grado as grado
  FROM estudiantes
  INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo
  INNER JOIN materias ON grupos.id_grado = materias.id_grado1 OR grupos.id_grado = materias.id_grado2 OR grupos.id_grado = materias.id_grado3 OR grupos.id_grado = materias.id_grado4 OR grupos.id_grado = materias.id_grado5 OR grupos.id_grado = materias.id_grado6
  INNER JOIN profesores ON profesores.id_profesor=materias.id_profesor
  GROUP BY grupos.id_grado, profesores.nombres_apellidos`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(
            __dirname + '/reportes/cantidad_estudiantes_profesor_grado.pdf'
          )
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Cantidad de estudiantes por profesor según el grado:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });

        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text('Profesor: ' + respuesta[i].nombre_profesor + ':', {
            align: 'left',
          });
          doc.text('Grado: ' + respuesta[i].grado, {
            align: 'left',
          });
          doc.text(
            'Cantidad de estudiantes: ' + respuesta[i].cantidad_estudiantes,
            {
              align: 'left',
            }
          );

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end();
      }
    }
  );
});

router.get(
  '/descargar_cantidad_estudiantes_profesor_grado',
  function (req, res) {
    var file = __dirname + '/reportes/cantidad_estudiantes_profesor_grado.pdf';
    res.download(file);
  }
);

// Servicio calificaciones por estudiante
router.get('/reporte_calificaciones_por_estudiante', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT estudiantes.nombres_apellidos, notas.nota FROM notas JOIN estudiantes ON notas.id_estudiante = estudiantes.id_estudiante
    ORDER BY estudiantes.nombres_apellidos`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        //return res.json(resulset.rows);
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(
            __dirname + '/reportes/reporte_calificaciones_por_estudiante.pdf'
          )
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Calificaciones por estudiante:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });
        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text('Nombre: ' + respuesta[i].nombres_apellidos + ':', {
            align: 'left',
          });
          doc.text('Nota: ' + respuesta[i].nota, {
            align: 'left',
          });

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end();
      }
    }
  );
});
router.get('/descargar_calificaciones_por_estudiante', function (req, res) {
  var file = __dirname + '/reportes/reporte_calificaciones_por_estudiante.pdf';
  res.download(file);
});

//servicio promedio de notas
router.get('/promedio_notas_grupo', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT avg(nota) as promedio_notas, grupos.codigo_grupo
  FROM notas 
  INNER JOIN grupos ON notas.id_grupo = grupos.id_grupo
  group by grupos.id_grupo`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(__dirname + '/reportes/promedio_notas_grupo.pdf')
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Reporte del promedio de las notas en cada grado:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });
        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text(respuesta[i].codigo_grupo + ':', {
            align: 'left',
          });
          doc.text(respuesta[i].promedio_notas, {
            align: 'left',
          });

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end();
      }
    }
  );
});
router.get('/descargar_promedio_notas_grupo', function (req, res) {
  var file = __dirname + '/reportes/promedio_notas_grupo.pdf';
  res.download(file);
});

router.get('/promedio_notas_grado', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT avg(nota) as promedio_notas, grados.grado
  FROM notas 
  JOIN grupos ON notas.id_grupo = grupos.id_grupo
  JOIN grados ON grupos.id_grado = grados.id_grado
  group by grados.id_grado
  ORDER BY grados.id_grado`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(__dirname + '/reportes/promedio_notas_grado.pdf')
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Reporte del promedio de las notas en cada grado:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });
        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text(
            'El promedio de notas en el grado ' + respuesta[i].grado + ' es:',
            {
              align: 'left',
            }
          );
          doc.text(respuesta[i].promedio_notas, {
            align: 'left',
          });

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end();
      }
    }
  );
});

router.get('/descargar_promedio_notas_grado', function (req, res) {
  var file = __dirname + '/reportes/promedio_notas_grado.pdf';
  res.download(file);
});

//servicio promedio de notas por materia
router.get('/promedio_notas_materia', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT avg(nota) as promedio_notas, materias.codigo_materia, materias.nombre
  FROM notas 
  INNER JOIN materias ON notas.id_materia = materias.id_materia
  group by materias.id_materia`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(
            __dirname + '/reportes/promedio_notas_materia.pdf'
          )
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Reporte del promedio de las notas en cada materia:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });
        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text('El nombre de la materia es ' + respuesta[i].nombre, {
            align: 'left',
          });
          doc.text(respuesta[i].codigo_materia, {
            align: 'left',
          });
          doc.text(respuesta[i].promedio_notas, {
            align: 'left',
          });

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end();
      }
    }
  );
});

router.get('/descargar_promedio_notas_materia', function (req, res) {
  var file = __dirname + '/reportes/promedio_notas_materia.pdf';
  res.download(file);
});

//reporte final
router.get('/reporte_final', async (req, res) => {
  const client = await pool.connect();
  client.query(
    `SELECT avg(nota) as nota_final, estudiantes.nombres_apellidos
  FROM notas 
  INNER JOIN estudiantes ON estudiantes.id_estudiante = notas.id_estudiante
  GROUP BY estudiantes.nombres_apellidos`,
    (error, resulset) => {
      client.release(true);
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send('Se presento un error en la base de datos.');
      } else {
        let doc = new PDF();
        doc.pipe(
          fs.createWriteStream(
            __dirname + '/reportes/reporte_final.pdf'
          )
        );
        doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, { width: 210 });
        doc.text('Reporte de estudiantesque aprueban o desaprueban:', {
          align: 'center',
        });
        doc.text(' ', {
          align: 'left',
        });
        let respuesta = resulset.rows;
        for (let i = 0; i < resulset.rows.length; i++) {
          doc.text('Nombre del estudiante: ' + respuesta[i].nombres_apellidos, {
            align: 'left',
          });
          doc.text('Nota final: '+ respuesta[i].nota_final, {
            align: 'left',
          });
          if(respuesta[i].nota_final < 3){
            doc.text('El estudiante NO aprobó', {
            align: 'left',
          });
          }else{
            doc.text('El estudiante aprobó, felicitaciones!', {
            align: 'left',
          });
          }

          doc.text(' ', {
            align: 'left',
          });
        }
        doc.end(); 
        return res.json(resulset.rows)
      }
    }
  );
});

router.get('/descargar_reporte_final', function (req, res) {
  var file = __dirname + '/reportes/reporte_final.pdf';
  res.download(file);
});

module.exports = router;