import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';

class Annoucement extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function (x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    render() {
        return (
            <section className="speakers-area ptb-120">
        <div className="row m-0">
          <div className="section-title">
            <h2>
              Important Announcements
            </h2>

            <div className="bar"></div>
            <span>Stay Tuned for important Updates!</span>
          </div>
        </div>
      </section>
        );
    }
}

export default Annoucement;