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
    portrait: {
      type: String,
    },
    images: {
      type: [String],
      validate: [arrayLimit, '{PATH} exceeds the limit of 10']
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
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

// Ensure that the arrayLimit function is defined
function arrayLimit(val) {
  return val.length <= 10;
}

// Virtual for likesCount
projectSchema.virtual('likesCount').get(function () {
  return this.likedUsers.length;
});

const Project = model("Project", projectSchema);
module.exports = Project;
