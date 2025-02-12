import React, { useState, useEffect } from 'react';
import Card from './TeamCard.jsx';
import FacadData from './facad.jsx';
import Heads from './Heads.jsx'
import Data from './governers.jsx';

import './professor.css';
import Footer from '../Common/Footer.jsx';

const Professor = () => {
  const [professorsPerPage, setProfessorsPerPage] = useState(calculateProfessorsPerPage());

  useEffect(() => {
    function handleResize() {
      setProfessorsPerPage(calculateProfessorsPerPage());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function calculateProfessorsPerPage() {
    return window.innerWidth > 712 ? 6 : 3;
  }

  return (
    <>
      <section className="professor mt-5" id="professors">
        <h1 className='mt-5'>Faculty Advisor</h1>
        <div className="bar"></div>
        <div className="show-cards">
          {FacadData.map((professor, index) => (
            <Card
              key={index}
              img={professor.img}
              name={professor.name}
              mail={professor.mail}
              linkedin={professor.linkedin}
              position={professor.position}

            />
          ))}
        </div>
        <h1 className=''>Governers : </h1>
        <div className="show-cards">
          {Data.map((professor, index) => (
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
        <h1 className=''>Heads : </h1>
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
      <Footer/>
    </>
  );
};

export default Professor;
