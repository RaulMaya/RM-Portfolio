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
        _id
        username
      }
      _id
      comment
      netLikes
      likes {
        _id
      }
      dislikes {
        _id
      }
      replies {
        _id
        reply
        createdAt
        user {
          _id
          username
        }
      }
      createdAt
    }
    viewsCount
  }
}
`;

export const QUERY_TESTIMONIALS = gql`
query Testimonials {
  testimonials {
    _id
    testimonial
    user {
      company
      username
      _id
    }
  }
}
`