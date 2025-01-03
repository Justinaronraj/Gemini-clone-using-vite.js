import React, { useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';

const cardsData = [
  { text: 'Suggest beautiful places to see on an upcoming road trip', icon: assets.compass_icon },
  { text: 'Briefly summarize this concept: urban planning', icon: assets.bulb_icon },
  { text: 'Brainstorm team bonding activities for our work retreat', icon: assets.message_icon },
  { text: 'Improve the readability of the following code', icon: assets.code_icon },
];

const Main = () => {
  const [inputValue, setInputValue] = useState('');

  const handleCardClick = (text) => {
    setInputValue(text);
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="User icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          {cardsData.map((card, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(card.text)}
            >
              <p>{card.text}</p>
              <img src={card.icon} alt="Card icon" />
            </div>
          ))}
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder='Enter a prompt here'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div>
            <div className="tooltip-container">
  <img src={assets.gallery_icon} alt="Gallery icon" />
  <span className="tooltip-text">Image</span>
</div>
<div className="tooltip-container">
      <img src={assets.mic_icon} alt="Microphone icon" />
      <span className="tooltip-text">Microphone</span>
    </div>
    <div className="tooltip-container">
      <img src={assets.send_icon} alt="Send icon" />
      <span className="tooltip-text">Send</span>
    </div>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
