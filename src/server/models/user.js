export default function(sequelize, DataTypes) {
  return sequelize.define('User', {
    fullName: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    email: DataTypes.STRING,
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
};
