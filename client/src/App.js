

// // const client = new ApolloClient({
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//adds CSS
import './Reset.css';
import './App.css';

// adds Routes
import Frontpage from './components/Pages/Frontpage/Frontpage.js';
import ParentSignup from './components/Pages/ParentSignup/ParentSignup.js';
import ChildSignup from './components/Pages/ChildSignup/ChildSignup.js';
import Home from './components/Pages/Home/home.js';
import Login from './components/Pages/Login.js';

// need to add auth here!!!!
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//Construct request middleware that will attach the JWT token to every request as an `authorization` header
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

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  const [page, setPage] = useState("splash");

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/ChildSignup" element={<ChildSignup />} />
            <Route path="/ParentSignup" element={<ParentSignup />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
