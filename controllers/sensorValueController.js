const User = require('../models/sensorValuesModel.js');

// Create and Save a new record
exports.create = (req, res) => {
    // Validate request
    if (!req.body.sensorValue1 || !req.body.sensorValue2) {
        return res.status(400).send({
            message: "Please enter a value"
        });
    }

    // Create a Note
    const record = new User({
        sensorValue1: req.body.sensorValue1,
        sensorValue2: req.body.sensorValue2,
        id:req.body.id
    });

    // Save Note in the database
    record.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Record."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(sensorValues => {
            res.send(sensorValues);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving records."
            });
        });
};




// Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//     User.findByIdAndRemove(req.params.userId)
//         .then(user => {
//             if (!user) {
//                 return res.status(404).send({
//                     message: "User not found with id " + req.params.userId
//                 });
//             }
//             res.send({ message: "Note deleted successfully!" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "User not found with id " + req.params.userId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Could not delete user with id " + req.params.userId
//             });
//         });
// };