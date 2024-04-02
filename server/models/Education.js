const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
    {
        school: {
            type: String,
            required: true,
            maxLength: 50,
            minLength: 1,
        },
        course: {
            type: String,
            required: true,
            maxLength: 50,
            minLength: 1,
        },
        startDate: {
            type: Date,
            required: true  // The start date is required
        },
        endDate: {
            type: Date,
            required: false  // The end date is not required, so it can be null or undefined
        },
        status: {
            type: String,
        },
        schoolLogo: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
const Education = model("Education", educationSchema);
module.exports = Education;
