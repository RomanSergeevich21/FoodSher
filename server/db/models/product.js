const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Request, User }) {
      this.belongsTo(Category, { foreignKey: 'categoryid' });
      this.belongsTo(Request, { foreignKey: 'requestid' });

      this.belongsToMany(User, { through: 'Reserve', foreignKey: 'productid' });
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      photoPath: DataTypes.STRING,
      count: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      categoryid: DataTypes.INTEGER,
      requestid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    },
  );
  return Product;
};
