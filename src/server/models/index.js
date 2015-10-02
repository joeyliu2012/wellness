import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import configObj from '../../../config/config.json'

const basename = path.basename(module.filename)
const env = process.env.NODE_ENV === 'web' ? 'development' : process.env.NODE_ENV
const config = configObj[env]
const db = {}

let sequelize
if (config.use_env_letiable) {
  sequelize = new Sequelize(process.env[config.use_env_letiable])
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename)
  })
  .forEach((file) => {
    if (file.slice(-3) !== '.js') return
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.Sequelize = Sequelize

export default db
