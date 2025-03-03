import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventMetaCode = () => {
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
 
   //console.log("user is:", userData);
   
   const [teamId, setTeamId] = useState(null);
   
   function getEventDetails(events, eventName) {
       if (!events) return null; // Safeguard against undefined/null events
       return events.find(event => event.eventName === eventName) || null;
   }
   
   const eventNameToCheck = "MetaCode";
   const events = userData.events || []; // Default to empty array if events is null/undefined
   const eventData = getEventDetails(events, eventNameToCheck);
   
   //console.log(eventData);
   const faqs = [
    {
      question: "What is the procedure for the registration of the event?",
      answer: "All participants must register through the official COMPOSIT’25 website, after which they will receive a COMPOSIT ID and individual Team ID. Participants will then need to enter their Team ID on the Unstop portal to complete the registration process."
    },
    {
      question: "Who can participate in MetaCode Challenge?",
      answer: "It is open to all students, professionals, and quiz enthusiasts. There are no restrictions based on academic background or experience."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, registration is completely free on Unstop and Website for everyone."
    },
    {
      question: "Do I need any special software or tools to participate?",
      answer: "No, you only need a stable internet connection and a device (laptop, pc) to access the Unstop platform."
    },
    {
      question: "Is prior knowledge in a specific subject required?",
      answer: "The quiz covers a few domains including General Trivia, Computer Science, Data Structures and Algorithms, Puzzles, Aptitudes and Application of Materials. Having basic knowledge in these areas of Metallurgy and Materials Engineering may provide an advantage, but the questions are designed to be accessible to participants from all backgrounds."
    },
    {
      question: "Will all participants receive a certificate?",
      answer: "Yes, all the participants will receive their respective certificates."
    },
    {
      question: "When will the results be announced?",
      answer: "The results will be announced shortly after the quiz is completed. Participants will be informed via email through COMPOSIT’25 and Unstop."
    }
  ];

  
  return (
    <div className="event-details-area pt-20">
      <section className="event-area bg-image ptb-120">
        <div className="col-lg-3 col-sm-6 p-0" style={{ textAlign: "center" }}>
          <div className="single-events">
            <img
              src={require("../../assets/images/metacode.jpg")}
              alt="Speaker"
            />

            <div className="events-content">
              <h2>MetaCode</h2>
              {/* <h3>Prize worth 6K</h3> */}
            </div>
          </div>
          <div className="col-lg-13">
            <div className="btn-box" style={{ marginBottom: "20px" }}>
              {eventData && (
                <div>
                  <h5>You are already Registered for this event</h5>
                  <p>
                    Team Name :{" "}
                    <b className="font-bold">
                      {" "}
                      {eventData && eventData.teamName}
                    </b>
                  </p>
                  <p>
                    Team Id :{" "}
                    <b className="font-bold">{eventData && eventData.teamId}</b>
                  </p>
                  <p>
                    Your Team Members can join your team through your Team code.{" "}
                  </p>
                </div>
              )}

              {!eventData && (
                <Link
                  to={{
                    pathname: "/createTeam/MetaCode",
                  }}
                  className="register-btn"
                >
                  Create Team
                </Link>
              )}
{/* 
              {!eventData && (
                <Link to="/joinTeam/Metaclix" className="register-btn">
                  Join Team
                </Link>
              )} */}

              <a
                href="https://drive.google.com/file/d/1SgbPQRNmjDJEo-9d_Qjcff4yGxP4wRDb/view?usp=drive_link"
                className="register-btn"
                target="_blank"
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
                    {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                    <ul className="accordion">
                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          <div className="schedule-info">
                            <h3>MetaCode</h3>

                            <p>
                            MetaCode is a competitive programming event designed to fuse
Computational Power with Metallurgical Innovation, showcasing the
application of coding in solving real-world challenges in materials
science and engineering. The event emphasizes critical thinking,
technical proficiency, and problem-solving skills through rounds that
test aptitude, coding expertise, and innovative solutions. In the final
round, participants will use programming languages like C++, C, or Java
to tackle domain-specific problems, which will feature long competitive
programming at IIT Kharagpur.{" "}
                            </p>

                            <br />
                          </div>


                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div id="tab2" className="tabs_item">
                            {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}

                    <ul className="accordion">
                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          <div className="author"></div>

                          <div className="schedule-info">
                            <h3>Participation Criteria</h3>

                            <ul>
                              <li> Individual Participation </li> <br />
                              <li> Open to all </li>
                            </ul>
                          </div>
                        </Link>
                      </li>

                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          <div className="author author-multi"></div>

                          <div className="schedule-info">
                            <div className="schedule-info">
                              <h3>Important Dates</h3>

                              <ul>
                                <li>
                                  <b>Quiz Round (Online):</b>
                                </li>
                                <li>7th March 2025</li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Coding Round (Offline): </b>
                                </li>
                                <li>22th March 2025 </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          <div className="author author-multi"></div>

                          <div className="schedule-info">
                            <h2>Rules of the Event</h2>
                            <div className="schedule-info">
                              <br />
                              <h3>General Rules:-</h3>

                              <ul
                                className="rules-list"
                                style={{
                                  listStyleType: "circle !important",
                                  color: "red",
                                }}
                              >
                                <li>
                                  {""}Every participant must register online on Unstop as well as on the
                                  official website of COMPOSIT’25{" "}
                                </li>
                                <li>
                                  {""}A Team ID will be allocated after registration, which must be used for
                                  all future references{" "}
                                </li>
                                <li>
                                  {""}The decision of the organizers and judges will be final and binding{" "}
                                </li>
                                <li>
                                  {""} COMPOSIT’25, IIT Kharagpur is not responsible for any late, lost, or
                                  misdirected entries{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="schedule-info">
                              <br />
                              <h3>Rules for Round 1 (Quiz Round) :-</h3>

                              <ul
                                className="rules-list"
                                style={{
                                  listStyleType: "circle !important",
                                  color: "red",
                                }}
                              >
                                <li>
                                  {" "}
                                  This round will be conducted online on the Unstop platform.{" "}
                                </li>

                                <li>
                                  {" "}
                                  The time limit to attempt the quiz is 20 minutes. The quiz window will
be open for 4 hours.{" "}
                                </li>
                                <li>
                                  {" "}
                                  Questions will be based on the topics of Computer Science and DSA,
Application of Materials in Computer Architecture and Tools, Aptitude,
Puzzles, etc.{" "}
                                </li>

                                <li>
                                  {" "}
                                  This is an elimination round, top scorers will qualify for the final
coding round.{" "}
                                </li>
                                <li>
                                  {" "}
                                  Any malpractice during the event and
                                  submissions will be penalised as judged by
                                  COMPOSIT.{" "}
                                </li>
                                <li>
                                  {" "}
                                  The shortlisted candidates from the first round will be invited to come
offline for the final round at the IIT Kharagpur campus.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="schedule-info">
                              <br />
                              <h3>Rules for Round 2 (Offline Coding Round) :-</h3>

                              <ul
                                className="rules-list"
                                style={{
                                  listStyleType: "circle !important",
                                  color: "red",
                                }}
                              >
                                <li>
                                  {" "}
                                  The top teams from the first round will be invited for the final coding
round. The selected teams will be notified via email.{" "}
                                </li>

                                <li>
                                  {" "}
                                  This offline coding round will be held in the CIC lab at IIT Kharagpur.{" "}
                                </li>
                                <li>
                                  {" "}
                                  This would be a competitive programming contest that will consist of
                                  3-5 coding questions and a time limit of 90 minutes.{" "}
                                </li>

                                <li>
                                  {" "}
                                  Allowed Languages:- C++/C/Java/Python{" "}
                                </li>
                                <li>
                                  {" "}
                                  The number of test cases passed will determine the final marks.{" "}
                                </li>
                                <li>
                                  {" "}
                                  In case of a tie between two or more participant marks, their timing will
be taken into consideration.
                                 {" "}
                                </li>
                                <li>
                                  {" "}
                                  Top three winners will be selected based on their final score.
                                 {" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      </li>
                      {/* <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          <div className="author author-multi"></div>

                          <div className="schedule-info">
                            <h2>Judging Criteria</h2>
                            <div className="schedule-info">
                              <ul className="rules-list">
                                <li>
                                  {" "}
                                  {""} The evaluation will be done on the basis
                                  of: <br />
                                  &nbsp;1. &nbsp; Technical Quality <br />
                                  &nbsp;2. &nbsp; Idea and relevance to theme
                                  <br />
                                  &nbsp;3. &nbsp; Creativity and originality
                                  <br />
                                  &nbsp;4. &nbsp; Technical Quality <br />
                                  &nbsp;5. &nbsp; Technical Quality
                                  {""}{" "}
                                </li>
                                <br />
                                <li>
                                  {""} The COMPOSIT team will do the review. The
                                  team's decision on all matters will be final.
                                  {""}{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Link>
                      </li> */}
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

                            {faqs.map((faq, index) => (
    <ul className="accordion faqs">
    <li >
      {" "}
      {index + 1} : &nbsp; {faq.question}{" "}
    </li>
    <li>
      {" "}
      -&nbsp; {faq.answer}
{" "}
    </li>
  </ul>
        ))}
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div id="tab4" className="tabs_item">
                   {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                  
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
          <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
        </div>
        <div className="shape2 rotateme">
          <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
        </div>
        <div className="shape3 rotateme">
          <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
        </div>
        <div className="shape4">
          <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
        </div>
      </section>
    </div>
  );
};

export default EventMetaCode;
