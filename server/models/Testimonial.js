const { Schema, model } = require("mongoose");

const testimonialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
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

const Testimonial = model("Testimonial", testimonialSchema);
module.exports = Testimonial;
