import React from "react";
import { Link } from "react-router-dom";

class EventTechnova extends React.Component {
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
                src={require("../../assets/images/Technova1.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Technova</h2>
                <h3>Cash Prize worth 20K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
              <a
                  // href="https://forms.gle/sqA1B7Gw3gKnePAc8"
                  target="_blank"
                  className="btn btn-primary"
                >
                  {/* Submission Link */}
                  Register Here
                </a>
              
                <a
                  href="https://drive.google.com/file/d/1Y-btkp0RwULGrsj8vB_W5il5QOmmzXUe/view?usp=sharing"
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
                              <h3>Technova</h3>

                              <p>
                              This event involves presentation of a technical paper (based on existing literature, on a specific topic) or any scientific work (original) in one of the following themes: <br />
                              <b>Theme A :</b>
                              <ul className="rules-list">
                                <li>Electronic Materials and Nanotechnology </li> <br />
                                <li>{""} Computational Material Science{""}</li> <br />
                                <li>Microelectromechanical Systems (MEMS)</li><br />
                              </ul> 
                              <b>Theme B :</b>
                              <ul className="rules-list">
                                <li>Advanced and Functional Materials</li><br />
                                <li>Biomaterials</li><br />
                                <li>Energy Materials</li><br />
                              </ul>
                              <b>Theme C :</b>
                              <ul className="rules-list">
                                <li>Material Processes</li><br />
                                <li>Physical, Extractive Metallurgy and Mechanical Metallurgy</li>
                              </ul><br />

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
                                13th March 2024
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Event:</b>
                                </li>
                                <li>
                                31st March 2024
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
                              <h2>Rules of the Event</h2>
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <br />
                              <h3>General Rules:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{""}The maximum number of participants in a Team is 3. Individual participation is also permitted.
  {" "} </li>
                                <li>{""}Teams have to present their submission only in one of the mentioned categories
  {" "} </li>
                                <li>{""}The best presenter from each category will be awarded.{" "} </li>                                
                                <li>{""}Participants have to present either their original paper OR a technical paper on any topic of their choice (within the given themes) referring to existing work.{" "} </li>                                
                                                                
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 1:-</h3>

                              <ul className="" style={{listStyleType:'circle !important',color:'red',textAlign:'left'}}>
                                <li>{" "}For this round, participants must submit the abstract of their paper through the submission form before the deadline in the appropriate category.
The abstract must be at most 1000 words. {" "}</li>     


                                <li>{" "}1.&nbsp; <b>Category A:</b> <br /> Competitors are supposed to submit original research work that falls within the scope of the themes. All submissions will be thoroughly peer-reviewed by experts based on originality, significance, and clarity. Citations and references must be mentioned properly where suitable.{" "}</li>             

                                <li>{" "}2.&nbsp; <b> Category B:</b><br /> Participation may also be done through a well-researched technical paper or report or presentation on the given theme that is written by them. Proper citations and references to all papers used, must be mentioned. {" "}</li>                                
                                <li>{" "} <b>In the case of category A:</b> <br />
Authors are requested to kindly restrict plagiarism in any form. Authors should submit their original and unpublished research work not under consideration for publication elsewhere. Papers found to be plagiarized during any stage of review shall be rejected. {" "}</li>                                
                                                                                         
                              </ul>
                            </div>
                              <div className="schedule-info">
                                <br />
                              <h3>Rules for round 2:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "} This round will be conducted in the form of a ‘classical technical conference’ at the IIT Kharagpur campus. {" "} <br /> </li>  


                                <li>{" "} Participants must prepare presentation slides that should not exceed a time limit of 10 minutes, followed by 5 minutes of the Q&A session. Teams exceeding the time limit will be penalized.{" "} </li>  

                                



                                <li>{" "}Evaluation will be based on both round performances by the team {" "} </li>    


                                <li>{" "}  The presentation has to be completed in 7 to 10 minutes.{" "} </li>                                                       
                                <li>{" "}  For Category A, the two best original papers will be awarded.
{" "} </li>                                                       
                                <li>{" "} For Category B, the best presentation from each Theme A, B and C will be awarded cash prizes.
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
                                <li> {""}All categories will be judged by a common panel on the basis of presentation skills, innovative ideas, difficulty and understanding of the presented work.{""} </li>
                                <li> {""} Best two original works will be awarded for Category A

{""} </li> 
<li>{""}	For Category B, the best presenter of each theme will be awarded.{""} </li>
<li>{""}	The judges’ decision is final on all matters.{""} </li>
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
                              <li>{" "}1 : &nbsp; What is the procedure of registration for the event? Do all the members have to be registered?  {" "}</li>
                                <li>{" "}-&nbsp;   Yes, as with all events, all the participants must first be registered through the COMPOSIT website, after which they will be provided with a participant ID. The final team registration for the event should be done by the team leader only where the participant IDs of the members must be entered.
 {" "}</li><br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "} 2 : &nbsp; How is Category A different from category B?
{" "}</li>
                                <li>{" "}-&nbsp;  In category A , we look forward to seeing submission of original scientific work of the participant. In Category B, we encourage participants to prepare an analysis report based on literature review of the topic of their choice and present their understanding in front of the panel of judges. Both categories will be adjudged accordingly with appropriate weightage to original work in Category A and presentation skills in Category B.
{" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}3 : &nbsp; What is the format of the abstract to be submitted in the first round?
{" "}</li> <br />

                                <li>{" "}-&nbsp;  The abstract, like those for every scientific paper, should be a short summary of the research paper (Category A) or technical paper/ report (Category B) submitted by the team. It should begin with a brief on the issue addressed or the aim of the work, the research method and findings, touching upon key elements. {" "}</li> <br /> <br /> <br />

        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}4 : &nbsp; What does 'technical paper' imply for Category B submissions?
 {" "}</li><br />
                                <li>{" "}-&nbsp;  A technical paper for a chosen topic/ issue analyses existing work in the area (similar to a 'term paper') and comprises a brief literature review and analysis on a specific domain. It should follow the same format as a scientific paper.

 {" "}</li> <br /> <br />
        </ul>
                              <ul className="accordion faqs">
                              <li>{" "}5 : &nbsp; Is there a slide limit for the presentation?
 {" "}</li> <br />
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

export default EventTechnova;
