import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Navigation from '../Navigation/Navigation';

export default function Profile() {
    
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    // const userData = localData.user

    console.log("data from localStorage",userData)
    return (
        <>
        <Navigation/>
        <section className="signup-area">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="signup-form">
                        <Link to='/' className="btn-modal btn-primary">&#xab; Back to Home</Link>
                        <h3>Profile Information</h3>
                        <form>
                        <ul className='profile-page'>
                            <li className='form-group form-control'><strong>Name:</strong> {userData.name}</li>
                            <li className='form-group form-control'><strong>Registration ID:</strong> {userData._id}</li>
                            <li className='form-group form-control'><strong>Email:</strong> {userData.email}</li>
                            <li className='form-group form-control'><strong>Date of Birth:</strong> {userData.dob}</li>
                            <li className='form-group form-control'><strong>Institute ID / Roll No.:</strong> {userData.collegeId}</li>
                            <li className='form-group form-control'><strong>Department:</strong> {userData.department}</li>
                            <li className='form-group form-control'><strong>Institution:</strong> {userData.collegeName}</li>
                            <li className='form-group form-control'><strong>Contact:</strong> {userData.phone}</li>
                            <li className='form-group form-control'><strong>Address:</strong> {userData.city} , {userData.state}</li>
                            <li className='form-group form-control'><strong>Year of Graduation:</strong> {userData.gradyear}</li>
                            <li className='form-group form-control'><strong>Gender:</strong> {userData.gender}</li>
                            {/* <li className='form-group form-control'><strong>Events Registered:</strong> Metaclix</li> */}
                            <Link to='/events' className="btn btn-primary">Go to our Events</Link>
                            {/* <Link to='/edit-profile' className="btn btn-primary">Edit Profile</Link> */}
                        </ul>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
