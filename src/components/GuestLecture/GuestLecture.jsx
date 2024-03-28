import React from "react";
// import { Link } from "react-router-dom";
// import paul from '../../assets/images/Guest/Alokepaul.png'

class GuestLectures extends React.Component {
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
        <section className="event-area bg-image ptb-120" style={{display:"flex", flexDirection:"column"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                              <div className="guest-title">
                              <h4>Guest Lecture: <span>30th March: 12:00 pm </span></h4>
                              <h4>Venue: <span>IIT Kharagpur(Offline)</span></h4>
                              <h4>Guest: <span>Dr. Saurabh Kundu</span></h4>
                              <h4>Topic of Discussion: <span>Sustainability initiatives at TATA Steel</span></h4>
                              </div>
                              <div className="guest-flex"> 
                              <div className="guest-left-pane">
                              <img src={require("../../assets/images/Guest/Alokepaul.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <h5>Dr. Saurabh Kundu</h5>
                              <h6>Chief of Corporate Sustainability, TATA Steel</h6>
                              </div>
                              <br />
                              {/* <div className="guest-info">
                              <h4>Educational Background</h4>
                              <p>
                              Prof. Aloke Paul obtained his Bachelor's degree in Metallurgical Engineering from NIT Durgapur, India in 1996 and his Master's from IISc, Bangalore in 1998 and Received PhD from Eindhoven University of Technology, Netherlands under the guidance of Frans J.J. van Loo and A. A. Kodentsov in 2004. {" "}
                              </p>
                              <h4>Area of Expertise</h4>
                              <p>Prof. Paul's research interests lie in the areas of different aspects of diffusion-controlled growth of the phases and microstructural evolution in complex multicomponent materials.</p>
                              <h4>Awards and Honors</h4>
                              <p>Prof. Paul has received several prestigious awards and honors for his outstanding contributions to the field of control systems. Notably, he was awarded the Shanti Swarup Bhatnagar Prize in 2017, Metallurgist of the year award in 2014 by the Government of India. He also received Outstanding Young Faculty Award of the Indian chapter of Microsoft Research. And Many more.</p>
                              </div> */}
                              </div>
                          </div>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                              <div className="guest-title">
                              <h4>Guest Lecture: <span>30th March: 3:00 pm </span></h4>
                              <h4>Venue: <span>IIT Kharagpur(Offline)</span></h4>
                              <h4>Guest: <span>Mr. Kalyan Bhattacharjee</span></h4>
                              <h4>Topic of Discussion: <span>Brief history of Sustainability initiatives across the world</span></h4>
                              </div>
                              <div className="guest-flex"> 
                              <div className="guest-left-pane">
                              <img src={require("../../assets/images/Guest/kalyan.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <h5>Mr. Kalyan Bhattacharjee</h5>
                              <h6>Chief Sustainability Officer, Jindal Stainless Limited</h6>
                              </div>
                              <br />
                              {/* <div className="guest-info">
                              <h4>Educational Background</h4>
                              <p>
                              Prof. Aloke Paul obtained his Bachelor's degree in Metallurgical Engineering from NIT Durgapur, India in 1996 and his Master's from IISc, Bangalore in 1998 and Received PhD from Eindhoven University of Technology, Netherlands under the guidance of Frans J.J. van Loo and A. A. Kodentsov in 2004. {" "}
                              </p>
                              <h4>Area of Expertise</h4>
                              <p>Prof. Paul's research interests lie in the areas of different aspects of diffusion-controlled growth of the phases and microstructural evolution in complex multicomponent materials.</p>
                              <h4>Awards and Honors</h4>
                              <p>Prof. Paul has received several prestigious awards and honors for his outstanding contributions to the field of control systems. Notably, he was awarded the Shanti Swarup Bhatnagar Prize in 2017, Metallurgist of the year award in 2014 by the Government of India. He also received Outstanding Young Faculty Award of the Indian chapter of Microsoft Research. And Many more.</p>
                              </div> */}
                              </div>
                          </div>
                        </li>
                      </ul>
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

          {/* <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                            <div className="guest-title">
                              <h4>Webinar: <span>31st March: 7:00 pm to 8:30 pm</span></h4>
                              <h4>Venue: <span>Microsoft Teams(Online)</span></h4>
                              <h4>Guest: <span> Kavia Anand</span></h4>
                              <h4>Topic of Discussion: <span>From Discovery to Deployment: The Environmental Impact of Lithium-Based Technologies</span></h4>
                            </div>
                            <h5 style={{textAlign: "center",color:"red"}}>Note: You will get the certificate only if you register and attend the webinar</h5>
                              <div className="btn-box" style={{ marginBottom: "20px",display:"flex",flexDirection:"row", justifyContent:"center" }}>
                              <a href="https://forms.gle/KK4aA8uLC8syYwzA9" className="btn btn-secondary" target="_blank" replace>Register Here</a><br/>
                              <a href="https://teams.microsoft.com/l/meetup-join/19%3acb4c41689bc64af7959ebc97c76b8287%40thread.tacv2/1679772292834?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%22249460fa-33f6-4b27-9d03-e73afb4f8a2b%22%7d" className="btn btn-primary" target="_blank">Meet Link</a>
                              </div>
                              <h4>Microsoft Team Code: <span>4auj2s0</span></h4>
                              <br />
                              <div className="guest-flex"> 
                                <div className="guest-left-pane">
                                  <img src={require("../../assets/images/kaviaanand.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                                  <h5>Kavia Anand</h5>
                                  <h6>Environmental Engineer</h6>
                                </div>
                                <br />
                                <div className="guest-info">
                                <h4>Educational Background</h4>
                                <p>
                                Kavia Anand completed her B.Tech in Biotechnology from Amity University in 2014, M.Sc in Environment Management from Guru Gobind Singh Indraprastha University in 2017.{" "}
                                </p>
                                <h4>Area of Expertise</h4>
                                <p>Kavia’s area of Expertise include helping organizations to work actively in accordance with overcoming the environmental impacts. Main objective is to collaborate with Educational Institutes for spreading awareness on Climate Change.</p>
                                <h4>Experience</h4>
                                <p>Kavia has previously worked as a Project Analyst at INMAS, Defence Research and Development Organization. And Currently working as Environmental Engineer at Tulip Infratech based in Gurgaon.</p>
                              </div>
                              </div>
                            </div>
                        </li>
                      </ul>
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

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                            <div className="guest-title">
                              <h4>Webinar: <span>1st April: 9:00 am to 10:00 am</span></h4>
                              <h4>Venue: <span>Microsoft Teams(Online)</span></h4>
                              <h4>Guest: <span>Ram Seshadri</span></h4>
                              <h4>Topic of Discussion: <span>Preparing figures for publications and presentations</span> </h4>
                            </div>
                              <h4><a href="https://teams.microsoft.com/l/meetup-join/19%3a04c91d9d11f9435aaf0b90d2943c756b%40thread.tacv2/1679772494395?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%22249460fa-33f6-4b27-9d03-e73afb4f8a2b%22%7d" className="btn btn-primary" target="_blank">Meet Link</a></h4>
                              <h4>Microsoft Team Code: <span>4auj2s0</span></h4>
                              <br />
                              <div className="guest-flex">
                              <div className="guest-left-pane">
                              <img src={require("../../assets/images/Ramseshadri.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <h5>Ram Seshadri</h5>
                              <h6>Professor, Materials Department and Department of Chemistry & Biochemistry at University of California, Santa Barbara</h6>
                              <br />
                              </div>
                              <div className="guest-info">
                              <h4>Educational Background</h4>
                              <p>
                              Ram Seshadri has completed B.Sc. (Honors) in Chemistry, St. Stephens College, Delhi University, M.S. in Chemistry, Indian Institute of Science and Ph.D. in Solid State Chemistry, Indian Institute of Science. Currently Fred and Linda R. Wudl Chair in Materials Science and Distinguished Professor, Materials Department and Department of Chemistry & Biochemistry at University of California, Santa Barbara. Research area includes Functional & Quantum Materials. {" "}
                              </p>
                              <h4>Awards and Honors</h4>
                              <p>He was the Fellow of the American Physical Society. He was awarded UCSB Academic Senate Graduate Mentoring Award, UCSB Margaret T. Getman Service to Students Award and a Fellowship of the Royal Society of Chemistry and a Visiting Fellow Commoner, Trinity College, Cambridge, UK.</p>
                              <h4>Publications</h4>
                              <p>Ram Seshadri has over 28000+ citations, and has a h-index of 89 on Google Scholar Research Profile and 368 over  publications.</p>
                            </div>
                            </div>
                            </div>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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

          {/* <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                            <div className="guest-title">
                              <h4>Webinar: <span>2nd April: 9:00 am to 10:00 am</span></h4>
                              <h4>Venue: <span>Microsoft Teams(Online)</span></h4>
                              <h4>Guest: <span>Anusheela Das</span></h4>
                              <h4>Topic of Discussion: <span>Roadmap to pursue a research career</span></h4>
                            </div>
                              <h4><a href="https://teams.microsoft.com/l/meetup-join/19%3a48d50d92cc344539b61f49d448f5a586%40thread.tacv2/1679772565173?context=%7b%22Tid%22%3a%2271dbb522-5704-4537-9f25-6ad2dcd4278d%22%2c%22Oid%22%3a%22249460fa-33f6-4b27-9d03-e73afb4f8a2b%22%7d" className="btn btn-primary" target="_blank">Meet Link</a></h4>
                              <h4>Microsoft Team Code: <span>4auj2s0</span></h4>
                              <br />
                              <div className="guest-flex">
                              <div className="guest-left-pane">
                              <img src={require("../../assets/images/AnusheelaDas.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <h5>Anusheela Das</h5>
                              <h6>Materials Scientist, Jet Propulsion Laboratory</h6>
                              <br />
                              </div>
                              <div className="guest-info">
                              <h4>Educational Background</h4>
                              <p>
                              Ph.D. in Materials Science and Engineering, Northwestern University (2021) <br />
                              B. Tech in Metallurgical and Materials Engineering, Indian Institute of Technology (IIT) Kharagpur (2016){" "}
                              </p>
                              <h4>Area of Expertise</h4>
                              <p>Anusheela is a materials scientist with expertise in X-ray characterization techniques. During her Ph.D., she focused on X-ray standing wave excited X-ray photoelectron spectroscopy of supported vanadium and molybdenum oxide complexes for studying their atomic-scale structure and chemistry.</p>
                              <h4>Experience</h4>
                              <p> At JPL, her research focuses on the elemental calibration of PIXL (Planetary Instrument for X-ray Lithochemistry) and the development of the PIQUANT X-ray Quantification software used by PIXL mounted on the arm of the Mars 2020 Perseverance Rover. She will also support the PIXL operations role.</p>
                            </div>
                            </div>
                            </div>
                        </li>
                      </ul>
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

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                            <div className="guest-title">
                              <h4>Workshop: <span>1st April: 2:00 pm to 4:00 pm</span></h4>
                              <h4>Venue: <span>IIT Kharagpur(Offline)</span></h4>
                              <h4>Guest: <span>Akash Verma, Dr. Chaitra K</span></h4>
                              <h4>Organizers:  <span>COMPOSIT in association with Log9 Materials</span></h4>
                              <h4>Topic of Discussion: <span> Energy Storage Technologies</span></h4>
                            </div>
                              <img src={require("../../assets/images/akshvarma.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <img src={require("../../assets/images/chaitrak.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <br />
                              <br />
                              <div className="guest-info">
                              <h4>About Log9 Materials</h4>
                              <p>
                              Log9 Materials is an India-based nanotechnology startup specializing in developing and manufacturing innovative products using graphene, a super-strong, lightweight, and highly conductive material. The company's flagship product, the "CoronaOven," is a disinfection device that uses UV-C light and ozone to kill viruses and bacteria, including SARS-CoV-2, which causes COVID-19. Log9 Materials is also developing other products, such as graphene-based batteries, water purification systems, and air filtration devices, intending to create a more sustainable and healthier world.{" "}
                              </p>
                              </div>
                            </div>
                        </li>
                      </ul>
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

          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <ul className="accordion">
                        <li className="accordion-item">
                            <div className="schedule-info">
                            <div className="guest-title">
                              <h4>Workshop: <span>2nd April: 3:30 pm to 5:00 pm</span></h4>
                              <h4>Venue: <span>IIT Kharagpur(Offline)</span></h4>
                              <h4>Guest: <span>Sant Swaroop Sharma</span></h4>
                              <h4>Topic of Discussion: <span> Making & Shaping of effective leaders in organization and entrepreneurship through inner engineering </span></h4>
                            </div>
                              <div className="guest-flex">
                              <div className="guest-left-pane">
                              <img src={require("../../assets/images/mssharma.png")} alt="Speaker" style={{height:"325px", width:"325px", textAlign: "center"}} />
                              <h5>Sant Swaroop Sharma</h5>
                              <h6>Materials Engineer, Consultant to McKenzie and DuPont</h6>
                              <br />
                              </div>
                              <div className="guest-info">
                              <h4>Educational Background</h4>
                              <p>
                              Mr. Sharma completed his B. Tech  in Metallurgical Engineering from NIT Rourkela (1983),   M. Tech in Production management from NIT Jamshedpur (1990) and MBA from XLRI-Jamshedpur(1999).{" "}
                              </p>
                              <h4>Area of Expertise</h4>
                              <p>Mr. Sharma is a materials engineer with expertise in improvements in the areas of Safety and Business Excellence.</p>
                              <h4>Experience</h4>
                              <p> Mr. Sharma joined as a Graduate Trainee in 1983 in Tata Steel and worked in various departments under various capacities for 26 years and superannuated from JSW Steel as Sr.Vice President. Presently working as a consultant to McKenzie and DuPont for improvements in the areas of Safety and Business Excellence</p>
                            </div>
                            </div>
                            </div>
                        </li>
                      </ul>
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
          </div> */}

        </section>
      </div>
    );
  }
}

export default GuestLectures;
