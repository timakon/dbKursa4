const GroupMember = require('../../models/sqlite/GroupMember');
const Group = require('../../models/sqlite/Group');

exports.joinGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const userId = req.cookies.userId;

    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    await GroupMember.create({ groupId, userId });

    res.redirect(`/groups/${groupId}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.leaveGroup = async (req, res) => {
  try {
    const groupId = req.params.groupId;
    const userId = req.cookies.userId;

    const groupMember = await GroupMember.findOne({ where: { groupId, userId } });
    if (!groupMember) {
      return res.status(404).json({ error: 'Group member not found' });
    }

    await groupMember.destroy();

    res.redirect(`/groups/${groupId}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};