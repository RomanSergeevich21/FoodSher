const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'clientid' });
      this.belongsTo(User, { foreignKey: 'ownerid' });
    }
  }
  Rating.init(
    {
      clientid: DataTypes.INTEGER,
      ownerid: DataTypes.INTEGER,
      evaluation: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Rating',
    },
  );
  return Rating;
};
