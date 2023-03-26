import React from "react";
import { Link } from "react-router-dom";

class EventMetallomania extends React.Component {
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
                src={require("../../assets/images/Metallomania.jpg")}
                alt="Speaker"
              />
              <img
                src={require("../../assets/images/joel.jpg")}
                alt="Speaker"
              />

              <div className="events-content">
                <h2>Metallomania</h2>
                <h3>Cash Prize worth 15K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
                {/* {userData ? (
                  <Link to="/register_metallomania" className="btn btn-primary">
                    Register
                  </Link>
                ) : (
                  <Link to="/signup" className="btn btn-primary">
                    Register
                  </Link>
                )} */}
                {/* https://forms.gle/GSTdaQ2dLMrzxj1Q9 */}
                {userData ? <a
                  href="https://forms.gle/GSTdaQ2dLMrzxj1Q9"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Submission Link
                </a> :
                <Link to="/login" className="btn btn-primary">Login to Submit</Link>
                }
                <a
                  href="https://drive.google.com/file/d/1A9j27kol9Haa87mbCv2gudRP-jgqAh-e/view?usp=sharing"
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
                              <h3>Metallomania</h3>

                              <p>
                              This two round event focuses on the aspect of materials characterisation.
Participants are invited to display interesting and unique microstructures
they have observed using specimens found from everyday objects.
The final round of the event challenges the participants to analyse and
characterise a given material based on experimental reports.
Metallomania aims to bring out the analytical skills of a material scientist and
show their technical prowess.{" "}
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
                                  It will be an individual event which will be held offline.{" "}
                                </li>
                                <li>
                                  {" "}
                                  Open to all students pursuing
Bachelors/Masters/PHD in any science and
engineering college.{" "}
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
                              <p>The event will have two rounds as follows:</p>

                              <ul>
                                <li>
                                  <b>Abstract submission round (Online):</b>
                                  <ul>
                                    <li>
                                    For this round participants must obtain interesting samples, observe them under a microscope, and submit a micrograph, along with two captions: one explaining the scientific and technical aspect and the other highlighting the creative and unique aspect. The submission must include motivation and procedure. Submissions will be evaluated on sample preparation, caption, and creativity, and plagiarism will result in rejection.
                                    </li>
                                  </ul>
                                </li>
                                <br></br>
                                <br />
                                <li>
                                  <b>Final Round:</b>
                                  <ul>
                                    <li>
                                    For this round participants will receive experimental results of material characterization (OM/SEM/TEM, XRD, EDS/WDS) and complete a questionnaire. They need to prepare a report based on their analysis and present it to judges in a 10-minute presentation.
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
                                <li>
                                  <b>Poster and Abstract submission:</b>
                                </li>
                                <li>
                                  <i className="icofont-wall-clock"></i>29th
                                  March 2023 (11:59 PM)
                                </li>
                                {/* <br></br>
                                                            <br></br>
                                                            <li><b>Final presentation:</b></li>
                                                            <li><i className="icofont-wall-clock"></i>31st March 2023, 11:59 PM</li> */}
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
                                <b>Karabi Saha</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9737699678</b>
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
                                <b>Alluri Hasitha</b>
                              </p>
                              <p>
                                Contact:{" "}
                                <i className="icofont-phone-circle"></i>{" "}
                                <b>9392703946</b>
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

export default EventMetallomania;
