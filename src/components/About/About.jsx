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
            <section className="about-area ptb-120 bg-image mt-5">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                {/* <span>Join The Event</span> */}
                                <h2>About Us</h2>

                                <p>With Science and Technology running in the veins of today’s generation determined to push their talents to the edge only to take flight, COMPOSIT provides the perfect platform to knit those aspirations into a skyful of opportunities. Being one of the largest fests in the genre all over India, COMPOSIT, an abbreviation of Congress of Metallurgical Professionals involving Students, Industry, and Teachers, is one of India’s largest Materials Science Fest conducted by the Society of Metallurgical Engineers (SME), Indian Institute of Technology Kharagpur. It is a unique congregation of students, professionals, academicians, and eminent personalities sharing the belief that materials will define the next revolution, a path-breaking concept to compile and share knowledge and enthusiasm for the development of ‘The Science of Materials.</p>

                                <p>Starting in 1994, It is a national congregation of bright and ambitious minds to invoke their innovation and bridge their ingenious thoughts and ideas into exorbitant assets for humanity. It also gives the young enthusiasts a chance to explore and showcase their talents and also interact with the stalwarts in the field who share their expertise. Compelled by the thirst for knowledge and adventure the exuberant minds, IIT Kharagpur is all set to conduct yet another edition of COMPOSIT, which promises an exciting odyssey embracing a plethora of events and all its trademark features.</p>

                                
                                <h5>Theme Description</h5>
                                <h2 > ESCAPE MATERIALS </h2>
                                <p>
                                The theme ESCAPE Materials focuses on advancing energy solutions through cutting
edge materials science and innovation. ESCAPE stands for Energetic materials, Solid
 Oxide Fuel Cells (SOFC), Critical materials, All Solid-State Metal Batteries (ASSMBs),
 Photo-Catalytic Water Splitting (PCWS), and Thermo-Electric Generators (TEGs)—key
 technologies shaping the future of sustainable energy systems.
                                </p>
                                <p>
                                This theme highlights the importance of critical resources like lithium, cobalt, and silicon
 carbide, alongside revolutionary technologies like supercapacitors and thermoelectric
 generators. These materials and innovations are paving the way for clean energy,
 efficient power storage, and groundbreaking industrial applications.
                                </p>
                                <p>
                                Through this fest, we aim to inspire creative thinking and collaboration, showcasing the
 transformative potential of materials engineering to build a greener, more sustainable
 future.
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