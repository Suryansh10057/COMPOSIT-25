import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewCard from './NewEventCard';

const PricingOne = () => {
    const [displayMsg, setDisplayMsg] = useState(null);
    const userData = JSON.parse(localStorage.getItem("COMPOSITuser"));
    const participantId = window.location.pathname.split("/")[2];

    return (
        <section className="pricing-area ptb-120 bg-image">
            <div className="event-container">
                <div className="event-row">
                 
                    
                   <NewCard event="Technova" description="Present groundbreaking research and innovative ideas in materials science and engineering to redefine the future." link="/events/Technova"/>


                   <NewCard event=" Enigma " description=" Test your knowledge in an exciting online quiz featuring diverse questions from engineering to general awareness. " link="/events/Enigma "/>


                   <NewCard event=" Excavate " description="  Apply critical thinking and analytical skills to uncover data-driven insights and innovative solutions.
 " link="/events/Excavate "/>


                   <NewCard event=" Metaclix " description=" Capture the beauty of science and technology through photography and compete in a dynamic contest." link="/events/Metaclix "/>


                   <NewCard event=" Case Study " description=" Analyze real-world challenges, craft strategic solutions, and showcase your problem-solving expertise." link="/events/CaseStudy "/>

                   <NewCard event=" Ideathon " description="An event for aspiring entrepreneurs to pitch innovative ideas, receive expert feedback, and propel their vision into reality.
" link="/events/Ideathon "/>

                   <NewCard event=" MetaCode " description="Solve engaging coding challenges that blend innovation, problem-solving, and computation. 
 " link="/events/MetaCode"/>

                   <NewCard event=" Cadvolution " description="Design creative CAD models, justify your choices, and develop solutions for real-world challenges." link="/events/CadVolution"/>
                 


                  

                    


                </div>
            </div>
        </section>
    );
};

export default PricingOne;
