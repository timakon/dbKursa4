const Group = require('../../models/sqlite/Group');

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
    const groups = await Group.findAll();
    res.status(200).json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
