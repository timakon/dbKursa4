const Event = require('../../models/sqlite/Event');

// Создать новое событие
exports.createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date,
      groupId: req.body.groupId
    });
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
