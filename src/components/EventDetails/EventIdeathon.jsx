import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventIdeathon = () => {
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
  
  const eventNameToCheck = "Ideathon";
  const events = userData.events || []; // Default to empty array if events is null/undefined
  const eventData = getEventDetails(events, eventNameToCheck);
  
  //console.log(eventData);
    
  
    return (
      <div className="event-details-area ptb-120">
        <section className="event-area bg-image ptb-120">
          <div
            className="col-lg-3 col-sm-6 p-0"
            style={{ textAlign: "center" }}
          >
            <div className="single-events">
              <img
                src={require("../../assets/images/Ideathon.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Ideathon</h2>
                <h3>Prize worth 20K</h3>
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
                                                                             pathname: "/createTeam/Ideathon",
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
                                                                         to="/joinTeam/Ideathon"
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
                            href="https://drive.google.com/file/d/1isxxZWe9nVSh3PpDPzJsIIRsuY5UnQpC/view?usp=drive_link"
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
                              <h3>Ideathon</h3>

                              <p>
                              Ideathon empowers aspiring entrepreneurs and celebrates India's
vibrant start-up culture. This platform invites teams to pitch
innovative business ideas or technological improvements in any
field. A panel of judges evaluates submissions based on creativity,
feasibility, impact, and presentation. This is your chance to gain
recognition, valuable feedback, and the momentum to turn your
vision into reality!


                              </p>

                              {/* <ul>
                                                            <li><i className="icofont-wall-clock"></i> Electronic Materials and Nanotechnology, Computational Material Science</li>
                                                            <li><i className="icofont-wall-clock"></i> Advanced Materials and Functional Materials Biomaterials</li>
                                                            <li><i className="icofont-wall-clock"></i> Material Processes Physical, Extractive and Mechanical Metallurgy</li>
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
                                  Both Individual & Group participation(Max 3 people are allowed).{" "}
                                </li>
                                <li>
                                  {" "}
                                  Open to all 
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
                                3rd March 2025
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Event:</b>
                                </li>
                                <li>
                                22nd March 2025                                </li>
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
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <br />
                              <h3>General Rules:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{""}The maximum number of participants in a Team is 3. Individual
participation is also permitted.

  {" "} </li>
                                <li>{""}The best presenting team will be awarded.
  {" "} </li>
                                <li>{""}The teams are expected to present innovative and well-researched ideas in any field, not necessarily restricted to material science and metallurgy. {" "} </li>                                
                                <li>{""}Everything is allowed in the presentation, including sound effects, video clips, and graphics.{" "} </li>                                
                                <li>{""}Any action that violates the stated rules will result in immediate disqualification of the team from the competition. {" "} </li>                                
                              </ul>
                            </div>


                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 1:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}Participants are to submit a PowerPoint presentation of a pitch deck describing their idea that should not exceed 10 slides including the team introduction and thank you page. {" "}</li>     


                                <li>{" "}The teams have to submit their presentation that must describe the idea proposed, its impact and implementation as required. {" "}</li>             

                                <li>{" "}Submissions that are incomplete or ambiguous, with presentations that are not up to the     mark will not be given the permission to present in the second round.  {" "}</li>                                
                                                                                         
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 2:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "} This round will be conducted in the form of a presentation at the IIT Kharagpur campus in front of a panel of judges.{" "} <br /> </li>  


                                <li>{" "} Participants are required to prepare a presentation within the time limit of 10 minutes, followed by a 5-minute Q&A session. Teams that exceed the given time limit will be penalized.{" "} </li>  

                                <li> {""}There would be penalties if the time exceeds the time limit as follows - <br />
&nbsp;1. &nbsp; 0-1 min: 10% of the presentation marks of the team<br />
&nbsp;2. &nbsp; 1-2 mins: 20% of the presentation marks of the team <br />
&nbsp;3. &nbsp; Greater than 2 mins : 100% of the presentation marks of the team <br />
{""} </li>                        



                                <li>{" "}Top 3 teams will receive cash prizes. Decisions made by the judges are final and binding. {" "} </li>    


                                

                              </ul>
                            </div>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h2>Judging Criteria</h2>
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                              <ul className="rules-list">
                                <li> {""}Top 3 teams will be awarded based on the score by the judges.{""} </li>
                                <li> {""} The teams will be judged on the following parameters:  <br />
&nbsp;1. &nbsp; Idea/Innovation<br />
&nbsp;2. &nbsp; Issue addressed and its proposed solution<br />
&nbsp;3. &nbsp; Quality of the pitch <br />
&nbsp;4. &nbsp; Impact

{""} </li> <br />
<li>{""}		The judges’ decision is final on all matters.{""} </li>
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
                              <li>{" "}1 : &nbsp; What is the procedure of registration for the event?  {" "}</li>
                                <li>{" "}-&nbsp;  All team members need to register through the COMPOSIT Website. Team leader will create Team from Website on Events page and other team members can join the team through provided team code by leader.
 {" "}</li><br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "} 2 : &nbsp; What will happen if the participating team will not submit their PowerPoint presentation before the deadline?
{" "}</li>
                                <li>{" "}-&nbsp; The team will be disqualified and will not be allowed to continue further in the event.
{" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}3 : &nbsp; Is there any specific field that the idea proposed should be on? Does it have to be a complete business model?
{" "}</li> <br />

                                <li>{" "}-&nbsp;  There is no restriction on the field of the idea or that it should be a business model. It could address an issue in any field, and range from a small improvement in existing technology to a full-fledged model for a business venture. The judging panel and COMPOSIT will fairly take all factors into account during evaluation. {" "}</li> <br /> <br /> <br />

        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}4 : &nbsp; What is the format of the PowerPoint presentation to be submitted in the first round?
 {" "}</li><br />
                                <li>{" "}-&nbsp;  Participants are to submit a PowerPoint presentation of a pitch deck describing their idea that should not exceed 15 slides. Everything is allowed in the presentation, including sound effects, video clips, and graphics
 {" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}5 : &nbsp; Is there a slide limit for the presentation?
 {" "}</li> <br />
                                <li>{" "}-&nbsp;  Yes. The number of slides should not exceed 10, including the Introduction and Thank you slides.
 {" "}</li><br /> <br />
        </ul>
                             
                              
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


export default EventIdeathon;
