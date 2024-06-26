// models/index.js

const Award = require("./Award");
const Comment = require("./Comments"); // Ensure file name matches, might be "./Comment"
const Education = require("./Education");
const Experience = require("./Experience");
const Language = require("./Language");
const Projects = require("./Projects");
const Reply = require("./Reply");
const Testimonial = require("./Testimonial");
const User = require("./User");
const Jobprojects = require("./Jobprojects");

module.exports = {
    Award,
    Comment,
    Education,
    Experience,
    Language,
    Projects,
    Reply,
    Testimonial,
    User,
    Jobprojects
};
