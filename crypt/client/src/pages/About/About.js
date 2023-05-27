import React from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';

const About = () => {
  return (
    <div className="about-container">
      
      <div className="about-content">
        <h1 className="about-heading">TopCoins</h1>
        <h4 className="about-description">
          TopCoins is an application that helps users stay updated with the current time of cryptocurrencies and provides a platform to buy and sell crypto.
        </h4>
        <h4 className="about-details">
          Our app displays real-time cryptocurrency data, including prices, market trends, and other relevant information. Users can explore various cryptocurrencies, view detailed charts, and make informed decisions about buying or selling crypto.
        </h4>
        <h4 className="about-details">
          Whether you're a seasoned investor or new to the world of cryptocurrencies, TopCoins is designed to simplify the process and empower you to make smart financial decisions.
        </h4>
        <h4 className="about-details">
          Get started today and take control of your cryptocurrency portfolio with TopCoins!
        </h4>
      </div>
    </div>
  );
};

export default About;
