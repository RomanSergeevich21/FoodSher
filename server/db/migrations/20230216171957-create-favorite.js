/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Favorites',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
          unique: 'uniqueFav',
          onDelete: 'CASCADE',
        },
        requestid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Requests',
            key: 'id',
          },
          unique: 'uniqueFav',
          onDelete: 'CASCADE',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        uniqueKeys: {
          uniqueFav: {
            fields: ['userid', 'requestid'],
          },
        },
      },
    );
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Favorites');
  },
};
