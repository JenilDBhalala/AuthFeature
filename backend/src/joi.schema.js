const Joi = require('joi');

// Joi validation schema for the User model
const userSchema = Joi.object({
  username: Joi.string().trim().lowercase(),
  email: Joi.string().email().required().trim().lowercase(),
  password: Joi.string().required().min(6)
});

module.exports = userSchema;


