import React, { useState } from 'react';
import axios from 'axios';
import Login3d from "./login";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      toast('💻 Login Successfully !', {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
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
          <Login3d />
        </div>
        <div className="right-half">
          <form onSubmit={handleSubmit} className="login-form mt-3">
            <div className="form-group">
              <div class="form-control">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={users.username}
                  onChange={handleChange}
                  required
                />
                <label>
                  <span style={{ transitionDelay: '0ms' }}>U</span>
                  <span style={{ transitionDelay: '50ms' }}>s</span>
                  <span style={{ transitionDelay: '100ms' }}>e</span>
                  <span style={{ transitionDelay: '150ms' }}>r</span>
                  <span style={{ transitionDelay: '200ms' }}>n</span>
                  <span style={{ transitionDelay: '250ms' }}>a</span>
                  <span style={{ transitionDelay: '300ms' }}>m</span>
                  <span style={{ transitionDelay: '350ms' }}>e</span>
                </label>
              </div>
            </div>
            <div className="form-group">
              <div class="form-control">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={users.password}
                  onChange={handleChange}
                  required
                />
                <label>
                  <span style={{ transitionDelay: '0ms' }}>P</span>
                  <span style={{ transitionDelay: '50ms' }}>a</span>
                  <span style={{ transitionDelay: '100ms' }}>s</span>
                  <span style={{ transitionDelay: '150ms' }}>s</span>
                  <span style={{ transitionDelay: '200ms' }}>w</span>
                  <span style={{ transitionDelay: '250ms' }}>o</span>
                  <span style={{ transitionDelay: '300ms' }}>r</span>
                  <span style={{ transitionDelay: '350ms' }}>d</span>
                </label>
              </div>
            </div>
            <button className="btn-23">
              <span className="text">Login</span>
              <span aria-hidden="" className="marquee">Login</span>
            </button>
            <p>Signup ? <a href="#" id="style-2" data-replace="click this"><span>click this</span></a></p>
          </form>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
