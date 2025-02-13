import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lax from 'lax.js';
import MainBanner from '../EventDetails/MainBanner';
import Footer from '../Common/Footer';
import GoTop from '../Shared/GoTop';
import EventEnigma from '../EventDetails/EventEnigma';
import EventTechnova from '../EventDetails/EventTechnova';
import EventMetaclix from '../EventDetails/EventMetaclix';
import EventCasestudy from '../EventDetails/EventMetaCasestudy';
import EventExcavate from '../EventDetails/EventExcavate';
import EventIdeathon from '../EventDetails/EventIdeathon';
import EventCad from '../EventDetails/EventCad';
import EventMetaCode from '../EventDetails/EventMetaCode';

const eventComponents = {
    Enigma: EventEnigma,
    Technova: EventTechnova,
    CaseStudy:EventCasestudy,
    Excavate : EventExcavate,
    Metaclix:EventMetaclix,
    Ideathon:EventIdeathon,
    Cadvolution:EventCad,
    MetaCode:EventMetaCode
    // Add more events here as needed
};

const HandleEvents = () => {

    const { name } = useParams();
    //console.log(name)
    const EventComponent = eventComponents[name];
    //console.log(EventComponent)

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

export default HandleEvents;
