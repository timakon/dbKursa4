const SearchHistory = require('../../models/sqlite/SearchHistory');

// Получить историю поиска пользователя
exports.getUserSearchHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const searchHistory = await SearchHistory.findAll({ where: { userId } });
    res.status(200).json(searchHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};

// Добавить запись в историю поиска
exports.addSearchHistory = async (req, res) => {
  try {
    const { userId, searchTerm } = req.body;
    const newSearchHistory = await SearchHistory.create({ userId, searchTerm });
    res.status(201).json(newSearchHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};