const { Router } = require('express');
const router=Router();
const { validacion_registrarEstudiante } = require('../../validaciones/validaciones')

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

        const validacion= await validacion_registrarEstudiante.validateAsync(req.body);
        console.log(validacion)
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
        console.log(e);
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
})

router.post('/registrar_profesor', async (req, res) => {
    try {
        const {
            tipo_documento,
            numero_documento,
            nombres_apellidos,
            correo,
            contrasena
        } = req.body
        const client = await pool.connect()
        const response = await client.query(`INSERT INTO profesores(
            tipo_documento,
            numero_documento,
            nombres_apellidos,
            correo,
            contrasena) VALUES ($1, $2, $3, $4, $5)RETURNING id_profesor`, [
                tipo_documento,
                numero_documento,
                nombres_apellidos,
                correo,
                contrasena
            ])

        if (response.rowsCount > 0) {
            res.json({
                id_profesor: response.rows[0].id_profesor,
                tipo_documento,
                numero_documento,
                nombres_apellidos,
                correo,
                contrasena,
                tipo_usuario
            })
        } else {
            res.json('profesor registrado')
        }
    } catch (e) {
        
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
})

router.post('/registrar_materia', async (req, res) => {
    try {
        const {
            codigo_materia,
            nombre,
            id_profesor,
            id_grados
        } = req.body
        const client = await pool.connect()
        const response = await client.query(`INSERT INTO materias(
            codigo_materia,
            nombre,
            id_profesor,
            id_grados) VALUES ($1, $2, $3, $4)`, [
                codigo_materia,
                nombre,
                id_profesor,
                id_grados
            ])

        if (response.rowsCount > 0) {
            res.json({
                id_materia: response.rows[0].id_materia,
                codigo_materia,
                nombre,
                id_profesor,
                id_grados
            })
        } else {
            res.json('Materia registrada')
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
})

router.post('/registrar_grupo', async (req, res) => {
    try {
        const {
            codigo_grupo,
            id_profesor,
            id_grado,
            jornada
        } = req.body
        const client = await pool.connect()
        const response = await client.query(`INSERT INTO grupos(
            codigo_grupo,
            id_profesor,
            id_grado,
            jornada) VALUES ($1, $2, $3, $4)`, [
                codigo_grupo,
                id_profesor,
                id_grado,
                jornada
            ])

        if (response.rowsCount > 0) {
            res.json({
                id_grupo: response.rows[0].id_grupo,
                codigo_grupo,
                id_profesor,
                id_grado,
                jornada
            })
        } else {
            res.json('Grupo registrado')
        }
    } catch (e) {
        res.status(500).json({ errorCode: e.errno, message: "Error en el servidor" })
    }
})

router.get('/ver_grupos', async(req, res) => {
    const client = await pool.connect()
    client.query(`SELECT * FROM  grupos`, (error, resulset) => {
        client.release(true);
        if (error) {
            return res.status(500).send('Se presento un error en la base de datos.')
        } else {
            return res.json(resulset.rows)
        }
    })
})

module.exports=router;