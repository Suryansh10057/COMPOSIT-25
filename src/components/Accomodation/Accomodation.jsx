import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

class Accomodation extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function (x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    userData = JSON.parse(localStorage.getItem("COMPOSITuser"))

    makePayment = async() => {
        const stripe = await loadStripe("pk_test_51OqsJ5SCPuWiCxONKcpqZhXMmiwdImAVsdAZaTN7dk6Drg61bO4z5Gy28qPQfgyNEAwFde2FRJCeQcdc7qrBi7cn00bOvXVHcj");

        const body = {
            name:this.userData.name,
            registrationId: this.userData.regID
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:8800/api/create-checkout-session",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });

        if(result.error){
            console.log(result.error);
        }
    }

    render() {
        return (
            <section className="speakers-area ptb-120">
        <div className="row m-0">
          <div className="section-title">
            <h2>
              Important Instructions
            </h2>

            <div className="bar"></div>
            <span>Dormitory type accomodation will be provided.</span>
            <span>The cost of Accomodation will be Rs400</span>
            <span>Payment once done will not be refunded</span>
            {/* <PaymentForm /> */}
            <button type="submit" className="btn-modal btn-primary" onClick={this.makePayment}>Pay Rs 400</button>
          </div>
        </div>
      </section>
        );
    }
}

export default Accomodation;