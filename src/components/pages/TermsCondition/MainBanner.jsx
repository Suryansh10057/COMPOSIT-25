import React from "react";
import { Link } from "react-router-dom";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="page-title-area item-bg1">
        <div className="container">
          <h1>Terms & Condition</h1>
          <span style={{ textAlign: "left" }}>
            For the purpose of these Terms and Conditions, The term "we", "us",
            "our" used anywhere on this page shall mean COMPOSIT, whose
            registered/operational office is Metallurgical and Materials
            Engineering Department, IIT Kharagpur West Midnapore WEST BENGAL
            721302 . "you", “your”, "user", “visitor” shall mean any natural or
            legal person who is visiting our website and/or agreed to purchase
            from us.
          </span>
          <span style={{ textAlign: "left" }}>
            <b>
              Your use of the website and/or purchase from us are governed by
              following Terms and Conditions:
            </b>
          </span>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              {" "}
              The content of the pages of this website is subject to change
              without notice.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              {" "}
              Neither we nor any third parties provide any warranty or guarantee
              as to the accuracy, timeliness, performance, completeness or
              suitability of the information and materials found or offered on
              this website for any particular purpose. You acknowledge that such
              information and materials may contain inaccuracies or errors and
              we expressly exclude liability for any such inaccuracies or errors
              to the fullest extent permitted by law.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              {" "}
              Your use of any information or materials on our website and/or
              product pages is entirely at your own risk, for which we shall not
              be liable. It shall be your own responsibility to ensure that any
              products, services or information available through our website
              and/or product pages meet your specific requirements.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              Our website contains material which is owned by or licensed to us.
              This material includes, but are not limited to, the design,
              layout, look, appearance and graphics. Reproduction is prohibited
              other than in accordance with the copyright notice, which forms
              part of these terms and conditions.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              All trademarks reproduced in our website which are not the
              property of, or licensed to, the operator are acknowledged on the
              website.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              Unauthorized use of information provided by us shall give rise to
              a claim for damages and/or be a criminal offense.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              From time to time our website may also include links to other
              websites. These links are provided for your convenience to provide
              further information.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              You may not create a link to our website from another website or
              document without COMPOSIT's prior written consent.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              Any dispute arising out of use of our website and/or purchase with
              us and/or any engagement with us is subject to the laws of India.
            </li>
          </ul>
          <ul style={{ textAlign: "left" }}>
            <li style={{ color: "#fff" }}>
              We, shall be under no liability whatsoever in respect of any loss
              or damage arising directly or indirectly out of the decline of
              authorization for any Transaction, on Account of the Cardholder
              having exceeded the preset limit mutually agreed by us with our
              acquiring bank from time to time
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainBanner;
