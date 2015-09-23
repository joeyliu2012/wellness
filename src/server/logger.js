export default function(req, res, next) {
  const log = `${req.method} - ${req.originalUrl}`
  console.time(log) // eslint-disable-line no-console
  next()
  console.timeEnd(log) // eslint-disable-line no-console
}
