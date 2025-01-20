import React from 'react';
import lax from 'lax.js';
// import { Link } from 'react-router-dom';
// import LaxButton from '../Shared/LaxButton';

class About extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function (x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    render() {
        return (
            <section className="about-area ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                {/* <span>Join The Event</span> */}
                                <h2>About Us</h2>

                                <p>With Science and Technology running in the veins of today’s generation determined to push their talents to the edge only to take flight, COMPOSIT provides the perfect platform to knit those aspirations into a skyful of opportunities. Being one of the largest fests in the genre all over India, COMPOSIT, an abbreviation of Congress of Metallurgical Professionals involving Students, Industry, and Teachers, is one of India’s largest Materials Science Fest conducted by the Society of Metallurgical Engineers (SME), Indian Institute of Technology Kharagpur. It is a unique congregation of students, professionals, academicians, and eminent personalities sharing the belief that materials will define the next revolution, a path-breaking concept to compile and share knowledge and enthusiasm for the development of ‘The Science of Materials.</p>

                                <p>Starting in 1994, It is a national congregation of bright and ambitious minds to invoke their innovation and bridge their ingenious thoughts and ideas into exorbitant assets for humanity. It also gives the young enthusiasts a chance to explore and showcase their talents and also interact with the stalwarts in the field who share their expertise. Compelled by the thirst for knowledge and adventure the exuberant minds, IIT Kharagpur is all set to conduct yet another edition of COMPOSIT, which promises an exciting odyssey embracing a plethora of events and all its trademark features.</p>

                                
                                <h5>Theme Description</h5>
                                <h3 style={{color:'#00DF75'}}>Molten Ideas, sustainable realities </h3>
                                <p>
                                Sir Pete Seeger said, “If it can’t be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled, or composted, then it should be restricted, designed or removed from production”. As the global population is growing, so does the use of various materials. 

                                </p>
                                <p>
                                India's close relationship with UNEP, increases recognition of the need to move towards more sustainable materials to address environmental challenges such as climate change, resource depletion, and pollution. The 29th edition of COMPOSIT aims to celebrate the glory of materials science with the theme of Sustainability.
                                </p>
                                <p>
                                To untangle your latest ideas and and weave the tapestry of a sustainable tomorrow, COMPOSIT is back with a bang, welcoming you to one of the most insightful scientific conferences and a 3-day long fun and engrossing experience with immense knowledge showcasing and the trade-off between the brilliant minds in presence .
                                </p>
                                {/* <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="signature" />
                                </div>

                                <Link to="/about-1" className="btn btn-primary">
                                    Read More
                                    <i className="icofont-double-right"></i>
                                </Link>

                                <Link to="#" className="btn btn-secondary">Buy Ticket</Link> */}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/crowd about 3.jpeg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/crowd about 1.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />

                                {/* <LaxButton buttonText="Explore More About" /> */}
                            </div>
                            <div className="about-image2">
                                <img src={require("../../assets/images/about22.jpg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/slideshow-bg4.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />

                                {/* <LaxButton buttonText="Explore More About" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;