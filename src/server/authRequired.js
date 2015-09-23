import { User, Token } from './models'

export default function(req, res, next) {
  const value = req.headers['x-auth-token']
  if (value) {
    Token.findOne({where: { value }})
      .then((token) => token.getUser())
      .then((user) => { req.currentUser = user; next() })
      .catch((err) => {
        console.error(err)
        res.json(err)
      })
  } else {
    res.status(401)
    res.json({error: { message: 'Unauthorized' }})
  }
}
