export default function(err, req, res, next) {
  console.error(err.stack ? err.stack : err)
  res.status(500).json(err)
}
