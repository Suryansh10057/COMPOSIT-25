import React from "react";
import { Link } from "react-router-dom";

class SpeakersOne extends React.Component {
  render() {
    return (
      <section className="speakers-area ptb-120">
        <div className="row m-0">
          <div className="section-title">
            <h2>
              Our Faculty Advisors
            </h2>

            <div className="bar"></div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/siddhartha.png")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prof. Siddartha Roy</h3>
                <span>Faculty Advisor</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:siddhartha@metal.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/dr-ing-siddhartha-roy-b3972b7b/?originalSubdomain=in"
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
                src={require("../../assets/images/manasp.png")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prof. Manas Paliwal </h3>
                <span>Faculty Advisor</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:manas.paliwal@metal.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/manas-paliwal-4ba3ab139/?originalSubdomain=in"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-title">
            <h2>
              Our Advisors
            </h2>

            <div className="bar"></div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/karabi1.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Karabi Saha</h3>
                <span>Department Representative</span>
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
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
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
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ramona.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ramona Kodkani</h3>
                <span>Women's Department Representative</span>
              </div>
              <ul>
                {/* <li>
                                    <a href="#" target="_blank" className="facebook">
                                        <i className="icofont-facebook"></i>
                                    </a>
                                </li> */}
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
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
                  <a href="https://www.linkedin.com/in/ramona-kodkani-91621b221" target="_blank" className="linkedin">

                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/prabodh.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prabodh Kumar Singh</h3>
                <span>President</span>
              </div>
              <ul>
                <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
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
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/Ananay.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ananay Singh</h3>
                <span>Governor</span>
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
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
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
          </div>
          
          <div className="section-title">
            <h2>
              Our Heads
            </h2>

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
                src={require("../../assets/images/bhandhavya.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Bhandhavya Bodapati</h3>
                <span>Content Creation Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100074845737951&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Bhandhavyabodapati2003@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/bhandhavya-bodapati-481556253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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

        </div>

        <div className="row m-0">
          <div className="section-title">
            <h2>
              Our Sub Heads
            </h2>

            <div className="bar"></div>
          </div>
          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/ujjawal.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Ujjawal Kumar</h3>
                {/* <span>General Secretary</span> */}
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100012980770787&mibextid=ZbWKwL"
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                {/* <li>
                                    <Link to="#" target="_blank" className="twitter">
                                        <i className="icofont-twitter"></i>
                                    </Link>
                                </li> */}
                <li>
                  <a
                    href="mailto:ujjawalrr@gmail.com"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ujjawal-kumar-45a431228"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SpeakersOne;
