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
