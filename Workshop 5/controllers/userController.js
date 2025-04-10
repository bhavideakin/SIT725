
const UserModel = require('../models/temp_userModel');

exports.getUsers = (req, res) => {
  const users = UserModel.getAllUsers();
  res.render('users', { users });
};
