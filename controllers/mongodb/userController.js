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

exports.setAdminRole = (req, res) => {
  res.cookie('userRole', 'admin');
  res.redirect('/users');
};

exports.setModeratorRole = (req, res) => {
  res.cookie('userRole', 'moderator');
  res.redirect('/users');
};

exports.setUserRole = (req, res) => {
  res.cookie('userRole', 'user');
  res.redirect('/users');
};

exports.checkRules = (req, res) => {
  const userRole = req.cookies.userRole;

  if (userRole === 'admin') {
    console.log("admin")
  } else if (userRole === 'moderator') {
    console.log("moderator")
  } else {
    console.log("lol")
    // Действия для обычного пользователя
  }
  res.redirect('/users');
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'Пост успешно удален' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};


