const authService = require("../services/auth.service");

const signupUser = async (req, res, next) => {
    try {
        const user = await authService.signupUser(req.body);
        res.status(201).json({ status: 'success', message: "SignUp Successful", data: user });
    }
    catch (error) {
        next(error)
    }
}

const signinUser = async (req, res, next) => {
    try {
        const user = await authService.signinUser(req.body);
        res.status(200).json({ status: 'success', message: "SignIn Successful", data: user });
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    signupUser,
    signinUser
}