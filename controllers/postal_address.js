const db = require('../models');

module.exports = {

	get_all: (req, res, next) => {
		let where = {};
		if (req.query.label) {
			where.label = req.query.label;
		}
		return req.person.getPostalAddresses({
			order: ['label'],
			where
		})
			.then(postalAddresses => res.json(postalAddresses))
			.catch(next);
	},

	get_by_id: (req, res, next) => {
		return db.PostalAddress.findByPk(req.params.postal_address_id)
			.then(postalAddress => {
				if (!postalAddress || postalAddress.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested PostalAddress not found' };
				}
				return res.json(postalAddress);
			})
			.catch(next);
	},

	create: (req, res, next) => {
		return req.person.createPostalAddress(req.body)
			.then(postalAddress => res.json(postalAddress))
			.catch(next);
	},

	update_by_id: (req, res, next) => {
		return db.PostalAddress.findByPk(req.params.postal_address_id)
			.then(postalAddress => {
				if (!postalAddress || postalAddress.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested PostalAddress not found' };
				}
				Object.assign(postalAddress, req.body);
				return postalAddress.save();
			})
			.then(postalAddress => res.json(postalAddress))
			.catch(next);
	},

	delete_by_id: (req, res, next) => {
		return db.PostalAddress.findByPk(req.params.postal_address_id)
			.then(postalAddress => {
				if (!postalAddress || postalAddress.PersonId !== req.person.id) {
					throw { status: 404, message: 'Requested PostalAddress not found' };
				}
				return postalAddress.destroy();
			})
			.then(() => res.status(200).end())
			.catch(next);
	}

};
