import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/pages/About";
import OurTeam from "./components/pages/Ourteam";
import Schedule from "./components/pages/Schedule";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
// import ComingSoon from "./components/pages/ComingSoon";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
import Sponsor from "./components/pages/Sponsor";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";
import EventCadPage from "./components/pages/EventDetails/EventCad";
import EventCasestudyPage from "./components/pages/EventDetails/EventCasestudy";
import EventMetallomaniaPage from "./components/pages/EventDetails/EventMetallomania";
import EventRecycledArtPage from "./components/pages/EventDetails/EventRecycledArt";
import EventEnigmaPage from "./components/pages/EventDetails/EventEnigma";
import EventExcavatePage from "./components/pages/EventDetails/EventExcavate";
import EventIdeathonPage from "./components/pages/EventDetails/EventIdeathon";
import EventTresureHuntPage from "./components/pages/EventDetails/EventTreasureHunt";
import EventMetaCasestudyPage from "./components/pages/EventDetails/EventMetaCasestudy";
import EventMetaclixPage from "./components/pages/EventDetails/EventMetaclix";
// import EventSchoolquizPage from "./components/pages/EventDetails/EventSchoolquiz";
import EventTechnovaPage from "./components/pages/EventDetails/EventTechnova";
import EventTechtoonPage from "./components/pages/EventDetails/EventTechtoon";
import RegisterMetaclix from "./components/pages/EventRegistration/RegisterMetaclix";
import RegisterTechtoon from "./components/pages/EventRegistration/RegisterTechtoon";
import RegisterMetallomania from "./components/pages/EventRegistration/RegisterMetallomania";
import RegisterTechnova from "./components/pages/EventRegistration/RegisterTechnova";
import RegisterIdeathon from "./components/pages/EventRegistration/RegisterIdeathon";
import RegisterEnigma from "./components/pages/EventRegistration/RegisterEnigma";
import RegisterExcavate from "./components/pages/EventRegistration/RegisterExcavate";
import RegisterSchoolquiz from "./components/pages/EventRegistration/RegisterSchoolquiz";
import RegisterCad from "./components/pages/EventRegistration/RegisterCad";
import RegisterCasestudy from "./components/pages/EventRegistration/RegisterCasestudy";
import GetAllUsers from "./components/pages/GetAllUsers";
import Popup from "./components/pages/MyPopup";
import PopupMsg from "./components/pages/Popup/PopupMsg";
import ComingSoon1 from "./components/pages/ComingSoon/Comingsoon";
import GuestLecturePage from "./components/pages/GuestLectures";
import AnnouncementPage from "./components/pages/Announcement";
import AccomodationPage from "./components/pages/Accomodation";
import Success from "./components/pages/Success/Success";
import Cancel from "./components/pages/Cancel/Cancel";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./components/pages/TermsCondition/TermsCondition";
import CancellationRefund from "./components/pages/CancellationRefund/CancellationRefund";
import ShippingDelivery from "./components/pages/ShippingDelivery/ShippingDelivery";

// Conditionally render Navigation
const renderNavigation = () => {
    if (!(window.location.pathname === '/login' || window.location.pathname === '/signup' || window.location.pathname === '/coming-soon' || window.location.pathname === '/error-404')){
        return <Navigation />;
    }
}

const AppRouter = () => {
    return (
        <Router>
            {renderNavigation()}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/events" exact component={Events} />
                {/* <Route path="/events" exact component={ComingSoon1} /> */}
                <Route path="/events/:id" exact component={Events} />
                <Route path="/event_cad" exact component={EventCadPage} />
                <Route path="/event_casestudy" exact component={EventCasestudyPage} />
                <Route path="/event_enigma" exact component={EventEnigmaPage} />
                <Route path="/event_excavate" exact component={EventExcavatePage} />
                <Route path="/event_ideathon" exact component={EventIdeathonPage} />
                <Route path="/event_metaclix" exact component={EventMetaclixPage} />
                <Route path="/event_metallomania" exact component={EventMetallomaniaPage} />
                
                <Route path="/event_recycledart" exact component={EventRecycledArtPage} />
                <Route path="/event_treasurehunt" exact component={EventTresureHuntPage} />
                <Route path="/event_metacasestudy" exact component={EventMetaCasestudyPage} />

                <Route path="/event_technova" exact component={EventTechnovaPage} />
                <Route path="/event_techtoon" exact component={EventTechtoonPage} />
                <Route path="/announcement" exact component={AnnouncementPage} />
                <Route path="/accomodation" exact component={AccomodationPage} />
                <Route path="/accommodation" exact component={AccomodationPage} />
                {/* <Route path="/guestlecture" exact component={ComingSoon1} /> */}
                <Route path="/guestlecture" exact component={GuestLecturePage} />
                <Route path="/register_metaclix" exact component={RegisterMetaclix} />
                <Route path="/register_techtoon" exact component={RegisterTechtoon} />
                <Route path="/register_metallomania" exact component={RegisterMetallomania} />
                <Route path="/register_technova" exact component={RegisterTechnova} />
                <Route path="/register_ideathon" exact component={RegisterIdeathon} />
                <Route path="/register_enigma" exact component={RegisterEnigma} />
                <Route path="/register_excavate" exact component={RegisterExcavate} />
                <Route path="/register_schoolquiz" exact component={RegisterSchoolquiz} />
                <Route path="/register_Cad" exact component={RegisterCad} />
                {/* <Route path="/register_cad" exact component={RegisterCad} /> */}
                <Route path="/register_caseStudy" exact component={RegisterCasestudy} />
                <Route path="/ourteam" exact component={OurTeam} />
                <Route path="/schedule" exact component={Schedule} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/comingSoon" exact component={ComingSoon1} />
                <Route path="/success" exact component={Success} />
                <Route path="/cancel" exact component={Cancel} />
                <Route path="/privacypolicy" exact component={PrivacyPolicy} />
                <Route path="/termscondition" exact component={TermsCondition} />
                <Route path="/cancellationrefund" exact component={CancellationRefund} />
                <Route path="/shippingdelivery" exact component={ShippingDelivery} />
                <Route path="/contactus" exact component={ContactUs} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/sponsors" exact component={Sponsor} />
                {/* <Route path="/sponsors" exact component={ComingSoon1} /> */}
                <Route path="/profile" exact component={Profile} />
                <Route path="/edit-profile" exact component={EditProfile} />
                <Route path="/popup" exact component={Popup} />
                <Route path="/popupMsg" exact component={PopupMsg} />
                <Route path="/admin/getAllRegistrations" exact component={GetAllUsers} />
                <Route path="/error-404" exact component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;