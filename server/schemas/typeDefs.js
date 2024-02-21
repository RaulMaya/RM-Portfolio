const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    dateOfBirth: String!
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

  type Raul {
    _id: ID
    name: String
    midName: String
    lastName: String
    phoneNumber: String
    email: String
    location: String
    socialMedias: socialApps
    description: String
    experience: [Experience]
    education: [Education]
    awards: [Award]
    languages: [Language]
  }

  type Award {
    _id: ID
    teacher: String
    course: String
    startDate: String
    endDate: String
    teacherLogo: String
    url: String
    awardImage: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comments {
    _id: ID
    users: User
    comment: String
    likes: [User]
    dislikes: [User]
    likesCount: Int
    dislikesCount: Int
    replies: [Reply]
  }

  enum EducationStatus {
    Graduated
    CurrentlyEnrolled
  }

  type Education {
    _id: ID
    school: String
    course: String
    startDate: String
    endDate: String
    status: EducationStatus!
    schoolLogo: String
  }

  enum ExperienceStatus {
    PastEmployment
    CurrentJob
  }

  type Experience {
    _id: ID
    company: String
    position: String
    startDate: String
    endDate: String
    status: ExperienceStatus!
    companyLogo: String
  }

  type Language {
    _id: ID
    language: String
    flag: String
    expertise: String
  }

  enum ProjectStatus {
    NotStarted
    InProgress
    Completed
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
    status: ProjectStatus
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
    users: User
    comment: Comments
    replies: String
  }

  type Testimonial {
    _id: ID
    name: String
    company: String
    comment: String
  }

  type Query {
    awards: [Award]
    educations: [Education]
    experiences: [Experience]
    languages: [Language]
    comments: [Comments]
    projects: [Projects]
    raul: Raul
    replies: [Reply]
    testimonials: [Testimonial]
    users: [User]
  }

  type Mutation {
    createRaul(    
      name: String
      midName: String
      lastName: String
      phoneNumber: String
      email: String
      location: String
      socialMedias: socialAppsInput
      description: String
      ): Raul

    createUser(
      username: String!
      email: String!
      password: String!
      dateOfBirth: String!
      company: String!
      ): Auth

    createProjects(
      name: String
      tags: [String]
      description: String
      portrait: String
      images: [String]
      likesCount: Int
      viewsCount: Int
      startDate: String
      endDate: String
      status: ProjectStatus
      deployment: String
      ): Projects

    createAward(
      teacher: String
      course: String
      startDate: String
      endDate: String
      teacherLogo: String
      url: String
      awardImage: String
      ): Award


    createEducation(
      school: String
      course: String
      startDate: String
      endDate: String
      status: EducationStatus!
      schoolLogo: String
      ): Education

    createExperience(
      company: String
      position: String
      startDate: String
      endDate: String
      status: ExperienceStatus!
      companyLogo: String
      ): Experience

    createLanguage(
      language: String
      flag: String
      expertise: String
      ): Language

    createTestimonials(
      name: String
      company: String
      comment: String
      ): Testimonial

    createComment(projectId: ID!, userId: ID!, comment: String!): Comments
  }
`;

module.exports = typeDefs;
