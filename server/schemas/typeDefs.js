const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    testimonials: [Testimonial]
    likedprojects: [Projects]
    likedcomments: [Comments]
    dislikedcomments: [Comments]
    company: String!
    comments: [Comments]
    replies: [Reply]     
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    dateOfBirth: String!
    company: String!
  }

  type Award {
    _id: ID
    school: String
    course: String
    startDate: String
    endDate: String
    status: String
    schoolLogo: String
    url: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comments {
    _id: ID
    user: User
    comment: String
    likes: [User]
    dislikes: [User]
    likesCount: Int
    dislikesCount: Int
    netLikes: Int
    replies: [Reply]
    createdAt: String
    updatedAt: String
  }


  type Education {
    _id: ID
    school: String
    course: String
    startDate: String
    endDate: String
    status: String
    schoolLogo: String
    url: String
  }

  type Experience {
    _id: ID
    school: String
    course: String
    startDate: String
    endDate: String
    status: String
    schoolLogo: String
    url: String
  }

  type Language {
    _id: ID
    school: String
    course: String
    startDate: String
    endDate: String
    status: String
    schoolLogo: String
    url: String
  }

  type Jobprojects {
    _id: ID
    name: String
    company: String
    tags: [String]
    description: String
    portrait: String
  }
  
  type Projects {
    _id: ID
    name: String
    tags: [String]
    description: String
    portrait: String
    images: [String]
    comments:[Comments]
    likedUsers: [User]
    likesCount: Int
    viewsCount: Int
    startDate: String
    endDate: String
    deployment: String
  }

  type socialApps {
    twitter: String
    linkedin: String
    github: String
  }

  input socialAppsInput {
    twitter: String
    linkedin: String
    github: String
  }

  type Reply {
    _id: ID
    user: User
    comment: Comments
    reply: String
    createdAt: String
    updatedAt: String
  }

  type Testimonial {
    _id: ID
    user: User
    testimonial: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    awards: [Award]
    educations: [Education]
    experiences: [Experience]
    languages: [Language]
    comments: [Comments]
    projects: [Projects]
    replies: [Reply]
    testimonials: [Testimonial]
    users: [User]
    jobprojects: [Jobprojects]
    projectDetails(projectId: ID!): Projects
    hello: String
  }

  type Mutation {
    createUser(
      username: String!
      email: String!
      password: String!
      company: String!
      ): Auth

    createProjects(
      name: String
      tags: [String]
      description: String
      portrait: String
      images: [String]
      startDate: String
      endDate: String
      deployment: String
      ): Projects

    createAward(
      school: String
      course: String
      startDate: String
      endDate: String
      status: String
      schoolLogo: String
      url: String
      ): Award


    createEducation(
      school: String
      course: String
      startDate: String
      endDate: String
      status: String
      schoolLogo: String
      url: String
      ): Education

    createExperience(
      school: String
      course: String
      startDate: String
      endDate: String
      status: String
      schoolLogo: String
      url: String
      ): Experience

    createLanguage(
      school: String
      course: String
      startDate: String
      endDate: String
      status: String
      schoolLogo: String
      url: String
      ): Language

    createJobprojects(
      name: String
      company: String
      tags: String
      description: String
      portrait: String
      ): Jobprojects

    createTestimonials(
      userId: ID!
      testimonial: String!
      ): Testimonial

    createComment(projectId: ID!, userId: ID!, comment: String!): Comments

    sendEmail(name: String!, email: String!, company: String!, phone: String!, message: String!): String

    createReply(commentId: ID!, userId: ID!, reply: String!): Reply

    likedProject(userId: ID!, projectId: ID!): Projects

    dislikeProject(userId: ID!, projectId: ID!): Projects
    
    likeComment(userId: ID!, commentId: ID!): Comments

    quitLikeComment(userId: ID!, commentId: ID!): Comments

    dislikeComment(userId: ID!, commentId: ID!): Comments

    quitdisLikeComment(userId: ID!, commentId: ID!): Comments

    login(email: String!, password: String!): Auth

    deleteComment(userId: ID!, commentId: ID!): Comments

    deleteReply(userId: ID!, replyId: ID!): Reply

    deleteTestimonial(userId: ID!, testimonialId: ID!): Testimonial

    updateComment(commentId: ID!, commentText: String!): Comments

    updateReply(replyId: ID!, replyText: String!): Reply

    updateTestimonial(testimonialId: ID!, testimonialText: String!): Testimonial
  }
`;

module.exports = typeDefs;
