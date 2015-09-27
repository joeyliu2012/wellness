export default function(err, req, res, next) {
  console.error(err.stack ? err.stack : err) // eslint-disable-line no-console
  res.status(500).json(err)
  next(err)
}
