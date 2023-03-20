const person_ctrl = require('../controllers/person');
const group_ctrl = require('../controllers/group');

module.exports = [

	{
		url: '/group',
		method: 'get',
		func: group_ctrl.get_all
	},
	{
		url: '/group',
		method: 'post',
		func: group_ctrl.create
	},
	{
		url: '/group/:group_id',
		method: 'get',
		func: group_ctrl.get_by_id
	},
	{
		url: '/group/:group_id',
		method: 'put',
		func: group_ctrl.update_by_id
	},
	{
		url: '/group/:group_id',
		method: 'delete',
		func: group_ctrl.delete_by_id
	},
	{
		url: '/group/:group_id/people',
		method: 'get',
		func: [group_ctrl.load_by_id, person_ctrl.get_all_of_group]
	},
	{
		url: '/person/:person_id/groups',
		method: 'get',
		func: [person_ctrl.load_by_id, group_ctrl.get_all_of_person]
	},
	{
		url: '/person/:person_id/group/:group_id',
		method: 'post',
		func: [person_ctrl.load_by_id, group_ctrl.add_to_person]
	},
	{
		url: '/person/:person_id/group/:group_id',
		method: 'delete',
		func: [person_ctrl.load_by_id, group_ctrl.remove_from_person]
	}

];
