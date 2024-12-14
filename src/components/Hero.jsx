import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <input className="hero-check" type="checkbox" />
        <table className="tables">
          <tr>
            <td>
              <input type="text" placeholder="Name" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="desc" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="number" placeholder="Enter number" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Enter balance number" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Enter deposit" />
            </td>
          </tr>
          <tr>
            <td>
              <button className="hero-btn">Active</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Hero;
