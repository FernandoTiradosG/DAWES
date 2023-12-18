export function errorMiddleware(err, req, res, next) {
  const { status = 500, message } = err;
  console.error('Error en la solicitud:', err);
  res.status(status).send(status === 500 ? 'Server Error' : message);
}