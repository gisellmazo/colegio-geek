"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../../validaciones/validaciones'),
    validacion_registrarEstudiante = _require2.validacion_registrarEstudiante,
    validacion_grupos = _require2.validacion_grupos,
    validacion_Profesor = _require2.validacion_Profesor,
    validacion_registro_materia = _require2.validacion_registro_materia;

var jwt = require('jsonwebtoken');

var PDF = require('pdfkit');

var fs = require('fs');

var _require3 = require('../../database/database'),
    pool = _require3.pool;

router.get('/inicio_sesion', function _callee(req, res) {
  var client, _req$query, numero_documento, contrasena, tipo_usuario, token, result, _result, _result2;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context.sent;
          _req$query = req.query, numero_documento = _req$query.numero_documento, contrasena = _req$query.contrasena, tipo_usuario = _req$query.tipo_usuario;
          token = jwt.sign(contrasena, 'token_contrasena');
          _context.prev = 5;

          if (!(tipo_usuario == 1)) {
            _context.next = 15;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(client.query("select id_admin from administrador where contrasena = $1 and numero_documento = $2", [token, numero_documento]));

        case 9:
          result = _context.sent;

          if (!(result.rowCount == 0)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.json('usuario no encontrado verifica datos'));

        case 12:
          return _context.abrupt("return", res.json(result.rows));

        case 15:
          if (!(tipo_usuario == 2)) {
            _context.next = 24;
            break;
          }

          _context.next = 18;
          return regeneratorRuntime.awrap(client.query("select id_profesor from profesores where contrasena = $1 and numero_documento = $2 ", [token, numero_documento]));

        case 18:
          _result = _context.sent;

          if (!(_result.rowCount == 0)) {
            _context.next = 21;
            break;
          }

          return _context.abrupt("return", res.json('usuario no encontrado verifica datos'));

        case 21:
          return _context.abrupt("return", res.json(_result.rows));

        case 24:
          if (!(tipo_usuario == 3)) {
            _context.next = 33;
            break;
          }

          _context.next = 27;
          return regeneratorRuntime.awrap(client.query("select id_estudiante from estudiantes where contrasena = $1 and numero_documento = $2", [token, numero_documento]));

        case 27:
          _result2 = _context.sent;

          if (!(_result2.rowCount == 0)) {
            _context.next = 30;
            break;
          }

          return _context.abrupt("return", res.json('usuario no encontrado verifica datos'));

        case 30:
          return _context.abrupt("return", res.json(_result2.rows));

        case 33:
          return _context.abrupt("return", res.json('usuario no encontrado verifica datos'));

        case 34:
          _context.next = 39;
          break;

        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](5);
          console.log(_context.t0);

        case 39:
          _context.prev = 39;
          client.release(true);
          return _context.finish(39);

        case 42:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 36, 39, 42]]);
});
router.post('/registrar_estudiante', function _callee2(req, res) {
  var _req$body, id_grupo, codigo_estudiante, tipo_documento, numero_documento, correo, contrasena, nombres_apellidos, sexo, fecha_nacimiento, direccion, ciudad, telefono_fijo, celular, validacion, token, client, response;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, id_grupo = _req$body.id_grupo, codigo_estudiante = _req$body.codigo_estudiante, tipo_documento = _req$body.tipo_documento, numero_documento = _req$body.numero_documento, correo = _req$body.correo, contrasena = _req$body.contrasena, nombres_apellidos = _req$body.nombres_apellidos, sexo = _req$body.sexo, fecha_nacimiento = _req$body.fecha_nacimiento, direccion = _req$body.direccion, ciudad = _req$body.ciudad, telefono_fijo = _req$body.telefono_fijo, celular = _req$body.celular;
          _context2.next = 4;
          return regeneratorRuntime.awrap(validacion_registrarEstudiante.validateAsync(req.body));

        case 4:
          validacion = _context2.sent;
          token = jwt.sign(contrasena, 'token_contrasena');
          _context2.next = 8;
          return regeneratorRuntime.awrap(pool.connect());

        case 8:
          client = _context2.sent;
          _context2.next = 11;
          return regeneratorRuntime.awrap(client.query("INSERT INTO estudiantes(\n            id_grupo,\n            codigo_estudiante,\n            tipo_documento,\n            numero_documento,\n            correo,\n            contrasena,\n            nombres_apellidos,\n            sexo,\n            fecha_nacimiento,\n            direccion,\n            ciudad,\n            telefono_fijo,\n            celular) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id_estudiante", [id_grupo, codigo_estudiante, tipo_documento, numero_documento, correo, token, nombres_apellidos, sexo, fecha_nacimiento, direccion, ciudad, telefono_fijo, celular]));

        case 11:
          response = _context2.sent;

          if (response.rowsCount > 0) {
            res.json({
              id_estudiante: response.rows[0].id_estudiante,
              id_grupo: id_grupo,
              codigo_estudiante: codigo_estudiante,
              tipo_documento: tipo_documento,
              numero_documento: numero_documento,
              correo: correo,
              contrasena: contrasena,
              nombres_apellidos: nombres_apellidos,
              sexo: sexo,
              fecha_nacimiento: fecha_nacimiento,
              direccion: direccion,
              ciudad: ciudad,
              telefono_fijo: telefono_fijo,
              celular: celular
            });
          } else {
            res.json('estudiante registrado');
          }

          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            errorCode: _context2.t0.errno,
            message: 'Error en el servidor'
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15]]);
});
router.post('/registrar_profesor', function _callee3(req, res) {
  var _req$body2, tipo_documento, numero_documento, nombres_apellidos, correo, contrasena, validaciones, token, client, response;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body2 = req.body, tipo_documento = _req$body2.tipo_documento, numero_documento = _req$body2.numero_documento, nombres_apellidos = _req$body2.nombres_apellidos, correo = _req$body2.correo, contrasena = _req$body2.contrasena;
          _context3.next = 4;
          return regeneratorRuntime.awrap(validacion_Profesor.validateAsync(req.body));

        case 4:
          validaciones = _context3.sent;
          token = jwt.sign(contrasena, 'token_contrasena');
          _context3.next = 8;
          return regeneratorRuntime.awrap(pool.connect());

        case 8:
          client = _context3.sent;
          _context3.next = 11;
          return regeneratorRuntime.awrap(client.query("INSERT INTO profesores(\n            tipo_documento,\n            numero_documento,\n            nombres_apellidos,\n            correo,\n            contrasena) VALUES ($1, $2, $3, $4, $5)RETURNING id_profesor", [tipo_documento, numero_documento, nombres_apellidos, correo, token]));

        case 11:
          response = _context3.sent;

          if (response.rowsCount > 0) {
            res.json({
              id_profesor: response.rows[0].id_profesor,
              tipo_documento: tipo_documento,
              numero_documento: numero_documento,
              nombres_apellidos: nombres_apellidos,
              correo: correo,
              contrasena: contrasena,
              tipo_usuario: tipo_usuario
            });
          } else {
            res.json('profesor registrado');
          }

          _context3.next = 19;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            errorCode: _context3.t0.errno,
            message: 'Error en el servidor'
          });
          console.log(_context3.t0);

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 15]]);
});
router.post('/registrar_materia', function _callee4(req, res) {
  var validacion, _req$body3, codigo_materia, nombre, id_profesor, id_grado1, id_grado2, id_grado3, id_grado4, id_grado5, id_grado6, client, response;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(validacion_registro_materia.validateAsync(req.body));

        case 3:
          validacion = _context4.sent;
          _req$body3 = req.body, codigo_materia = _req$body3.codigo_materia, nombre = _req$body3.nombre, id_profesor = _req$body3.id_profesor, id_grado1 = _req$body3.id_grado1, id_grado2 = _req$body3.id_grado2, id_grado3 = _req$body3.id_grado3, id_grado4 = _req$body3.id_grado4, id_grado5 = _req$body3.id_grado5, id_grado6 = _req$body3.id_grado6;
          _context4.next = 7;
          return regeneratorRuntime.awrap(pool.connect());

        case 7:
          client = _context4.sent;
          _context4.next = 10;
          return regeneratorRuntime.awrap(client.query("INSERT INTO materias(\n            codigo_materia,\n            nombre,\n            id_profesor,\n            id_grado1, \n            id_grado2, \n            id_grado3, \n            id_grado4, \n            id_grado5, \n            id_grado6) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [codigo_materia, nombre, id_profesor, id_grado1, id_grado2, id_grado3, id_grado4, id_grado5, id_grado6]));

        case 10:
          response = _context4.sent;

          if (response.rowsCount > 0) {
            res.json({
              id_materia: response.rows[0].id_materia,
              codigo_materia: codigo_materia,
              nombre: nombre,
              id_profesor: id_profesor,
              id_grado1: id_grado1,
              id_grado2: id_grado2,
              id_grado3: id_grado3,
              id_grado4: id_grado4,
              id_grado5: id_grado5,
              id_grado6: id_grado6
            });
          } else {
            res.send('Materia registrada');
          }

          _context4.next = 18;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            errorCode: _context4.t0.errno,
            message: 'Error en el servidor'
          });

        case 18:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
router.post('/registrar_grupo', function _callee5(req, res) {
  var validacion, _req$body4, codigo_grupo, id_profesor, id_grado, jornada, client, response;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(validacion_grupos.validateAsync(req.body));

        case 3:
          validacion = _context5.sent;
          _req$body4 = req.body, codigo_grupo = _req$body4.codigo_grupo, id_profesor = _req$body4.id_profesor, id_grado = _req$body4.id_grado, jornada = _req$body4.jornada;
          _context5.next = 7;
          return regeneratorRuntime.awrap(pool.connect());

        case 7:
          client = _context5.sent;
          _context5.next = 10;
          return regeneratorRuntime.awrap(client.query("INSERT INTO grupos(\n            codigo_grupo,\n            id_profesor,\n            id_grado,\n            jornada) VALUES ($1, $2, $3, $4)", [codigo_grupo, id_profesor, id_grado, jornada]));

        case 10:
          response = _context5.sent;

          if (response.rowsCount > 0) {
            res.json({
              id_grupo: response.rows[0].id_grupo,
              codigo_grupo: codigo_grupo,
              id_profesor: id_profesor,
              id_grado: id_grado,
              jornada: jornada
            });
          } else {
            res.json('Grupo registrado');
          }

          _context5.next = 18;
          break;

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.status(500).json({
            errorCode: _context5.t0.errno,
            message: 'Error en el servidor'
          });

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
router.get('/ver_materias', function _callee6(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context6.sent;
          client.query("SELECT * FROM  materias", function (error, resulset) {
            client.release(true);

            if (error) {
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              return res.json(resulset.rows);
            }
          });

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router.get('/ver_grupos_administrador', function _callee7(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context7.sent;
          client.query("SELECT grupos.id_grupo, grupos.codigo_grupo, grupos.id_grado, grupos.jornada, profesores.nombres_apellidos FROM  grupos INNER JOIN profesores ON grupos.id_profesor= profesores.id_profesor", function (error, resulset) {
            client.release(true);

            if (error) {
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              return res.json(resulset.rows);
            }
          });

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
});
router.get('/ver_materias_administrador', function _callee8(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context8.sent;
          client.query("SELECT materias.nombre, profesores.nombres_apellidos FROM  materias INNER JOIN profesores ON materias.id_profesor=profesores.id_profesor", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              return res.json(resulset.rows);
            }
          });

        case 4:
        case "end":
          return _context8.stop();
      }
    }
  });
});
router.get('/ver_estudiantes_administrador', function _callee9(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context9.sent;
          client.query("SELECT estudiantes.nombres_apellidos, grupos.id_grado, estudiantes.id_grupo, grupos.codigo_grupo\n  FROM estudiantes \n  INNER JOIN grupos ON estudiantes.id_grupo=grupos.id_grupo\n  ORDER BY grupos.id_grado", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              return res.json(resulset.rows);
            }
          });

        case 4:
        case "end":
          return _context9.stop();
      }
    }
  });
});
router.get('/ver_profesores_administrador', function _callee10(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context10.sent;
          client.query("SELECT profesores.nombres_apellidos, profesores.id_profesor, materias.nombre \n  FROM profesores\n  INNER JOIN materias ON profesores.id_profesor = materias.id_profesor\n  ", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              return res.json(resulset.rows);
            }
          });

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
});
router.get('/cantidad_estudiantes_asignatura', function _callee11(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context11.sent;
          client.query("SELECT COUNT(id_estudiante) as cantidad_estudiantes, materias.nombre as nombre_materia\n  FROM estudiantes\n  INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo\n  INNER JOIN materias ON grupos.id_grado = materias.id_grado1 OR grupos.id_grado = materias.id_grado2 OR grupos.id_grado = materias.id_grado3 OR grupos.id_grado = materias.id_grado4 OR grupos.id_grado = materias.id_grado5 OR grupos.id_grado = materias.id_grado6\n  GROUP BY materias.nombre", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              var doc = new PDF();
              doc.pipe(fs.createWriteStream(__dirname + '/reportes/cantidad_estudiantes_por_asignatura.pdf'));
              doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, {
                width: 210
              });
              doc.text('Cantidad estudiantes por asignatura:', {
                align: 'center'
              });
              doc.text(' ', {
                align: 'left'
              });
              var respuesta = resulset.rows;

              for (var i = 0; i < resulset.rows.length; i++) {
                doc.text('Materia: ' + respuesta[i].nombre_materia + ':', {
                  align: 'left'
                });
                doc.text('Cantidad de estudiantes: ' + respuesta[i].cantidad_estudiantes, {
                  align: 'left'
                });
                doc.text(' ', {
                  align: 'left'
                });
              }

              doc.end();
            }
          });

        case 4:
        case "end":
          return _context11.stop();
      }
    }
  });
});
router.get('/descargar_cantidad_estudiantes_materia', function (req, res) {
  var file = __dirname + '/reportes/cantidad_estudiantes_por_asignatura.pdf';
  res.download(file);
});
router.get('/ver_id_estudiante', function _callee12(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context12.sent;
          client.query("SELECT MAX(id_estudiante) as ultimo_id FROM estudiantes", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              return res.json(resulset.rows);
            }
          });

        case 4:
        case "end":
          return _context12.stop();
      }
    }
  });
});
router.get('/cantidad_estudiantes_profesor_grado', function _callee13(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context13.sent;
          client.query("SELECT COUNT(id_estudiante) as cantidad_estudiantes, profesores.nombres_apellidos as nombre_profesor, grupos.id_grado as grado\n  FROM estudiantes\n  INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo\n  INNER JOIN materias ON grupos.id_grado = materias.id_grado1 OR grupos.id_grado = materias.id_grado2 OR grupos.id_grado = materias.id_grado3 OR grupos.id_grado = materias.id_grado4 OR grupos.id_grado = materias.id_grado5 OR grupos.id_grado = materias.id_grado6\n  INNER JOIN profesores ON profesores.id_profesor=materias.id_profesor\n  GROUP BY grupos.id_grado, profesores.nombres_apellidos", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              var doc = new PDF();
              doc.pipe(fs.createWriteStream(__dirname + '/reportes/cantidad_estudiantes_profesor_grado.pdf'));
              doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, {
                width: 210
              });
              doc.text('Cantidad de estudiantes por profesor según el grado:', {
                align: 'center'
              });
              doc.text(' ', {
                align: 'left'
              });
              var respuesta = resulset.rows;

              for (var i = 0; i < resulset.rows.length; i++) {
                doc.text('Profesor: ' + respuesta[i].nombre_profesor + ':', {
                  align: 'left'
                });
                doc.text('Grado: ' + respuesta[i].grado, {
                  align: 'left'
                });
                doc.text('Cantidad de estudiantes: ' + respuesta[i].cantidad_estudiantes, {
                  align: 'left'
                });
                doc.text(' ', {
                  align: 'left'
                });
              }

              doc.end();
            }
          });

        case 4:
        case "end":
          return _context13.stop();
      }
    }
  });
});
router.get('/descargar_cantidad_estudiantes_profesor_grado', function (req, res) {
  var file = __dirname + '/reportes/cantidad_estudiantes_profesor_grado.pdf';
  res.download(file);
}); // Servicio calificaciones por estudiante

router.get('/reporte_calificaciones_por_estudiante', function _callee14(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context14.sent;
          client.query("SELECT estudiantes.nombres_apellidos, notas.nota FROM notas JOIN estudiantes ON notas.id_estudiante = estudiantes.id_estudiante\n    ORDER BY estudiantes.nombres_apellidos", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              //return res.json(resulset.rows);
              var doc = new PDF();
              doc.pipe(fs.createWriteStream(__dirname + '/reportes/reporte_calificaciones_por_estudiante.pdf'));
              doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, {
                width: 210
              });
              doc.text('Calificaciones por estudiante:', {
                align: 'center'
              });
              doc.text(' ', {
                align: 'left'
              });
              var respuesta = resulset.rows;

              for (var i = 0; i < resulset.rows.length; i++) {
                doc.text('Nombre: ' + respuesta[i].nombres_apellidos + ':', {
                  align: 'left'
                });
                doc.text('Nota: ' + respuesta[i].nota, {
                  align: 'left'
                });
                doc.text(' ', {
                  align: 'left'
                });
              }

              doc.end();
            }
          });

        case 4:
        case "end":
          return _context14.stop();
      }
    }
  });
});
router.get('/descargar_calificaciones_por_estudiante', function (req, res) {
  var file = __dirname + '/reportes/reporte_calificaciones_por_estudiante.pdf';
  res.download(file);
}); //servicio promedio de notas

router.get('/promedio_notas_grupo', function _callee15(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context15.sent;
          client.query("SELECT avg(nota) as promedio_notas, grupos.codigo_grupo\n  FROM notas \n  INNER JOIN grupos ON notas.id_grupo = grupos.id_grupo\n  group by grupos.id_grupo", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              var doc = new PDF();
              doc.pipe(fs.createWriteStream(__dirname + '/reportes/promedio_notas_grupo.pdf'));
              doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, {
                width: 210
              });
              doc.text('Reporte del promedio de las notas en cada grado:', {
                align: 'center'
              });
              doc.text(' ', {
                align: 'left'
              });
              var respuesta = resulset.rows;

              for (var i = 0; i < resulset.rows.length; i++) {
                doc.text(respuesta[i].codigo_grupo + ':', {
                  align: 'left'
                });
                doc.text(respuesta[i].promedio_notas, {
                  align: 'left'
                });
                doc.text(' ', {
                  align: 'left'
                });
              }

              doc.end();
            }
          });

        case 4:
        case "end":
          return _context15.stop();
      }
    }
  });
});
router.get('/descargar_promedio_notas_grupo', function (req, res) {
  var file = __dirname + '/reportes/promedio_notas_grupo.pdf';
  res.download(file);
});
router.get('/promedio_notas_grado', function _callee16(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context16.sent;
          client.query("SELECT avg(nota) as promedio_notas, grados.grado\n  FROM notas \n  JOIN grupos ON notas.id_grupo = grupos.id_grupo\n  JOIN grados ON grupos.id_grado = grados.id_grado\n  group by grados.id_grado\n  ORDER BY grados.id_grado", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              var doc = new PDF();
              doc.pipe(fs.createWriteStream(__dirname + '/reportes/promedio_notas_grado.pdf'));
              doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, {
                width: 210
              });
              doc.text('Reporte del promedio de las notas en cada grado:', {
                align: 'center'
              });
              doc.text(' ', {
                align: 'left'
              });
              var respuesta = resulset.rows;

              for (var i = 0; i < resulset.rows.length; i++) {
                doc.text('El promedio de notas en el grado ' + respuesta[i].grado + ' es:', {
                  align: 'left'
                });
                doc.text(respuesta[i].promedio_notas, {
                  align: 'left'
                });
                doc.text(' ', {
                  align: 'left'
                });
              }

              doc.end();
            }
          });

        case 4:
        case "end":
          return _context16.stop();
      }
    }
  });
});
router.get('/descargar_promedio_notas_grado', function (req, res) {
  var file = __dirname + '/reportes/promedio_notas_grado.pdf';
  res.download(file);
}); //servicio promedio de notas por materia

router.get('/promedio_notas_materia', function _callee17(req, res) {
  var client;
  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return regeneratorRuntime.awrap(pool.connect());

        case 2:
          client = _context17.sent;
          client.query("SELECT avg(nota) as promedio_notas, materias.codigo_materia, materias.nombre\n  FROM notas \n  INNER JOIN materias ON notas.id_materia = materias.id_materia\n  group by materias.id_materia", function (error, resulset) {
            client.release(true);

            if (error) {
              console.log(error);
              return res.status(500).send('Se presento un error en la base de datos.');
            } else {
              var doc = new PDF();
              doc.pipe(fs.createWriteStream(__dirname + '/reportes/promedio_notas_materia.pdf'));
              doc.image(__dirname + '/logo-colegio-geek.png', 5, 15, {
                width: 210
              });
              doc.text('Reporte del promedio de las notas en cada materia:', {
                align: 'center'
              });
              doc.text(' ', {
                align: 'left'
              });
              var respuesta = resulset.rows;

              for (var i = 0; i < resulset.rows.length; i++) {
                doc.text('El nombre de la materia es ' + respuesta[i].nombre, {
                  align: 'left'
                });
                doc.text(respuesta[i].codigo_materia, {
                  align: 'left'
                });
                doc.text(respuesta[i].promedio_notas, {
                  align: 'left'
                });
                doc.text(' ', {
                  align: 'left'
                });
              }
              doc.end();
            }
          });

        case 4:
        case "end":
          return _context17.stop();
      }
    }
  });
});
router.get('/descargar_promedio_notas_materia', function (req, res) {
  var file = __dirname + '/reportes/promedio_notas_materia.pdf';
  res.download(file);
});
module.exports = router;