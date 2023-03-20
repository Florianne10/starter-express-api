const db = require('../models');

module.exports = {

	get_all: (req, res, next) => {
		return db.Group.findAll()
			.then(groups => res.json(groups))
			.catch(next);
	},

	load_by_id: (req, res, next) => {
		return db.Group.findByPk(req.params.group_id)
			.then(group => {
				if (!group) {
					throw { status: 404, message: 'Requested Group not found' };
				}
				req.group = group;
				return next();
			})
			.catch(next);
	},

	get_by_id: (req, res, next) => {
		return db.Group.findByPk(req.params.group_id)
			.then(group => {
				if (!group) {
					throw { status: 404, message: 'Requested Group not found' };
				}
				return res.json(group);
			})
			.catch(next);
	},

	create: (req, res, next) => {
		return db.Group.create(req.body)
			.then(group => res.json(group))
			.catch(next);
	},

	update_by_id: (req, res, next) => {
		return db.Group.findByPk(req.params.group_id)
			.then(group => {
				if (!group) {
					throw { status: 404, message: 'Requested Group not found' };
				}
				Object.assign(group, req.body);
				return group.save();
			})
			.then(group => res.json(group))
			.catch(next);
	},

	delete_by_id: (req, res, next) => {
		return db.Group.findByPk(req.params.group_id)
			.then(group => {
				if (!group) {
					throw { status: 404, message: 'Requested Group not found' };
				}
				return group.destroy();
			})
			.then(() => res.status(200).end())
			.catch(next);
	},

	get_all_of_person: (req, res, next) => {
		return req.person.getGroups({ include: [] })
			.then(groups => res.json(groups))
			.catch(next);
	},

	add_to_person: (req, res, next) => {
		return db.Group.findByPk(req.params.group_id)
			.then(group => {
				if (!group) {
					throw { status: 404, message: 'Requested Group not found' };
				}
				return req.person.addGroup(group);
			})
			.then(() => res.status(200).end())
			.catch(next);
	},

	remove_from_person: (req, res, next) => {
		return db.Group.findByPk(req.params.group_id)
			.then(group => {
				if (!group) {
					throw { status: 404, message: 'Requested Group not found' };
				}
				return req.person.removeGroup(group);
			})
			.then(() => res.status(200).end())
			.catch(next);
	}

};
