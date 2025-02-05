import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EventCard = (props)=>{
    return(
        <>
        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="pricing-table-box">
                            <div className="pricingTable-header">
                                <h3 className="title">{props.event}</h3>
                            </div>
                            <ul className="pricing-content">
                                <p>
                                    {props.description}
                                </p>
                            </ul>
                            <Link to={props.link} className="btn btn-primary card-btn">
                                READ MORE
                            </Link>
                        </div>
                    </div>
        </>
    )
}
const PricingOne = () => {
    const [displayMsg, setDisplayMsg] = useState(null);
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
    const participantId = window.location.pathname.split("/")[2];

    const onClickHandler = async (e, source) => {
        e.preventDefault();

        try {
            console.log(source);
            await axios.post(`/eventRegistration/${source}/${participantId}`, participantId);
            const successMsg = `Registered Successfully for ${source}`;
            setDisplayMsg(successMsg);
            alert(successMsg);
            window.location = '/events';
        } catch (error) {
            const errorMsg = `${error.response?.data || 'Error'} for ${source}`;
            setDisplayMsg(errorMsg);
            alert(errorMsg);
        }
    };

    return (
        <section className="pricing-area ptb-120 bg-image">
            <div className="container">
                <div className="row">
                 
                    
                   <EventCard event="Technova" description="Test your research acumen and get a glimpse of presenting
                                    scientific work in a conference-like environment!" link="/events/technova"/>


                   <EventCard event=" Enigma " description=" Test your knowledge in general as well as core topics. So
                                    Quizzers, get ready for Buzzers! " link="/events/enigma "/>


                   <EventCard event=" Excavate " description=" Get ready to put your analytical skills to the test in the
                                    ultimate data analytics competition! " link="/events/excavate "/>


                   <EventCard event=" Metaclix " description=" Enter our online photography contest and capture everyday
                                    materials, industrial applications, or the universe beyond! " link="/events/metaclix "/>


                   <EventCard event=" Case Study " description="  Challenge your critical thinking ability and grab this
                                    opportunity to do in-depth research about a problem statement! " link="/events/casestudy "/>

                   <EventCard event=" Ideathon " description="Pitch your next amazing business idea and get valuable feedback! " link="/events/ideathon "/>

                   <EventCard event=" MetaCode " description="  " link="/events/metacode"/>

                   <EventCard event=" Cadvolution " description="  " link="/events/cadvolution"/>
                 


                  

                    


                </div>
            </div>
        </section>
    );
};

export default PricingOne;
