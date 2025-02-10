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
                 
                    
                   <EventCard event="Technova" description="Unleash your scientific prowess and redefine innovation—join Technova to present groundbreaking research and ideas in materials science and engineering." link="/events/technova"/>


                   <EventCard event=" Enigma " description=" Test your knowledge by joining an exciting online quiz competition featuring a diverse range of questions, from engineering to general knowledge. " link="/events/enigma "/>


                   <EventCard event=" Excavate " description=" Sharpen your critical thinking, problem-solving, and analytical skills to uncover data-driven innovations in metallurgical and materials engineering.
 " link="/events/excavate "/>


                   <EventCard event=" Metaclix " description=" Showcase the fascinating world of Metallurgical and Materials Engineering through your lens! Capture stunning photos, from industries to everyday world, and compete in an online photography competition to exhibit your vision." link="/events/metaclix "/>


                   <EventCard event=" Case Study " description="  Dive into the world of strategy and innovation! Analyze real-world business challenges, craft impactful solutions, and showcase your problem-solving skills in this dynamic case study competition" link="/events/casestudy "/>

                   <EventCard event=" Ideathon " description="Ideathon: An event for aspiring entrepreneurs to pitch innovative ideas, receive expert feedback, and propel their vision into reality.
" link="/events/ideathon "/>

                   <EventCard event=" MetaCode " description=" An intriguing coding challenge combining the realm of material Science and Computation 
 " link="/events/metacode"/>

                   <EventCard event=" Cadvolution " description="Showcase your CAD expertise by designing innovative products based on real-world problem statements. Justify your material choices with engineering precision to create the perfect synergy of design and functionality. " link="/events/cadvolution"/>
                 


                  

                    


                </div>
            </div>
        </section>
    );
};

export default PricingOne;
