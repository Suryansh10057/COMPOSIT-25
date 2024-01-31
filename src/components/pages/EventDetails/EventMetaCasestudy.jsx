import React from 'react';
import MainBanner from '../../EventDetails/MainBanner';
import EventMetaCasestudy from '../../EventDetails/EventMetaCasestudy';
import Footer from '../../Common/Footer';
import lax from 'lax.js';
import GoTop from '../../Shared/GoTop';
 
class EventMetaCasestudyPage extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }
    render(){
        return (
            <React.Fragment>
                {/* Main Banner */}
                <MainBanner />
                {/* EventTechnova Area */}
                <EventMetaCasestudy />

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default EventMetaCasestudyPage;