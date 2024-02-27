const { Schema, model } = require("mongoose");

const projectCommentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
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
    timestamps: true, // This line adds createdAt and updatedAt fields
  }
);

projectCommentSchema.virtual('likesCount').get(function () {
  return this.likes.length;
});

projectCommentSchema.virtual('dislikesCount').get(function () {
  return this.dislikes.length;
});

// Virtual for calculating net likes
projectCommentSchema.virtual('netLikes').get(function () {
  return this.likes.length - this.dislikes.length;
});

const ProjectComment = model("Comment", projectCommentSchema);
module.exports = ProjectComment;
