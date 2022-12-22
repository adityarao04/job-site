import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Logo from "../../assets/images/MyJobs.svg";
import './navigation.scss'

const Navigation = () => {
  return (
    <>
    <div className='navbar container'>
        <div className="navbar__container">
            <div className="navbar__container__logo">
            <Link to="/">
                <img src={Logo} width="82" height="26" alt='logo'/>
            </Link>
            </div>
            <Link to='/login'>
            <div className="navbar__container__loginButton">Login</div>
            </Link>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Navigation;
