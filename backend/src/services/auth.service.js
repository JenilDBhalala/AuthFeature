const bcrypt = require("bcrypt")
const {NotFoundError, BadRequest} = require("../error")

//importing models
const User = require("../models/user.model");

const signupUser = async (body) => {
  const { username, email, password } = body;

  const existingUser = await User.findOne({where: {email}})

  if(existingUser){
    throw new BadRequest("User with this email already exists!");
  }

  const data = {
    username, 
    email, 
    password : await bcrypt.hash(password, 10)
  }

  const user = await User.create(data);
  return user;
};

const signinUser = async (body) => {
  console.log(body)
  const { email, password } = body;

  const user = await User.findOne({where: {email}});
  console.log(user)
  if(!user){
    throw new BadRequest("User credentials are wrong!");
  }

  const match = await bcrypt.compare(password, user.password)

  if(!match){
    throw new BadRequest("User credentials are wrong!");
  }

  return user;
};

module.exports = {
    signupUser,
    signinUser
}
