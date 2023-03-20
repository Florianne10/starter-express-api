const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Group extends Sequelize.Model {
		static associate(db) {
			Group.belongsToMany(db.Person, { through: 'PersonGroup' });
		};
	}

	Group.init({
		title: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Group'
	});

	return Group;
};
