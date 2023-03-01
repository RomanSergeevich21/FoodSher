const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: 'roleid' });

      this.hasMany(models.Request, { foreignKey: 'partnerid' });

      this.hasMany(models.Comment, {
        as: 'AuthorComments',
        foreignKey: 'authorid',
      });
      this.hasMany(models.Comment, {
        as: 'UserComments',
        foreignKey: 'userid',
      });

      this.belongsToMany(models.User, {
        through: 'Rating',
        as: 'UserRatings',
        foreignKey: 'clientid',
      });
      this.belongsToMany(models.User, {
        through: 'Rating',
        as: 'OwnerRatings',
        foreignKey: 'ownerid',
      });

      this.belongsToMany(models.User, {
        through: 'Subscription',
        as: 'SubscriberUsers',
        foreignKey: 'subscriberid',
      });
      this.belongsToMany(models.User, {
        through: 'Subscription',
        as: 'CompanySubUsers',
        foreignKey: 'companyid',
      });

      this.belongsToMany(models.Request, { through: 'Favorite', foreignKey: 'userid' });

      this.belongsToMany(models.Product, { through: 'Reserve', foreignKey: 'userid' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      hashpass: DataTypes.TEXT,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      secondName: DataTypes.STRING,
      phone: DataTypes.STRING,
      pathPhoto: DataTypes.STRING,
      alternativePhone: DataTypes.STRING,
      companyName: DataTypes.STRING,
      titleLogoPath: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      description: DataTypes.TEXT,
      roleid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
