require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

const administrador = require('./routes/administrador/administrador');
const estudiante = require('./routes/estudiante/estudiante');
const profesor = require('./routes/profesor/profesor');
//const image_upload = require('./routes/administrador/image_upload');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 5002);

app.use(require('./send_mail/send_mail'));

app.use('/', administrador);
app.use('/', profesor);
app.use('/', estudiante);
//app.use('/', image_upload);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
