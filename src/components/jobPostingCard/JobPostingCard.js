import React from 'react'
import './jobPostingCard.scss'
import locationImage from "../../assets/images/Iconmaterial-location-on.svg";


export default function JobPostingCard({ id, title, location, description}) {
  return (
    <div className="jobPostingCard">
     <div className="jobPostingCard__title">{title}</div>
     <div className="jobPostingCard__description">{description}</div>
     <div className="jobPostingCard__locationViewApplicationContainer">
     <div className="jobPostingCard__locationViewApplicationContainer__location">
       <img src={locationImage} alt="locationImage"/>
        <span>{location}</span></div>
     <div className="jobPostingCard__locationViewApplicationContainer__ViewApplicationContainer">View Application</div>
     </div>
    </div>
  )
}
