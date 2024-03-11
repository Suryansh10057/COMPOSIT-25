import React from 'react';
import { Link } from 'react-router-dom';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <h1>Accomodation</h1>
                    <span>Apply for Accomodation here!</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Accomodation</li>
                    </ul>
                    <ul>
                        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                        <li><Link to="/termscondition">Terms & Condition</Link></li>
                        <li><Link to="/cancellationrefund">Cancellation & Refund</Link></li>
                        <li><Link to="/shippingdelivery">Shiping & Delivery</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;