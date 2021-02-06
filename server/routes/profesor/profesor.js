const { Router } = require('express');
const router = Router();
const { pool } = require('../../database/database');

// Ver Perfil Profesor
router.get('/perfil_profesor', async (req, res) => {
  try {
    const { id_profesor } = req.query;
    const response = await pool.query(
      `SELECT profesores.nombres_apellidos, materias.nombre, grupos.codigo_grupo, grupos.id_grupo
      FROM profesores  
      INNER JOIN materias ON profesores.id_profesor = materias.id_profesor
      INNER JOIN grupos ON profesores.id_profesor = grupos.id_profesor 
      WHERE profesores.id_profesor = $1`,
      [id_profesor]
    );
    return res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});




// Ver Estudiantes Profesor
router.get('/ver_estudiantes_profesor', async (req, res) => {
  try {
    const { id_profesor } = req.query;
    const response = await pool.query(
      `SELECT estudiantes.nombres_apellidos, estudiantes.id_grupo, grupos.id_grado FROM estudiantes INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo WHERE id_profesor = $1 ORDER BY estudiantes.id_grupo`,[
        id_profesor
      ]
    );
    return res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});


// Ver Grupos Profesor
router.get('/ver_grupos_profesor', async (req, res) => {
  try {
    const {id_profesor} = req.query;
    const response = await pool.query(
      `SELECT grupos.codigo_grupo, grupos.jornada FROM grupos INNER JOIN profesores ON grupos.id_profesor = profesores.id_profesor WHERE profesores.id_profesor = $1;`,[id_profesor]
    );
    return res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});

//Ingresar notas.

router.post('/ingresar_notas', async (req, res) => {
  try {
    //const validacion = await validacion_grupos.validateAsync(req.body);
    const { id_estudiante,id_grupo,tipo_nota,nota,id_materia } = req.body;
    const client = await pool.connect();
    const response = await client.query(
      `INSERT INTO notas(
        id_estudiante,
        id_grupo,
        tipo_nota,
        nota,
        id_materia ) VALUES ($1, $2, $3, $4, $5)`,
      [id_estudiante,id_grupo,tipo_nota,nota,id_materia ]
    );

    if (response.rowsCount > 0) {
      res.json({
        id_grupo: response.rows[0].id_nota,
        id_estudiante,
        id_grupo,
        tipo_nota,
        nota,
        id_materia 
      });
    } else {
      res.json('Nota ingresada');
    }
  } catch (e) {
    console.log(e)
    res
      .status(500)
      .json({ errorCode: e.errno, message: 'Error en el servidor' });
  }
});

module.exports = router;
