import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div>
      <div className="hodcard1">
        <div className="hod-img1">
          <img src={props.img} alt="" />
        </div>
        <div className="hod-name1">
          <b>{props.name}</b>
          {props.position && <p>{props.position}</p>}
        </div>
        <div className="hod-cnt1">
          <a href={`mailto:${props.mail}`} className="linkedin">
            <i className="icofont-envelope"></i>
          </a>
          {props.linkedin && (
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="icofont-linkedin"></i>
            </a>
          )}
          {props.facebook && (
            <a href={props.facebook} target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="icofont-facebook"></i>
            </a>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default Card
