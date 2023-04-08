const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, default: "" },
  },
);

module.exports = mongoose.model('Posts', profileSchema);