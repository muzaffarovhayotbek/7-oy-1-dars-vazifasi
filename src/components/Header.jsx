import React from 'react';
import './Header.css';
import filter from '../assets/filter.svg';
import search from '../assets/Input.svg';
import buttonIcon from '../assets/Button.svg';

function Header() {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header-logo">
          <img src={filter} alt="" />
          <form>
            <input className="header-input" type="text" placeholder="Search" />
          </form>
        </div>
        <div className="header-button">
          <button className="btn">
            <img src={buttonIcon} width={20} alt="" />
            Add Customer
          </button>
        </div>
      </div>
      <div className="header-main">
        <div className="container header-main__container">
          <input className='checkbox' type="checkbox" />
          <p className='header-main-desc'>description</p>
          <h2 className='header-main-rate'>Rate</h2>
          <h3 className='header-main-balance'>balance</h3>
          <h2 className='header-main-deposit'>Deposit</h2>
          <h6 className='header-main-vector'>...</h6>
        </div>
      </div>
    </div>
  );
}

export default Header;
