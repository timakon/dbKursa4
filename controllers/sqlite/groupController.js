const Group = require('../../models/sqlite/Group');
const Post = require('../../models/sqlite/Post');
const GroupMember = require('../../models/sqlite/GroupMember');
const Comment = require('../../models/sqlite/Comment');
const Like = require('../../models/sqlite/Like');

// Создать новую группу
exports.createGroup = async (req, res) => {
  try {
    const group = await Group.create({
      name: req.body.name,
      description: req.body.description,
      ownerId: req.body.ownerId
    });
    res.redirect("/groups")
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
    const currentUser = req.cookies.userId;
    const group = await Group.findByPk(groupId, {
      include: [
        {
          model: Post,
          as: 'posts',
          include: [
            {
              model: Comment,
              as: 'comments'
            },
            {
              model: Like,
              as: 'likedPost'
            }
          ]
        },
        {
          model: GroupMember,
          as: 'members'
        }
      ],
      nest: true
    });

    // Проверить, является ли пользователь членом группы
    const groupMember = await GroupMember.findOne({ where: { groupId: groupId, userId: currentUser } });
    const isMember = groupMember !== null;

    res.render('group', { group, currentUser, isMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

