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
            celular
        } = req.body
        const client = await pool.connect()
        const response = await client.query(`INSERT INTO estudiantes(
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
            celular) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id`, [
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
                celular
            ])

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
                celular
            })
        } else {
            res.json('estudiante registrado')
        }
    } catch (e) {
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
})


router.post('/registrar_profesor', async (req, res) => {
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
            celular
        } = req.body
        const client = await pool.connect()
        const response = await client.query(`INSERT INTO (
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
            celular) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id_estudiante`, [
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
                celular
            ])

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
                celular
            })
        } else {
            res.json('estudiante registrado')
        }
    } catch (e) {
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
})
module.exports=router;