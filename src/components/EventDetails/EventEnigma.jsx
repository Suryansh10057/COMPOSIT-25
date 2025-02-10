import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BaseUrl from "../../const";

import { useState } from "react";

const EventEnigma = () => {

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


  const userData = JSON.parse(localStorage.getItem("COMPOSITuser")) || {}; // Default to empty object

  console.log("user is:", userData);
  
  const [teamId, setTeamId] = useState(null);
  
  function getEventDetails(events, eventName) {
      if (!events) return null; // Safeguard against undefined/null events
      return events.find(event => event.eventName === eventName) || null;
  }
  
  const eventNameToCheck = "Enigma";
  const events = userData.events || []; // Default to empty array if events is null/undefined
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
                src={require("../../assets/images/Enigma.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Enigma</h2>
                <h3>Prize worth 20K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
                {/* <button
                  href="https://unstop.com/quiz/composit-2024-iit-kharagpur-918548"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Register Here
                </button> */}
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
                      pathname: "/createTeam/Enigma",
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
                  to="/joinTeam/Enigma"
                  className="btn btn-primary"
                >
                  {/* Submission Link */}
                  Join Team
                </Link>}

                <a
                  href="https://drive.google.com/file/d/1azn1d0qknPTXObOCS0XQqi3wIphAN-Hd/view?usp=sharing"
                  target="_blank"
                  className="btn btn-primary"
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
                      onClick={(e) => openTabSection(e, "tab1")}
                      className="current"
                    >
                      <Link to="#">About</Link>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab2")}>
                      <Link to="#">Structure</Link>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab3")}>
                      <Link to="#">FAQ`s</Link>
                    </li>

                    <li onClick={(e) => openTabSection(e, "tab4")}>
                      <Link to="#">Contacts</Link>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="schedule-info">
                              <h3>Enigma</h3>

                              <p>
                              Step into the world of intellect and curiosity with ENIGMA, an exciting
online quiz competition that challenges your knowledge across a
spectrum of captivating topics: <br />
                                <ul className="rules-list">
                                  <li>Logical Reasoning / Puzzles. </li> 
                                  <li>
                                    {""} Metallurgy and Materials Science {""}
                                  </li>{" "}
                                  {/* <br /> */}
                                  <li> GK / History </li>
                                  {/* <br /> */}
                                  <li>Sustainability</li>
                                  {/* <br /> */}
                                  <li>Science and Engineering</li>
                                  {/* <br /> */}
                                </ul> <br />
                                This event is designed to provide a perfect mix of fun and learning, with questions ranging from thought-provoking trivia to mind-bending puzzles. Whether you're a quiz enthusiast or just looking to test your intellectual mettle, ENIGMA promises an unforgettable experience. Compete individually, showcase your brilliance, and seize the opportunity to win exciting prizes.
                              </p>
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
                                  Upto 2 (Individual participation allowed){" "}
                                </li>
                                <li>
                                  {" "}
                                  Open to all students pursuing
                                  Bachelors/Masters/PHD in any science and
                                  engineering college{" "}
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              {/* <h2>Rounds of the Event</h2> */}
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <h3>Important Dates</h3>

                                <ul>
                                  <li>
                                    <b>Prelims Round:</b>
                                  </li>
                                  <li> 2nd March 2025 </li>
                                  <br></br>
                                  <br></br>
                                  <li>
                                    <b>Final Event:</b>
                                  </li>
                                  <li>22nd March 2024</li>
                                </ul>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                            
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <br />
                                <h3>Number of Rounds:-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    <b> Round 1 :</b> This round will be conducted in online mode on Unstop platform. <br />{" "}
                                  </li>


                                  <li>
                                    {" "}
                                     <b>Round 2 : </b>General
                                    Trivia.{" "}
                                  </li>
                                  <br />

                                
                                </ul>
                              </div>
                              <div className="schedule-info">
                                <br />
                                <h2>Rules of the Event</h2>
                                <h3>Quiz Rules :-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    Each question carries 1 point for a correct answer.
 <br />{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    0.25 marks will be deducted for incorrect answers.
{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    The quiz must be completed within the stipulated time.{" "}
                                  </li>
                                  <br />

                               
                                </ul>
                                <h3>Integrity :-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    Participants’ screens will be monitored throughout the quiz.
 {" "}
                                  </li>

                                  <li>
                                    {" "}
                                    Participants must provide permission to access the device's
camera, which will monitor for any unfair means being adopted
during the quiz.
{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    Any attempt to cheat or use external help will lead to immediate
                                    disqualification.{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    The organizers’ decision will be final in case of any disputes.{" "}
                                  </li>
                                  <br />

                               
                                </ul>
                                <h3>Platform Guidlines :-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    Ensure a stable internet connection during the quiz.{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    Participants are responsible for ensuring device readiness (laptops,
                                      tablets, or smartphones).
{" "}
                                  </li>

                                 
                                  <br />

                               
                                </ul>
                                <h3>Tie-Breaker :-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    In case of a tie, the participant with the fastest overall time will be
                                    declared the winner. <br />{" "}
                                  </li>

                                
                                  <br />

                               
                                </ul>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h2>Prizes</h2>
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <ul className="rules-list">
                                  <li>
                                    {" "}
                                    {""} Participation certificates for all the
                                    teams attending the quiz.{""}{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    {""} Cash Prizes worth 20k for winners and
                                    runner-ups.{""}{" "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab3" className="tabs_item">
                      {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}

                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Frequently Asked Questions</h3>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  1 : &nbsp; What is the procedure of
                                  registration for the event? Do all the members
                                  have to be registered?{" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; Yes, as with all events, all the
                                  participants must first be registered through
                                  the COMPOSIT website, after which they will be
                                  provided with a participant ID. For the final
                                  round of registration, the team leader has to
                                  enter the participant IDs in the Unstop portal{" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  2 : &nbsp; Who can participate in ENIGMA?  {" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp;  ENIGMA is open to all students, professionals, and quiz enthusiasts. There
                                  are no restrictions based on academic background or experience.{" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  3 : &nbsp; Is there a registration fee?{" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; No, registration is completely free on Unstop.
                                  {" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  4 : &nbsp; Do I need any special software or tools to participate? {" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp;  No, you only need a stable internet connection and a device (laptop,
tablet, or smartphone) to access the Unstop platform.
 {" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  5 : &nbsp;  Is prior knowledge in a specific subject required? {" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; The quiz covers a variety of topics like General Knowledge, Science, and
Sustainability of Materials. Having basic knowledge in these areas of
Metallurgy and Materials Engineering may provide an advantage, but the
questions are designed to be accessible to participants from all
backgrounds.
 {" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  6 : &nbsp; What if there’s a tie between participants? {" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; . In case of a tie, the participant with the fastest overall time to complete the
quiz will be declared the winner.
 {" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  7 : &nbsp; Will all participants receive a certificate? {" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; No, only the winners will receive a Winner certificate. {" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  8 : &nbsp; When will the results be announced?{" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; The results will be announced shortly after the quiz is completed.
Participants will be informed via email to their registered ID.
{" "}
                                </li>
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  9 : &nbsp; What type of questions may be
                                  asked?{" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; The questions will be of MCQ’s type,
                                  and it will be related to concepts of high
                                  school and intermediate-level.{" "}
                                </li>{" "}
                              </ul>
                             
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab4" className="tabs_item">
                      {/* <h3>
                        <i className="icofont-wall-clock"></i> Coming Soon ....
                      </h3> */}

                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Suryansh Singh</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9670006875</b>
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Aarya Joshi</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>7045020804</b>
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


export default EventEnigma;
