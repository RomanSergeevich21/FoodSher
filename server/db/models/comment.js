const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'authorid' });
      this.belongsTo(User, { foreignKey: 'userid' });
    }
  }
  Comment.init(
    {
      body: DataTypes.TEXT,
      authorid: DataTypes.INTEGER,
      userid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
