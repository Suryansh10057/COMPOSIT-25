import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Popup/PopupMsg.css";
import BaseUrl from "../../const";
import Loader from "../Animations/loading";

const Signup = () => {
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        collegeId: "",
        department: "",
        collegeName: "",
        phone: "",
        city: "",
        state: "",
        gender: "default",
        referral: ""
    });

    const [error, setError] = useState(null);
    const [isValid, setIsValid] = useState(false);

    const openForm = () => {
        document.getElementById("popupForm").style.display = "block";
    };

    const closeForm = () => {
        document.getElementById("popupForm").style.display = "none";
        setError(null);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSignupData({ ...signupData, [name]: value });
    };

    // Validation function
    useEffect(() => {
        const isEmailValid = /\S+@\S+\.\S+/.test(signupData.email);
        const isPhoneValid = /^[0-9]{10}$/.test(signupData.phone);
        const isPasswordValid = signupData.password.length >= 6;
        const areFieldsFilled = Object.values(signupData).every(
            (val) => val.trim() !== "" && val !== "default"
        );

        setIsValid(isEmailValid && isPhoneValid && isPasswordValid && areFieldsFilled);
    }, [signupData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValid) return;

        const submit = document.getElementById("submitbtn");
        submit.innerText =   <Loader/>;
        submit.disabled = true;

        try {
            const response = await fetch(`${BaseUrl}/api/user/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signupData),
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || "Signup failed");

            setError(result.message);
            openForm();
            localStorage.setItem("COMPOSITuser", JSON.stringify(result.user));
            localStorage.setItem("COMPOSITuserToken", JSON.stringify(result.token));

            window.location = `/`;
        } catch (err) {
            setError(err.message);
            openForm();
        } finally {
            submit.innerText = "Signup";
            submit.disabled = false;
        }
    };

    return (
        <>
            <section className="signup-area">
                <div className="d-table mt-9">
                    <div className="d-table-cell">
                        <div className="signup-form">
                            <Link to="/" className="btn-modal btn-primary">
                                &#xab; Back to Home
                            </Link>
                            <h3>Create your Account</h3>

                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        onChange={handleChange}
                                        required
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
                                        required
                                    />
                                    {!/\S+@\S+\.\S+/.test(signupData.email) && signupData.email && (
                                        <p className="error-text">Invalid email format</p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password (Min 6 chars)"
                                        name="password"
                                        onChange={handleChange}
                                        required
                                    />
                                    {/* {signupData.password.length > 0 && signupData.password.length < 6 && (
                                        <p className="error-text">Password must be at least 6 characters</p>
                                    )} */}
                                </div>

                                <div className="form-group">
                                    <label>Institute ID / Roll No.</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Institute ID"
                                        name="collegeId"
                                        onChange={handleChange}
                                        required
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
                                        required
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
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Contact</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Contact Number(10 digits)"
                                        onChange={handleChange}
                                        required
                                    />
                                    {!/^[0-9]{10}$/.test(signupData.phone) && signupData.phone && (
                                        <p className="error-text">Phone number must be 10 digits</p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City"
                                        name="city"
                                        onChange={handleChange}
                                        required
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
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Gender</label>
                                    <select name="gender" className="form-control" required onChange={handleChange}>
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

                                <button
                                    type="submit"
                                    id="submitbtn"
                                    className="btn-modal btn-primary flex-row flex"
                                    onClick={handleSubmit}
                                    disabled={!isValid}

                                >
                                   Signup 
                                </button>

                                <p>Already a registered user? <Link to="/login">Login!</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
