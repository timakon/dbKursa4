const Profile = require('../../models/mongodb/Profile');

exports.getProfileByUserId = async (req, res) => {
  try {
    const user = await Profile.findById({_id:req.params.id});
    console.log(user);
    res.render('user', { user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
  exports.updateProfileByUserId = async (req, res) => {
    const userId = req.params.id;
    const updatedProfileData = req.body;
  
    try {
      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: userId },
        updatedProfileData,
        { new: true, runValidators: true }
      );
      
      if (!updatedProfile) {
        return res.status(404).json({ error: 'Профиль не найден' });
      }
      const user = await Profile.findById({_id:req.params.id});
      // res.status(200).json({ message: 'Профиль успешно обновлен', profile: updatedProfile });
      res.render('user', { user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  };