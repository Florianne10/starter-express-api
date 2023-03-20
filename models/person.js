const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

	class Person extends Sequelize.Model {
		static associate(db) {
			Person.hasMany(db.MailAddress, { onDelete: 'cascade' });
			Person.hasMany(db.Phone, { onDelete: 'cascade' });
			Person.hasMany(db.PostalAddress, { onDelete: 'cascade' });
			Person.belongsToMany(db.Group, { through: 'PersonGroup' });
		}
	}

	Person.init({
		firstname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize,
		modelName: 'Person'
	});

	return Person;

};
