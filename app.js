const  createError = require('http-errors');
const  express = require('express');
const  path = require('path');
const  cookieParser = require('cookie-parser');
const  logger = require('morgan');
const  indexRouter = require('./routes/index');
const  tagRouter = require('./routes/tagRoute');
const  categoryRouter = require('./routes/category');
const  reviewRouter = require('./routes/review')
const  generateStartingData  = require('./data/starting-data')
const  sequelize = require("./utils/db");


const  app = express(); 
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/reviews', reviewRouter);
app.use('/categories', categoryRouter);
app.use('/tags', tagRouter);

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

sequelize.sync({force:true})
  .then(() => {console.log('DB Connected')
  generateStartingData()
})
  .catch(console.error)

// generate starting categories

 

module.exports = app;
