import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const isLogin = localStorage.getItem('isLogin');
//   console.log(isLogin);
//   console.log(localStorage);
//logout
//logout
const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    console.log(confirmed)
    if (confirmed) {
      localStorage.clear()
      window.alert("logout successfully")
    
      navigate("/");
    }
    let name = localStorage.getItem("name")
    console.log(name)
  };

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/Register');
  };

  return (
    <div className='header'>
      <div className="container">
        <h1>Top<span style={{ color: 'red' }}>Coins</span></h1>
        <ul className={click ? 'nav active' : 'nav'} style={{ listStyle: 'none' }}>
          <li>
            <a href="/" style={{ textDecoration: 'none !important' }}>Home</a>
          </li>
          <li>
            <a href='/Coins'>Coins</a>
          </li>
          <li>
            <a href='/About'>About</a>
          </li>
        </ul>
        {!isLogin && (
          <div className='btns'>
            <button onClick={handleRegister} className='btn'>Register/Login</button>
          </div>
        )}
        {isLogin && (
          <div className='btns'>
            <button onClick={handleLogout} className='btn'>Logout</button>
          </div>
        )}
        <div className='hamburger'>
          <FaBars onClick={handleClick} size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
