import { gql } from "@apollo/client";

export const QUERY_ALL_PROJECTS = gql`
    query Query {
        projects {
        _id
        name
        portrait
        likesCount
        viewsCount
        }
    }
`;

export const QUERY_SINGLE_PROJECT = gql`
query Query($projectId: ID!) {
    projectDetails(projectId: $projectId) {
      name
      portrait
      tags
      deployment
      description
      comments {
        user {
          username
        }
        comment
        netLikes
        replies {
          reply
          createdAt
          user {
            username
          }
        }
        createdAt
      }
    }
  }
`;