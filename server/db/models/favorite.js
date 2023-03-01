const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  Favorite.init(
    {
      userid: DataTypes.INTEGER,
      requestid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorite',
    },
  );
  return Favorite;
};
