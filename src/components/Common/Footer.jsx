import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area pt-4">
                <div className="container w-full">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Venue Location</h3>
                                <span>
                                    <i className="icofont-calendar"></i> 21 March-23 March, 2025
                                </span>

                                <p className="location">
                                    <i className="icofont-google-map"></i> Indian Institute of Technology, Kharagpur
                                </p>

                                <p>
                                    <i className="icofont-phone"></i> Krishna Chaudhari( General Secretary ) : 8767650199
                                </p>
                                <p>
                                    <i className="icofont-phone"></i> Deven Shinde(  General Secretary ) : 70571 01469
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Follow us on Social Media</h3>
                                {/* <p>Don't miss important updates! Follow us on Facebook, Instagram and Linkedin</p> */}
                                
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/composit.iitkgp/" className="facebook" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <Link to="https://twitter.com/" className="twitter" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <a href="https://www.linkedin.com/company/composit-iit-kharagpur/?originalSubdomain=in" className="linkedin" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/composit_iitkgp/?utm_medium=copy_link" className="instagram" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="copyright-area mt-0 pt-2 pb-0">
                                {/* <div className="logo">
                                    <Link to="/">
                                        <img src={require("../../assets/images/logo.png")} alt="logo" />
                                    </Link>
                                </div> */}
                                {/* <ul>
                                    <li><Link to="/ourteam">Team</Link></li>
                                    <li><a href="https://goo.gl/maps/DUpGj7rLicHZgPBy6" target="_blank">Venue</a></li>
                                </ul> */}
                                <p>
                                    Copyright <i className="icofont-copyright p-0"></i> 2024 COMPOSIT. All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;