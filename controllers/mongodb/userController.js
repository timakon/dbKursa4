const User = require('../../models/mongodb/User');
const Profile = require('../../models/mongodb/Profile');
const Posts = require('../../models/mongodb/Posts')

// Регистрация нового пользователя
exports.registerUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role || 'user'
    });

    const profile = await Profile.create({
      _id: user._id,
      name: "",
      bio: "",
      gender: "prefer not to say"
    });

    res.cookie('userRole', user.role);
    res.cookie('userId', user._id); // добавляем id пользователя в куки

    res.redirect("/")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

// Логин пользователя
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Неправильный логин или пароль' });
    }

    const profile = await Profile.findById(user._id);

    res.cookie('userRole', user.role);
    res.cookie('userId', user._id);

    res.redirect("/")
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

exports.checkRules = (req, res) => {

  console.log(req.cookies.userRole)
  console.log(req.cookies.userId)

  res.redirect('/');
};

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    await Profile.findByIdAndDelete(userId);
    await Posts.deleteMany({ userId });
    
    res.status(200).json({ message: 'Пост успешно удален' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};


