const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  type Comments {
    _id: ID
    user: User
    title: String
    comment: String
    likes: [User]
    dislikes: [User]
    likesCount: Int
    dislikesCount: Int
    replies: [Reply]
  }

  type Education {

  }

  type Experience {

  }

  type Language {

  }

  type Projects {

  }

  type Raul {

  }


  type Reply {

  }

  type Testimonial {

  }

  type User {
    
  }
`;

module.exports = typeDefs;
