import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import SingleProject from "./pages/SingleProject";
import UserDashboard from "./pages/UserDashboard";

import AuthService from './utils/auth';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
  //uri: process.env.REACT_APP_GRAPHQL_SERVER_URL,
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Error handling link
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      if (message === 'Invalid token') {
        // remove token and redirect to login page
        localStorage.removeItem('id_token');
        window.location.href = '/login';
      }
    });
  }
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` and `errorLink` middleware prior to making the request to our GraphQL API
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});


const App = () => {
  const isAuthenticated = AuthService.loggedIn();
  console.log(isAuthenticated)
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isAuthenticated} />} />
          <Route path="/about" element={<About isLoggedIn={isAuthenticated} />} />
          <Route path="/resume" element={<Resume isLoggedIn={isAuthenticated} />} />
          <Route path="/contact" element={<Contact isLoggedIn={isAuthenticated} />} />
          <Route path="/projects" element={<Projects isLoggedIn={isAuthenticated} />} />
          <Route path="/project/:id" element={<SingleProject isLoggedIn={isAuthenticated} />} />
          <Route path="/userdashboard" element={<UserDashboard isLoggedIn={isAuthenticated} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
