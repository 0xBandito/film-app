import './App.css';
import Layout from "./components/Layout"
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import UserProfile from './components/UserProfile/UserProfile';
import { useState } from "react";

function App() {

  const [userData, setUserData] = useState();

  const userDetails = (userCreds) => {
    setUserData(userCreds);
    console.log(userCreds)
  }

  return (

      <div className="App">
        <Layout />
        <Routes>
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login userDetails={userDetails}/>} /> 
          <Route path="users/:userId" element={<UserProfile userData={userData}/>} />
        </Routes>
      </div>
  );
}

export default App;
