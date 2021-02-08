const { Router, response } = require('express');
const router = Router();

const { pool } = require('../../database/database');

//Perfil estudiante
router.get('/perfil_estudiante/', async (req, res) => {
  const { id_estudiante } = req.query;

  try {
    const result = await pool.query(
      'SELECT estudiantes.nombres_apellidos as nombre_estudiante, codigo_grupo, grupos.id_grado, grupos.id_profesor, profesores.nombres_apellidos  FROM estudiantes INNER JOIN grupos ON grupos.id_grupo =  estudiantes.id_grupo INNER JOIN profesores ON grupos.id_profesor = profesores.id_profesor WHERE estudiantes.id_estudiante = $1 ',
      [id_estudiante]
    );
    if (result.rowCount > 0) {
      return res.json(result.rows);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Se presento un error en la base de datos.');
  }
});

router.get('/ver_profesores/', async (req, res) => {
  const { id_estudiante } = req.query;

  try {
    const result = await pool.query(
      'SELECT materias.nombre, materias.id_profesor, profesores.nombres_apellidos FROM materias INNER JOIN profesores ON materias.id_profesor = profesores.id_profesor  INNER JOIN grupos ON grupos.id_grado = materias.id_grados INNER JOIN estudiantes ON grupos.id_grupo = estudiantes.id_grupo WHERE estudiantes.id_estudiante = $1',
      [id_estudiante]
    );
    if (result.rowCount > 0) {
      return res.json(result.rows);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Se presento un error en la base de datos.');
  }
});

router.get('/ver_mis_notas/', async (req, res) => {
  const { id_estudiante } = req.query;

  try {
    const result = await pool.query(
      'SELECT materias.nombre, notas.nota FROM notas INNER JOIN materias ON materias.id_materia = notas.id_materia WHERE notas.id_estudiante = $1 ORDER BY materias.nombre',
      [id_estudiante]
    );
    
    if (result.rowCount > 0) {
      return res.json(result.rows);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Se presento un error en la base de datos.');
  }
});

module.exports = router;
