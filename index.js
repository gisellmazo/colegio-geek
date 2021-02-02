<<<<<<< HEAD
<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 5600);

app.use(require('./send_mail/send_mail'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
=======
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

const administrador=require('./routes/administrador');
const estudiante=require('./routes/estudiante');
const profesor=require('./routes/profesor');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 5600);

app.use(require('./send_mail/send_mail'));


app.use('/', administrador);
app.use('/', profesor);
app.use('/', estudiante);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
>>>>>>> 585fb79c44d97e3b6d8a7767407183e6ef129404
=======
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

const administrador=require('./routes/administrador/administrador');
const estudiante=require('./routes/estudiante/estudiante');
const profesor=require('./routes/profesor/profesor');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 5600);

app.use(require('./send_mail/send_mail'));


app.use('/', administrador);
app.use('/', profesor);
app.use('/', estudiante);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
>>>>>>> 74860e2652c85dbaf8866851167f8f28e9ecd93d
});