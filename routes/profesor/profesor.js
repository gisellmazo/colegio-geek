const { Router } = require('express');
const router = Router();

const { pool } = require('../../database/database');

// Ver Perfil Profesor
router.get('/perfil_profesor', async (req, res) => {
  try {
    const { id_profesor } = req.query;
    const response = await pool.query(
      `SELECT nombres_apellidos,id_materia,nombre FROM profesores  JOIN materias ON profesores.id_profesor = materias.id_profesor WHERE profesores.id_profesor = $1`,
      [id_profesor]
    );
    return res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// Ver Estudiantes Profesor
router.get('/ver_estudiantes_profesor', async (req, res) => {
  try {
    const { id_profesor } = req.query;
    const response = await pool.query(
      `SELECT estudiantes.nombres_apellidos, estudiantes.id_grupo FROM estudiantes INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo WHERE id_profesor = $1`,[
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
