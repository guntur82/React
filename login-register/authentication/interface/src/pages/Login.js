import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const { loginCbHanddler } = props;
  //   const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/users/login',
        data: form,
      });
      // masukin ke local storage yang ada di browser
      localStorage.setItem('access_token', result.data.access_token);
      loginCbHanddler(true);
      //   navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = () => {
    // console.log(form);
    loginUser();
  };
  return (
    <>
      <div className="login-page">
        <div className="login-component">
          <div className="my-3 w-100 text-center">
            <h1>Login Page</h1>
          </div>
          <div className="w-100">
            <div className="input-group mb-3">
              <span className="input-group-text">Email</span>
              <input
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Password</span>
              <input
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => submitHandler()}
                className="btn btn-success"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
