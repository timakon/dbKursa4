const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, default: "" },
    bio: { type: String, default: "" },
    gender: { type: String, enum: ['male', 'female', 'non-binary', 'prefer not to say']},
  },
);

module.exports = mongoose.model('Profile', profileSchema);