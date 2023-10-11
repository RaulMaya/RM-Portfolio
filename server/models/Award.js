const { Schema, model } = require("mongoose");

const awardSchema = new Schema(
    {
        teacher: {
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
        teacherLogo: {
            type: String,
        },
        url: {
            type: String,
        },
        awardImage: {
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

const Award = model("Award", awardSchema);
module.exports = Award;
