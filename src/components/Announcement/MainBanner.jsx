import React from 'react';
import { Link } from 'react-router-dom';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <h1>Announcements</h1>
                    <span>Get important updates here!</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Announcement</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;