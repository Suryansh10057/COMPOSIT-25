import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventCasestudy = () => {
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
    
    const eventNameToCheck = "CaseStudy";
    const events = userData.events || []; // Default to empty array if events is null/undefined
    const eventData = getEventDetails(events, eventNameToCheck);
    
    //console.log(eventData);

    const eventRules = [
      "The event will have the following rounds: Submission Round + Final Presentation Round.",
      "On-spot registration is allowed up to the round deadline. Submission Round results will be mailed to the participants selected for the final round within 24 hours after submission.",
      "There is no fixed number of teams for qualification.",
      "Everything is allowed in the presentation, including sound effects, video clips, and graphics.",
      "There is a slide limit for the presentation; it should be between 8-10 slides. The presentation time should not exceed 10 minutes.",
      "The presentation will also be followed by a Q&A session with the judging panel for 5 minutes, which will also be considered for final evaluation.",
      "The top 3 teams will receive cash prizes. Decisions made by the judges are final and binding.",
      "Any action that violates the stated rules will immediately disqualify the team from the competition."
    ];

    const faqs = [
      {
        question: "What abstract format will be submitted in the second round?",
        answer: "The abstract should be a report of at least five pages, including the background, objectives, methods used for analyzing and collecting the data, results, and conclusion of the given problem statement. This report must have the font style Arial and font size 12."
      },
      {
        question: "How will we know if we are qualified for the final round?",
        answer: "All teams submitting the abstract following all the rules and themes of the problem statement will be sent a confirmation mail regarding further details about the final round within 24 hours of your submission."
      },
      {
        question: "Is there a slide limit for the presentation?",
        answer: "No. Any number of slides may be used if the presentation is kept within the time limit."
      },
      {
        question: "What are the evaluation criteria for the case study?",
        answer: "The evaluation will be based on creativity, feasibility, depth of analysis, and clarity of presentation."
      },
      {
        question: "Will there be a Q&A session during the final presentation?",
        answer: "Yes, the judges will have a 5-minute Q&A session after each team's presentation."
      },
      {
        question: "What happens in case of a tie in the final scores?",
        answer: "In the event of a tie, the team with a better score in the presentation section will be declared the winner."
      },
      {
        question: "Will certificates be provided to all participants?",
        answer: "Yes, all participants will receive a participation certificate, and winners will receive additional recognition and prizes."
      }
    ];
    
    
    return (
      <div className="event-details-area ptb-120">
        <section className="event-area bg-image ptb-120">
          <div
            className="col-lg-3 col-sm-6 p-0"
            style={{ textAlign: "center" }}
          >
            <div className="single-events">
              <img
                src={require("../../assets/images/CaseStudy.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Case Study</h2>
                <h3>Cash Prize worth 30K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
                {/* {userData ?
                                    <Link to="#" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                } */}

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
                                                      pathname: "/createTeam/CaseStudy",
                                                    }}                
                                                    
                                                    className="register-btn"
                                                >
                                                  Create Team
                                               </Link>
                                               }
                                
                                                { !eventData &&   
                                                <Link
                                                  to="/joinTeam/CaseStudy"
                                                  className="register-btn"
                                                >
                                                  Join Team
                                                </Link>}

                <a
                  href="https://drive.google.com/file/d/1EFtoQhAzmvahop8Ubss7_VTLgDTn9g0X/view?usp=drive_link"
                  className="register-btn"
                  target="_blank"
                >
                  Problem Statement
                </a> 
                {/* {userData ? <a
                  href="https://forms.gle/yZ5zTEcdxQz6rV2F9"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Submission Link
                </a> :
                <Link to="/login" className="btn btn-secondary">Register Here</Link>
                } */}
                <a
                  href="https://drive.google.com/file/d/1EFtoQhAzmvahop8Ubss7_VTLgDTn9g0X/view?usp=drivesdk"
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
                      onClick={(e) =>  openTabSection(e, "tab1")}
                      className="current"
                    >
                      <Link to="#">About</Link>
                    </li>

                    <li onClick={(e) =>  openTabSection(e, "tab2")}>
                      <Link to="#">Structure</Link>
                    </li>

                    <li onClick={(e) =>  openTabSection(e, "tab3")}>
                      <Link to="#">FAQ`s</Link>
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
                              <h3>Metallurgy Case Study</h3>

                              <p>
                              A case study competition where teams solve real-world business problems
by creating creative and strategic solutions. Participants will develop
detailed plans to solve the problem, showing their skills in effectively
handling challenging situations.
An esteemed panel of judges will review the solutions presented by the
teams and select the winner. Interested teams are encouraged to sign up
and show their problem-solving abilities in addressing real-life challenges.{" "}
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
                                  Team participation of a maximum of three is
                                  expected.(Individual Participation is Allowed){" "}
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
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Important Dates</h3>

                              <ul className="subrules">
                                {/* <>
                                  <b>Round 1 : </b>
                                </>
                                <li>
                                  This will be an aptitude test round held online on Unstop (2nd March 2025).
                                </li>
                                <br /> */}
                                <>
                                  <b>Round 1:</b>
                                </>
                                <li>
                                For this round, the Problem Statement will be released on
Unstop and the official website of COMPOSIT on 28th Feb 2025. The
deadline for the submission will be 10th March 2025, 11:59 AM

                                </li>
                                <br />
                                <>
                                  <b>Round 2:</b>
                                </>
                                <li>
                                This offline round will be held on 22nd March 2025.

                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h2>Rounds of the Event</h2>
                              <p>The event will have two rounds as follows:</p>

                              <ul>
                                {/* <li>
                                  <h5>Round 1 : Online Aptitude Quiz:</h5>
                                  <ul>
                                    <li>
                                    The first round will consist of an online aptitude quiz hosted on the
Unstop platform. The quiz will include a variety of questions that test
logical thinking, problem-solving abilities, and basic quantitative aptitude.
<div className="mx-4 rules-list">
  <ul style={{ textAlign: "left", color: "#fff", listStyleType: "disc" }} className="list-disc">
    <li><b>Bonus Points :</b> Additional bonus points will be awarded to the top
scorers of this round.
</li>
<li><b>Advancement Criteria : </b>The top-performing teams will proceed to the
next round based on their scores in the quiz.</li>
  </ul>
</div>
                                    </li>
                                  </ul>
                                </li> */}
                                <li>
                                  <h5>Round 1 : Problem Statement Analysis : </h5>
                                  <ul>
                                    <li>
                                    {/* The top 25 teams from Round 1 will be invited to participate in this round.
Invitations will be sent via email to the registered team leads. */}
<div className="mx-4 rules-list">
  <ul style={{ textAlign: "left", color: "#fff", listStyleType: "disc" }} className="list-disc">
    <li><b>Problem Statement : </b> A unique problem statement will be released on
both the Unstop platform and the official COMPOSIT website.

</li>
<li><b>Objective : </b> Teams must thoroughly analyze the problem statement and
design an innovative, feasible, and well-structured solution.
</li>
<li><b>Submission :</b>  Detailed instructions for submitting initial solutions will be
provided along with the problem statement.
</li>
  </ul>
  </div>
  </li>
  </ul>

                                </li>
                                <br></br>
                                <br />
                                <li>
                                  <h5>Round 2: Offline Participation:</h5>
                                  <ul>
                                    <li>
                                    The final round will take place offline at the IIT Kharagpur campus. This round
is a culmination of the event, where the top 10 teams will present their
solutions to a panel of esteemed judges.

<div className="mx-4 rules-list">
  <ul style={{ textAlign: "left", color: "#fff", listStyleType: "disc" }} className="list-disc">
    <li><b>Presentation : </b> Teams are required to prepare a comprehensive
presentation outlining their approach, methodology, analysis, and final
solution to the problem statement.
</li>
<li><b>Judging Criteria :  </b>The panel will evaluate the presentations based on
creativity, feasibility, depth of analysis, clarity of thought, and overall
presentation skills.

</li>
<li><b>Interactive Session : </b>   Following each presentation, the judges will have a
short Q&A session with the team to clarify any points and assess the
team’s understanding and adaptability.
</li>
  </ul>
  </div>
  </li>
  </ul>
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>General Rules : </h3>

                              <div className="schedule-info">

                              <ul className="rules-list">
                                {eventRules.map((rule, index) => (
                                  <li key={index}>{rule}</li>
                                ))}
                                <li>There would be penalties if the time exceeds the time limit as follows :
<ul className=" subrules">
  
<li><b>0-1 min :</b>10% of the presentation marks of the team.</li>
<li><b>1-2 min</b> 20% of the presentation marks of the team.</li>
<li><b> more than 2 min :</b> 50% of the presentation marks of the team.</li>
</ul>
</li>
                              </ul>
                             
                            </div>
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

export default EventCasestudy;
