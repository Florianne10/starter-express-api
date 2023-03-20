const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class MailAddress extends Sequelize.Model {
		static associate(db) {
			MailAddress.belongsTo(db.Person, { onDelete: 'cascade' });
		};
	}

	MailAddress.init({
		address: {
			type: DataTypes.STRING,
			validate: {
				isEmail: true
			},
			allowNull: false
		},
		label: {
			type: DataTypes.ENUM('home', 'work'),
			defaultValue: 'home'
		}
	}, {
		sequelize,
		modelName: 'MailAddress'
	});

	return MailAddress;
};
