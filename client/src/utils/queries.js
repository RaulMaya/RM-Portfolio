import { gql } from "@apollo/client";

export const QUERY_ALL_PROJECTS = gql`
    query Query {
        projects {
        _id
        name
        portrait
        likesCount
        viewsCount
        likedUsers {
          _id
        }
        }
    }
`;

export const QUERY_SINGLE_PROJECT = gql`
query Query($projectId: ID!) {
  projectDetails(projectId: $projectId) {
    _id
    name
    portrait
    tags
    deployment
    description
    comments {
      user {
        username
      }
      _id
      comment
      netLikes
      replies {
        _id
        reply
        createdAt
        user {
          username
        }
      }
      createdAt
    }
    viewsCount
  }
}
`;