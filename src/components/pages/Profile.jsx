import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Navigation from '../Navigation/Navigation';
import NewCard from '../Events/NewEventCard';
import Footer from '../Common/Footer';

export default function Profile() {
    
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    const [tab, setTab] = useState("profile");
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [notRegisteredEvents, setNotRegisteredEvents] = useState([]);

    const [copyMessage, setCopyMessage] = useState("");

    const copyToClipboard = () => {
      navigator.clipboard.writeText(userData.email)
        .then(() => {
          setCopyMessage("Email ID copied to clipboard!");
          setTimeout(() => setCopyMessage(""), 3000); // Hide message after 3 seconds
        })
        .catch(err => {
          console.error("Failed to copy: ", err);
        });
    };

    useEffect(() => {
        if (userData?.events?.length > 0) {
            const userRegisteredEvents = userData.events.map(event => event.eventName);
            setRegisteredEvents(allEvents.filter(event => userRegisteredEvents.includes(event.event)));
            setNotRegisteredEvents(allEvents.filter(event => !userRegisteredEvents.includes(event.event)));
        } else {
            // If no events registered, all events go to the 'not registered' section
            setNotRegisteredEvents(allEvents);
        }
    }, []);


    const allEvents = [
        { event: "Technova", description: "Present groundbreaking research and innovative ideas in materials science and engineering to redefine the future.", link: "/events/Technova" },
        { event: "Enigma", description: "Test your knowledge in an exciting online quiz featuring diverse questions from engineering to general awareness.", link: "/events/Enigma" },
        { event: "Excavate", description: "Apply critical thinking and analytical skills to uncover data-driven insights and innovative solutions.", link: "/events/Excavate" },
        { event: "Metaclix", description: "Capture the beauty of science and technology through photography and compete in a dynamic contest.", link: "/events/Metaclix" },
        { event: "Case Study", description: "Analyze real-world challenges, craft strategic solutions, and showcase your problem-solving expertise.", link: "/events/CaseStudy" },
        { event: "Ideathon", description: "An event for aspiring entrepreneurs to pitch innovative ideas, receive expert feedback, and propel their vision into reality.", link: "/events/Ideathon" },
        { event: "MetaCode", description: "Solve engaging coding challenges that blend innovation, problem-solving, and computation.", link: "/events/MetaCode" },
        { event: "Cadvolution", description: "Design creative CAD models, justify your choices, and develop solutions for real-world challenges.", link: "/events/Cadvolution" },
    ];


    console.log("data from localStorage",userData)
    console.log("Events are, ",registeredEvents)
    return (
        <>
        <Navigation/>
        <section className="signup-area" style={{height:"100%",padding:0}}>
        <div className="profile-form">
        {/*  */}
        <div>
        <div className="profile-tabs">
        <button
          variant={tab === "profile" ? "default" : "ghost"}
          onClick={() => setTab("profile")}
          className="register-btn"
        >
          Profile
        </button>
        <button
          variant={tab === "events" ? "default" : "ghost"}
          onClick={() => setTab("events")}
          className="register-btn"
        >
          My Events
        </button>
      </div>
     
        </div>
        <div className='mt-3 px-3'> 
           {tab==="profile" && <>
        <h3 className='text-center mt-2 pt-2'>Profile Information</h3>
        <ul className='profile-ids mt-3'>
            <li className='uid'><strong>Registration ID:</strong> {userData._id}</li>
            {userData.SaId && <li className='said'><strong>SA ID:</strong> {userData.SaId}</li>}
        </ul>

        <div className='profile-page  mt-4'>
            <p className='text-center pt-4'><b>Name : </b> {userData.name}</p>
  
        <div className='profile-info'>
            <p><b>Phone :</b> {userData.phone}</p>
            <p><b>College :</b> {userData.collegeName}</p>
        </div>
        <div className='profile-info'>
        <p><b>College Id :</b> {userData.collegeId}</p>
        <p><b>Gender :</b> {userData.gender}</p>
        </div>
    
        <div className='profile-info'>
            <p><b>Email :</b> 
            <span className="tooltip-container" onClick={copyToClipboard}>
            <span className="email-text">{userData.email}</span>
            <span className="tooltip">{userData.email}</span>
        </span>
            </p>
            <p><b>Address :</b> {userData.city}, {userData.state}</p>

        </div>

        </div>

        {copyMessage && (
        <div className="copy-message">
          {copyMessage}
        </div>
      )}
</>}
{tab==="events" && <>  

<div className='mt-5'>
<section className="pricing-area ptb-50 bg-image">
            <div className="event-container">
                <h2>Registered Events</h2>
                <div className="event-row">
                    {registeredEvents.length > 0 ? (
                        registeredEvents.map(event => (
                            <NewCard key={event.event} event={event.event} description={event.description} link={event.link} />
                        ))
                    ) : (
                        <p>No registered events</p>
                    )}
                </div>

                <h2>Events Not Registered </h2>
                <div className="event-row">
                    {notRegisteredEvents.length > 0 ? (
                        notRegisteredEvents.map(event => (
                            <NewCard key={event.event} event={event.event} description={event.description} link={event.link} />
                        ))
                    ) : (
                        <p>All events registered</p>
                    )}
                </div>
            </div>
        </section>
</div>





 </>}


        </div>
</div> 
        </section>
        <Footer/>

        </>

    )
}


{/* 
    

<form>

</form>


*/}
