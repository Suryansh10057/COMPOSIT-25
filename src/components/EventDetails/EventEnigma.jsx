import React from "react";
import { Link } from "react-router-dom";

class EventEnigma extends React.Component {
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
                src={require("../../assets/images/Enigma.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Enigma</h2>
                <h3>Cash Prize worth 12K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
            <div className="btn-box" style={{ marginBottom: "20px" }}>
              {/* {userData ? <a
                  href="https://unstop.com/p/enigma-prelims-1-iit-kharagpur-657450"
                  target="_blank"
                  className="btn btn-primary"
                >
                   Prelims Round 1
                </a> :
                <Link to="/login" className="btn btn-primary">Login to Participate</Link>
                } */}
                {userData ? <a
                  href="https://unstop.com/p/enigma-prelims-2-iit-kharagpur-657933"
                  target="_blank"
                  className="btn btn-secondary"
                >
                   Prelims Round 2
                </a> :
                <Link to="/login" className="btn btn-primary">Login to Participate</Link>
                }
                {userData ? <a
                  href="https://unstop.com/m/opportunity/657933/step3"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Final Round
                </a> :
                <Link to="/login" className="btn btn-primary">Login to Participate</Link>
                }
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
                      <Link to="#">Timeline</Link>
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
                              <h3>Enigma</h3>

                              <p>
                              This is a quizzing event to race astute minds and test them on numerous topics with a unique variety of questions covering science, engineering and cutting-edge tech. Solve the questions and get the chance to have a go against bright minds in a full-fledged online quiz. A true test for nerds in technology, science and engineering and fun puzzles. There won’t be a moment of apathy with an abundance of learning!
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
                                  Participation can be individual or in a team
                                  of a maximum of three participants.{" "}
                                </li>
                                <li>
                                  {" "}
                                  All members should be students pursuing a
                                  B.Tech/ BSc./ Dual/ MTech/ MSc degree in any
                                  college in India.{" "}
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              <h3>Winning Criteria</h3>

                              <ul>
                                <li>
                                  {" "}
                                  The final leaderboard will be made by combining the overall marks and time score of both rounds.{" "}
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>

                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author author-multi"></div>

                            <div className="schedule-info">
                              <h3>Rounds of the Event</h3>
                              <p>The event will have two rounds as follows, both of which will be conducted on UnStop:</p>

                              <ul>
                                <li>
                                  <b>Prelims round (Online):</b>
                                  <ul>
                                    <li>
                                    This round will be held in the form of an online quiz on UnStop. All participants must be registered on the website in order to be eligible for the prizes. Questions will cover general science, mathematics and engineering, including logic puzzles and test basic college-level knowledge. There will be 11 questions that must be solved within 20 minutes in the window provided.
                                    </li>
                                  </ul>
                                </li>
                                <br></br>
                                <br />
                                <li>
                                  <b>Final Round:</b>
                                  <ul>
                                    <li>
                                    The final round will be held in online mode covering the same scope as the prelims round although the questions will be harder.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
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
                              <h3>Important Dates</h3>

                              <ul>
                                {/* <li><b>31 Mar 23, 07:00 PM IST</b></li>
                                <li><b>01 Apr 23, 10:00 AM IST</b></li> */}
                                <li>
                                  <b>Prelims Round:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>
                                  31 Mar 23, 07:00 PM IST
                                </li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Round:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>01 Apr 23, 10:00 AM IST
                                </li>
                              </ul>
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
                              {/* <h3>Contact Info</h3> */}

                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Priya Kumari</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>8969265633</b>
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="accordion-item">
                          <Link className="accordion-title" to="#">
                            <div className="author"></div>

                            <div className="schedule-info">
                              {/* <h3>Contact Info</h3> */}

                              <p>
                                Name: <i className="icofont-user-suited"></i>{" "}
                                <b>Gourav Pathak</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>6204935889</b>
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

export default EventEnigma;
