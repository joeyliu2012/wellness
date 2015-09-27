import Sequelize from 'sequelize'

// export the squelize singleton
export default new Sequelize(
  'wellness_dev',
  'wellness_dev',
  '',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
)
