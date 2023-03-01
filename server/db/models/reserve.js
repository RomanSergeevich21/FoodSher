const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reserve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  Reserve.init(
    {
      count: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
      productid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Reserve',
    },
  );
  return Reserve;
};
