const { Schema, model } = require("mongoose");

const jobprojectSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50,
            minLength: 1,
        },
        company: {
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
            maxLength: 500,
            minLength: 1,
        },
        portrait: {
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

const Jobprojects = model("Jobproject", jobprojectSchema);

module.exports = Jobprojects;
