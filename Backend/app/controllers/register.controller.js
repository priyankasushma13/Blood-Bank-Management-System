const db = require("../models");
const Register = db.registers;
// Create and Save a new Register
exports.create = (req, res) => {
  // Validate request

  // Create a Register
  const register = new Register({
    uname:req.body.uname,
    mobile: req.body.mobile,
    pwd: req.body.pwd,
    cpwd: req.body.pwd,
   
  });

  // Save Register in the database
  register
    .save(register)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Register."
      });
    });
};

//Retrieve all Registers from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Register.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving registers."
      });
    });
};

// Find a single Register with an id
exports.findOne = (req, res) => {
  Register.findOne({uname:req.params.uname})
    .then(data=>{
     res.send(data);
    });
  const uname = req.params.uname;

};

// Update a Register by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Register.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Register with id=${id}. Maybe Register was not found!`
        });
      } else res.send({ message: "Register was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Register with id=" + id
      });
    });
};

// Delete a Register with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Register.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Register with id=${id}. Maybe Register was not found!`
        });
      } else {
        res.send({
          message: "Register was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Register with id=" + id
      });
    });
};

// Delete all Registers from the database.
exports.deleteAll = (req, res) => {
  Register.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Registers were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Registers."
      });
    });
};

// Find all published Registers
exports.findAllPublished = (req, res) => {
  Register.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Registers."
      });
    });
};
