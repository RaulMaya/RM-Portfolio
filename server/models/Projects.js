const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 1,
      },
      tags: {
        type: [String],
      },
      description: {
        type: String,
        required: true,
        maxLength: 280,
        minLength: 1,
      },
      // For the images we supose that links are being passed
      portrait: {
        type: String,
      },
      // For the images we supose that links are being passed
      images: {
        type: [String], // An array of strings, each one being a URL to an image
        validate: [arrayLimit, '{PATH} exceeds the limit of 10']
      },
      comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      likesCount: {
        type: Number,
        default: 0,
      },
      likedUsers: {
        type: [Schema.Types.ObjectId],
        ref: "User",
      },
      viewsCount: {
        type: Number,
        default: 0,
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
        default: 'Not Started'
      },
      deployment: {
        type: String,
        required: true,
        maxLength: 280,
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

const Project = model("Project", projectSchema);
module.exports = Project;
