const person_ctrl = require('../controllers/person');
const phone_ctrl = require('../controllers/phone');

module.exports = [
	
	{
		url: '/person/:person_id/phone',
		method: 'get',
		func: [ person_ctrl.load_by_id, phone_ctrl.get_all ]
	},
	{
		url: '/person/:person_id/phone',
		method: 'post',
		func: [ person_ctrl.load_by_id, phone_ctrl.create ]
	},
	{
		url: '/person/:person_id/phone/:phone_id',
		method: 'get',
		func: [ person_ctrl.load_by_id, phone_ctrl.get_by_id ]
	},
	{
		url: '/person/:person_id/phone/:phone_id',
		method: 'put',
		func: [ person_ctrl.load_by_id, phone_ctrl.update_by_id ]
	},
	{
		url: '/person/:person_id/phone/:phone_id',
		method: 'delete',
		func: [ person_ctrl.load_by_id, phone_ctrl.delete_by_id ]
	}
	
];
