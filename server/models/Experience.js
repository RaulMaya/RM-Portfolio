const { Schema, model } = require("mongoose");

const experienceSchema = new Schema(
    {
        company: {
            type: String,
            required: true,
            maxLength: 50,
            minLength: 1,
        },
        position: {
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
            enum: ['Past Employment', 'Current Job'],
            default: 'Past Employment'
        },
        companyLogo: {
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

const Experience = model("Experience", experienceSchema);
module.exports = Experience;
