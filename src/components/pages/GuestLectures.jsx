import React from 'react';
import MainBanner from '../GuestLecture/MainBanner';
import GuestLectures from '../GuestLecture/GuestLecture';
import Footer from '../Common/Footer';
import lax from 'lax.js';
import GoTop from '../Shared/GoTop';
 
class GuestLecturesPage extends React.Component {
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
                <GuestLectures />

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default  GuestLecturesPage;