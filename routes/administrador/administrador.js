const { Router } = require('express');
const router=Router();

const { pool } = require('../../database/database');

router.get('/inicio_sesion', async(req, res) => {
    let client = await pool.connect()
    const {
        numero_documento, 
        contrasena,
        tipo_usuario
    } = req.query
    try {
        if (tipo_usuario == 1) {
            let result = await client.query(`select * from administrador where contrasena = $1 and numero_documento = $2`, [contrasena, numero_documento])
            if (result.rowCount == 0) {
                return res.json("usuario no encontrado verifica datos")
            }
            return res.json(result.rows)
        } else if (tipo_usuario == 2) {
            let result = await client.query(`select * from profesores where contrasena = $1 and numero_documento = $2`, [contrasena, numero_documento])
            if (result.rowCount == 0) {
                return res.json("usuario no encontrado verifica datos")
            }
            return res.json(result.rows)
        } else if (tipo_usuario == 3) {
            let result = await client.query(`select * from estudiantes where contrasena = $1 and numero_documento = $2`, [contrasena, numero_documento])
            if (result.rowCount == 0) {
                return res.json("usuario no encontrado verifica datos")
            }
            return res.json(result.rows)
        } else {
            return res.json("usuario no encontrado verifica datos")
        }
    } catch (error) {
        console.log(error)
    }finally{
        client.release(true)
    }
})



module.exports=router;