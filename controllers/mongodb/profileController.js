const Profile = require('../../models/mongodb/Profile');
const Posts = require('../../models/mongodb/Posts');

exports.getProfileByUserId = async (req, res) => {
  try {
    const user = await Profile.findById({_id:req.params.id});
    const posts = await Posts.find({ user_id: req.params.id });

    console.log(user);
    res.render('user', { user, posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
  exports.updateProfileByUserId = async (req, res) => {
    const userId = req.params.id;
    const updatedProfileData = req.body;
    console.log(updatedProfileData)
  
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
      const posts = await Posts.find({ user_id: req.params.id });
      res.render('user', { user, posts });
      // res.status(200).json({ message: 'Профиль успешно обновлен', profile: updatedProfile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  };