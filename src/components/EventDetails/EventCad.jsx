import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventCad = () => {
 const openTabSection = (evt, tabName) => {
     let tabcontent = document.getElementsByClassName("tabs_item");
     for (let i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
     }
 
     let tablinks = document.getElementsByTagName("li");
     for (let i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace("current", "");
     }
 
     document.getElementById(tabName).style.display = "block";
     evt.currentTarget.className += "current";
   };
 
 
     const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
     
     console.log("user is : ". userData)
     
     console.log(userData)
     
     const [teamId, setTeamId] = useState(null);
     
     
         function getEventDetails(events, eventName) {
             const eventDetails = events.find(event => event.eventName === eventName);
             return eventDetails || false; // Returns event details if found, otherwise null
           }
     
           
           const eventNameToCheck = "CadVolution";
           const events = userData.events
     const eventData = getEventDetails(events, eventNameToCheck);
     
     console.log(eventData);
    return (
      <div className="event-details-area ptb-120">
        <section className="event-area bg-image ptb-120">
          <div
            className="col-lg-3 col-sm-6 p-0"
            style={{ textAlign: "center" }}
          >
            <div className="single-events">
              <img
                src={require("../../assets/images/MetaModelling.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Sixth Sense</h2>
                <h3>Cash Prize worth 15K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
                {eventData &&
                                             <div>
                                              <h5>You are already Registered for this event</h5> 
                                                             <p>Team Name : <b className="font-bold"> {eventData && eventData.teamName}</b></p>
                                                             <p>Team Id : <b className="font-bold">{eventData && eventData.teamId}</b></p> 
                                                             <p>Your Team Members can join your team through your Team code. </p>
                                             </div>
                                                             }
                                             
                                                             {!eventData && <Link
                                                                 to={{
                                                                   pathname: "/createTeam/CadVolution",
                                                                   // state: { eventName: "Enigma" }
                                                                 }}                
                                                                 
                                                                 className="btn btn-primary"
                                                             >
                                                               {/* Submission Link */}
                                                               Create Team
                                                            </Link>
                                                            }
                                             
                                                             { !eventData &&   
                                                             <Link
                                                               to="/joinTeam/CadVolution"
                                                               className="btn btn-primary"
                                                             >
                                                               {/* Submission Link */}
                                                               Join Team
                                                             </Link>}
             {/* 
              {/* <a
                  href="https://drive.google.com/file/d/1h0Oqq4aEW829mEtZW-SvAlLiNloDg3jT/view?usp=sharing"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Problem Statement
                </a> */}
                {/* {userData ? <a
                  href="https://forms.gle/pDivTcxotFdThgYy7"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Submission Link
                </a> :
                  <Link to="/login" className="btn btn-primary">Login to Submit</Link>
                } */}
                <a
                  href="https://drive.google.com/file/d/1rWJihDnNFAehHEjSaB6HpYphzc6OXXjO/view?usp=sharing"
                  target="_blank"
                  className="btn btn-primary "
                >
                  Rules & Regulations
                </a>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tab">
                  <ul className="tabs active">
                    <li
                      onClick={(e) =>  openTabSection(e, "tab1")}
                      className="current"
                    >
                      <Link to="#">About</Link>
                    </li>

                    <li onClick={(e) =>  openTabSection(e, "tab2")}>
                      <Link to="#">Structure</Link>
                    </li>

                    <li onClick={(e) =>  openTabSection(e, "tab3")}>
                      <Link to="#">Timeline</Link>
                    </li>

                    <li onClick={(e) =>  openTabSection(e, "tab4")}>
                      <Link to="#">Contacts</Link>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="schedule-info">
                              <h3>Sixth Sense</h3>

                              <p>
                                A materials based modeling event focussing on
                                the aspect of failure analysis. The event aims
                                to investigate what went wrong in engineering
                                some of the crucial system structures and
                                encourages participants to apply their
                                engineering concepts of modeling and structural
                                analysis to solve them
                              </p>

                              {/* <ul>
                                                            <li><i className="icofont-wall-clock"></i> Space technology</li><br />
                                                            <li><i className="icofont-wall-clock"></i> Science and Math</li><br />
                                                            <li><i className="icofont-wall-clock"></i> Enginnering</li>
                                                        </ul> */}
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab2" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Participation Criteria</h3>

                              <ul>
                                <li>
                                  {" "}
                                  Team participation of a maximum of three is
                                  expected.{" "}
                                </li>
                                <li>
                                  {" "}
                                  All members should be students pursuing a
                                  B.Tech/ BSc./ Dual/ MTech/ MSc degree in any
                                  engineering college in India.{" "}
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h3>Rounds of the Event</h3>
                              <p>The event will be conducted in 1 round</p>
                              <ul>
                                <li>
                                  <b>Offline round:</b>
                                  <ul>
                                    <li>
                                      PS will be released on-spot and
                                      participants will be given time to discuss
                                      and work on the PS. They will be
                                      presenting their solutions at the end of
                                      the round which will be judged by a panel
                                      of field experts.{" "}
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab3" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Important Dates</h3>

                              <ul>
                                <li><b>Coming Soon</b></li>
                                {/* <li>
                                  <b>Final presentation:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>1st
                                  April 2023
                                </li> */}
                              </ul>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab4" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              {/* <h3>Contact Info</h3> */}

                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Karabi Saha</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9737699678</b>
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              {/* <h3>Contact Info</h3> */}

                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Gourav Pathak</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>6204935889</b>
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape1">
            <img
              src={require("../../assets/images/shapes/1.png")}
              alt="shape1"
            />
          </div>
          <div className="shape2 rotateme">
            <img
              src={require("../../assets/images/shapes/2.png")}
              alt="shape2"
            />
          </div>
          <div className="shape3 rotateme">
            <img
              src={require("../../assets/images/shapes/3.png")}
              alt="shape3"
            />
          </div>
          <div className="shape4">
            <img
              src={require("../../assets/images/shapes/4.png")}
              alt="shape4"
            />
          </div>
        </section>
      </div>
    );
  
}

export default EventCad;
