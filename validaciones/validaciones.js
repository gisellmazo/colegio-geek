const Joi = require('@hapi/joi')

const validacion_InicioSesion = Joi.object(
    {
        numero_documento: Joi.string().required(),
        contrasena: Joi.string().required(), 
        tipo_usuario: Joi.string().required()
    }
)

const validacion_registro_materia = Joi.object(
    {
        codigo_materia: Joi.string().required(),
        nombre: Joi.string().required(), 
        id_profesor: Joi.number().required(),
        id_grados: Joi.number().required()
    }
)


module.exports ={
    validacion_InicioSesion: validacion_InicioSesion,
    validacion_registro_materia: validacion_registro_materia
}
