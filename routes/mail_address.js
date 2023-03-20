const person_ctrl = require('../controllers/person');
const mail_address_ctrl = require('../controllers/mail_address');

module.exports = [
	
	{
		url: '/person/:person_id/mailAddress',
		method: 'get',
		func: [ person_ctrl.load_by_id, mail_address_ctrl.get_all ]
	},
	{
		url: '/person/:person_id/mailAddress',
		method: 'post',
		func: [ person_ctrl.load_by_id, mail_address_ctrl.create ]
	},
	{
		url: '/person/:person_id/mailAddress/:mail_address_id',
		method: 'get',
		func: [ person_ctrl.load_by_id, mail_address_ctrl.get_by_id ]
	},
	{
		url: '/person/:person_id/mailAddress/:mail_address_id',
		method: 'put',
		func: [ person_ctrl.load_by_id, mail_address_ctrl.update_by_id ]
	},
	{
		url: '/person/:person_id/mailAddress/:mail_address_id',
		method: 'delete',
		func: [ person_ctrl.load_by_id, mail_address_ctrl.delete_by_id ]
	}
	
];
