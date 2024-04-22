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

export const QUERY_JOB_PROJECTS = gql`
query Query {
  jobprojects {
    _id
    company
    description
    name
    portrait
    tags
  }
}
`

export const QUERY_EDUCATION = gql`
query Query {
  educations {
    _id
    course
    endDate
    school
    schoolLogo
    startDate
    status
  }
}
`

export const QUERY_EXPERIENCES = gql`
query Query {
  experiences {
    _id
    course
    endDate
    school
    schoolLogo
    startDate
    status
    url
  }
}
`

export const QUERY_AWARDS = gql`
query Query {
  awards {
    _id
    course
    endDate
    school
    schoolLogo
    startDate
    status
    url
  }
}
`

export const QUERY_LANGUAGES = gql`
query Query {
  languages {
    _id
    course
    endDate
    school
    schoolLogo
    startDate
    status
    url
  }
}
`

export const QUERY_SINGLE_USER = gql`
query Query($userId: ID!) {
  singleUser(userId: $userId) {
    _id
    username
    likedProjectsCount
    commentsCount
    company
    likedProjects {
      _id
      portrait
      name
    }
  }
} 
`