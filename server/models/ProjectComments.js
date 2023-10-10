const { Schema, model } = require("mongoose");

const projectCommentSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 1,
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
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );

const ProjectComment = model("ProjectComment", projectCommentSchema);
module.exports = ProjectComment;
