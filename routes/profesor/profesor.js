const { Router } = require('express');
const router = Router();

const { pool } = require('../../database/database');

// Ver Perfil Profesor
router.get('/perfil_profesor', async (req, res) => {
  try {
    const { id_profesor } = req.query;
    const response = await pool.query(
      `SELECT nombres_apellidos,numero_documento,correo FROM profesores WHERE id_profesor = $1`,
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
    const { id_grado } = req.query;
    const response = await pool.query(
      `SELECT nombres_apellidos,id_grupo FROM estudiantes `
    );
    return res.json(response.rows);
  } catch (error) {
    console.log(error);
  }
});

// Ver Grupos Profesor
router.get('/ver_grupos_profesor', async (req, res) => {
  try {
   const response = await pool.query(`SELECT codigo_grupo,jornada FROM grupos`)
   return res.json(response.rows)
   
  } catch (error) {
    console.log(error);
  }
});
