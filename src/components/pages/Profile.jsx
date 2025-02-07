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
        <div className="signup-form">
        <Link to='/' className="btn-modal btn-primary">&#xab; Back to Home</Link>
        <h3>Profile Information</h3>

        <ul className='profile-page'>
    <li className='form-group form-control mt-4'><strong>Name:</strong> {userData.name}</li>
    <li className='form-group form-control'><strong>Registration ID:</strong> {userData._id}</li>
    {userData.SaId && <li className='form-group form-control'><strong>SA ID:</strong> {userData.SaId}</li>}
    <li className='form-group form-control'><strong>Email:</strong> {userData.email}</li>
    <li className='form-group form-control'><strong>Institute ID / Roll No.:</strong> {userData.collegeId}</li>
    <li className='form-group form-control'><strong>Department:</strong> {userData.department}</li>
    <li className='form-group form-control'><strong>Institution:</strong> {userData.collegeName}</li>
    <li className='form-group form-control'><strong>Contact:</strong> {userData.phone}</li>
    <li className='form-group form-control'><strong>Address:</strong> {userData.city} , {userData.state}</li>
    <li className='form-group form-control'><strong>Gender:</strong> {userData.gender}</li>
    <Link to='/events' className="btn btn-primary profile-btn">Go to our Events</Link>
</ul>

</div> 
        </section>
        </>

    )
}


{/* 
    

<form>

</form>


*/}
