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
                <h3>Prize worth 10K</h3>
                {/* <span>12000</span> */}
              </div>
            </div>
            <div className="col-lg-13">
              <div className="btn-box" style={{ marginBottom: "20px" }}>
                <a
                  href="https://unstop.com/quiz/composit-2024-iit-kharagpur-918548"
                  target="_blank"
                  className="btn btn-primary"
                >
                  {/* Submission Link */}
                  Register Here
                </a>

                <a
                  href="https://drive.google.com/file/d/1azn1d0qknPTXObOCS0XQqi3wIphAN-Hd/view?usp=sharing"
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
                              <h3>Enigma</h3>

                              <p>
                                Quizzing Event which will involve questions from
                                all areas, general science as well as
                                core-specific. Questions format is stated as
                                follows: <br />
                                <ul className="rules-list">
                                  <li>Logical Reasoning / Puzzles. </li> <br />
                                  <li>
                                    {""} Metallurgy and Materials Science {""}
                                  </li>{" "}
                                  <br />
                                  <li> GK / History </li>
                                  <br />
                                  <li>Sports related (Olympics 2024)</li>
                                  <br />
                                  <li>Science and Engineering</li>
                                  <br />
                                </ul>
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
                                  Upto 2 (Individual participation allowed){" "}
                                </li>
                                <li>
                                  {" "}
                                  Open to all students pursuing
                                  Bachelors/Masters/PHD in any science and
                                  engineering college{" "}
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
                                    <b>Prelims Round:</b>
                                  </li>
                                  <li> 15th March 2024 12:00 PM IST</li>
                                  <br></br>
                                  <br></br>
                                  <li>
                                    <b>Final Event:</b>
                                  </li>
                                  <li>30th March 2024</li>
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
                                <h3>Rules for round 1:-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    This round will be conducted in online mode
                                    on Unstop platform. <br />{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    The time limit to attempt the quiz is 1
                                    hour. The quiz window will be open for four
                                    hours.{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    The top 20 scorers will qualify for the
                                    final round.{" "}
                                  </li>
                                  <br />

                                  <li>
                                    {" "}
                                    In the case of team participation, only the
                                    team leader can give the online quiz.{" "}
                                  </li>
                                </ul>
                              </div>
                              <div className="schedule-info">
                                <br />
                                <h3>Rules for round 2:-</h3>

                                <ul
                                  className="rules-list"
                                  style={{
                                    listStyleType: "circle !important",
                                    color: "red",
                                  }}
                                >
                                  <li>
                                    {" "}
                                    The final round will also be held online on
                                    the Unstop platform. <br />{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    Questions will be based on the topics of
                                    General trivia, Material Sciences, Basic
                                    Engineering, Puzzles, etc.{" "}
                                  </li>

                                  <li>
                                    {" "}
                                    Rules and format will be the same as that of
                                    the previous round.{" "}
                                  </li>
                                  <br />

                                  <li>
                                    {" "}
                                    The top 3 teams with the highest scores will
                                    be declared winners.{" "}
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
                              <h2>Prizes</h2>
                              {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                              <div className="schedule-info">
                                <ul className="rules-list">
                                  <li>
                                    {" "}
                                    {""} Participation certificates for all the
                                    teams attending the quiz.{""}{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    {""} Cash Prizes worth 10k for winners and
                                    runner-ups.{""}{" "}
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
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  1 : &nbsp; What is the procedure of
                                  registration for the event? Do all the members
                                  have to be registered?{" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; Yes, as with all events, all the
                                  participants must first be registered through
                                  the COMPOSIT website, after which they will be
                                  provided with a participant ID. For the final
                                  round of registration, the team leader has to
                                  enter the participant IDs in the Unstop portal{" "}
                                </li>
                                <br /> <br />
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  2 : &nbsp; What type of questions may be
                                  asked?{" "}
                                </li>
                                <li>
                                  {" "}
                                  -&nbsp; The questions will be of MCQ’s type,
                                  and it will be related to concepts of high
                                  school and intermediate-level.{" "}
                                </li>{" "}
                                <br /> <br />
                              </ul>
                              <ul className="accordion faqs">
                                <li>
                                  {" "}
                                  3 : &nbsp; From where can the questionsbe
                                  asked?{" "}
                                </li>{" "}
                                <br />
                                <li>
                                  {" "}
                                  -&nbsp; Questions would be based on
                                  sustainability, general knowledge, and
                                  materials science.It will be a 30-minute quiz
                                  to be attempted within a window of 4 hr. The
                                  quiz can contain certain 1 word answers as
                                  well. .{" "}
                                </li>{" "}
                              </ul>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div id="tab4" className="tabs_item">
                      {/* <h3>
                        <i className="icofont-wall-clock"></i> Coming Soon ....
                      </h3> */}

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

export default EventEnigma;
