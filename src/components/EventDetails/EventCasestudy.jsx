import React from "react";
import { Link } from "react-router-dom";

class EventCasestudy extends React.Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };
  render() {
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
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
                <h3>Prize worth 20K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
              <a
                  href="https://unstop.com/competitions/general-case-study-iit-kharagpur-892695"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Register Here
                </a>
                {/* {userData ?
                                    <Link to="#" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                } */}
                <a
                  href="https://drive.google.com/file/d/13gqs-yMWD2MVoqZ9pJpVmIaRreCMPml6/view?usp=sharing"
                  className="btn btn-primary"
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
                <Link to="/login" className="btn btn-secondary">Login to Submit</Link>
                } */}
                <a
                  href="https://drive.google.com/file/d/1TdHZSvvH0uCJothY7TNaTUpw1g1v1nvv/view?usp=sharing"
                  className="btn btn-primary"
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
                      onClick={(e) => this.openTabSection(e, "tab1")}
                      className="current"
                    >
                      <Link to="#">About</Link>
                    </li>
 
                    <li onClick={(e) => this.openTabSection(e, "tab2")}>
                      <Link to="#">Structure</Link>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab3")}>
                      <Link to="#">FAQ`s</Link>
                    </li>

                    <li onClick={(e) => this.openTabSection(e, "tab4")}>
                      <Link to="#">Contacts</Link>
                    </li>
                  </ul>

                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="schedule-info">
                              <h3>General Case Study</h3>

                              <p>
                              The case study competition challenges teams to analyze real-world business problems and develop innovative solutions. The participating teams must use their analytical and creative skills to develop a strategic plan that analyses and addresses the problem statement. An accomplished panel of judges will evaluate the solutions presented by the teams and determine the winning team. Prospective teams are encouraged to register and showcase their problem-solving skills in tackling real-world challenges.{" "}
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
                                 Team size : Upto 3 (Individual participation allowed)){" "}
                                </li>
                                <br />
                                <li>
                                  {" "}
                                  Open to all students pursuing Bachelor/Masters/PhD in any science, engineering and management colleges {" "}
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
                                  <b>Quiz Date:</b>
                                </li>
                                <li>
                                11th March 2024
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Submission Deadline:</b>
                                </li>
                                <li>
                                22nd March 2024
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Event:</b>
                                </li>
                                <li>
                                30th March 2024                                </li>
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
                                <li>{""}The maximum number of participants in a Team is 3. Individual participation is also permitted. {" "} </li>
                                <li>{""}The event will have the following rounds: Aptitude Quiz + Submission Round + Final Presentation Round. {" "} </li>
                                <li>{""}Round 1 will be held online on Unstop as an Aptitude Quiz.  {" "} </li>                                
                                <li>{""}The on-spot registration at Unstop is allowed up to the round deadline.{" "} </li>   
                                <li>{""}Round 1 results will be mailed to the participants selected for the final round.{" "} </li>
                                <li>{""}Everything is allowed in the presentation, including sound effects, video clips, and graphics. Any action that violates the stated rules will immediately disqualify the team from the competition.{" "} </li>                             
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 1:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}	This will be an aptitude test round held online on Unstop (11th March 2024). <br />{" "}</li>                                
                                <li>{" "} This will be a bonus round. {" "}</li>                                
                                <li>{" "} The top scorers from this round will be invited to come offline for the final round at the IIT Kharagpur campus. {" "}</li> 
                                <li>{" "} Although this will not be an elimination round, the participants willing to attempt the Problem Statement can do so. Still, those who try the Quiz round will get an edge over others by securing bonus points. {" "}</li>                                 
                                <li>{" "} There will be no elimination in this round. However, the event organisers reserve the right to disqualify any abstract submission found irrelevant to the theme or violating any event rules.{" "}</li> 
                                <p>Scheme for Bonus Points:</p>
                                <li>{" "} The Total Marks allotted for the Quiz Round will be 5. {" "}</li> 
                                <li>{" "} The marks scored in the Quiz Round held at Unstop will be scaled to 5, and those who miss this round will get 0 for the same. {" "}</li> 
                                <p><b>Those who miss this round can directly make the PS submission at Unstop.</b></p>
                                                                                     
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 2:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "} The top teams from the first round will be invited for the final round. The selected teams will be notified via email.  {" "} <br /> </li>                                                       
                                <li>{" "} The on-spot registration at Unstop is allowed up to the PS submission round.  {" "} </li>                                                       
                                <li>{" "} For this round, the Problem Statement will be released on Unstop and the official website of COMPOSIT on 13th March 2024.  {" "} </li>                                                       
                                <li>{" "} Participants who miss the bonus round can also attempt this round and submit it on Unstop. {" "} </li>                                                       
                                <li>{" "} The teams that complete the submission by the deadline will be called for an offline presentation round at the IIT Kharagpur campus. {" "} </li>                                                                                                           
                              </ul>
                            </div>
                            <div className="schedule-info">
                                <br />
                              <h3>Rules for round 3:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "} This offline round will be held on 30th March 2024, from 12 PM to 4 PM.  {" "} <br /> </li>                                                       
                                <li>{" "} For this round, the teams must prepare a presentation that a panel of judges will judge. {" "} </li>                                                       
                                <li>{" "} During the presentation, finalist teams must briefly describe their approach and follow a list of pointers that will be provided in the selection email.  {" "} </li>                                                       
                                <li>{" "} There would be penalties if the time exceeds the time limit as follows:- <br />
                                            &nbsp; 0-1 min: 10% of the presentation marks of the team <br />
                                            &nbsp; 1-2 mins: 20% of the presentation marks of the team <br /> 
                                            &nbsp; Greater than 2 mins : 100% of the presentation marks of the team{" "} </li>                                                       
                                <li>{" "} The presentation will also be followed by a Q&A session with the judging panel for 5 minutes, which will also be considered for final evaluation. {" "} </li>
                                <li>{" "} The top 3 teams will receive cash prizes. Decisions made by the judges are final and binding. {" "} </li>                                                                                                                                                                                                    
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
                                <li> {" "} Round 2 will be evaluated based on the idea and approach and towards the problem statement. {" "} <br /> </li>
                                <li> {" "} Round 3 will be held offline as a final presentation round. <br /> {" "} </li>
                                <li> {" "} Evaluation will be done based on the following four factors:<br />
                                            &nbsp; Quiz Round Score: 5 <br />
                                            &nbsp; Idea and Approach: 20 <br /> 
                                            &nbsp; Problem Statement Solutions: 30 <br /> 
                                            &nbsp; Quality of presentation: 20 <br /> 
                                            &nbsp; Q&A session: 25 {" "} <br />
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

                      <ul className="accordion">
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Frequently Asked Questions</h3>
                              <ul className="accordion faqs">
                              <li>{" "}1 : &nbsp; What is the procedure for registration for the event? Do all the members have to be registered?{" "}</li>
                                <li>{" "}-&nbsp; Yes, as with all events, all the participants must first be registered through the COMPOSIT website, after which they will be provided with a participant ID. 

 {" "}</li><br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "} 2 : &nbsp; What will happen if the participating team will not submit their abstract idea before the deadline?{" "}</li>
                                <li>{" "}-&nbsp; The team will be disqualified and will not be allowed to continue further in the event.
{" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}3 : &nbsp;   Q: Will the first-round results weigh the final results?  
 {" "}</li> <br />

                                <li>{" "}-&nbsp; Yes, 5 points are devoted to the final round.

 {" "}</li> <br /> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}4 : &nbsp; What abstract format will be submitted in the second round?
 
 {" "}</li><br />
                                <li>{" "}-&nbsp; The abstract should be a report of at least five pages, including the background, objectives, methods used for analyzing and collecting the data, results and conclusion of the given problem statement. This report must have the font style Arial and font size 12.


 {" "}</li> <br /> <br />
        </ul>
        <ul className="accordion faqs">
                              <li>{" "}5 : &nbsp; How will we know if we are qualified for the final round? 

 
 {" "}</li><br />
                                <li>{" "}-&nbsp; All teams submitting the abstract following all the rules and themes of the problem statement will be sent a confirmation mail regarding further details about the final round. There will be no elimination after the first round.



 {" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}6 : &nbsp; Is there a slide limit for the presentation? {" "}</li> <br />
                                <li>{" "}-&nbsp;  No. Any number of slides may be used as long as the overall presentation is kept within the time limit.
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
                                <b>Subhrojyoti Mukherjee</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9112230084</b>
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
                                <b>Mayuresh Lohani</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>8709471451</b>
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
}

export default EventCasestudy;
