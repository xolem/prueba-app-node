var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Añadimos la libreria Mongoose
var mongoose = require('mongoose');


var indexRouter = require('./routes/index');

// Añadimos nuestra variable personal
var personalRouter = require('./routes/personal');

var app = express();


// Configuramos la conexión con nuestra BBDD
//var mongoDB = 'mongodb://127.0.0.1:27017/fct';
var mongoDB = '//supuestousuario:aHTKEzDro2KWQyIG@cluster0.7b3vl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console,' MongoDB: Error de conexión '));
console.log("MongoDB: conectado a la BBDD");



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/personal', personalRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

