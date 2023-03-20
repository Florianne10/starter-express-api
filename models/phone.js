const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Phone extends Sequelize.Model {
		static associate(db) {
			Phone.belongsTo(db.Person, { onDelete: 'cascade' });
		};
	}

	Phone.init({
		number: {
			type: DataTypes.STRING,
			allowNull: false
		},
		label: {
			type: DataTypes.ENUM('home', 'work'),
			defaultValue: 'home'
		}
	}, {
		sequelize,
		modelName: 'Phone'
	});

	return Phone;
};
