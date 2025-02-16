import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BaseUrl from '../const';

const EventRegistrationForm = () => {
  const { eventName } = useParams();
  const [teamName, setTeamName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const userData = JSON.parse(localStorage.getItem('COMPOSITuser'));
  const token = JSON.parse(localStorage.getItem('COMPOSITuserToken'));

  const handleChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const submit = document.getElementById('submitbtn');
    submit.innerText = 'Creating team, please wait...';
    submit.disabled = true;

    const dataToSend = {
      userId: userData._id,
      eventName,
      teamName,
      token,
    };

    try {
      const response = await fetch(`${BaseUrl}/api/user/maketeam`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Team Creation failed');
      }

      localStorage.setItem('COMPOSITuser', JSON.stringify(result.userData));

      setSuccess(`Your Team Code is: **${result.teamCode}**`);
      setError(null);
      submit.innerText = 'Team Created Successfully';
    } catch (err) {
      setError(err.message);
      setSuccess(null);
      setLoading(false);
      submit.innerText = 'Create a Team';
      submit.disabled = false;
    } 
  };

  return (
    <section className="signup-area event-form" style={{ height: '100vh' }}>
      <div className="d-table mt-9">
        <div className="d-table-cell">
          <div className="signup-form">
            <Link to={`/events/${eventName}`} className="btn-modal btn-primary">
              &#xab; Back to Events
            </Link>

            {!userData ? (
              <>
                <p className="error-msg">
                  ⚠️ You need to **log in first** to create a team.
                </p>
                <Link to="/login" className="btn-modal btn-primary">
                  Login to Register
                </Link>
              </>
            ) : (
                <>
            <h3>Create a New Team in {eventName}</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Team Name"
                    value={teamName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="submitbtn"
                  className="btn-modal btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Creating team, please wait...' : 'Create a Team'}
                </button>
                {/* <p className="success-msg">Hello</p> */}
                {success && <p className="success-msg">{success}</p>}
                {error && <p className="error-msg">{error}</p>}
              </form>
              </>

            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventRegistrationForm;
