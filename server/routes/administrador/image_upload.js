
/* const { Router } = require('express');
const router = Router();
const Multer = require('multer')
const {Storage} = require('@google-cloud/storage')
const uuid = require("uuid")
const uuidv1 = uuid.v1
const $ = require('jquery')


//env
require('dotenv').config()

const storage = new Storage({projectId: process.env.GCLOUD_PROJECT, credentials: {client_email: process.env.GCLOUD_CLIENT_EMAIL, private_key: process.env.GCLOUD_PRIVATE_KEY}})
    const multer = Multer({
        storage: Multer.memoryStorage(),
        limits: {
            fileSize: $*1024 * 1024
        }
    })

    const bucket  = storage.bucket(process.env.GCS_BUCKET)


    router.post('/upload_image', multer.single("file"), (req,res)=>{
        const newFileName = uuidv1()
        const blob = bucket.file(newFileName)
        const blobStream = blob.createWriteStream()

        blobStream.on("error", err =>{console.log(err)})

        blobStream.on("finish", async()=>{
            const publicUrl = `https://storage.googleapis.com/$(process.env.GCS_BUCKET)/$(blob.name)`

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
            celular, 
            foto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, publicUrl) RETURNING id_estudiante`,
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

            

        })

        blobStream.end(req.file.buffer)
    })
module.exports = router; */