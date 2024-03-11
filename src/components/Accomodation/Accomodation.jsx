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

    userData = JSON.parse(localStorage.getItem("COMPOSITuser"));


    PaymentHandler = async (e) => {
        const amount = 500;
        const currency = "INR";
        const receiptId = "receipt#1";

        const response = await fetch("http://localhost:8800/order", {
            method: "POST",
            body: JSON.stringify({
                amount,
                currency,
                receipt: receiptId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const order = await response.json();
        console.log(order);

        var options = {
            "key": "rzp_test_01a1YvfIYNa8vJ", // Enter the Key ID generated from the Dashboard
            amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency,
            "name": "COMPOSIT, IIT KGP", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": async function (response){
                const body = {
                    ...response,
                };

                const validateRes = await fetch("http://localhost:8800/order/validate", {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const jsonRes = await validateRes.json();
                console.log(jsonRes);
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                "name": "Gaurav Testo", //your customer's name
                "email": "gaurav.kumar@example.com", 
                "contact": "9000000000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });

        rzp1.open();
        e.preventDefault();
    }

    // makePayment = async() => {
    //     const stripe = await loadStripe("pk_test_51OqsJ5SCPuWiCxONKcpqZhXMmiwdImAVsdAZaTN7dk6Drg61bO4z5Gy28qPQfgyNEAwFde2FRJCeQcdc7qrBi7cn00bOvXVHcj");

    //     const body = {
    //         name:this.userData.name,
    //         registrationId: this.userData.regID
    //     }
    //     const headers = {
    //         "Content-Type":"application/json"
    //     }
    //     const response = await fetch("http://localhost:8800/api/create-checkout-session",{
    //         method:"POST",
    //         headers:headers,
    //         body:JSON.stringify(body)
    //     });

    //     const session = await response.json();

    //     const result = stripe.redirectToCheckout({
    //         sessionId:session.id
    //     });

    //     if(result.error){
    //         console.log(result.error);
    //     }
    // }

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
            <button type="submit" className="btn-modal btn-primary" onClick={this.PaymentHandler}>Pay Rs 400</button>
          </div>
        </div>
      </section>
        );
    }
}

export default Accomodation;