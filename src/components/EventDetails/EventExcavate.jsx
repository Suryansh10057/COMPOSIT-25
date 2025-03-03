import React, {useState} from "react";
import { Link } from "react-router-dom";

const  EventExcavate = () => {
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
    
    const eventNameToCheck = "Excavate";
    const events = userData.events || []; // Default to empty array if events is null/undefined
    const eventData = getEventDetails(events, eventNameToCheck);
    
    //console.log(eventData);
    const faqs = [
      {
        question: "What is the registration procedure for the event?",
        answer: "All participants must register through the COMPOSIT website to receive a participant ID. The final submission must be done through Unstop."
      },
      {
        question: "Can we make changes to our team after registration?",
        answer: "No changes to the team composition will be allowed after the registration deadline."
      },
      {
        question: "Can a team consist of participants from different institutions?",
        answer: "Yes, cross-institutional teams are allowed as long as all members register and provide valid identification."
      },
      {
        question: "Are there any prerequisites for participating in the data analytics event?",
        answer: "No specific prerequisites are required. However, basic knowledge of data science and the problem domain is encouraged."
      },
      {
        question: "Is there a slide limit for the presentation?",
        answer: "Yes. There is a slide limit of 8-10 slides for the presentation."
      },
      {
        question: "What will happen if the participating team submits their report after the deadline?",
        answer: "The team will be disqualified and not allowed to continue further in the event."
      },
      {
        question: "What report will be submitted in the first round?",
        answer: "The report should explain the model approach and include code snippets from the Jupyter notebook. It must use Arial font style and font size 12."
      },
      {
        question: "How will we know if we are qualified for the final round?",
        answer: "Teams submitting the report correctly will receive a confirmation email regarding their selection for the final round."
      },
      {
        question: "What are the evaluation criteria for the data analysis?",
        answer: "Evaluation will be based on the model approach, accuracy, insights, and clarity of presentation."
      },
      {
        question: "Will there be a Q&A session during the final presentation?",
        answer: "Yes, judges will conduct a 5-minute Q&A session after each team's presentation."
      },
      {
        question: "What happens in case of a tie in the final scores?",
        answer: "In case of a tie, the team with a better score in the presentation section will be declared the winner."
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
                src={require("../../assets/images/Excavate.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Excavate</h2>
                <h3>Prize worth 30K</h3>
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
                                                                   pathname: "/createTeam/Excavate",
                                                                 }}                
                                                                 
                                                                 className="register-btn"
                                                             >
                                                               Create Team
                                                            </Link>
                                                            }
                                             
                                                             { !eventData &&   
                                                             <Link
                                                               to="/joinTeam/Excavate"
                                                               className="register-btn"
                                                             >
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
                  href="https://drive.google.com/file/d/1YamapvbpFfGlqKPNmH_zq3LMnjYE-eJD/view?usp=drive_link"
                  target="_blank"
                  className="register-btn"
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
                              <h3>Excavate</h3>

                              <p>
                              Excavate is an exciting team-based event that brings data analysis to
the forefront of metallurgical and materials engineering. Designed to
challenge your analytical and problem-solving skills, it’s all about
diving into real-world data, uncovering insights, and presenting
innovative solutions. Whether you're just starting with data science
or already a pro, this event is a great way to sharpen your skills,
connect with peers, and see the impact of data in engineering. Teams
will analyze data, present their findings, and defend their approach in
a fun and competitive environment. Don’t miss the chance to learn,
compete, and showcase your talent!


                              </p>

                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab2" className="tabs_item">
                      <ul className="accordion">
                      {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Participation Criteria</h3>

                              <ul>
                                <li>
                                  {" "}
                                  Max 3 (Team Participation event){" "}
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
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                              <h3>Important Dates</h3>

                              <ul>
                              {/* <li>
                                  <b>Quiz Date:</b>
                                </li>
                                <li>
                                12th March 2024
                                </li>
                                <br></br>
                                <br></br> */}
                                <li>
                                  <b>Submission Deadline:</b>
                                </li>
                                <li>
                                10th March 2025 ( Submission will be done through Mail : "excavate.composit@gmail.com" )
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Event:</b>
                                </li>
                                <li>
                                23rd March 2025                               </li>
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

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{""}This is a team participation event where team size should be at most 3.
  {" "} </li>
                                <li>{""}The event will have the following rounds: Submission Round, + Final Presentation Round.

  {" "} </li>
                                {/* <li>{""}Round 1 will be held online on Unstop as an Aptitude Quiz.
  {" "} </li>                     */}
                                <li>{""}The on-spot registration at Unstop is allowed up to the PS submission round.

  {" "} </li>                     
                                <li>{""}Round 1 results will be mailed to the participants selected for the final round.
  {" "} </li>                               
                              </ul>
                            </div>
                            <div className="schedule-info">
                                <br />
                              {/* <h3>Rules for round 1:-</h3> */}

                              {/* <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}	This will be an aptitude test round held online on Unstop (12th March 2024). <br />{" "}</li>                                
                                <li>{" "} This will be a bonus round. {" "}</li>                                
                                <li>{" "} The top scorers from this round will be invited to come offline for the final round at the IIT Kharagpur campus. {" "}</li> 
                                <li>{" "} Although this will not be an elimination round, the participants willing to attempt the Problem Statement can do so. Still, those who try the Quiz round will get an edge over others by securing bonus points. {" "}</li>                                 
                                <li>{" "} There will be no elimination in this round. However, the event organisers reserve the right to disqualify any abstract submission found irrelevant to the theme or violating any event rules.{" "}</li> 
                                <p>Scheme for Bonus Points:</p>
                                <li>{" "} The Total Marks allotted for the Quiz Round will be 5. {" "}</li> 
                                <li>{" "} The marks scored in the Quiz Round held at Unstop will be scaled to 5, and those who miss this round will get 0 for the same. {" "}</li> 
                                <p><b>Those who miss this round can directly make the PS submission at Unstop.</b></p>
                                                                                     
                              </ul> */}
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 1:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}The Submission Round will require participants to submit their
Jupyter notebook along with a detailed report via email
“excavate.composit@gmail.com”.  {" "} <br /> </li>                                                       
                                <li>{" "}The problem statement will be released on Unstop and the official
                                website of COMPOSIT.  {" "} </li>                                                       
                                <li>{" "}The teams that complete the submission by the deadline will be
called for an offline presentation round at the IIT Kharagpur
campus.  {" "} </li>                                                       
                                <li>{" "}Results of the Submission Round will be sent through the same
email to the top teams to participate in the Final Presentation
Round.{" "} </li>                                                       
                                {/* <li>{" "} The teams that complete the submission by the deadline will be called for an offline presentation round at the IIT Kharagpur campus. {" "} </li>                                                                                                            */}
                              </ul>
                            </div>
                            <div className="schedule-info">
                                <br />
                              <h3>Rules for round 2:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                {/* <li>{" "} This offline round will be held on 30th March 2024, from 12 PM to 4 PM.  {" "} <br /> </li>                                                        */}
                                <li>{" "} For this round, selected teams must prepare a presentation for the
                                panel of judges. {" "} </li>                                                       
                                <li>{" "}There is a slide limit for the presentation, it should be between 8-10
                                slides. And the presentation time limit would be 10 minutes.  {" "} </li>       

                                <li>{" "} There would be penalties if the time exceeds the time limit as follows:- <br />
                                            &nbsp; 0-1 min: 10% of the presentation marks of the team <br />
                                            &nbsp; 1-2 mins: 20% of the presentation marks of the team <br /> 
                                            &nbsp; Greater than 2 mins : 100% of the presentation marks of the team{" "} </li>                                                       
                                <li>{" "} The presentation will also be followed by a Q&A session with the
judging panel for 5 minutes, which will also be considered for final
evaluation. {" "} </li>
                                <li>{" "} The top 3 teams will receive cash prizes. Decisions made by the
                                judges are final and binding. {" "} </li>                                                                                                                                                                                                    
                                <li>{" "}Any action that violates the stated rules will immediately disqualify
                                the team from the competition. {" "} </li>                                                                                                                                                                                                    
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
                              <div className="schedule-info">
                              <ul className="rules-list">
                                {/* <li> {" "} Round 2 will be evaluated based on the idea and approach and towards the problem statement. {" "} <br /> </li>
                                <li> {" "} Round 3 will be held offline as a final presentation round. <br /> {" "} </li> */}
                                <li> {" "} <b>Submission Round - </b> Evaluted on the :<br />
                                            &nbsp;- Submitted Report <br />
                                            &nbsp;- Accuracy: 20 <br /> 
                                            &nbsp;- Model Approach <br /> 

                                            </li>
                                <li> {" "} <b>Final Presentation Round -</b> Evaluated on : <br />
                                            &nbsp;- Approach (10%)  <br />
                                            &nbsp;- Model and Accuracy (30%) <br /> 
                                            &nbsp;- Questionnaire Solutions (20%) <br /> 
                                            &nbsp;- Quality of presentation (15%) <br /> 
                                            &nbsp;- Q&A session (25%) {" "} <br />
                                            </li>
                                <li>{" "} The decision of the judges shall be final and conclusive. {" "}</li>
                              </ul>
                            </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab3" className="tabs_item">
                    {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}

                      <ul className="accordion ">
                        <li className="accordion-item faqs-head">
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


export default EventExcavate;
