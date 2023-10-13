const { Schema, model } = require("mongoose");

const projectCommentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxLength: 50,
      minLength: 1,
    },
    comment: {
      type: String,
      required: true,
      maxLength: 450,
      minLength: 1,
    },
    likes: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      default: [],
    },
    dislikes: {
      type: [Schema.Types.ObjectId],
      ref: 'User',
      default: [],
    },
    replies: [{
      type: Schema.Types.ObjectId,
      ref: 'Reply'
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

projectCommentSchema.virtual('likesCount').get(function () {
  return this.likes.length;
});

projectCommentSchema.virtual('dislikesCount').get(function () {
  return this.dislikes.length;
});

const ProjectComment = model("ProjectComment", projectCommentSchema);
module.exports = ProjectComment;
