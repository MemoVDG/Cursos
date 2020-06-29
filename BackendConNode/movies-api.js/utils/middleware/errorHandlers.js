const { config } = require('../../config');
const boom = require('@hapi/boom');


// Manejador de error de boom
function wrapErrors(err, req, res, next){
  if(!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  // console.log(err);
  next(err);
}

// eslint-disable-next-line
function errorHanlder(err, req, res, next) {
  const {output: {statusCode, payload}} = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHanlder,
};
