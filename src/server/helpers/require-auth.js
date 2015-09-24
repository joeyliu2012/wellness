import { Token } from '../models'

export default function(req, res, next) {
  const value = req.headers['x-auth-token']
  if (value) {
    Token.findOne({where: { value }})
         .then((token) => {
           if (!token) {
             res.status(401)
             res.json({error: { message: 'Unauthorized' }})
           } else {
             return token.getUser()
           }
         })
         .catch((err) => {
           throw new Error(err)
         })
         .then((user) => {
           if (user) {
             req.currentUser = user
             next()
             return
           }
         })
    return
  }
  res.status(401)
  res.json({error: { message: 'Unauthorized' }})
}
