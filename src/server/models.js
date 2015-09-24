import sequelize from './sequelize'
import { STRING } from 'sequelize'

const User = sequelize.define('User', {
  email: { type: STRING, unique: true },
  fullName: { type: STRING, null: false },
  passwordDigest: { type: STRING, null: false },
}, {
  instanceMethods: {
    toJSON() {
      const vals = this.dataValues
      return Object.keys(vals)
        .filter((key) => key !== 'passwordDigest')
        .reduce((acc, key) => {
          acc[key] = vals[key]
          return acc
        }, {})
    },
  },
})

const Token = sequelize.define('Token', {
  value: { type: STRING, unique: true },
}, {
  indexes: [
    { unique: true, fields: ['value'] },
  ],
})

Token.belongsTo(User)

export default {
  User,
  Token,
}
