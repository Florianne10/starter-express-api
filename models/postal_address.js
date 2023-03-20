const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class PostalAddress extends Sequelize.Model {
		static associate(db) {
			PostalAddress.belongsTo(db.Person, { onDelete: 'cascade' });
		};
	}

	PostalAddress.init({
		address: {
			type: DataTypes.STRING,
			allowNull: false
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false
		},
		label: {
			type: DataTypes.ENUM('home', 'work'),
			defaultValue: 'home'
		}
	}, {
		sequelize,
		modelName: 'PostalAddress'
	});

	return PostalAddress;
};
