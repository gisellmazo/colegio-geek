const Joi = require('@hapi/joi')

const validacion_grupos = Joi.object(
    {
        codigo_grupo: Joi.string().required(),
        id_profesor: Joi.number().required(), 
        id_grado: Joi.number().required(),
        jornada: Joi.string().required()
    }
)

module.exports ={
    
    validacion_grupos: validacion_grupos
}
