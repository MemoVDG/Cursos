const express = require('express');
const app = express();
const moment = require('moment');
const { config } = require('./config/index');
const moviesAPI = require('./routes/movies');
const { logErrors, errorHanlder, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');


app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/json', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/date/:date', (req, res) => {
  if (req.params.date.split('-').length < 3) {
    res.json({ error: 'Bad date structure' });
    return;
  }

  if (moment(req.params.date, 'DD-MM-YYYY').isLeapYear()) {
    res.json({ data: true });
    res.end();
  } else {
    res.json({ data: false });
    res.end();
  }
});

// Le permite a express poder interpretar datos de tipo JSON de bodyparser
app.use(express.json());
moviesAPI(app);

// Capturar error 404
app.use(notFoundHandler);

// Manejadores de errores
app.use(logErrors);
app.use(wrapErrors)
app.use(errorHanlder);

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
