import React from 'react'
import './home.scss';
import { Outlet } from 'react-router-dom';
import whyUsData from '../../assets/whyUs.json';
import LeftImage from "../../assets/images/Screenshot 2020-09-21 at 2.06.52 PM@2x.png";

const Home = () =>  {
    console.log("whyUsData", whyUsData);


  return (
    <div className='homepage'>
        <div className='homepage__topcontainer'>
            <div className="homepage__topcontainer__left">
                <div className="homepage__topcontainer__left__text">Welcome To My<span className='text-span'>Jobs</span></div>
                <button className="homepage__topcontainer__left__button">Get Started</button>
            </div>
            <div className="homepage__topcontainer__right">
              <img src={LeftImage} alt=''/>
            </div>
        </div>
        <div className="homepage__whyuscontainer">
            <div className="homepage__whyuscontainer__heading">Why Us</div>
            <div className="homepage__whyuscontainer__cardsContainer">
        {
        whyUsData?.map((data, idx) => (<div className="homepage__whyuscontainer__cardsContainer__card" key={idx}>
        <div className="homepage__whyuscontainer__cardsContainer__card__title">
        {data.title}
        </div>
        <div className="homepage__whyuscontainer__cardsContainer__card__description">
        {data.description}
        </div>
    </div>))
    }

            </div>
    </div>
        <Outlet/>
        </div>
  )
};

Home.displayName = 'Home'
export default Home;
