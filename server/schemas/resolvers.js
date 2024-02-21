const { Award, Comment, Education, Experience,
    Language, Projects, Raul, Reply, Testimonial, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
    Projects: {
        likesCount: (parent) => {
            return parent.likedUsers.length
        }
    },
    Comments: {
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
            const raulDocument = await Raul.findOne({ name: "Raul" })
                .populate("experience")
                .populate("education")
                .populate("awards")
                .populate("languages");
            console.log(raulDocument)
            return raulDocument;
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
        createUser: async (parent, args) => {
            const userCreated = await User.create(args);
            const token = signToken(userCreated);

            return { token, user: userCreated };
        },
        createProjects: async (parent, args) => {
            try {
                const projectsCreated = await Projects.create(args);
                return projectsCreated;
            } catch (error) {
                throw new Error(`Failed to create project: ${error.message}`);
            }
        },
        createComment: async (parent, { projectId, userId, comment }) => {
            try {
                // Check if the event exists
                const project = await Projects.findById(projectId);
                if (!project) {
                    throw new Error("Project not found");
                }

                // Check if the user exists
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error("User not found");
                }

                // Create the new comment
                const newComment = new Comment({
                    comment,
                    user: user._id,
                    project: project._id,
                });

                // Save the comment
                await newComment.save();

                // Add the comment to the event's comments array
                project.comments.push(newComment._id);
                await project.save();

                // Add the comment to the user's comments array
                user.comments.push(newComment._id);
                await user.save();

                // Return the created comment
                return newComment;
            } catch (error) {
                console.error("Error creating comment:", error);
                throw new Error("Failed to create comment");
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

                return awardCreated;
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
                console.log(eduactionCreated._id)
                raul.education.push(eduactionCreated._id);
                console.log('Raul found:', raul);

                await raul.save();

                return eduactionCreated;
            } catch (error) {
                throw new Error(`Failed to create and link education: ${error.message}`);
            }
        },
        createExperience: async (parent, args) => {
            try {
                const experienceCreated = await Experience.create(args);
                console.log(experienceCreated);

                const raul = await Raul.findOne({ name: "Raul" });
                console.log(raul);

                if (!raul) {
                    throw new Error("Raul not found");
                }

                raul.experience.push(experienceCreated._id);
                await raul.save();

                return experienceCreated; // Return the experience directly
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

                return languageCreated;
            } catch (error) {
                throw new Error(`Failed to create and link language: ${error.message}`);
            }
        },
        createTestimonials: async (parent, args) => {
            try {
                const testimonialsCreated = await Testimonial.create(args);
                return testimonialsCreated;
            } catch (error) {
                throw new Error(`Failed to create testimonial: ${error.message}`);
            }
        },


        // Update
        // Delete
    },
};

module.exports = resolvers;
