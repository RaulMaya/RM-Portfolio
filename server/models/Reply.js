const { Schema, model } = require("mongoose");

const replySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    reply: {
      type: String,
      required: true,
      maxLength: 200,
      minLength: 1,
    },
    likes: {
      type: [Schema.Types.ObjectId], // Array of User IDs
      ref: 'User',
      default: [],
    },
    dislikes: {
      type: [Schema.Types.ObjectId], // Array of User IDs
      ref: 'User',
      default: [],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Reply = model("Reply", replySchema);
module.exports = Reply;