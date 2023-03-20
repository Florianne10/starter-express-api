const db = require('../models');

module.exports = {

	get_all: (req, res, next) => {
		let where = {};
		if (req.query.label) {
			where.label = req.query.label;
		}
		return req.person.getPhones({
			order: ['label'],
			where
		})
			.then(phones => res.json(phones))
			.catch(next);
	},

	get_by_id: (req, res, next) => {
		return db.Phone.findByPk(req.params.phone_id)
			.then(phone => {
				if (!phone || phone.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested Phone not found' };
				}
				return res.json(phone);
			})
			.catch(next);
	},

	create: (req, res, next) => {
		return req.person.createPhone(req.body)
			.then(phone => res.json(phone))
			.catch(next);
	},

	update_by_id: (req, res, next) => {
		return db.Phone.findByPk(req.params.phone_id)
			.then(phone => {
				if (!phone || phone.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested Phone not found' };
				}
				Object.assign(phone, req.body);
				return phone.save();
			})
			.then(phone => res.json(phone))
			.catch(next);
	},

	delete_by_id: (req, res, next) => {
		return db.Phone.findByPk(req.params.phone_id)
			.then(phone => {
				if (!phone || phone.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested Phone not found' };
				}
				return phone.destroy();
			})
			.then(() => res.status(200).end())
			.catch(next);
	}

};
