const screens = require('../../models/screens');
const mongoose = require('mongoose');

module.exports = function (router) {
  // GET
  router.get('/screens', function (req, res) {
    screens
      .find()
      .exec()
      .then((docs) => res.status(200).json(docs))
      .catch((err) =>
        res
          .status(500)
          .json({ message: 'Error finding SGA Survey percentages', error: err })
      );
  });

  // POST
  router.post('/screens', function (req, res) {
    let note = new screens(req.body);
    note.save(function (err, member) {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(200).json(member);
    });
  });
};
