import React from 'react';
import MainBanner from '../Home/MainBanner';
import About from '../Home/About';
import WhyUs from '../Common/WhyUs';
import Speakers from '../Home/Speakers';
import GoTop from '../Shared/GoTop';
import Footer from '../Common/Footer';
// import EventSchedules from '../Home/EventSchedules';
import FunFact from '../Common/FunFact';
import lax from 'lax.js';
import Partner from '../Common/Partner';
import './Popup/PopupMsg.css'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function (x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }
    render() {
        function openForm() {
            document.getElementById("popupForm").style.display = "block";
        }
        function closeForm() {
            document.getElementById("popupForm").style.display = "none";
        }
        window.onclick = function (event) {
            let modal = document.getElementById('loginPopup');
            let popupBtn = document.getElementById('popupBtn');
            if (event.target !== modal) {
                closeForm();
            }
            if (event.target === popupBtn) {
                openForm();
            }
        }
        window.onload = function () {
            openForm();
        }
        return (
            <React.Fragment>
                {/* Main Banner */}
                <MainBanner />
                {/* About Area */}
                <About />
                {/* Why Choose Us Area */}
                <WhyUs />
                {/* Schedule Area */}
                {/* <EventSchedules /> */}
                {/* FunFacts Area */}
                <FunFact />
                {/* Pricing Area */}
                <Partner />
                {/* Speakers Area */}
                <Speakers />
                <div className="loginPopup" id='loginPopup'>
                    <div className="formPopup2" id="popupForm">
                        <p className='popupMsg2'>Accommodation facility is available for people attending the fest offline at IIT KHARAGPUR.</p>
                        <p className='popupMsg2'>Participation in any event is free of cost, however if you need accommodation, you need to pay Rs.300 in Cash, for accommodation in dormitory room.</p>
                        {/* <Link to="/login" className='popupLink2'>Login now to register for event</Link> */}
                    </div>
                </div>
                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}

export default Home;