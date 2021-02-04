CREATE DATABASE colegio_geek;

--- Eliminar relaciones
ALTER TABLE materias DROP CONSTRAINT fk_materias_profesores ;
ALTER TABLE materias DROP CONSTRAINT fk_materias_grados;
ALTER TABLE estudiantes DROP CONSTRAINT fK_estudiantes_grupos;
ALTER TABLE profesores DROP CONSTRAINT fk_profesores_materias;
ALTER TABLE grados_cursados DROP CONSTRAINT fk_grados_cursados_estudiantes;
ALTER TABLE grupos DROP CONSTRAINT fk_grupos_profesores;
ALTER TABLE grupos DROP CONSTRAINT fk_grupos_grados;
ALTER TABLE grados DROP CONSTRAINT fk_grados_materias;
ALTER TABLE notas DROP CONSTRAINT fk_notas_estudiante;
ALTER TABLE notas DROP CONSTRAINT fk_notas_grupos;
ALTER TABLE notas DROP CONSTRAINT fk_notas_materias;
-- Eliminar tablas
DROP TABLE IF EXISTS administrador;
DROP TABLE IF EXISTS materias;
DROP TABLE IF EXISTS estudiantes;
DROP TABLE IF EXISTS profesores;
DROP TABLE IF EXISTS grados_cursados;
DROP TABLE IF EXISTS grupos;
DROP TABLE IF EXISTS grados;
DROP TABLE IF EXISTS notas;

-- Crear campos enum
CREATE TYPE tipo_documento AS ENUM('TI','CC','NUIP', 'CE');
CREATE TYPE sexo AS ENUM('F','M');
CREATE TYPE grado_cursado AS ENUM('6','7', '8', '9', '10', '11');
CREATE TYPE estado AS ENUM('1','2', '3');
CREATE TYPE jornada AS ENUM('1','2', '3');
CREATE TYPE grado AS ENUM('6','7', '8', '9', '10', '11');
CREATE TYPE tipo_nota AS ENUM('seguimiento','parcial', 'final');

-- Crear tablas
CREATE TABLE administrador(
  id_admin SERIAL PRIMARY KEY,
  numero_documento VARCHAR(50) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  tipo_usuario INTEGER DEFAULT 1 NOT NULL
);

CREATE TABLE materias(
    id_materia SERIAL PRIMARY KEY,
    codigo_materia VARCHAR(10) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    id_profesor INTEGER UNIQUE NOT NULL,
    id_grados INTEGER NOT NULL
);

CREATE TABLE estudiantes(
    id_estudiante SERIAL PRIMARY KEY,
    id_grupo INTEGER NOT NULL,
    codigo_estudiante VARCHAR(50) UNIQUE NOT NULL,
    tipo_documento tipo_documento NOT NULL,
    numero_documento VARCHAR(50) UNIQUE NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    nombres_apellidos VARCHAR(100) NOT NULL,
    sexo sexo NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(70) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    telefono_fijo VARCHAR(20) NOT NULL,
    celular VARCHAR(20),
    tipo_usuario INTEGER DEFAULT 3 NOT NULL
);

CREATE TABLE profesores(
    id_profesor SERIAL PRIMARY KEY,
    tipo_documento tipo_documento NOT NULL,
    numero_documento VARCHAR(50) UNIQUE NOT NULL,
    nombres_apellidos VARCHAR(50) NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    tipo_usuario INTEGER DEFAULT 2 NOT NULL
);

CREATE TABLE grados_cursados(
    id_grado_cursado SERIAL PRIMARY KEY,
    id_estudiante integer NOT NULL,
    ano VARCHAR(10) NOT NULL,
    grado_cursado grado_cursado NOT NULL,
    estado estado NOT NULL,
    nota_promedio INTEGER
);

CREATE TABLE grupos(
    id_grupo SERIAL PRIMARY key,
    codigo_grupo VARCHAR(10) UNIQUE NOT NULL,
    id_profesor INTEGER NOT NULL,
    id_grado INTEGER NOT NULL,
    jornada jornada NOT NULL
);

CREATE TABLE grados(
    id_grado SERIAL PRIMARY KEY,
    grado grado NOT NULL
); 

CREATE TABLE notas(
    id_notas SERIAL PRIMARY KEY,
    id_estudiante INTEGER NOT NULL,
    id_grupo INTEGER NOT NULL,
    id_materia INTEGER NOT NULL,
    tipo_nota tipo_nota NOT NULL,
    nota FLOAT NOT NULL
);

-- Crear relaciones
ALTER TABLE materias
  ADD CONSTRAINT fk_materias_profesores 
  FOREIGN KEY(id_profesor) REFERENCES profesores(id_profesor),
  ADD CONSTRAINT fk_materias_grados 
  FOREIGN KEY(id_grados) REFERENCES grados(id_grado);

ALTER TABLE estudiantes
  ADD CONSTRAINT fK_estudiantes_grupos 
  FOREIGN KEY(id_grupo)
  REFERENCES grupos(id_grupo);


ALTER TABLE grados_cursados
  ADD CONSTRAINT fk_grados_cursados_estudiantes 
  FOREIGN KEY(id_estudiante)
  REFERENCES estudiantes(id_estudiante);

ALTER TABLE grupos
  ADD CONSTRAINT fk_grupos_profesores 
  FOREIGN KEY(id_profesor) REFERENCES profesores(id_profesor),
  ADD CONSTRAINT fk_grupos_grados 
  FOREIGN KEY(id_grado) REFERENCES grados(id_grado);


ALTER TABLE notas
  ADD CONSTRAINT fk_notas_estudiante 
  FOREIGN KEY(id_estudiante) REFERENCES estudiantes(id_estudiante),
  ADD CONSTRAINT fk_notas_grupos 
  FOREIGN KEY(id_grupo) REFERENCES grupos(id_grupo),
  ADD CONSTRAINT fk_notas_materias
  FOREIGN KEY(id_materia) REFERENCES materias(id_materia);