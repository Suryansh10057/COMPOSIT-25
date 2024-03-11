import React from "react";
import MainBanner from "./MainBanner";
import ContactForm from "./ContactForm";
import Footer from "../../Common/Footer";

class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainBanner />
        <ContactForm />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactUs;
