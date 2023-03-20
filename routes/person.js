const person_ctrl = require('../controllers/person');

module.exports = [
	
	{
		url: '/person',
		method: 'get',
		func: person_ctrl.get_all
	},
	{
		url: '/person',
		method: 'post',
		func: person_ctrl.create
	},
	{
		url: '/person/:person_id',
		method: 'get',
		func: person_ctrl.get_by_id
	},
	{
		url: '/person/:person_id',
		method: 'put',
		func: person_ctrl.update_by_id
	},
	{
		url: '/person/:person_id',
		method: 'delete',
		func: person_ctrl.delete_by_id
	}
	
];
