import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Popup/PopupMsg.css';
import BaseUrl from '../const';
import { useParams } from 'react-router-dom';


const JoinForm = () => {
    const [signupData, setSignupData] = useState({});
    const [error, setError] = useState(null);
    const { eventName } = useParams(); // Default to empty 

    const openForm = () => {
        document.getElementById("popupForm").style.display = "block";
    };

    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
    const token = JSON.parse(localStorage.getItem("COMPOSITuserToken"));

    const closeForm = () => {
        document.getElementById("popupForm").style.display = "none";
        setError(null);
    };

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value,
            "eventName": eventName,
            "userId": userData._id,
            "token": token
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const str = signupData.name;
        // const str1 = str.toUpperCase();
        // const ph = signupData.contact;
        // signupData.regID = `C24${str1.substring(0, 3)}${ph.substring(0, 2)}${Math.floor(Math.random() * 90 + 10)}`;

        const submit = document.getElementById('submitbtn');
        submit.innerText = 'Joining team, please wait...';
        submit.disabled = true;
console.log(signupData)

        try {
            const response = await fetch(`${BaseUrl}/api/user/jointeam`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });

            const result = await response.json();
          

            if (!response.ok) {
                throw new Error(result.message || 'Signup failed');
            }

            setError(result.message);
            openForm();
            submit.innerText = 'Team Joined Successfully';
            submit.disabled = true;
            console.log(result);
            localStorage.setItem('COMPOSITuser', JSON.stringify(result.userData));
      
            // window.location = `/`;

        } catch (err) {
            setError(err.message);
            openForm();
            submit.innerText = 'Joinnig Failed';
            submit.disabled = false;
        }
    };

    // const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
    // const userData = Data.user.userData
    console.log(userData._id)
    
    return (
        <>
        <section className="signup-area">
            <div className="d-table mt-9">
                <div className="d-table-cell">
                    <div className="signup-form" >
                        <Link to='/events' className="btn-modal btn-primary">&#xab; Back to Events</Link>

                        <h3>Join a Team for {eventName} </h3>

                        <form>
                        
                            <div className="form-group">
                                <label>Team Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the Team Code Provided by team creator "
                                    onChange={handleChange}
                                    name="teamId"
                                />
                            </div>

                          
                            <button type="submit" id='submitbtn' className="btn-modal btn-primary" onClick={handleSubmit}>Join the Team</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* <div className="loginPopup" id='loginPopup'>
                <div className="formPopup" id="popupForm">
                    <p className='popupMsg'>{error}</p>
                    <Link to="/login" className='popupLink'>Login now to register for event</Link>
                </div>
            </div> */}
        </section>
        </>

    );
};

export default JoinForm;
