import React from "react";
import lax from "lax.js";
import { Link } from "react-router-dom";
import LaxDiv from "../Shared/LaxDiv";

class Speakers extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function (x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }

  render() {
    return (
      <section className="speakers-area ptb-120 pb-0">
        <div className="container">
          <div className="section-title">
            <span>People Behind The Fest</span>
            <h2>Meet Our Team</h2>
            <div className="bar"></div>
            <LaxDiv text="OURTEAM" dataPreset="driftRight" />
            {/* <Link to="#" className="btn btn-primary">View More Speakers</Link> */}
          </div>
        </div>

        <div className="row m-0">
          <div className="section-title">
            <h2>Our Heads</h2>

            <div className="bar"></div>
          </div>
          {/* Current Heads */}

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/manisha1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Manisha Sahoo</h3>
                <span>Coordinator</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075561559224&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:manishasahoo995@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manisha-sahoo-33186022b"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/manisha1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Bhandhavya Bodapati</h3>
                <span>Content Creation Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075561559224&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:manishasahoo995@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manisha-sahoo-33186022b"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/harsh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Harshvardhan</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:neerajsharmasony@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="Www.linkedin.com/in/harshvardhan-4a76"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/mayuresh1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Mayuresh Lohani</h3>
                <span>Web Development Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100075318804727&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lohanimayuresh2551@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/mayuresh-lohani-87b28922a"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/satyam.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Satyam Raj</h3>
                <span>Design Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/satyam.raj.17/"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:satyamraj85@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/satyam-raj-24437a226/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/subhro.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Subhrojyoti Mukherjee</h3>
                <span>Events Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100073392733438"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:subhrojm@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/subhrojyoti-mukherjee-0b59b3226"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Previous Heads */}
          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/gouri1.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Gouri Vignesh Jawalkar</h3>
                <span>General Secretary</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/gourivignesh.sjawalkar"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:gourivigneshjawalkar@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gouri-vignesh-jawalkar-626258200/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/riyan.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Riyan Biswas</h3>
                <span>Student Coordinator & Finance Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:riyanbiswas@outlook.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/riyanbiswas20mt3fp21"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ishan.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ishan Gupta</h3>
                <span>Design Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:ishangupta3210805@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ishan-gupta-367a75200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8amW4cktS7qYnPUXFo6m9A%3D%3D"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/karabi1.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Karabi Saha</h3>
                <span>Events Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/karabi.saha.501598"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:skarabi119@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/karabisaha"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ramona.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ramona Kodkani</h3>
                <span>Events Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:ramonakodkani@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ramona-kodkani-91621b221"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/priya1.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Priya Kumari</h3>
                <span>Events Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:Priya.iitkgp01@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/priya-kumari-6554aa226"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/Nitishkumar.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Nitish Kumar</h3>
                <span>Guest Lecture and Webinar Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084202765673&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="twitter">
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nitish-kumar-92bb3822b"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/harilalam1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Hari Prasad Lalam</h3>
                <span>Guest Lecture and Webinar Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/hari.p.l.351"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lhariprasad21@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lalam-hari-prasad-b93820217/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/gourav.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Gourav Pathak</h3>
                <span>Publicity and Hospitality Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/gourav.pathak.969?mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:gouravpathak2002.composit@gmail.com "
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gourav-pathak-727500203"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/hasitha.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Alluri Hasitha</h3>
                <span>Publicity and Hospitality Head</span>
              </div>
              <ul>
                
                <li>
                  <a
                    href="hasitha.composit@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hasitha-alluri"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/prabodh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prabodh Kumar Singh</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                
                <li>
                  <a
                    href="mailto:prabodhkumar.composit@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/prabodh-singh-2b1a281ba"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/sudarshana.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Sudarshana Jaiswal</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                
                <li>
                  <a
                    href="mailto:sudarshana.composit@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sudarshanajaiswal"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/abyuday1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Abyuday Agarwal</h3>
                <span>Web Development Head</span>
              </div>
              <ul>
                
                <li>
                  <a
                    href="mailto:abhyudaya03@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abhyuday-agrawal-8b0b7b211"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/Ananay.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ananay Singh</h3>
                <span>Web Development Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://m.facebook.com/100056792605310/"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                
                <li>
                  <a
                    href="mailto:proficientbraniac@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ananaysingh"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}

export default Speakers;
