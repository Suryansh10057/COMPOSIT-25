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
                <h3>Cash Prize worth 20K</h3>
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
                <a
                  href="https://drive.google.com/file/d/1GI__f_FmL9qIjNGgXdDjGqtqjjtE8vps/view?usp=sharing"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Problem Statement
                </a>
                {userData ? <a
                  href="https://forms.gle/yZ5zTEcdxQz6rV2F9"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Submission Link
                </a> :
                <Link to="/login" className="btn btn-secondary">Login to Submit</Link>
                }
                <a
                  href="https://drive.google.com/file/d/1EMan4nZwkR0dUEWR4wu_He5uyrIZCD8R/view?usp=sharing"
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
                              The case study competition is designed to challenge teams to analyze real world business problems and develop innovative solutions. The participating teams are required to use their analytical and creative skills to develop a strategic plan that analyzes and addresses the problem statement. An accomplished panel of judges will evaluate the solutions presented by the teams and determine the winning team. Prospective teams are encouraged to register and showcase their problem-solving skills in tackling real-world challenges.{" "}
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
                                10th March 2024
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
                                <li>{""}The maximum number of participants in a Team is 3. Individual participation is also permitted. 
  {" "} </li>
                                <li>{""}The best presenting team will be awarded. 
  {" "} </li>
                                <li>{""}The teams are expected to conduct all necessary research using publicly available resources.   They are welcome to use all library resources, class textbooks, and websites. If any data is picked up from the internet, the teams should mention the references. 
  {" "} </li>                                
                                <li>{""}Everything is allowed in the presentation, including sound effects, video clips, and graphics. Any action that violates the stated rules will result in immediate disqualification of the team from the competition.
  {" "} </li>                                
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 1:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}	For this round, participants must submit the abstract of their idea in the form of a report not more than 7 pages (The font style :Arial and font size: 12) through the submission form before deadline. {" "}</li>                                
                                <li>{" "}All the teams submitting their abstract will have the second and final presentation round on IIT Kharagpur campus.{" "}</li>                                
                                <li>{" "}There will be no elimination in this round, however the event organisers reserve the right to  disqualify any abstract submission found irrevelant to the theme or violating any rules of the event.  {" "}</li>                                
                                                                                     
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 2:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}This round will be conducted in the form of a presentation at the IIT Kharagpur campus in front of a panel of judges.  {" "} <br /> </li>                                                       
                                <li>{" "}The teams have to present their case analysis using presentation explaining their approach and analysis of the problem statement.  {" "} </li>                                                       
                                <li>{" "} During the presentation, finalist teams must briefly describe their approach and follow a list of pointers that will be pEach team will be allotted 10 minutes to pitch their ideas which will have a reminder at the last 3 and 1 minute followed by a final buzzer.  {" "} </li>                                                       
                                <li>{" "}  After the presentation there will be a Q&A session by the judges for 5-10 minutes. There 
    would be penalties if the time exceeds the time limit as follows— <br />
   &nbsp; 0-1 min: 10% of the presentation marks of the team <br />
&nbsp; 1-2 mins: 20% of the presentation marks of the team <br /> 
&nbsp; Greater than 2 mins : 100% of the presentation marks of the team
{" "} </li>                                                       
                                <li>{" "}        Top 3 teams will receive cash prizes. Decisions made by the judges are final and binding.
{" "} </li>                                                                                                           
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
                                <li> {""}  Round 1 abstract submission will be evaluated on the basis of the idea and approach and towards the problem statement. {""} </li>
                                <li> {""}The judging panel will declare the top 3 teams as winners based on both abstract
and presentation submitted by the team
{""} </li>
<li>{""}		The decision of the judges shall be final and conclusive.{""} </li>
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
                              <li>{" "}1 : &nbsp; What is the procedure of registration for the event? Do all the members have to be registered?{" "}</li>
                                <li>{" "}-&nbsp; Yes, as with all events, all the participants must first be registered through the
COMPOSIT website, after which they will be provided with a participant ID. The final team registration for the event should be done by the team leader only where the participant IDs of the members must be entered.

 {" "}</li><br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "} 2 : &nbsp; What will happen if the participating team will not submit their abstract idea before the deadline?{" "}</li>
                                <li>{" "}-&nbsp; The team will be disqualified and will not be allowed to continue further in the event.
{" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}3 : &nbsp;   What is the format of the abstract to be submitted in the first round? 
 {" "}</li> <br />

                                <li>{" "}-&nbsp; The abstract should be a report of not less than 7 pages which should include the background, objectives, methods used for analyzing and collecting the data, results and conclusion of the given problem statement. This report must have the font style Arial and font size 12.
 {" "}</li> <br /> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}4 : &nbsp; How will we get to know if we are qualified for the second round? 
 {" "}</li><br />
                                <li>{" "}-&nbsp; All teams submitting the abstract following all the rules and theme of the problem statement automatically qualify for the offline round. There will be no elimination after the first round.

 {" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}5 : &nbsp; Is there a slide limit for the presentation? {" "}</li> <br />
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
