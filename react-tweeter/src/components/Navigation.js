import React from 'react';
import './Navigation.css';

export const Navigation = () => {

  return (
    <nav>
      <span>Tweeter</span>
      <span className="write-tweet"
        ><strong>Write</strong> a new tweet <br /><i
          className="fas fa-angle-double-down"
          aria-hidden="true"
        ></i>
      </span>
    </nav>
  )
}