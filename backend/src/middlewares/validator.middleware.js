const { BadRequest } = require("../error");
const userSchema = require("../joi.schema");

// validation middleware for creating or updating a user
const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    throw new BadRequest(error.message)
  }

  next();
};

module.exports = validateUser
