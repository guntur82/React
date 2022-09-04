import React from 'react';
import Navbar from '../components/Navbar';
const Home = (props) => {
  const { loginStatus, loginCbHanddler } = props;
  return (
    <>
      <Navbar
        loginStatus={loginStatus}
        loginCbHanddler={loginCbHanddler}
      ></Navbar>
      <h1>Home Page</h1>
      <p>Login Status : </p>
      <p>{JSON.stringify(loginStatus)}</p>
    </>
  );
};

export default Home;
