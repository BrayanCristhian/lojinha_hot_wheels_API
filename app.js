var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');




var app = express();


app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//insere os arquivos que contem as rotas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usuario.router');
const autenticacaoRouter = require('./routes/autenticacao.route');
const produtoRouter = require('./routes/produto.router');
const tiposRouter = require('./routes/tipos.router');
const fornecedorRouter = require('./routes/fornecedor.router');
const corRouter = require('./routes/cor.router');


//informa os endpoints para cada rota
app.use('/', indexRouter);
app.use('/usuario', usersRouter);
app.use('/autenticacao', autenticacaoRouter);
app.use('/produto',produtoRouter);
app.use('/tipo',tiposRouter);
app.use('/fornecedor',fornecedorRouter);
app.use('/cor',corRouter);

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
