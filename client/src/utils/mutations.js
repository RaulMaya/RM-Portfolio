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