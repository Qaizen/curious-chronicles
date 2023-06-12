

// // const client = new ApolloClient({
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_ME } from "./utils/queries.js"
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
import Sub from './components/Pages/GrownupArea/Sub.js'


//question inports
import QMood from './components/Pages/Questions/QMood.js'
import QOne from './components/Pages/Questions/QOne.js'
import QTwo from './components/Pages/Questions/QTwo.js'
import QFinished from './components/Pages/Questions/QFinished.js'

function App() {

  const { data } = useQuery(GET_ME);
  const userMe = data?.me;



  // const [current, setCurrent] = useState('/');
  // const location = useLocation();

  // useEffect(() => {
  //   setCurrent(location.pathname);
  // }, [location]);

  return (


    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/ChildSignup" element={<ChildSignup user={userMe} />} />
          <Route path="/ParentSignup" element={<ParentSignup />} />
          <Route path="/Home" element={<Home />} />


          {/* grown up links  */}
          <Route path="/Login" element={<Login />} />
          <Route path="/GrownupArea" element={<GrownupArea />} />
          <Route path="/Sub" element={<Sub />} /> {/*Subscription page*/}

          {/* questions links  */}
          <Route path="/QMood" element={<QMood />} />
          <Route path="/QOne" element={<QOne />} /> {/*Why do you feel that way page*/}
          <Route path="/QTwo" element={<QTwo />} /> {/*Thing the kid is good at page*/}
          <Route path="/QFinished" element={<QFinished />} />
        </Routes>
      </div>
    </Router>


  );
}


export default App;
