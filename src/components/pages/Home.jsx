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
                {/* <Partner /> */}
                {/* Speakers Area */}
                <Speakers />
                {/* <div className="loginPopup" id='loginPopup'>
                    <div className="formPopup2" id="popupForm">
                        <p className='popupMsg2'>Certificates and awards shall be distributed to the participants via mail within 1-2 working month.</p>
                        <p className='popupMsg2'>We look forward for the similar enthusiastic performance in our next edition of COMPOSIT!</p>
                        <p className='popupMsg2'>Thank you for participating.</p>
                        <Link className='popupLink3' onClick={this.closeForm} >Close</Link>
                    </div>
                </div> */}
                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}

export default Home;