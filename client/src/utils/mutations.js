import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $password: String!
    $company: String!
  ) {
    createUser(
      username: $username
      email: $email
      password: $password
      company: $company
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
mutation Mutation($projectId: ID!, $userId: ID!, $comment: String!) {
  createComment(projectId: $projectId, userId: $userId, comment: $comment) {
    _id
    comment
  }
}
`

export const DELETE_COMMENT = gql`
mutation Mutation($userId: ID!, $commentId: ID!) {
  deleteComment(userId: $userId, commentId: $commentId) {
    _id
  }
}
`

export const LIKE_PROJECT = gql`
mutation LikedProject($userId: ID!, $projectId: ID!) {
  likedProject(userId: $userId, projectId: $projectId) {
    _id
  }
}
`

export const DISLIKE_PROJECT = gql`
mutation DislikeProject($userId: ID!, $projectId: ID!) {
  dislikeProject(userId: $userId, projectId: $projectId) {
    _id
  }
}
`

export const CREATE_REPLY = gql`
mutation Mutation($commentId: ID!, $userId: ID!, $reply: String!) {
  createReply(commentId: $commentId, userId: $userId, reply: $reply) {
    _id
  }
}
`

export const DELETE_REPLY = gql`
mutation Mutation($userId: ID!, $replyId: ID!) {
  deleteReply(userId: $userId, replyId: $replyId) {
    _id
  }
}
`

export const CREATE_TESTIMONIAL = gql`
mutation Mutation($userId: ID!, $testimonial: String!) {
  createTestimonials(userId: $userId, testimonial: $testimonial) {
    _id
  }
}
`
export const DELETE_TESTIMONIAL = gql`
mutation Mutation($userId: ID!, $testimonialId: ID!) {
  deleteTestimonial(userId: $userId, testimonialId: $testimonialId) {
    _id
    testimonial
  }
}
`

export const DISLIKE_COMMENT = gql`
mutation DislikeComment($userId: ID!, $commentId: ID!) {
  dislikeComment(userId: $userId, commentId: $commentId) {
    _id
  }
}
`

export const LIKE_COMMENT = gql`
mutation LikeComment($userId: ID!, $commentId: ID!) {
  likeComment(userId: $userId, commentId: $commentId) {
    _id
  }
}
`

export const QUIT_LIKE_COMMENT = gql`
mutation QuitLikeComment($userId: ID!, $commentId: ID!) {
  quitLikeComment(userId: $userId, commentId: $commentId) {
    _id
  }
}
`
export const QUIT_DISLIKE_COMMENT = gql`
mutation QuitdisLikeComment($userId: ID!, $commentId: ID!) {
  quitdisLikeComment(userId: $userId, commentId: $commentId) {
    _id
  }
}
`

export const SEND_EMAIL = gql`
mutation SendEmail($name: String!, $email: String!, $company: String!, $phone: String!, $message: String!) {
  sendEmail(name: $name, email: $email, company: $company, phone: $phone, message: $message)
}
`

export const UPDATE_COMMENT = gql`
mutation Mutation($commentId: ID!, $commentText: String!) {
  updateComment(commentId: $commentId, commentText: $commentText) {
    _id
    comment
  }
}
`

export const UPDATE_REPLY = gql`
mutation Mutation($replyId: ID!, $replyText: String!) {
  updateReply(replyId: $replyId, replyText: $replyText) {
    _id
    reply
  }
}
`

export const UPDATE_TESTIMONIAL = gql`
mutation Mutation($testimonialId: ID!, $testimonialText: String!) {
  updateTestimonial(testimonialId: $testimonialId, testimonialText: $testimonialText) {
    _id
    testimonial
  }
}
`