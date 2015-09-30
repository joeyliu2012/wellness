'use strict';
module.exports = function(sequelize, DataTypes) {
  var Token = sequelize.define('Token', {
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        models.Token.belongsTo(models.User)
        console.log({models})
      }
    },
    instanceMethods: {
      toJSON() {
        const { value } = this.dataValues
        return {
          value,
        }
      }
    }
  });
  return Token;
};
