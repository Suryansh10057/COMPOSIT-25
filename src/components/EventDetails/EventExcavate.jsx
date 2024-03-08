import React from "react";
import { Link } from "react-router-dom";

class EventExcavate extends React.Component {
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
              <a
                  href="https://unstop.com/hackathons/excavate-iit-kharagpur-901455"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Register Here
                </a>
              <a
                  // href="https://drive.google.com/file/d/1opbqzg9JpcxYx2pEAJQ8TOYF8-GrkURK/view?usp=sharing"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Problem Statement
                </a>
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
                  href="https://drive.google.com/file/d/1rWJihDnNFAehHEjSaB6HpYphzc6OXXjO/view?usp=sharing"
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
                              <h3>Excavate</h3>

                              <p>
                              In the world today where sustainability holds excellent importance, mastering data usage has become crucial. 'Excavate' aims to showcase the power of data analysis through its use in metallurgical and materials engineering. It also promotes critical thinking and presentation skills apart from analytical skills.
The event will be conducted in the following rounds – a qualifying cum bonus round in the form of an aptitude quiz, a submission round, and a final presentation round where teams will present an in-depth analysis of the results offline at IIT Kharagpur.
With Excavate, both the novice and the more experienced data enthusiasts will get a chance to improve their skills and appreciate the field of data science.


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
                                  <b>Quiz Date:</b>
                                </li>
                                <li>
                                12th March 2024
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
                                <li>{""}This is a team participation event where team size should be at most 3.
  {" "} </li>
                                <li>{""}The event will have the following rounds: Aptitude Quiz + Submission Round, + Final Presentation Round.

  {" "} </li>
                                <li>{""}Round 1 will be held online on Unstop as an Aptitude Quiz.
  {" "} </li>                    
                                <li>{""}The on-spot registration at Unstop is allowed up to the PS submission round.

  {" "} </li>                     
                                <li>{""}Round 1 results will be mailed to the participants selected for the final round.
  {" "} </li>                               
                              </ul>
                            </div>
                            <div className="schedule-info">
                                <br />
                              <h3>Rules for round 1:-</h3>

                              <ul className="rules-list" style={{listStyleType:'circle !important',color:'red'}}>
                                <li>{" "}	This will be an aptitude test round held online on Unstop (12th March 2024). <br />{" "}</li>                                
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
                                <li>{" "} For this round, the Problem Statement will be released on Unstop and the official website of COMPOSIT on 15th March 2024.  {" "} </li>                                                       
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
                                            &nbsp; Model Accuracy: 20 <br /> 
                                            &nbsp; Questionnaire solutions: 30 <br /> 
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

                      <ul className="accordion ">
                        <li className="accordion-item faqs-head">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Frequently Asked Questions</h3>

                              <ul className="accordion faqs">
                                          <li style={{color:'blue'}}>{" "}1 : &nbsp; What technical knowledge do I need to have to participate in this event?  {" "}</li>
                                          <li>{" "}-&nbsp; Basic knowledge of Data Science, programming in Python and machine learning libraries would be needed for the event.
          {" "}</li><br /> <br />
          </ul>
                                            

<ul className="accordion faqs">
                                          <li style={{color:'blue'}}>{" "} 2 : &nbsp; What is the procedure for registration for the event? Do all the members have to be registered?{" "}</li>
                                          <li>{" "}-&nbsp;  Yes, as with all events, all the participants must first be registered through the COMPOSIT website, after which they will be provided with a participant ID. 

          {" "}</li> <br /> <br />
                                
          </ul>
          <ul className="accordion faqs">
          <li style={{color:'blue'}}>{" "}3 : &nbsp;  Are personal laptops required in the final round? {" "}</li> <br />

<li>{" "}-&nbsp; Yes {" "}</li> <br /> <br /> 


</ul>
          <ul className="accordion faqs">
          <li style={{color:'blue'}}>{" "}4 : &nbsp; Is there a slide limit for the presentation? {" "}</li><br />
                                          <li>{" "}-&nbsp; No. Any number of slides may be used as long as the overall presentation is kept within the time limit.
          {" "}</li> <br /> <br />
</ul>
          <ul className="accordion faqs">
          <li style={{color:'blue'}}>{" "}5 : &nbsp; What do I need to cover in the final presentation? {" "}</li> <br />
                                          <li>{" "}-&nbsp;  A brief description of the code, basic analysis and interpretation is expected based on the pointers in the questionnaire. Additional analysis will also be rewarded accordingly.
          {" "}</li><br /> <br />
</ul>
          <ul className="accordion faqs">

          <li style={{color:'blue'}}>{" "}6 : &nbsp;  Will the first-round results have weightage in the final results?
          {" "}</li>
                                          <li >{" "}-&nbsp; Yes. 5 points are devoted for the first round. {" "}</li> <br /> <br />

</ul>
          <ul className="accordion faqs">
          <li style={{color:'blue'}}>{" "}7 : &nbsp;   Will the second-round results have weightage in the final results?
 {" "}</li> <br />
                                          <li>{" "}-&nbsp; Yes. Since model accuracy is a factor in the final evaluation  {" "}</li>
</ul>
          <ul className="accordion faqs">
          <li style={{color:'blue'}}>{" "}8 : &nbsp;   Are more than one submission allowed for the second round? 
 {" "}</li> <br />
                                          <li>{" "}-&nbsp; No  {" "}</li>
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

export default EventExcavate;
