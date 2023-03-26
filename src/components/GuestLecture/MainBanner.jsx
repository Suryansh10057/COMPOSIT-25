import React from 'react';
import { Link } from 'react-router-dom';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <h1>Guest Lectures | Webinar | Workshops</h1>
                    <span>Get ready for insights from Experts!</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Guest Lectures|Webinar|Workshops</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;