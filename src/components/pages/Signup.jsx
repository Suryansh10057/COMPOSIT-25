import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Popup/PopupMsg.css';
import BaseUrl from '../../const';

const Signup = () => {
    const [signupData, setSignupData] = useState({});
    const [error, setError] = useState(null);

    const openForm = () => {
        document.getElementById("popupForm").style.display = "block";
    };

    const closeForm = () => {
        document.getElementById("popupForm").style.display = "none";
        setError(null);
    };

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const str = signupData.name;
        // const str1 = str.toUpperCase();
        // const ph = signupData.contact;
        // signupData.regID = `C24${str1.substring(0, 3)}${ph.substring(0, 2)}${Math.floor(Math.random() * 90 + 10)}`;

        const submit = document.getElementById('submitbtn');
        submit.innerText = 'Signing up, please wait...';
        submit.disabled = true;
//console.log(signupData)

        try {
            const response = await fetch(`${BaseUrl}/api/user/register`, {
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
            submit.innerText = 'Signup';
            submit.disabled = false;
            //console.log(result);
            localStorage.setItem('COMPOSITuser', JSON.stringify(result.user));
            localStorage.setItem('COMPOSITuserToken', JSON.stringify(result.token));
      
            window.location = `/`;

        } catch (err) {
            setError(err.message);
            openForm();
            submit.innerText = 'Signup';
            submit.disabled = false;
        }
    };

    return (
        <>
        <section className="signup-area">
            <div className="d-table mt-9">
                <div className="d-table-cell">
                    <div className="signup-form" >
                        <Link to="/" className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Create your Account</h3>

                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="form-group">
                                <label>Institute ID / Roll No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Institute ID"
                                    name="collegeId"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Department"
                                    name="department"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Institution</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Institution"
                                    name="collegeName"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Contact</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Contact Number"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="city"
                                    name="city"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                    name="state"
                                    onChange={handleChange}
                                />
                            </div>

                            {/* <div className="form-group">
                                <label>Year of Graduation</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Year of Graduation"
                                    name="gradyear"
                                    onChange={handleChange}
                                />
                            </div> */}

                            <div className="form-group">
                                <label>Gender</label>
                                <select
                                    name="gender"
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    <option value="default">Please Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Referral Id (if given by Student's Ambassador)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Leave blank if no Student Ambassador has referred"
                                    name="referral"
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" id='submitbtn' className="btn-modal btn-primary" onClick={handleSubmit}>Signup</button>
                            <p>Already a registered user? <Link to="/login">Login!</Link></p>
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

export default Signup;
