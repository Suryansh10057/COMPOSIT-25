import React from 'react';
import { Link } from 'react-router-dom';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg1">
                <div className="container">
                    <h1>Comming Soon</h1>
                    {/* <span>Are you excited?</span> */}
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>Coming Soon</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;