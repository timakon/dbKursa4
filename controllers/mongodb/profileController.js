const Profile = require('../../models/mongodb/Profile');

// exports.getProfileByUserId = async (req, res) => {
//   try {
//     const profile = await Profile.findById(req.params.id);
//     res.json(profile);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Ошибка сервера' });
//   }
// };
exports.getProfileByUserId = async (req, res) => {
  console.log(req.params.id);
    try {
      const user = await Profile.findById({_id:req.params.id});
      res.render('user', { user: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  };
  exports.updateProfileByUserId = async (req, res) => {
    const userId = req.params.id;
    const updatedProfileData = req.body;

    console.log(req);
  
    try {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: userId },
        updatedProfileData,
        { new: true, runValidators: true }
      );
  
      if (!updatedProfile) {
        return res.status(404).json({ error: 'Профиль не найден' });
      }
  
      res.status(200).json({ message: 'Профиль успешно обновлен', profile: updatedProfile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  };