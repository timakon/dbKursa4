const ImageView = require('../../models/sqlite/ImageView');

// Получить просмотры изображения пользователя
exports.getUserImageViews = async (req, res) => {
  try {
    const userId = req.params.userId;
    const imageViews = await ImageView.findAll({ where: { userId } });
    res.status(200).json(imageViews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

// Добавить или обновить просмотр изображения
exports.addView = async (req, res) => {
  try {
    const { userId, imageId } = req.body;
    const existingView = await ImageView.findOne({ where: { userId, imageId } });

    if (existingView) {
      existingView.viewCount += 1;
      await existingView.save();
      res.status(200).json(existingView);
    } else {
      const newView = await ImageView.create({ userId, imageId, viewCount: 1 });
      res.status(201).json(newView);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};