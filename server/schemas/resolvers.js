const { Award, Comment, Education, Experience,
    Language, Projects, Raul, Reply, Testimonial, User } = require("../models");
// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
    Comment: {
        likesCount: (parent) => {
            return parent.likes.length;
        },
        dislikesCount: (parent) => {
            return parent.dislikes.length;
        },
    },
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
            return await User.find({})
                .populate("comments")
                .populate("replies")
        }
    },
    Mutation: {
        // Create
        createRaul: async (parent, args) => {
            try {
                const raulCreated = await Raul.create(args);
                return { raul: raulCreated };
            } catch (error) {
                throw new Error(`Failed to create Raul: ${error.message}`);
            }
        },
        createProjects: async (parent, args) => {
            try {
                const projectsCreated = await Projects.create(args);
                return { project: projectsCreated };
            } catch (error) {
                throw new Error(`Failed to create project: ${error.message}`);
            }
        },
        createAward: async (parent, args) => {
            try {
                const awardCreated = await Award.create(args);

                const raul = await Raul.findOne({ name: "Raul" });
                if (!raul) {
                    throw new Error("Raul not found");
                }
                raul.awards.push(awardCreated._id);
                await raul.save();

                return { award: awardCreated };
            } catch (error) {
                throw new Error(`Failed to create and link award: ${error.message}`);
            }
        },
        createEducation: async (parent, args) => {
            try {
                const eduactionCreated = await Education.create(args);

                const raul = await Raul.findOne({ name: "Raul" });
                if (!raul) {
                    throw new Error("Raul not found");
                }
                raul.education.push(eduactionCreated._id);
                await raul.save();

                return { education: eduactionCreated };
            } catch (error) {
                throw new Error(`Failed to create and link education: ${error.message}`);
            }
        },
        createExperience: async (parent, args) => {
            try {
                const experienceCreated = await Experience.create(args);

                const raul = await Raul.findOne({ name: "Raul" });
                if (!raul) {
                    throw new Error("Raul not found");
                }
                raul.experience.push(experienceCreated._id);
                await raul.save();

                return { experience: experienceCreated };
            } catch (error) {
                throw new Error(`Failed to create and link experience: ${error.message}`);
            }
        },
        createLanguage: async (parent, args) => {
            try {
                const languageCreated = await Language.create(args);

                const raul = await Raul.findOne({ name: "Raul" });
                if (!raul) {
                    throw new Error("Raul not found");
                }
                raul.languages.push(languageCreated._id);
                await raul.save();

                return { language: languageCreated };
            } catch (error) {
                throw new Error(`Failed to create and link language: ${error.message}`);
            }
        },
        createTestimonials: async (parent, args) => {
            try {
                const testimonialsCreated = await Testimonial.create(args);
                return { testiomonial: testimonialsCreated };
            } catch (error) {
                throw new Error(`Failed to create testimonial: ${error.message}`);
            }
        },


        // Update
        // Delete
    },
};

module.exports = resolvers;
