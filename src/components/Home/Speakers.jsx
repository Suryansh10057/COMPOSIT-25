import React from "react";
import lax from "lax.js";
import { Link } from "react-router-dom";
import LaxDiv from "../Shared/LaxDiv";
// import Card from "../Teams/TeamCard";
// import Heads from "../Teams/Heads";
import '../Teams/professor.css'
import '../Teams/card.css'
import Heads from "../Teams/Heads.jsx";
import Card from "../Teams/TeamCard";


class Speakers extends React.Component {
  constructor(props) {
    super(props);
    lax.setup();

    document.addEventListener(
      "scroll",
      function (x) {
        lax.update(window.scrollY);
      },
      false
    );

    lax.update(window.scrollY);
  }

  render() {
    return (
      <section className="speakers-area ptb-120 pb-0">
        <div className="container">
          <div className="section-title">
            {/* <span>People Behind The Fest</span> */}
            {/* <h2>Meet Our Team</h2> */}
            {/* <div className="bar"></div> */}
            <LaxDiv text="OURTEAM" dataPreset="driftRight" />
            {/* <Link to="#" className="btn btn-primary">View More Speakers</Link> */}
          </div>
        </div>

        <div className="row m-0">
          {/* <div className="section-title">
            <h2>Our Heads</h2>

            <div className="bar"></div>
          </div> */}
         

<section className="professor" id="professors">
     <div className="bar"></div>
       
       
        <h1 className='mt-5'>Heads : </h1>
        <div className="show-cards">
          {Heads.map((professor, index) => (
            <Card
              key={index}
              img={professor.img}
              name={professor.name}
              mail={professor.mail}
              linkedin={professor.linkedin}
              facebook={professor.facebook}
              position={professor.position}
            />
          ))}
        </div>
        
      </section>

        </div>
      </section>
    );
  }
}

export default Speakers;
