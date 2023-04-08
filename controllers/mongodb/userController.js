const User = require('../../models/mongodb/User');
const Profile = require('../../models/mongodb/Profile');

// Регистрация нового пользователя
exports.registerUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    const profile = await Profile.create({
      _id: user._id,
      name: "",
      bio: "",
      gender: "prefer not to say"
    });

    res.status(201).json({ user, profile });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('users', { users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('user', { user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};