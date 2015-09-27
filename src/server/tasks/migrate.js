import sequilize from '../sequelize'

// Import all models below; Use relative paths
//  there is no webpack resolution here...
import '../models'

const FORCE = process.env.FORCE ? true : false

// This creates tables in the database
const MIGRATE_LOG_MSG = 'Migrating the database'
console.time(MIGRATE_LOG_MSG) // eslint-disable-line no-console
sequilize.sync({force: FORCE}).then(() => console.timeEnd(MIGRATE_LOG_MSG)) // eslint-disable-line no-console

