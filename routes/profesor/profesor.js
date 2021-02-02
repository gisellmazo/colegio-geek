const { Router } = require('express');
const router = Router();

const { pool } = require('../../database/database');

router.get('/perfil_profesor', async (req, res) => {
  let client = await pool.connect();
  const id_profesor = req.params.id_profesor;

  try {
    let result = await client.query(
      `SELECT * FROM profesores WHERE id_profesor = $1`,
      [id_profesor]
    );
    return res.json(result.rows);
  } catch (error) {
    console.log(error);
  } finally {
    client.release(true);
  }
});

module.exports = router;
