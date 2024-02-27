const { Schema, model } = require("mongoose");

const replySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
    },
    reply: {
      type: String,
      required: true,
      maxLength: 200,
      minLength: 1,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    timestamps: true, // This line adds createdAt and updatedAt fields
  }
);

const Reply = model("Reply", replySchema);
module.exports = Reply;