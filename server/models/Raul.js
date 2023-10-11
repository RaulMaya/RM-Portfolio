const { Schema, model } = require("mongoose");

const raulSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, 'Please use a valid email address'],
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    socialMedias: {
        twitter: String,
        linkedin: String,
        github: String,
    },
    description: {
        type: String,
        trim: true,
    },
    experience: [{
        type: Schema.Types.ObjectId,
        ref: "Experience",
    }],
    education: [{
        type: Schema.Types.ObjectId,
        ref: "Education",
    }],
    awards: [{
        type: Schema.Types.ObjectId,
        ref: "Award",
    }],
    languages: [{
        type: Schema.Types.ObjectId,
        ref: "Language",
    }],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

const Raul = model("Raul", raulSchema);
module.exports = Raul;
