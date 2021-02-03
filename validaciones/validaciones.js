const Joi = require('@hapi/joi')

const validacion_InicioSesion = Joi.object(
    {
        numero_documento: Joi.number().required(),
        contrasena: Joi.string().required()
    }
)

module.exports ={
    validacion_InicioSesion: validacion_InicioSesion
}
