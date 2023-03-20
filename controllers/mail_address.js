const db = require('../models');

module.exports = {

	get_all: (req, res, next) => {
		let where = {};
		if (req.query.label) {
			where.label = req.query.label;
		}
		return req.person.getMailAddresses({
			order: ['label'],
			where
		})
			.then(mailAddresses => res.json(mailAddresses))
			.catch(next);
	},

	get_by_id: (req, res, next) => {
		return db.MailAddress.findByPk(req.params.mail_address_id)
			.then(mailAddress => {
				if (!mailAddress || mailAddress.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested MailAddress not found' };
				}
				return res.json(mailAddress);
			})
			.catch(next);
	},

	create: (req, res, next) => {
		return req.person.createMailAddress(req.body)
			.then(mailAddress => res.json(mailAddress))
			.catch(next);
	},

	update_by_id: (req, res, next) => {
		return db.MailAddress.findByPk(req.params.mail_address_id)
			.then(mailAddress => {
				if (!mailAddress || mailAddress.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested MailAddress not found' };
				}
				Object.assign(mailAddress, req.body);
				return mailAddress.save();
			})
			.then(mailAddress => res.json(mailAddress))
			.catch(next);
	},

	delete_by_id: (req, res, next) => {
		return db.MailAddress.findByPk(req.params.mail_address_id)
			.then(mailAddress => {
				if (!mailAddress || mailAddress.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested MailAddress not found' };
				}
				return mailAddress.destroy();
			})
			.then(() => res.status(200).end())
			.catch(next);
	}

};
