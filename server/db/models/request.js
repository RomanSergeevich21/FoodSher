const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Status, User, Product }) {
      this.belongsTo(Status, { foreignKey: 'statusid' });
      this.belongsTo(User, { foreignKey: 'partnerid' });
      this.hasMany(Product, { foreignKey: 'requestid' });

      this.belongsToMany(User, { through: 'Favorite', foreignKey: 'requestid' });
    }
  }
  Request.init(
    {
      title: DataTypes.STRING,
      lifeTimeStart: DataTypes.DATE,
      lifeTimeEnd: DataTypes.DATE,
      address: DataTypes.STRING,
      contactPhone: DataTypes.STRING,
      contactName: DataTypes.STRING,
      description: DataTypes.TEXT,
      partnerid: DataTypes.INTEGER,
      statusid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Request',
    },
  );
  return Request;
};
