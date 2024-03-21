import React from "react";
import lax from "lax.js";
import axios from "axios";
import { Link } from "react-router-dom";
import LaxButton from "../Shared/LaxButton";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import './accomodation.css'

class Accomodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentDetails: "",
      error: "",
      success: "",
      loading: false,
    };
  }
  userData = JSON.parse(localStorage.getItem("COMPOSITuser"));

  handleClick = async (e) => {
    e.preventDefault();
    if (this.state.paymentDetails == "") {
      this.setState({
        error: "Please Enter UPI Transaction ID/UPI Reference Number",
      });
      return;
    }
    this.setState({ loading: true });
    try {
      const res = await axios.post(
        // `http://localhost:8800/accommodation`,
        `https://composit2024backend.onrender.com/accommodation`,
        {
          name: this.userData.name,
          email: this.userData.email,
          regID: this.userData.regID,
          paymentDetails: this.state.paymentDetails,
        }
      );
      this.setState({ success: res.data });
      //   window.location = `/`;
    } catch (err) {
      this.setState({ errorr: err.response.data.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  //   PaymentHandler = async (e) => {
  //     const amount = 500;
  //     const currency = "INR";
  //     const receiptId = "receipt#1";

  //     const response = await fetch("http://localhost:8800/order", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         amount,
  //         currency,
  //         receipt: receiptId,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const order = await response.json();
  //     console.log(order);

  //     var options = {
  //       key: "rzp_test_01a1YvfIYNa8vJ", // Enter the Key ID generated from the Dashboard
  //       amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //       currency,
  //       name: "COMPOSIT, IIT KGP", //your business name
  //       description: "Test Transaction",
  //       image: "https://example.com/your_logo",
  //       order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //       handler: async function (response) {
  //         const body = {
  //           ...response,
  //         };

  //         const validateRes = await fetch(
  //           "http://localhost:8800/order/validate",
  //           {
  //             method: "POST",
  //             body: JSON.stringify(body),
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         const jsonRes = await validateRes.json();
  //         console.log(jsonRes);
  //       },
  //       prefill: {
  //         //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
  //         name: "Gaurav Testo", //your customer's name
  //         email: "gaurav.kumar@example.com",
  //         contact: "9000000000", //Provide the customer's phone number for better conversion rates
  //       },
  //       notes: {
  //         address: "Razorpay Corporate Office",
  //       },
  //       theme: {
  //         color: "#3399cc",
  //       },
  //     };
  //     var rzp1 = new window.Razorpay(options);
  //     rzp1.on("payment.failed", function (response) {
  //       alert(response.error.code);
  //       alert(response.error.description);
  //       alert(response.error.source);
  //       alert(response.error.step);
  //       alert(response.error.reason);
  //       alert(response.error.metadata.order_id);
  //       alert(response.error.metadata.payment_id);
  //     });

  //     rzp1.open();
  //     e.preventDefault();
  //   };

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
      <section className="login-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <Link to="/" className="btn-modal btn-primary">
                &#xab; Back to Home
              </Link>
              <h3>Accommodation</h3>
              {/* {
                              this.registeredData ? <h3>Welcome {this.registeredData}</h3>
                              :
                              <h3>Welcome Back!</h3>
                            } */}
                            

              <form>
                <div className="form-group">
                  <label>Self-Declaration</label>
                  <ul>
                    <li>
                      We accept the dormitory-style accommodation provided at Rs
                      399 for 3 days and 2 nights.
                    </li>
                    <li>
                      We will maintain respectful conduct and refrain from
                      causing disturbances to fellow residents.
                    </li>
                    <li>
                      We will secure our personal belongings, understanding that
                      the management is not liable for any losses.
                    </li>
                    <li>
                      We acknowledge that access to other halls of residence is
                      restricted.
                    </li>
                    <li>
                      We understand that usage of the hall mess is not
                      permitted.
                    </li>
                    <li>
                      We recognize our responsibility for personal safety
                      post-midnight.
                    </li>
                  </ul>
                </div>
                <div className="profile-page">
                  <li className="form-group form-control">
                    <strong>Name:</strong> {this.userData.name}
                  </li>
                  <li className="form-group form-control">
                    <strong>Registration ID:</strong> {this.userData.regID}
                  </li>
                  <li className="form-group form-control">
                    <strong>Email:</strong> {this.userData.email}
                  </li>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={require("../../assets/images/PaymentQr.jpg")}
                    style={{ width: "150px" }}
                    alt=""
                  />
                  <p style={{ textAlign: 'justify' }}>
                    To make payment, scan this QR Code from any UPI App or you
                    can pay directly to our UPI ID{" "}
                    <b>harshakashsharma@okicici</b> After making the payment of
                    Rs. 399/-, fill your UPI Transaction ID OR UPI Reference
                    Number below and Submit.
                  </p>
                </div>
                <div className="form-group">
                  <label>Payment Details</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter UPI Transaction ID/UPI Reference Number"
                    value={this.state.paymentDetails}
                    onChange={(e) =>
                      this.setState({ paymentDetails: e.target.value })
                    }
                    required
                  />
                </div>
                {this.state.error && (
                  <p className="error center">{this.state.error}</p>
                )}
                {this.state.success && (
                  <p className="popupLink center">{this.state.success}</p>
                )}
                <button
                  type="submit"
                  className="btn-modal btn-primary"
                  onClick={this.handleClick}
                  disabled={this.state.loading}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      //         <section className="speakers-area ptb-120">
      //     <div className="row m-0">
      //       <div className="section-title">
      //         <h2>
      //           Important Instructions
      //         </h2>

      //         <div className="bar"></div>
      //         <span>Dormitory type accomodation will be provided.</span>
      //         <span>The cost of Accomodation will be Rs400</span>
      //         <span>Payment once done will not be refunded</span>
      //         {/* <PaymentForm /> */}
      //         <button type="submit" className="btn-modal btn-primary" onClick={this.PaymentHandler}>Pay Rs 400</button>
      //       </div>
      //     </div>
      //   </section>
    );
  }
}

export default Accomodation;
