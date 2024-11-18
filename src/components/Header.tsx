import React, { useRef } from 'react'
import './Header.css'
// iconss
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Header:React.FC = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.add('aktiv');
    }
  }

  const closeMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.remove('aktiv');
    }
  }

  return (
<>
    <div className="mobile-menu" ref={mobileMenuRef}>
    <IoCloseCircleOutline className='close-icon' onClick={closeMenu}/>
    <Link to="/"><img src="/images/logo.svg" alt="" /></Link> 
    <div className="mobile-links">
    <Link to="shopping" className='nav-link'>SHOP</Link>
    <Link to="always" className='nav-link'>AlWAYS PAN</Link>
    <Link to="mission" className='nav-link'>MISSION</Link>
    <Link to="faq" className='nav-link'>FAQS</Link>
    <a href="#" className='nav-link znak'><span>0</span></a>
    </div>
    </div>

    <nav className='container d-flex justify-content-between align-items-center py-4'>
        <div className="navbar-left d-flex gap-4">
            <Link to="shopping" className='nav-link'>SHOP</Link>
            <Link to="always" className='nav-link'>AlWAYS PAN</Link>
        </div>
       <Link to="/"><img src="/images/logo.svg" alt="" /></Link> 
        <div className="navbar-right d-flex gap-4 align-items-center">
            <Link to="mission" className='nav-link'>MISSION</Link>
            <Link to="faq" className='nav-link'>FAQS</Link>
            <a href="#" className='nav-link znak'><span>0</span></a>
        </div>
        <FaBarsStaggered onClick={openMenu} className='bars-icon'/>
    </nav>
    </>
  )
}

export default Header