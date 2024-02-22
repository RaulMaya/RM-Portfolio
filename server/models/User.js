const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+\@.+\..+/],
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        company: {
            type: String,
            required: true,
        },
        testimonials: [
            {
                type: Schema.Types.ObjectId,
                ref: "Testimonial",
            },
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        replies: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reply",
            },
        ],
        likedProjects: [
            {
                type: Schema.Types.ObjectId,
                ref: "Project"
            }
        ],
        disLikedComments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ],
        likedComments: [
            {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
            transform: function (doc, ret) {
                delete ret.password; // Ensure password hashes don't get sent with API responses
                return ret;
            },
        },
        id: false,
    }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model("User", userSchema);

module.exports = User;