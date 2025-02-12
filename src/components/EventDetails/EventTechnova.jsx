import React, { useState } from "react";
import { Link } from "react-router-dom";

const  EventTechnova = () => {


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

  const faqs = [
    {
      question: "What is the procedure for the registration of the event? Do all members have to be registered?",
      answer: "Yes, all team members need to register through the COMPOSIT Website. Team leader will create Team from Website on Events page and other team members can join the team through provided team code by leader.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, registration is completely free.",
    },
    {
      question: "Can a team comprise participants from different departments or institutions?",
      answer: "Yes.",
    },
    {
      question: "Do I need to bring my laptop with me?",
      answer: "Yes, you need to bring your own laptop. Make sure you have a working HDMI port or a connector with you.",
    },
    {
      question: "What is the format of the abstract to be submitted in the first round?",
      answer: "The abstract should be a short summary of the research paper or technical paper. This should highlight the objective, methodology, and key findings or insights of your work, all in a PDF with a maximum of 1000 words. Participants need to bring their own laptop with a proper HDMI connection for the presentation. Evaluation will be done based on both round performance by the team. In case of any disputes, the final decision rests with the organizers.",
    },
    {
      question: "Is there a slide limit for the presentation?",
      answer: "No. Any number of slides may be used as long as the overall presentation is kept within the time limit.",
    },
  ];
 

     const userData = JSON.parse(localStorage.getItem("COMPOSITuser")) || {}; // Default to empty object
   
     console.log("user is:", userData);
     
     const [teamId, setTeamId] = useState(null);
     
     function getEventDetails(events, eventName) {
         if (!events) return null; // Safeguard against undefined/null events
         return events.find(event => event.eventName === eventName) || null;
     }
     
     const eventNameToCheck = "Technova";
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
                <h2>Technova</h2>
                {/* <h3>Prize worth 20K</h3> */}
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
                                    pathname: "/createTeam/Technova",
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
                              to={{
                                pathname: "/joinTeam/Technova",
                                // state: { eventName: "Enigma" }
                              }}  
                                className="btn btn-primary"
                              >
                                {/* Submission Link */}
                                Join Team
                              </Link>}
              
                <a
                  href="https://drive.google.com/file/d/1ehhfk_MHEBSFVSxKmREPFy3oHaUU5Smn/view?usp=drive_link"
                  target="_blank"
                  className="btn btn-secondary"
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
                              <h3>Technova</h3>

                              <p>
                              This event involves presentation of a technical paper (based on existing literature, on a specific topic) or any scientific work (original) in one of the following themes: <br />
                              <b className="mt-3"> Theme 1 : Renewable Energy Materials</b>
                              <ul className="rules-list">
                                <li>Materials for Solar Energy Conversion (e.g., Photovoltaics)</li> 
                                <li>{""} Advanced Wind Turbine Materials{""}</li> 
                                <li>Materials for Hydrogen Production and Storage</li>
                              </ul> 
                              <b>Theme 2 : Energy Storage Technologies</b>
                              <ul className="rules-list">
                                <li>Lithium-ion and Sodium-ion Batteries</li>
                                <li>Supercapacitors and Ultracapacitors</li>
                                <li>Solid-State Batteries</li>
                              </ul>
                              <b>Theme 3 : Emerging Energy Materials</b>
                              <ul className="rules-list">
                                <li>Perovskite Materials for Energy Applications</li>
                                <li>Thermoelectric Materials for Waste Heat Recovery</li>
                                <li>Piezoelectric and Triboelectric Energy Harvesting</li>
                              </ul>
                              <b>Theme 4 : Nuclear Energy Materials</b>

                              <ul className="rules-list">
                                <li> Radiation-resistant Materials</li>
                                <li> Materials for Nuclear Fuel Cycles</li>
                                <li>Fusion Reactor Materials </li>
                              </ul> 
                              <b>Theme 5 : Carbon-neutral Energy Solutions </b>

                              <ul className="rules-list">
                                <li>Catalysts for CO2 Capture and Conversion </li>
                                <li>Bio-based Energy Materials </li>
                                <li>Materials for Fuel Cells and Electrochemical Devices </li>
                              </ul> 
                              <br />

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
                                  Upto 3 (Individual participation allowed){" "}
                                </li>
                                <li>
                                  {" "}
                                  Open to all students pursuing
Bachelors/Masters/PHD in any science and engineering college 
{" "}
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
                                  <b>Submission Deadline:</b>
                                </li>
                                <li>
                                3rd March , 2025                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Event:</b>
                                </li>
                                <li>
                                23rd March 2025
                             </li>
                              </ul>
                            </div>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h2>Rounds</h2>
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <br />
                              <h3>Abstract submission:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{""}Participants must submit an abstract (maximum
1000 words) of their paper, highlighting the objective, methodology, and
key findings or insights at Unstop. Shortlisted teams will be notified of the
final presentation.

  {" "} </li>
                              
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Technical Conference:-</h3>

                              <ul className="" style={{listStyleType:'circle !important',color:'red',textAlign:'left'}}>
                                <li>{" "}Qualified teams will present their paper in front of
a panel of judges at the IIT Kharagpur campus. Presentations must be
completed within 10 minutes, followed by a 5-minute Q&A session with
the judges. {" "}</li>     


                               
                              </ul>
                            </div>
                          
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h2>Rules :-</h2>
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                              <ul className="rules-list">
                                <li> {""} Each team can have a maximum of three members. Individual
                                participation is allowed{""} </li>
                                <li> {""} Every participant must carry their own ID proof.

{""} </li> 
<li>{""}	Team must submit abstract only in one mentioned theme.
{""} </li>
<li>{""}Having a publication currently is not required, but it must be a proper
draft.
{""} </li>
<li>Participants will be disqualified if any type of plagiarism is detected.
</li>
<li>Participants need to bring their own laptop with a proper HDMI
connection for the presentation.</li>
<li>Evaluation will be done based on both round performance by the team.</li>
<li>In case of any disputes, the final decision rests with the organizers.</li>
<li>There’s a time limit for presentation in round 2. Teams exceeding the
time limit will be penalized as follows:
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

export default EventTechnova;
