import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BaseUrl from '../../const';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(null);
  const [errorr, setErrorr] = useState(null);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = isValidEmail(email) && password.length > 0;

  const handleClick = async (e) => {
    e.preventDefault();

    const submit = document.getElementById('submitbtn');
    submit.innerText = 'Logging in, please wait...';
    submit.disabled = true;

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
      localStorage.setItem('COMPOSITuser', JSON.stringify(compUser.user));
      localStorage.setItem('COMPOSITuserToken', JSON.stringify(compUser.token));

      setErrorr(null);
      setSuccess(`Login Successful ${compUser.name}`);
      window.location = `/`;
    } catch (err) {
      submit.innerText = 'Login';
      submit.disabled = false;
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
                {!isValidEmail(email) && email.length > 0 && (
                  <small className="error-text">Invalid email format</small>
                )}
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
                {password.length === 0 && (
                  <small className="error-text">Password is required</small>
                )}
              </div>

              <button
                type="submit"
                id="submitbtn"
                className="btn-modal btn-primary"
                disabled={!isFormValid}
              >
                Login
              </button>

              <p>
                <Link to="/signup" className="pull-left">
                  Create a new account
                </Link>
              </p>
            </form>

            {success && <p className="popupLink center">{success}</p>}
            {errorr && <p className="error center">{errorr}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
