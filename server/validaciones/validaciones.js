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

// Validation profesor
const validacion_Profesor = Joi.object({
    tipo_documento: Joi.string().required(),
    numero_documento: Joi.string().required(),
    nombres_apellidos: Joi.string().required(),
    correo: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    contrasena: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });

//Validar registro de grupos
  const validacion_grupos = Joi.object(
    {
        codigo_grupo: Joi.string().required(),
        id_profesor: Joi.number().required(), 
        id_grado: Joi.number().required(),
        jornada: Joi.string().required()
    }
)

const validacion_registro_materia = Joi.object(
    {
        codigo_materia: Joi.string().required(),
        nombre: Joi.string().required(), 
        id_profesor: Joi.number().required(),
        id_grado1: Joi.number(),
        id_grado2: Joi.number(),
        id_grado3: Joi.number(),
        id_grado4: Joi.number(),
        id_grado5: Joi.number(),
        id_grado6: Joi.number()
    }
)


module.exports ={
    validacion_registrarEstudiante: validacion_registrarEstudiante,
    validacion_Profesor,
    validacion_grupos,
    validacion_registro_materia
}
