

// // const client = new ApolloClient({
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//adds CSS
import './Reset.css';
import './App.css';

// adds Routes
import Frontpage from './components/Pages/Frontpage/Frontpage.js';
import ParentSignup from './components/Pages/ParentSignup/ParentSignup.js';
import ChildSignup from './components/Pages/ChildSignup/ChildSignup.js';

import Home from './components/Pages/Home/Homepage.js';

//Grown up imports
import Login from './components/Pages/GrownupArea/Login.js'
import GrownupArea from './components/Pages/GrownupArea/GrownupArea.js'


//question imports
import QMood from './components/Pages/Questions/QMood.js'
import QOne from './components/Pages/Questions/QOne.js'
import QTwo from './components/Pages/Questions/QTwo.js'
import QFinished from './components/Pages/Questions/QFinished.js'

import Sub from './components/Pages/old/Sub';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './components/Pages/NewStripe/CheckoutForm';







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

//stripe

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NGW5hGa0dfhEuOuwIeTm5qdHGSsUA2bk6fgFyDixDKGA8GnqaQYAtJcmbQkwfsRbwAaZjbhP61IXtwkhKiHksbP00i5Iugqla');


//stripe



function App() {
  const options = {
    clientSecret: '{{ CLIENT_SECRET }}',
  };

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
            {/* grown up links  */}
            <Route path="/GrownupArea" element={<GrownupArea />} />
            {/* questions links  */}
            <Route path="/QMood" element={<QMood />} />
            <Route path="/QOne" element={<QOne />} />
            <Route path="/QTwo" element={<QTwo />} />
            <Route path="/QFinished" element={<QFinished />} />
            {/* Stripe Links */}
            <Route path="/Sub" element={<Sub />} />
            <Route path="/Checkout">
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
              </Elements>
            </Route>
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
