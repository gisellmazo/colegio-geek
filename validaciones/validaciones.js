const Joi = require('@hapi/joi')

const validacion_registrarEstudiante = Joi.object(
    {
        id_grupo: Joi.number().required(),
        codigo_estudiante: Joi.string().required(),
        tipo_documento: Joi.string().required(),
        numero_documento: Joi.string().required(),
        correo: Joi.string().email().required(),
        contrasena: Joi.string().required(),
        nombres_apellidos: Joi.string().required(),
        sexo: Joi.string().required(),
        fecha_nacimiento: Joi.date().required(),
        direccion: Joi.string().required(),
        ciudad: Joi.string().required(),
        telefono_fijo: Joi.string().required(),
        celular: Joi.string().required()
    } 
)

const validacion_grupos = Joi.object(
    {
        codigo_grupo: Joi.string().required(),
        id_profesor: Joi.number().required(), 
        id_grado: Joi.number().required(),
        jornada: Joi.string().required()
    }
)

module.exports ={
    validacion_registrarEstudiante: validacion_registrarEstudiante,
    validacion_grupos: validacion_grupos
}
