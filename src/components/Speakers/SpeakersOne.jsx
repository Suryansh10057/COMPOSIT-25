import React from "react";
import { Link } from "react-router-dom";


const TeamCard = (props)=>{
  return(
    <>
         <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require(`${props.img}`)}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>${props.name} </h3>
                <span>${props.position}</span>
              </div>
              <ul>
              <li>
                  <a
                    href={`${props.facebook}`}
                    target="_blank"
                    className="facebook"
                  >
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${props.email}`}
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={`${props.linkedin}`}
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}
const  SpeakersOne = () => {

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
                // src={require("../../assets/images/Sankha_profile.jpg")}
                src={require("../../assets/images/image.png")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prof. Sankha Mukherjee</h3>
                <span>Faculty Advisor</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:sankha@metal.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sankha-m-913867161/"
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
                src={require("../../assets/images/AmlanDutta.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Prof. Amlan Dutta </h3>
                <span>Faculty Advisor</span>
              </div>
              <ul>
                <li>
                  <a
                    href="mailto:amlan.dutta@metal.iitkgp.ac.in"
                    target="_blank"
                    className="twitter"
                  >
                    <i className="icofont-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/amlan-dutta-a108a8148/"
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
              Our Governers
            </h2>

            <div className="bar"></div>
          </div>

          <div className="col-lg-3 col-md-6 p-0">
            <div className="single-speakers">
              <img
                src={require("../../assets/images/manisha1.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Manisha Sahoo</h3>
                <span>Governer</span>
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
                <span>Governer</span>
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
                src={require("../../assets/images/SubHeads/krishna.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Krishna Chaudhari</h3>
                <span>General Secretary and Web Head</span>
              </div>
              <ul>
                      <li>
                        <a
                          href="https://facebook.com/krishna.caudhari.5/"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:krishnachaudhari2309@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/krishachaudhari/"
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
                src={require("../../assets/images/SubHeads/deven.JPG")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Deven Shinde</h3>
                <span>General Secretary and PR Head</span>
              </div>
              <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=61550668167415&mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:d2378630@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/deven-shinde-6b3687259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                src={require("../../assets/images/SubHeads/kamal.jpeg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Kamal Bajoriya</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100008943253817&mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:bajoria30kamal@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/kamal-bajoria-7b47a7262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/anshuman.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Anshuman Sahoo</h3>
                      <span>Design Head</span>

                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://m.facebook.com/profile.php/?id=100087411437503&name=xhp_nt__fb__action__open_user"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:anshumanrkl05@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/anshuman-sahoo-b9627a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/aarya.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Aarya Joshi</h3>
                      <span>Events Head</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100087199279973"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aaryaj24504@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/aarya-joshi-717695254/"
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
                      src={require("../../assets/images/SubHeads/suryan2.jpeg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Suryansh Singh</h3>
                      <span>Events Head</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100035611026597"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aswinroshan123@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/suryansh-singh-131685263/"
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
                      src={require("../../assets/images/SubHeads/manash.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Manash shit</h3>
                      <span>Sponsorship and Finance Head</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/manas.shetty.100"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:shitmanash78@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/manash-shit-03a178252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                src={require("../../assets/images/SubHeads/soham.jpg")}
                alt="speakers"
              />

              <div className="speakers-content">
                <h3 style={{ color: "#fec66d" }}>Soham Jagtap</h3>
                <span>Sponsorship Head</span>
              </div>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100087821345166"
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
                    href="https://www.linkedin.com/in/soham-jagtap-8a9977256/"
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
{/* ------------------------------------------------------------------SUBHEADS----------------------------------- */}


        {/* <div className="row m-0">
          <div className="section-title">
            <h2>
              Our Sub Heads
            </h2>

            <div className="bar"></div>
          </div>
 */}

      {/* Team member */}

      {/* <div className="col-lg-3 col-md-6 p-0">
                  <div className="single-speakers">
                    <img
                      src={require("../../assets/images/SubHeads/krishna.jpeg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Krishna Chaudhari</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://facebook.com/krishna.caudhari.5/"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:krishnachaudhari2309@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/krishachaudhari/"
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
                      src={require("../../assets/images/SubHeads/deven.JPG")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Deven Shinde</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=61550668167415&mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:d2378630@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/deven-shinde-6b3687259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/aarya.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Aarya Joshi</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100087199279973"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aaryaj24504@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/aarya-joshi-717695254/"
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
                      src={require("../../assets/images/SubHeads/kamal.jpeg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Kamal Bajoriya</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100008943253817&mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:bajoria30kamal@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/kamal-bajoria-7b47a7262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/anshuman.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Anshuman Sahoo</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://m.facebook.com/profile.php/?id=100087411437503&name=xhp_nt__fb__action__open_user"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:anshumanrkl05@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/anshuman-sahoo-b9627a256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/suryansh1.jpeg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Suryansh Singh</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100035611026597"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aswinroshan123@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/suryansh-singh-131685263/"
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
                      src={require("../../assets/images/SubHeads/harsh.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Harsh Swami</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100090732847408"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:harshswami138@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/harsh-swami-9a169226a/"
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
                      src={require("../../assets/images/SubHeads/aswin.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Aswin Roshan</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100088274253161&mibextid=2JQ9oc"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:aswinroshan123@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/aswin-roshan-848454273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/rathin.jpeg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Rathin Ghosh</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100086044670057&mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:rathinghosh0804@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/rathin-ghosh-60664a254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/kaustubh.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Kaustubh Shukla</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100087731887421"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:kaustubhshukla0404@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/kaustubh-shukla-462908256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/manash.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Manash shit</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/manas.shetty.100"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:shitmanash78@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/manash-shit-03a178252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/vani.jpg")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>Vani Priya</h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=100087762815915&mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:vanipriya173@gmail.com "
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/vani-priya-5a81ba258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                      src={require("../../assets/images/SubHeads/chandu.JPG")}
                      alt="speakers"
                    />

                    <div className="speakers-content">
                      <h3 style={{ color: "#fec66d" }}>P V V SAI CHANDU LAKKIMSETTI </h3>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/chandu.lakkimsetti.1?mibextid=ZbWKwL"
                          target="_blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:chandulakkimsettis@gmail.com"
                          target="_blank"
                          className="twitter"
                        >
                          <i className="icofont-envelope"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/chandu-lakkimsetti-9b5811262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
      </div> */}
        {/* </div> */}

      </section>
    );
  }

export default SpeakersOne;
