import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventMetaclix = () => {
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
  
  const eventNameToCheck = "MetaClix";
  const events = userData.events || []; // Default to empty array if events is null/undefined
  const eventData = getEventDetails(events, eventNameToCheck);
  
  //console.log(eventData);

  return (
    <div className="event-details-area ptb-120">
      <section className="event-area bg-image ptb-120">
        <div className="col-lg-3 col-sm-6 p-0" style={{ textAlign: "center" }}>
          <div className="single-events">
            <img
              src={require("../../assets/images/MetaClix.jpg")}
              alt="Speaker"
            />

            <div className="events-content">
              <h2>Metaclix</h2>
              <h3>Prize worth 5K</h3>
            </div>
          </div>
          <div className="col-lg-13">
            <div className="btn-box" style={{ marginBottom: "20px" }}>
              {eventData && (
                <div>
                  <h5>You are already Registered for this event</h5>
                  <p>
                    Team Name :{" "}
                    <b className="font-bold">
                      {" "}
                      {eventData && eventData.teamName}
                    </b>
                  </p>
                  <p>
                    Team Id :{" "}
                    <b className="font-bold">{eventData && eventData.teamId}</b>
                  </p>
                  <p>
                    Your Team Members can join your team through your Team code.{" "}
                  </p>
                </div>
              )}

              {!eventData && (
                <Link
                  to={{
                    pathname: "/createTeam/Metaclix",
                    // state: { eventName: "Enigma" }
                  }}
                  className="register-btn"
                >
                  {/* Submission Link */}
                  Create Team
                </Link>
              )}

              {/* {!eventData && (
                <Link to="/joinTeam/Metaclix" className="btn btn-primary">
                  Join Team
                </Link>
              )} */}

              <a
                href="https://drive.google.com/file/d/1V-lqDAU-cvN2AIFYlWYiHQMplF8jpqsB/view?usp=drive_link"
                className="register-btn"
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
                    onClick={(e) => openTabSection(e, "tab1")}
                    className="current"
                  >
                    <Link to="#">About</Link>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab2")}>
                    <Link to="#">Structure</Link>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab3")}>
                    <Link to="#">FAQ`s</Link>
                  </li>

                  <li onClick={(e) => openTabSection(e, "tab4")}>
                    <Link to="#">Contacts</Link>
                  </li>
                </ul>

                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                    <ul className="accordion">
                      <li className="accordion-item">
                        <Link className="accordion-title" to="#">
                          <div className="schedule-info">
                            <h3>Metaclix</h3>

                            <p>
                            Metaclix, a photography contest, is a fantastic platform to combine your
artistic vision with technical expertise, bringing the beauty and
significance of materials into focus. With exciting prizes up for grabs, it's
your chance to let your lens tell a story that inspires change and
highlights the critical role of materials in everyday life. Capture, create,
and compete!. In this individual event, participants will be
                              required to click and upload pictures that fall
                              under the following categories:{" "}
                            </p>

                            <ul>
                              <li>
                                1.&nbsp;
                                <b>
                                  {" "}
                                  Metals and Materials in Everyday Life and Nature{" "}
                                </b>
                              </li>
                              <br /> <br />
                              <li>
                                2.&nbsp;{" "}
                                <b>
                                  {" "}
                                  SNAPS TAKEN IN INDUSTRIES (COULD BE ELECTRONIC
                                  INDUSTRY, CONSTRUCTION , AEROSPACE AND MORE){" "}
                                </b>
                              </li>
                              <br />
                              <br />
                              <li>
                                3.&nbsp; <b> Photos from Energy Sector </b>
                              </li>
                            </ul>
                            <br />
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
                              <li> Individual Participation </li> <br />
                              <li> Open to all </li>
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
                                <li>21st March 2025</li>
                                <br></br>
                                <br></br>
                                <li>
                                  <b>Final Event:</b>
                                </li>
                                <li>Result Declaration Online Mode </li>
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

                              <ul
                                className="rules-list"
                                style={{
                                  listStyleType: "circle !important",
                                  color: "red",
                                }}
                              >
                                <li>
                                  {""}This event is for individual participation. No group participation is
                                  allowed.{" "}
                                </li>
                                <li>
                                  {""}Although entries may be submitted for multiple themes, only one entry
                                  can be submitted for each theme.{" "}
                                </li>
                                <li>
                                  {""}Participants are required to submit only one photo and caption per
                                  theme through the Google form.{" "}
                                </li>
                                <li>
                                  {""} The best submission from each category
                                  will be rewarded.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="schedule-info">
                              <br />
                              <h3>Rules for Submission:-</h3>

                              <ul
                                className="rules-list"
                                style={{
                                  listStyleType: "circle !important",
                                  color: "red",
                                }}
                              >
                                <li>
                                  {" "}
                                  Submission should be done through Unstop and
                                  should include <br />
                                  &nbsp; - Image of the photograph in JPEG
                                  format. <br /> &nbsp; - A relevant caption for
                                  the same{" "}
                                </li>

                                <li>
                                  {" "}
                                  The snaps submitted in the form must contain
                                  the EXIF details. Entries without EXIF data
                                  will be penalized.{" "}
                                </li>
                                <li>
                                  {" "}
                                  The caption for the image should be short. It
                                  should be relevant to the theme and must
                                  describe the participants' perspective in the
                                  photograph. The participants may also submit
                                  describe the reason behind choosing the
                                  caption for the image in case of more clarity.{" "}
                                </li>

                                <li>
                                  {" "}
                                  Only Global editing is permitted. Submissions
                                  with Modifications or alterations in image
                                  will be disqualified.{" "}
                                </li>
                                <li>
                                  {" "}
                                  Any instances of plagiarism may result in
                                  disqualification.{" "}
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
                            <h2>Judging Criteria</h2>
                            {/* <h3><i className="icofont-wall-clock"></i> Coming Soon ....</h3> */}
                            <div className="schedule-info">
                              <ul className="rules-list">
                                <li>
                                  {" "}
                                  {""} The evaluation will be done on the basis
                                  of: <br />
                                  &nbsp;1. &nbsp; Technical Quality <br />
                                  &nbsp;2. &nbsp; Idea and relevance to theme
                                  <br />
                                  &nbsp;3. &nbsp; Creativity and originality
                                  <br />
                                  &nbsp;4. &nbsp; Technical Quality <br />
                                  &nbsp;5. &nbsp; Caption
                                  {""}{" "}
                                </li>
                                <br />
                                <li>
                                  {""} The COMPOSIT team will do the review. The
                                  team's decision on all matters will be final.
                                  {""}{" "}
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
                                1 : &nbsp; What is the procedure of registration
                                for the event?{" "}
                              </li>
                              <li>
                                {" "}
                                -&nbsp; As with all events, all the participants
                                must first be registered through the COMPOSIT
                                website.{" "}
                              </li>
                            </ul>
                            <ul className="accordion faqs">
                              <li>
                                {" "}
                                2 : &nbsp; What can be the format of
                                submissions?{" "}
                              </li>
                              <li>
                                {" "}
                                -&nbsp; As stated above, the pictures should be
                                in JPEG format, and the caption should be
                                submitted through Unstop.{" "}
                              </li>{" "}
                            </ul>
                            <ul className="accordion faqs">
                              <li>
                                {" "}
                                3 : &nbsp; What is the total number of
                                submissions that can be made?{" "}
                              </li>{" "}
                              <li>
                                {" "}
                                -&nbsp; Participants may submit entries for
                                multiple themes, but only one entry can be
                                submitted per theme.{" "}
                              </li>{" "}
                            </ul>
                            <ul className="accordion faqs">
                              <li>
                                {" "}
                                4 : &nbsp; What can be the caption for the entry
                                that should be submitted?{" "}
                              </li>
                              <li>
                                {" "}
                                -&nbsp; Caption can be any creative title of the
                                image that best describes the photography and
                                can relate to the theme in a better way. It
                                could be a artistic or even humorous perspective
                                of the same image.{" "}
                              </li>{" "}
                            </ul>
                            <ul className="accordion faqs">
                              <li>
                                {" "}
                                5 : &nbsp; Can we edit the image?{" "}
                              </li>{" "}
                              <li>
                                {" "}
                                -&nbsp; Only Global editing is permitted.
                                Submissions with Modifications or alterations in
                                image will be disqualified.{" "}
                              </li>
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
          <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
        </div>
        <div className="shape2 rotateme">
          <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
        </div>
        <div className="shape3 rotateme">
          <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
        </div>
        <div className="shape4">
          <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
        </div>
      </section>
    </div>
  );
};

export default EventMetaclix;
