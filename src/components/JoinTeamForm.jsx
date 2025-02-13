import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BaseUrl from '../const';

const JoinForm = () => {
  const [teamId, setTeamId] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const { eventName } = useParams();

  const userData = JSON.parse(localStorage.getItem('COMPOSITuser'));
  const token = JSON.parse(localStorage.getItem('COMPOSITuserToken'));

  const handleChange = (event) => {
    setTeamId(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const submit = document.getElementById('submitbtn');
    submit.innerText = 'Joining team, please wait...';
    submit.disabled = true;

    const dataToSend = {
      userId: userData._id,
      eventName,
      teamId,
      token,
    };

    try {
      const response = await fetch(`${BaseUrl}/api/user/jointeam`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Joining failed');
      }

      localStorage.setItem('COMPOSITuser', JSON.stringify(result.userData));

      setSuccess('Team joined successfully!');
      setError(null);
      submit.innerText = 'Team Joined Successfully';
    } catch (err) {
      setError(err.message);
      setSuccess(null);
      submit.innerText = 'Join the Team';
      submit.disabled = false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="signup-area" style={{ height: '100vh' }}>
      <div className="d-table mt-9">
        <div className="d-table-cell">
          <div className="signup-form">
            <Link to={`/events/${eventName}`} className="btn-modal btn-primary">
              &#xab; Back to Events
            </Link>

            

            {!userData ? (
              <>
                <p className="error-msg">
                  ⚠️ You need to log in first to register for this event.
                </p>
                <Link to="/login" className="btn-modal btn-primary">
                  Login to Register
                </Link>
              </>
            ) : (
                <>
                <h3>Join a Team for {eventName}</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Team Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Team Code Provided by team creator"
                    value={teamId}
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
                  {loading ? 'Joining team, please wait...' : 'Join the Team'}
                </button>

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

export default JoinForm;
