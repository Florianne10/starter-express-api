const
	fs = require('fs'),
	{ Sequelize } = require('sequelize');

// create Sequelize instance
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'data.sqlite'
	// logging: false
});

const db = {};

fs.readdirSync(__dirname)
	.filter(filename => filename !== 'index.js')
	.forEach(filename => {
		const model = require('./' + filename)(sequelize);
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	db[modelName].associate(db);
});

sequelize.sync();

module.exports = db;
