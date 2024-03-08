import React from "react";
import { Link } from "react-router-dom";

class EventIdeathon extends React.Component {
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
              <a
                  href="https://unstop.com/competitions/composit-2024-iit-kharagpur-923039"
                  target="_blank"
                  className="btn btn-secondary"
                  // disabled
                >
                  Register Here
                </a>
                <a
                  href="https://drive.google.com/file/d/1T3V8LIzvTiJYery8ze52bs03y2Dql6YJ/view?usp=sharing"
                  target="_blank"
                  className="btn btn-secondary"
                  // disabled
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
                              <h3>Ideathon</h3>

                              <p>
                              Ideathon is an event that encourages budding entrepreneurs and recognises the fast-growing start-up ecosystem in India. It provides participating teams with an open platform to pitch their ideas for a business venture or improvements in existing technology in any field. These will be evaluated by a panel of judges based on innovation, feasibility, impact, and pitch quality. Participants are encouraged to register and refine their next big idea and convincing skills!

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
                                  Max 3 (Team Participation event){" "}
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
                                <li>{""}The maximum number of participants in a Team is 3. Individual participation is also permitted.
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


                                <li>{" "}  The presentation has to be completed in 7 to 10 minutes.{" "} </li>                                                       
                                <li>{" "}  There would be penalties if the time exceeds the time limit as follows— <br />min: 10% of the presentation marks of the team <br />
                 1-2 mins: 20% of the presentation marks of the team <br />
                Greater than 2 mins: 100% of the presentation marks of the team
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
                                <li> {""}Top 3 teams will be awarded based on the score by the judges.{""} </li>
                                <li> {""} The teams will be judged on the following parameters:  <br />
&nbsp;1. &nbsp; Idea<br />
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
                                <li>{" "}-&nbsp;  Yes, as with all events, all the participants must first be registered through the COMPOSIT website, after which they will be provided with a participant ID.
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

export default EventIdeathon;
