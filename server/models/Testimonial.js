const { Schema, model } = require("mongoose");

const testimonialSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    testimonial: {
      type: String,
      required: true,
      maxLength: 500,
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

const Testimonial = model("Testimonial", testimonialSchema);
module.exports = Testimonial;
