const { Award, Comment, Education, Experience,
    Language, Projects, Reply, Testimonial, User, Jobprojects } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

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
        hello: () => {
            'Hello world!'
        },
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
                .populate("comments")
        },
        comments: async () => {
            return await Comment.find({})
                .populate("replies")
                .populate("likes")
                .populate("dislikes")
                .populate("user")
        },
        replies: async () => {
            return await Reply.find({})
                .populate("comment")
                .populate("user")
        },
        testimonials: async () => {
            return await Testimonial.find({})
                .populate("user")
        },
        jobprojects: async () => {
            return await Jobprojects.find({});
        },
        users: async () => {
            return await User.find({})
                .populate("comments")
                .populate("testimonials")
                .populate("replies")
        },
        singleUser: async (parent, { userId }) => {
            try {
                // Find the user by ID
                const user = await User.findById(userId)
                    .populate("comments")
                    .populate("likedProjects")
                    .populate("testimonials")
                    .populate("replies")

                if (!user) {
                    throw new Error('User not found');
                }

                // Return the user details
                return user;
            } catch (error) {
                console.error('Error fetching user details:', error);
                throw new Error('Failed to fetch user details');
            }
        },
        // Resolver for getting project details and incrementing viewsCount
        projectDetails: async (parent, { projectId }) => {
            try {
                // Find the project by ID
                const project = await Projects.findById(projectId)
                    .populate({
                        path: 'comments', // First, populate the comments
                        populate: [
                            {
                                path: 'user' // Populate the user in each comment
                            },
                            {
                                path: 'replies', // Then, within each comment, populate the replies
                                populate: {
                                    path: 'user' // Finally, within each reply, populate the user
                                }
                            }
                        ]
                    });

                if (!project) {
                    throw new Error('Project not found');
                }

                // Increment viewsCount
                project.viewsCount += 1;

                // Save the updated project
                await project.save();

                // Return the project details
                return project;
            } catch (error) {
                console.error('Error fetching project details:', error);
                throw new Error('Failed to fetch project details');
            }
        }

    },
    Mutation: {
        sendEmail: async (_, { name, email, company, phone, message }) => {
            const transporter = nodemailer.createTransport({
                service: 'Gmail', // Use your preferred service
                auth: {
                    user: 'raulmayas20@gmail.com',
                    pass: ''
                }
            });

            const mailOptions = {
                from: email,
                to: 'raulmayas20@gmail.com',
                subject: `New Message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nMessage: ${message}`
            };

            try {
                const info = await transporter.sendMail(mailOptions);
                return 'Message sent successfully.';
            } catch (error) {
                console.error('Failed to send email:', error);
                return 'Failed to send message.';
            }
        },
        login: async (parent, { email, password }) => {
            try {
                // Find the user by username or email
                const user = await User.findOne({ email });
                if (!user) {
                    throw new AuthenticationError("Invalid username/email");
                }

                // Compare the provided password with the stored password hash
                const isPasswordMatch = await user.isCorrectPassword(password);

                if (!isPasswordMatch) {
                    throw new AuthenticationError("Invalid password");
                }

                // Password is correct, return the user
                const token = signToken(user);
                return { token, user };
            } catch (error) {
                console.error("Error logging in:", error);
                throw new Error("Failed to log in");
            }
        },
        createUser: async (parent, args) => {
            try {
                const userCreated = await User.create(args);
                const token = signToken(userCreated);
                return { token, user: userCreated };
            } catch (error) {
                // Check if the error is a duplicate key error
                if (error.name === 'MongoError' && error.code === 11000) {
                    // Here, you can also check error.message or error.keyValue to customize the error message
                    throw new Error('A user with the given username or email already exists.');
                } else {
                    // Generic error handling
                    throw new Error('Failed to create user.');
                }
            }
        },
        createProjects: async (parent, args) => {
            try {
                const projectsCreated = await Projects.create(args);
                return projectsCreated;
            } catch (error) {
                throw new Error(`Failed to create project: ${error.message}`);
            }
        },
        createJobprojects: async (parent, args) => {
            try {
                const jobProjectsCreated = await Jobprojects.create(args);
                return jobProjectsCreated;
            } catch (error) {
                throw new Error(`Failed to create JOB project: ${error.message}`);
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
        createReply: async (parent, { commentId, userId, reply }) => {
            try {
                // Check if the comment exists
                const comment = await Comment.findById(commentId);
                if (!comment) {
                    throw new Error("Comment not found");
                }

                // Check if the user exists
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error("User not found");
                }

                if (!reply || reply.trim().length === 0) {
                    throw new Error("Reply content is required");
                }

                // Create the new reply
                const newReply = new Reply({
                    reply,
                    user: user._id,
                    comment: comment._id,
                });

                // Save the reply
                await newReply.save();

                // Add the reply to the comments replies array
                comment.replies.push(newReply._id);
                await comment.save();

                // Add the reply to the user's replies array
                user.replies.push(newReply._id);
                await user.save();

                // Return the created reply
                return newReply;
            } catch (error) {
                console.error("Error creating reply:", error);
                throw new Error("Failed to create reply");
            }
        },
        createAward: async (parent, args) => {
            try {
                const awardCreated = await Award.create(args);
                return awardCreated;
            } catch (error) {
                throw new Error(`Failed to create and link award: ${error.message}`);
            }
        },
        createEducation: async (parent, args) => {
            try {
                const eduactionCreated = await Education.create(args);

                return eduactionCreated;
            } catch (error) {
                throw new Error(`Failed to create and link education: ${error.message}`);
            }
        },
        createExperience: async (parent, args) => {
            try {
                const experienceCreated = await Experience.create(args);
                return experienceCreated; // Return the experience directly
            } catch (error) {
                throw new Error(`Failed to create and link experience: ${error.message}`);
            }
        },
        createLanguage: async (parent, args) => {
            try {
                const languageCreated = await Language.create(args);
                return languageCreated;
            } catch (error) {
                throw new Error(`Failed to create and link language: ${error.message}`);
            }
        },
        createTestimonials: async (parent, { userId, testimonial }) => {
            try {
                // Check if the user exists
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error("User not found");
                }

                // Create the new comment
                const testimonialsCreated = new Testimonial({
                    testimonial,
                    user: user._id,
                });

                // Save the comment
                await testimonialsCreated.save();

                // Add the comment to the user's comments array
                user.testimonials.push(testimonialsCreated._id);
                await user.save();

                // Return the testiomonial comment
                return testimonialsCreated;
            } catch (error) {
                console.error("Error creating testiomonial:", error);
                throw new Error("Failed to create testiomonial");
            }
        },
        likedProject: async (parent, { userId, projectId }) => {
            try {
                // Find the user and event
                const authUser = await User.findById(userId);
                const project = await Projects.findById(projectId);

                if (!authUser || !project) {
                    throw new Error("User or project not found");
                }

                // Check if the user is already attending the event
                if (project.likedUsers.includes(userId)) {
                    throw new Error("You already like this project");
                }

                // Add the user to the project's likedUsers array
                project.likedUsers.push(authUser);
                await project.save();

                // Add the project to the user's likedProjects array
                authUser.likedProjects.push(project);
                await authUser.save();

                // Return the updated project
                return project;
            } catch (error) {

                throw new Error("Error liking project");
            }
        },
        dislikeProject: async (parent, { userId, projectId }) => {
            try {
                // Find the user and project
                const authUser = await User.findById(userId);
                const project = await Projects.findById(projectId);

                if (!authUser || !project) {
                    throw new Error("User or project not found");
                }

                // Check if the user has already liked the project
                const userIndex = project.likedUsers.indexOf(authUser._id);
                if (userIndex === -1) {
                    throw new Error("You haven't liked this project yet");
                }

                // Remove the user from the project's likedUsers array
                project.likedUsers.splice(userIndex, 1);
                await project.save();

                // Remove the project from the user's likedProjects array
                const projectIndex = authUser.likedProjects.indexOf(project._id);
                if (projectIndex !== -1) {
                    authUser.likedProjects.splice(projectIndex, 1);
                    await authUser.save();
                }

                // Return the updated project
                return project;
            } catch (error) {
                console.error("Error disliking project:", error);
                throw new Error("Error disliking project");
            }
        },
        likeComment: async (parent, { userId, commentId }) => {
            try {
                // Find the user and comment
                const authUser = await User.findById(userId);
                const comment = await Comment.findById(commentId);

                if (!authUser || !comment) {
                    throw new Error("User or comment not found");
                }

                // Check if the user is already attending the event
                if (comment.likes.includes(userId)) {
                    throw new Error("You already like this comment");
                }

                // Add the user to the project's likedUsers array
                comment.likes.push(authUser);
                await comment.save();

                // Add the comment to the user's likedProjects array
                authUser.likedComments.push(comment);
                await authUser.save();

                // Return the updated project
                return comment;
            } catch (error) {
                console.log(error)
                throw new Error("Error liking project");
            }
        },
        quitLikeComment: async (parent, { userId, commentId }) => {
            try {
                // Find the user and project
                const authUser = await User.findById(userId);
                const comment = await Comment.findById(commentId);

                if (!authUser || !comment) {
                    throw new Error("User or comment not found");
                }

                // Check if the user has already liked the comment
                const userIndex = comment.likes.indexOf(authUser._id);
                if (userIndex === -1) {
                    throw new Error("You haven't liked this comment yet");
                }

                // Remove the user from the comment's likedUsers array
                comment.likes.splice(userIndex, 1);
                await comment.save();

                // Remove the project from the user's likedComments array
                const commentIndex = authUser.likedComments.indexOf(comment._id);
                if (commentIndex !== -1) {
                    authUser.likedComments.splice(commentIndex, 1);
                    await authUser.save();
                }

                // Return the updated comment
                return comment;
            } catch (error) {
                console.error("Error disliking comment:", error);
                throw new Error("Error disliking comment");
            }
        },
        dislikeComment: async (parent, { userId, commentId }) => {
            try {
                // Find the user and comment
                const authUser = await User.findById(userId);
                const comment = await Comment.findById(commentId);

                if (!authUser || !comment) {
                    throw new Error("User or comment not found");
                }

                // Check if the user is already attending the event
                if (comment.dislikes.includes(userId)) {
                    throw new Error("You already dislikes this comment");
                }

                // Add the user to the project's likedUsers array
                comment.dislikes.push(authUser);
                await comment.save();

                // Add the project to the user's likedProjects array
                authUser.disLikedComments.push(comment);
                await authUser.save();

                // Return the updated project
                return comment;
            } catch (error) {

                throw new Error("Error liking project");
            }
        },
        quitdisLikeComment: async (parent, { userId, commentId }) => {
            try {
                // Find the user and project
                const authUser = await User.findById(userId);
                const comment = await Comment.findById(commentId);

                if (!authUser || !comment) {
                    throw new Error("User or comment not found");
                }

                // Check if the user has already liked the comment
                const userIndex = comment.dislikes.indexOf(authUser._id);
                if (userIndex === -1) {
                    throw new Error("You haven't disliked this comment yet");
                }

                // Remove the user from the comment's dislikes array
                comment.dislikes.splice(userIndex, 1);
                await comment.save();

                // Remove the project from the user's disLikedComments array
                const commentIndex = authUser.disLikedComments.indexOf(comment._id);
                if (commentIndex !== -1) {
                    authUser.disLikedComments.splice(commentIndex, 1);
                    await authUser.save();
                }

                // Return the updated comment
                return comment;
            } catch (error) {
                console.error("Error disliking comment:", error);
                throw new Error("Error disliking comment");
            }
        },

        // Update
        // Delete
        deleteComment: async (parent, { userId, commentId }) => {
            // Find the comment by ID
            const comment = await Comment.findById(commentId);
            if (!comment) {
                throw new Error('Comment not found');
            }

            // Check if the userId matches the comment's owner
            if (comment.user.toString() !== userId.toString()) {
                throw new Error('User is not the owner of the comment');
            }

            // If the user is the owner, continue to delete the replies
            const replyIds = comment.replies;
            await Reply.deleteMany({ _id: { $in: replyIds } });

            // Once all replies are deleted, delete the comment itself
            await Comment.deleteOne({ _id: commentId });
        },
        deleteReply: async (parent, { userId, replyId }) => {
            // Find the reply by ID
            const myReply = await Reply.findById(replyId);
            if (!myReply) {
                throw new Error('Reply not found');
            }

            // Check if the userId matches the reply's owner
            if (myReply.user.toString() !== userId.toString()) {
                throw new Error('User is not the owner of the comment');
            }

            // Once all replies are deleted, delete the comment itself
            await Reply.deleteOne({ _id: replyId });
        },
        deleteTestimonial: async (parent, { userId, testimonialId }) => {
            // Find the testimonial by ID
            const myTestimonial = await Testimonial.findById(testimonialId);
            if (!myTestimonial) {
                throw new Error('Testimonial not found');
            }

            // Check if the userId matches the testimonial's owner
            if (myTestimonial.user.toString() !== userId.toString()) {
                throw new Error('User is not the owner of the comment');
            }

            // Delete the testimonials
            await Testimonial.deleteOne({ _id: testimonialId });
        },
        updateComment: async (parent, { commentId, commentText }) => {
            try {
                // Check if the comment exists
                const comment = await Comment.findById(commentId);
                if (!comment) {
                    throw new Error("Comment not found");
                }

                // Update the comment text
                comment.comment = commentText;

                // Save the updated comment
                await comment.save();

                // Return the updated comment
                return comment;
            } catch (error) {
                console.error("Error updating comment:", error);
                throw new Error("Failed to update comment");
            }
        },
        updateReply: async (parent, { replyId, replyText }) => {
            try {
                // Check if the reply exists
                const reply = await Reply.findById(replyId);
                if (!reply) {
                    throw new Error("Reply not found");
                }

                // Update the reply text
                reply.reply = replyText;

                // Save the updated reply
                await reply.save();

                // Return the updated reply
                return reply;
            } catch (error) {
                console.error("Error updating reply:", error);
                throw new Error("Failed to update reply");
            }
        },
        updateTestimonial: async (parent, { testimonialId, testimonialText }) => {
            try {
                // Check if the testimonial exists
                const testimonial = await Testimonial.findById(testimonialId);
                if (!testimonial) {
                    throw new Error("Testimonial not found");
                }

                // Update the testimonial text
                testimonial.testimonial = testimonialText;

                // Save the updated testimonial
                await testimonial.save();

                // Return the updated testimonial
                return testimonial;
            } catch (error) {
                console.error("Error updating testimonial:", error);
                throw new Error("Failed to update testimonial");
            }
        }
    },
};

module.exports = resolvers;
