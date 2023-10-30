const { Schema, model } = require("mongoose");

const languageSchema = new Schema(
    {
        language: {
            type: String,
            required: true,
            maxLength: 50,
            minLength: 1,
        },
        flag: {
            type: String,
        },
        expertise: {
            type: String,
            required: true  // The start date is required
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Language = model("Language", languageSchema);
module.exports = Language;
