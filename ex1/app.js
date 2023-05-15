var express = require('express');

var logger = require('morgan');

var indexRouter = require('./routes/index');

// BASE DE DADOS
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/scienceJobs';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error...'));
db.once('open', function() {
  console.log("Conexão ao MongoDB realizada com sucesso...")
});


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', indexRouter);

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
    res.json({erro: err, mensagem:"404 rota não suportada"})
  });

module.exports = app;
