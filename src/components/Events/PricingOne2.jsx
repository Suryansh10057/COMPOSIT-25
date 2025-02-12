import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

class PricingOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMsg: null,
        };
    }
    render() {
        // const EventsCard = ({title, description, eventlink, registerevent}) => {
        //     return (
        //         <div className="col-lg-4 col-md-6">
        //                     <div className="pricing-table-box">
        //                         <div className="pricingTable-header">
        //                             <h3> {title} </h3>
        //                         </div>
        //                         <ul className="pricing-content">
        //                             <p> {description} </p>
        //                         </ul>
        //                         <Link to={eventlink} className="btn btn-primary">READ MORE</Link>
        //                         {userData ?
        //                             <Link to= {registerevent} className="btn btn-secondary">Register</Link>
        //                             :
        //                             <Link to="/signup" className="btn btn-secondary">Register</Link>
        //                         }
        //                     </div>
        //                 </div>
        //     )
        // }

        // Fixed component with improvements
            const EventsCard = ({ 
                title, 
                description, 
                eventlink, 
                registerevent,
                userData // Make sure this is passed from parent or context
            }) => {
                return (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="pricing-table-box card h-100">
                    <div className="pricingTable-header card-header">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    
                    <ul className="pricing-content">
                        <p>{description}</p>
                    </ul>
            
                    <div className="card-footer bg-transparent border-top-0">
                        <Link 
                        to={eventlink || '#'} 
                        className="btn btn-primary me-2"
                        >
                        READ MORE
                        </Link>
                        
                        <Link 
                        to={userData ? (registerevent || '#') : '/signup'} 
                        className="btn btn-secondary"
                        >
                        {userData ? 'Register' : 'Sign Up to Register'}
                        </Link>
                    </div>
                    </div>
                </div>
                );
            };
  
            //   // Add prop validation (install prop-types package)
            //   EventsCard.propTypes = {
            //     title: PropTypes.string.isRequired,
            //     description: PropTypes.string.isRequired,
            //     eventlink: PropTypes.string,
            //     registerevent: PropTypes.string,
            //     userData: PropTypes.object
            //   };

        const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
        //console.log(userData)
        const participantId = userData._id
        //console.log(participantId)

        // const postId = location.pathname.split("/")[2]
        // const [registerData, setRegisterData] = useState({});

        // const handleChange = (event) => {
        //     setRegisterData({
        //         ...signupData,
        //         [event.target.name]: event.target.value,
        //     })
        // }
        // const onClickHandler = async (e, source) => {
        //     e.preventDefault()

        //     try {
        //         //console.log(source)
        //         await axios.post(`${process.env.REACT_APP_API_KEY}/eventRegistration/${source}/${participantId}`, participantId)
        //         this.setState({ displayMsg: `Registered Successfully for ${source}` })
        //         alert(this.state.displayMsg)
        //         window.location = '/events'
        //     }
        //     catch (error) {
        //         this.setState({ displayMsg: `${error.response.data} for ${source}` })
        //         alert(this.state.displayMsg)
        //     }
        // };
        return (
            <section className="pricing-area ptb-120 bg-image">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Technova</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Test your research acumen and get a glimpse of presenting scientific work in a conference-like environment!</p>
                                </ul>
                                <Link to="/event_technova" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_technova" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}

                        /* <EventsCard
                        title="Technova"
                        description="Test your research acumen and get a glimpse of presenting scientific work in a conference-like environment!"
                        eventlink="/events/technova"  // Actual path
                        registerevent="/register/technova"  // Actual path
                        userData={userData}  // Pass from parent component
                        /> 

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Ideathon</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Pitch your next amazing business idea and get valuable feedback!</p>
                                </ul>
                                <Link to="/event_ideathon" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_ideathon" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}

                        /* <EventsCard
                        title="Ideathon"
                        description="Pitch your next amazing business idea and get valuable feedback!"
                        eventlink="/events/ideathon"  // Actual path
                        registerevent="/register/ideathon"  // Actual path
                        userData={userData}  // Pass from parent component
                        /> 

                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Case Study</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Challenge your critical thinking ability and grab this opportunity to do in depth research about a problem statement!</p>
                                </ul>
                                <Link to="/event_casestudy" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_caseStudy" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}

                        /* <EventsCard
                        title="Case Study"
                        description="Challenge your critical thinking ability and grab this opportunity to do in depth research about a problem statement!"
                        eventlink="/events/case_study"  // Actual path
                        registerevent="/register/case_study"  // Actual path
                        userData={userData}  // Pass from parent component
                        /> 

                        {/*/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Enigma</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Test your knowledge in general as well as core topics. So Quizzers, get ready for Buzzers!</p>
                                </ul>
                                <Link to="/event_enigma" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_enigma" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}

                        /* <EventsCard
                        title="Enigma"
                        description="Test your knowledge in general as well as core topics. So Quizzers, get ready for Buzzers!"
                        eventlink="/events/enigma"  // Actual path
                        registerevent="/register/enigma"  // Actual path
                        userData={userData}  // Pass from parent component
                        /> 

                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Excavate</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Get ready to put your analytical skills to the test in the ultimate data analytics competition!</p>
                                </ul>
                                <Link to="/event_excavate" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_excavate" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}

                        /* <EventsCard
                        title="Excavate"
                        description="Get ready to put your analytical skills to the test in the ultimate data analytics competition!"
                        eventlink="/events/excavate"  // Actual path
                        registerevent="/register/excavate"  // Actual path
                        userData={userData}  // Pass from parent component
                        /> 

                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Metaclix</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Enter our online photography contest and capture everyday materials, industrial applications, or the universe beyond!</p>
                                </ul>
                                <Link to="/event_metaclix" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_metaclix" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}

                        /* <EventsCard
                        title="Metaclix"
                        description="Enter our online photography contest and capture everyday materials, industrial applications, or the universe beyond!"
                        eventlink="/events/metaclix"  // Actual path
                        registerevent="/register/metaclix"  // Actual path
                        userData={userData}  // Pass from parent component
                        /> 

                        

                        
                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Enigma</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Test your knowledge in general as well as core topics. So Quizzers, get ready for Buzzers!</p>
                                </ul>
                                <Link to="/event_enigma" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_enigma" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */ }
                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">School Quiz</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>An intriguing quiz event for school students to test their knowledge from various topics ranging from Science to Language. Get ready to think!</p>
                                </ul>
                                <Link to="/event_schoolquiz" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_schoolquiz" className="btn btn-secondary">hbh</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}
                       
                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Techtoon</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Let your imagination run wild as you create hilarious and witty memes/ artwork that leave everyone in stitches.</p>
                                </ul>
                                <Link to="/event_techtoon" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_techtoon" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}
                       
                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">CAD</h3>
                                </div>
                                <ul className="pricing-content">
                                    <p>Test your problem solving skills as you analyse real life structure failures and present solutions using modelling softwares.</p>
                                </ul>
                                <Link to="/event_cad" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_cad" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}
                       
                        {/* <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Metallomania</h3>
                                </div>
                                <ul className="pricing-content">
                                <p>The grand technical materials characterization competition involving the diverse areas of metallurgy and materials science.</p>
                                </ul>
                                <Link to="/event_metallomania" className="btn btn-primary">READ MORE</Link>
                                {userData ?
                                    <Link to="/register_metallomania" className="btn btn-secondary">Register</Link>
                                    :
                                    <Link to="/signup" className="btn btn-secondary">Register</Link>
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingOne;