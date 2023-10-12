const { Award, Comment, Education, Experience,
    Language, Projects, Raul, Reply, Testimonial, User } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
    Query: {
        awards: async () => {
            return await Award.find({})
        },
        educations: async () => {
            return await Education.find({})
        },
        experiences: async () => {
            return await Experience.find({})
        },
        languages: async () => {
            return await Language.find({})
        },
        projects: async () => {
            return await Projects.find({})
                .populate("likedUsers")
        },
        comments: async () => {
            return await Comment.find({})
                .populate("replies")
                .populate("likes")
                .populate("dislikes")
                .populate("user")
        },
        raul: async () => {
            return await Raul.find({})
                .populate("experience")
                .populate("education")
                .populate("awards")
                .populate("languages")
        },
        replies: async () => {
            return await Reply.find({})
                .populate("likes")
                .populate("dislikes")
                .populate("user")
        },
        testimonials: async () => {
            return await Testimonial.find({})
        },
        users: async () => {
            return await Testimonial.find({})
                .populate("comments")
                .populate("replies")
        }
    },
    Mutation: {
    },
};

module.exports = resolvers;
