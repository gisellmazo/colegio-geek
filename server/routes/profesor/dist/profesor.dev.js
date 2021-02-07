"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var _require2 = require('../../database/database'),
    pool = _require2.pool; // Ver Perfil Profesor


router.get('/perfil_profesor', function _callee(req, res) {
  var id_profesor, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          id_profesor = req.query.id_profesor;
          _context.next = 4;
          return regeneratorRuntime.awrap(pool.query("SELECT profesores.nombres_apellidos, materias.nombre, grupos.codigo_grupo, grupos.id_grupo\n      FROM profesores \n      INNER JOIN grupos ON profesores.id_profesor = grupos.id_profesor \n      INNER JOIN materias ON grupos.id_profesor = materias.id_profesor\n       \n      WHERE profesores.id_profesor = $1", [id_profesor]));

        case 4:
          response = _context.sent;
          return _context.abrupt("return", res.json(response.rows));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Ver Estudiantes Profesor

router.get('/ver_estudiantes_profesor', function _callee2(req, res) {
  var id_profesor, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id_profesor = req.query.id_profesor;
          _context2.next = 4;
          return regeneratorRuntime.awrap(pool.query("SELECT estudiantes.nombres_apellidos, estudiantes.id_grupo, grupos.id_grado FROM estudiantes INNER JOIN grupos ON estudiantes.id_grupo = grupos.id_grupo WHERE id_profesor = $1 ORDER BY estudiantes.id_grupo", [id_profesor]));

        case 4:
          response = _context2.sent;
          return _context2.abrupt("return", res.json(response.rows));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Ver Grupos Profesor

router.get('/ver_grupos_profesor', function _callee3(req, res) {
  var id_profesor, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id_profesor = req.query.id_profesor;
          _context3.next = 4;
          return regeneratorRuntime.awrap(pool.query("SELECT grupos.codigo_grupo, grupos.id_grupo FROM grupos \n      INNER JOIN profesores ON profesores.id_profesor = $1\n      INNER JOIN materias ON grupos.id_grado = materias.id_grado1 OR grupos.id_grado = materias.id_grado2 OR grupos.id_grado = materias.id_grado3 OR grupos.id_grado = materias.id_grado4 OR grupos.id_grado = materias.id_grado5 OR grupos.id_grado = materias.id_grado6;", [id_profesor]));

        case 4:
          response = _context3.sent;
          return _context3.abrupt("return", res.json(response.rows));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //Ingresar notas.

router.post('/ingresar_notas', function _callee4(req, res) {
  var _req$body, id_estudiante, id_grupo, tipo_nota, nota, id_materia, client, response, _res$json;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          //const validacion = await validacion_grupos.validateAsync(req.body);
          _req$body = req.body, id_estudiante = _req$body.id_estudiante, id_grupo = _req$body.id_grupo, tipo_nota = _req$body.tipo_nota, nota = _req$body.nota, id_materia = _req$body.id_materia;
          _context4.next = 4;
          return regeneratorRuntime.awrap(pool.connect());

        case 4:
          client = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(client.query("INSERT INTO notas(\n        id_estudiante,\n        id_grupo,\n        tipo_nota,\n        nota,\n        id_materia ) VALUES ($1, $2, $3, $4, $5)", [id_estudiante, id_grupo, tipo_nota, nota, id_materia]));

        case 7:
          response = _context4.sent;

          if (response.rowsCount > 0) {
            res.json((_res$json = {
              id_grupo: response.rows[0].id_nota,
              id_estudiante: id_estudiante
            }, _defineProperty(_res$json, "id_grupo", id_grupo), _defineProperty(_res$json, "tipo_nota", tipo_nota), _defineProperty(_res$json, "nota", nota), _defineProperty(_res$json, "id_materia", id_materia), _res$json));
          } else {
            res.json('Nota ingresada');
          }

          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            errorCode: _context4.t0.errno,
            message: 'Error en el servidor'
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
module.exports = router;