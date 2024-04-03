import React, { useState } from 'react';
import axios from 'axios';
import Login3d from "./login";

function Login() {
  const [users, setUsers] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users/login', users);
      alert('Data submitted successfully!');
      setUsers({ username: '', password: '' });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  
  return (
    <div className="login-container">
      <h2 className="mt-5">Login</h2>
      <div className="split-container">
        <div className="left-half">
          <Login3d/>
        </div>
        <div className="right-half">
          <form onSubmit={handleSubmit} className="login-form mt-3">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={users.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={users.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
