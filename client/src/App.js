

// // const client = new ApolloClient({
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//adds CSS
import './Reset.css';
import './App.css';

// adds Routes
import Frontpage from './components/Pages/Frontpage/Frontpage.js';
import ParentSignup from './components/Pages/ParentSignup/ParentSignup.js';
import ChildSignup from './components/Pages/ChildSignup/ChildSignup.js';
import Home from './components/Pages/Home/home';





// need to add auth here!!!!






function App() {
  const [page, setPage] = useState("splash");

  return (
    // <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/ChildSignup" element={<ChildSignup />} />
          <Route path="/ParentSignup" element={<ParentSignup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
    // </ApolloProvider>
  );
}


export default App;
