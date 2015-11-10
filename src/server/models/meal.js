export default (sequelize, DataTypes) => {
  return sequelize.define('Meal', {
//    user: DataTypes.STRING,
    description: DataTypes.STRING,
    timestamp: DataTypes.STRING,
  })
}
