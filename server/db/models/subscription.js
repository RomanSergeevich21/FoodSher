const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'subscriberid' });
      this.belongsTo(User, { foreignKey: 'companyid' });
    }
  }
  Subscription.init(
    {
      subscriberid: DataTypes.INTEGER,
      companyid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Subscription',
    },
  );
  return Subscription;
};
