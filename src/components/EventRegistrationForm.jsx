import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Popup/PopupMsg.css';

import BaseUrl from "../const" ;
import { useParams } from 'react-router-dom';

// import { useLocation } from "react-router-dom";


const EventRegistrationForm = () => {
    // const location = useLocation();
    const { eventName } = useParams(); // Default to empty 
 
  
console.log("My Event Nmae is : ",eventName)

    const [teamName, setTeamName] = useState({});
    const [error, setError] = useState(null);
    // const openForm = () => {
    //     document.getElementById("popupForm").style.display = "block";
    // };

    const closeForm = () => {
        document.getElementById("popupForm").style.display = "none";
        setError(null);
    };

    const handleChange = (event) => {
        setTeamName(event.target.value);
    };
    console.log(teamName)
 
  
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
        const token = JSON.parse(localStorage.getItem("COMPOSITuserToken"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const str = signupData.name;
        // const str1 = str.toUpperCase();
        // const ph = signupData.contact;
        // signupData.regID = `C24${str1.substring(0, 3)}${ph.substring(0, 2)}${Math.floor(Math.random() * 90 + 10)}`;
    

        console.log(userData, token)

        const submit = document.getElementById('submitbtn');
        submit.innerText = 'Signing up, please wait...';
        submit.disabled = true;
        const DataToSend = {
            userId: userData._id,
            eventName: eventName,
            teamName: teamName,
            token:token
        }
    
// console.log(signupData)

        try {
            const response = await fetch(`${BaseUrl}/api/user/maketeam`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(DataToSend),
            });

            const result = await response.json();
          
            const updatedUser = result.userData;
            console.log(updatedUser)
            if (!response.ok) {
                throw new Error(result.message || 'Signup failed');
            }

            setError(result.message);
            // openForm();
            submit.innerText = `Your Team code is ${result.teamCode}. Share it with your team members to join your the team.`;
            // submit.disabled = false;
            console.log(result);
            localStorage.setItem('COMPOSITuser', JSON.stringify(result.userData));
      
        } catch (err) {
            setError(err.message);
            // openForm();
            submit.innerText =  `${err.message}`;
            submit.disabled = false;
        }
    };

    // Check for the events : 

  

    return (
        <>
        <section className="signup-area">
            <div className="d-table mt-9">
                <div className="d-table-cell">
                    <div className="signup-form" >
                        <Link to='/events' className="btn-modal btn-primary">&#xab; Back to Events</Link>
                        <h3>Create new Team in {eventName} </h3>

                        <form>
                            <div className="form-group">
                                <label>Team Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter the Team Name"
                                    onChange={handleChange}
                                    name="name"
                                />
                            </div>

                           
                            <button type="submit" id='submitbtn' className="btn-modal btn-primary" onClick={handleSubmit}>Create a Team</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="loginPopup" id='loginPopup'>
                <div className="formPopup" id="popupForm">
                    <p className='popupMsg'>{error}</p>
                    <Link to="/login" className='popupLink'>Login now to register for event</Link>
                </div>
            </div>
        </section>
        </>

    );
};

export default EventRegistrationForm;
