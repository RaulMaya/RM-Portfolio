const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    dateOfBirth: String
    profilePic: String
    comments: [Comment]
    friends: [User]
    assistingEvents: [Event]
    createdEvents: [Event]
  }


  type Comment {
    _id: ID
    commentText: String
    createdAt: String
    user: User
    event: Event
  }

  type Event {
    _id: ID
    eventName: String
    eventDescription: String
    eventCategory: String
    mainImg: String
    portraitImg: String
    tags: [String!]!
    eventStartDate: String
    eventLocation: EventLocation!
    eventCapacity: Int!
    eventInvitation: Boolean!
    minAge: Int!
    createdAt: String!
    usersAssisting: [User]
    createdBy: User
    comments: [Comment]
  }


  type Query {

  }

  type Mutation {
  }
`;

module.exports = typeDefs;
