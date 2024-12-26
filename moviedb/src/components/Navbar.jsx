import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarStyle from '../styles/NavbarStyle.module.css';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [navActive, setNavActive] = useState(window.innerWidth > 1024);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  const toggleNavbar = () => {
    if(navActive){
        setNavActive(false);
    }else{
        setNavActive(true);
    }
  };

  const goToHome = () => {
    navigate("/");
    if (window.innerWidth < 1024) {
      setNavActive(false);
    }
  };

  const goToTopRated = () => {
    debugger;
    navigate("/top-rated/1");
    if (window.innerWidth < 1024) {
      setNavActive(false);
    }
  };

  const goToUpcoming = () => {
    navigate("/upcoming/1");
    if (window.innerWidth < 1024) {
      setNavActive(false);
    }
  };

  return (
    <nav className={NavbarStyle.navbar}>

      <div className={NavbarStyle.leftSection}>
        <div className={NavbarStyle.navItem} onClick={goToHome}>MovieDb</div>
      </div>

      <div className={NavbarStyle.rightSection}>
        {
          navActive &&
          <div className={NavbarStyle.navItems}>
            <div className={NavbarStyle.navItem} onClick={goToHome}>Popular</div>
            <div className={NavbarStyle.navItem} onClick={goToTopRated}>Top Rated</div>
            <div className={NavbarStyle.navItem} onClick={goToUpcoming}>Upcoming</div>
          </div>
        }
        <form onSubmit={handleSearch} className=''>
            <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
      </div>

      <div id="menu-btn" className={`fa fa-bars ${NavbarStyle.menuBtn}`} onClick={toggleNavbar}></div>
      
    </nav>
  );
};

export default Navbar;