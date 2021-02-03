const Joi = require('@hapi/joi')

const validacion_InicioSesion = Joi.object(
    {
        numero_documento: Joi.string().required(),
        contrasena: Joi.string().required(), 
        tipo_usuario: Joi.string().required()
    }
)

module.exports ={
    validacion_InicioSesion: validacion_InicioSesion
}
