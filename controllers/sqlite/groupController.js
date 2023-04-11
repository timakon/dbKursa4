const Group = require('../../models/sqlite/Group');
const Post = require('../../models/sqlite/Post');

// Создать новую группу
exports.createGroup = async (req, res) => {
  try {
    const group = await Group.create({
      name: req.body.name,
      description: req.body.description,
      ownerId: req.body.ownerId
    });
    res.status(201).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

// Получить список групп
exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.findAll(); // Замените эту строку
    const userRole = req.cookies.userRole;
    res.render('groups', { groups, userRole });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
  }
};

exports.getGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const posts = await Post.findAll({ where: { groupId } }); // Получаем посты только для текущей группы
    const currentUser = req.cookies.userId;
    const group = await Group.findByPk(groupId);
    
    res.render('group', { group, currentUser, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
