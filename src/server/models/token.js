export default (sequelize, DataTypes) => {
  return sequelize.define('Token', {
    value: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        const { Token, User } = models
        Token.belongsTo(User)
      },
    },
    instanceMethods: {
      toJSON() {
        const { value } = this.dataValues
        return {
          value,
        }
      },
    },
  })
}
