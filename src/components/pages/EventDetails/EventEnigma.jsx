import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lax from 'lax.js';
import MainBanner from '../../EventDetails/MainBanner';
import Footer from '../../Common/Footer';
import GoTop from '../../Shared/GoTop';
import EventEnigma from '../../EventDetails/EventEnigma';
import EventTechnova from '../../EventDetails/EventTechnova';


const eventComponents = {
    enigma: EventEnigma,
    technova: EventTechnova,
    // Add more events here as needed
};

const EventPage = () => {
    const { eventId } = useParams();
    const EventComponent = eventComponents[eventId];

    useEffect(() => {
        lax.setup();
        
        const handleScroll = () => lax.update(window.scrollY);
        document.addEventListener('scroll', handleScroll, false);
        lax.update(window.scrollY);
        
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <MainBanner />
            {EventComponent ? <EventComponent /> : <p>Event not found</p>}
            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </>
    );
};

export default EventPage;
