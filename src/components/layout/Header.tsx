'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div
        id="header-sticky"
        className={`header__area header-1 gray-bg ${isSticky ? 'rs-sticky' : ''}`}
      >
        <div className="header-container">
          <div className="mega__menu-wrapper p-relative">
            <div className="header__main">
              {/* Logo */}
              <div className="header__left">
                <div className="header__logo">
                  <Link href="/">
                    <div className="logo">
                      <img src="/assets/img/header/logo.svg" alt="logo" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="header__middle">
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li id="nav-home">
                          <Link href="/">Home</Link>
                        </li>
                        <li id="nav-about" className="has-dropdown">
                          <Link href="/about">About Us</Link>
                          <ul className="submenu">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/test-about-us">Test About Us</Link></li>
                          </ul>
                        </li>
                        <li id="nav-services">
                          <Link href="/services">Services</Link>
                        </li>
                        <li id="nav-story">
                          <Link href="/story">Story</Link>
                        </li>
                        <li id="nav-countries" className="has-dropdown">
                          <Link href="/countries">Countries</Link>
                          <ul className="submenu">
                            <li><Link href="/countries">Countries</Link></li>
                            <li><Link href="/country-info">Country Details</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="header__right">
                <div className="header__action d-flex align-items-center">
                  <div className="header__btn-wrap d-none d-sm-inline-flex">
                    <Link href="/contact" className="rr-btn">
                      Get An Appointment <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="header__hamburger ml-20 d-xl-none">
                    <div className="sidebar__toggle">
                      <button
                        className="bar-icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div id="popup-search-box">
        <div className="box-inner-wrap d-flex align-items-center">
          <form id="form" action="#" method="get" role="search">
            <input
              id="popup-search"
              type="text"
              name="s"
              placeholder="Type keywords here..."
            />
          </form>
          <div className="search-close">
            <i className="fa-sharp fa-regular fa-xmark"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
