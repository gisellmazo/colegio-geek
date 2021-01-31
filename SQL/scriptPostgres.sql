CREATE DATABASE colegio_geek;

DROP TABLE IF EXISTS materias;
DROP TABLE IF EXISTS estudiantes;
DROP TABLE IF EXISTS profesores;
DROP TABLE IF EXISTS grados_cursados;
DROP TABLE IF EXISTS grupos;
DROP TABLE IF EXISTS grados;
DROP TABLE IF EXISTS notas;

CREATE TABLE materias(
    id_materia SERIAL PRIMARY KEY,
    codigo_materia VARCHAR(10) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    id_profesor INTEGER UNIQUE NOT NULL,
    sexto BOOLEAN NOT NULL,
    septimo BOOLEAN  NOT NULL,
    octavo BOOLEAN NOT NULL,
    noveno BOOLEAN NOT NULL,
    decimo BOOLEAN NOT NULL,
    once BOOLEAN NOT NULL
);

CREATE TYPE documento AS ENUM('TI''CC','NUIP');
CREATE TYPE sexo AS ENUM('F','M');
CREATE TABLE estudiantes(
    id_estudiante SERIAL PRIMARY KEY,
    id_grupo INTEGER UNIQUE NOT NULL,
    codigo_estudiante VARCHAR(10) UNIQUE NOT NULL,
    tipo_documento documento NOT NULL,
    numero_documento VARCHAR(50) UNIQUE NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(50) UNIQUE NOT NULL,
    nombres_apellidos VARCHAR(100) NOT NULL,
    sexo sexo NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(70) NOT NULL,
    ciudad VARCHAR(50) NOT NULL,
    telefono_fijo VARCHAR(20) NOT NULL,
    celular VARCHAR(20)
    
);

CREATE TYPE tipo_documento AS ENUM('CC','CE');
CREATE TABLE profesores(
    id_profesor SERIAL PRIMARY KEY,
    id_materia INTEGER UNIQUE NOT NULL,
    tipo_documento tipo_documento NOT NULL,
    numero_documento VARCHAR(50) UNIQUE NOT NULL,
    nombres_apellidos VARCHAR(50) NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(50) UNIQUE NOT NULL
);

CREATE TYPE grado AS ENUM('6','7', '8', '9', '10', '11');
CREATE TYPE estado AS ENUM('1','2', '3');
CREATE TABLE grados_cursados(
    id_grado_cursado SERIAL PRIMARY KEY,
    id_estudiante integer UNIQUE NOT NULL,
    ano VARCHAR(10) NOT NULL,
    grado grado NOT NULL,
    estado estado NOT NULL,
    nota_promedio INTEGER
);


CREATE TYPE jornada AS ENUM('1','2', '3');
CREATE TABLE grupos(
    id_grupo SERIAL PRIMARY key,
    codigo_grupo VARCHAR(10) UNIQUE NOT NULL,
    id_profesor INTEGER UNIQUE NOT NULL,
    jornada jornada NOT NULL
);

CREATE TYPE grado AS ENUM('6','7', '8', '9', '10', '11');
CREATE TABLE grados(
    id_grado SERIAL PRIMARY KEY,
    grado grado NOT NULL,
    id_grupo INTEGER UNIQUE NOT NULL,
    geografia BOOLEAN NOT NULL,
    historia BOOLEAN NOT NULL,
    filosofia BOOLEAN NOT NULL,
    espanol BOOLEAN NOT NULL,
    ingles BOOLEAN NOT NULL,
    matematicas BOOLEAN NOT NULL,
    geometria BOOLEAN NOT NULL,
    trigometria BOOLEAN NOT NULL,
    fisica BOOLEAN NOT NULL,
    ed_ficica BOOLEAN NOT NULL
); 

CREATE TYPE tipo_nota AS ENUM('nota 1','nota 2', 'nota 3', 'parsial', 'fina');
CREATE TABLE notas(
    id_notas SERIAL PRIMARY KEY,
    id_estudiante INTEGER UNIQUE NOT NULL,
    id_grupo INTEGER UNIQUE NOT NULL,
    id_materia INTEGER UNIQUE NOT NULL,
    tipo_nota tipo_nota NOT NULL,
    nota FLOAT NOT NULL
);

ALTER TABLE materias
  ADD CONSTRAINT materias_profesores 
  FOREIGN KEY(id_profesor)
  REFERENCES profesores(id_profesor);

ALTER TABLE estudiantes
  ADD CONSTRAINT estudiantes_grupos 
  FOREIGN KEY(id_grupo)
  REFERENCES grupos(id_grupo);

ALTER TABLE profesores
  ADD CONSTRAINT profesores_materias 
  FOREIGN KEY(id_materia)
  REFERENCES materias(id_materia);

ALTER TABLE grados_cursados
  ADD CONSTRAINT grados_cursados_estudiantes 
  FOREIGN KEY(id_estudiante)
  REFERENCES estudiantes(id_estudiante);

ALTER TABLE grupos
  ADD CONSTRAINT grupos_profesores 
  FOREIGN KEY(id_profesor)
  REFERENCES profesores(id_profesor);

ALTER TABLE grados
  ADD CONSTRAINT grados_grupos 
  FOREIGN KEY(id_grupo)
  REFERENCES grupos(id_grupo);

ALTER TABLE notas
  ADD CONSTRAINT notas_estudiante 
  FOREIGN KEY(id_estudiante) REFERENCES estudiantes(id_estudiante),
  ADD CONSTRAINT notas_grupos 
  FOREIGN KEY(id_grupo) REFERENCES grupos(id_grupo),
  ADD CONSTRAINT notas_materias
  FOREIGN KEY(id_materia) REFERENCES materias(id_materia);