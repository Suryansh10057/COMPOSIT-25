import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseUrl from '../../const';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [errorr, setErrorr] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Something went wrong');
      }

      const compUser = await response.json();
      console.log(compUser);
      localStorage.setItem('COMPOSITuser', JSON.stringify(compUser));

      setErrorr(null);
      setSuccess(`Login Successful ${compUser.name}`);
      window.location = `/`;
    } catch (err) {
      setErrorr(err.message);
    }
  };

  return (
    <section className="login-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="login-form">
            <Link to="/" className="btn-modal btn-primary">
              &#xab; Back to Home
            </Link>
            <h3>Welcome Back!</h3>

            <form onSubmit={handleClick}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-modal btn-primary">
                Login
              </button>
              {success && <p className="popupLink center">{success}</p>}
              {errorr && <p className="error center">{errorr}</p>}

              <p>
                <Link to="/signup" className="pull-left">
                  Create a new account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
