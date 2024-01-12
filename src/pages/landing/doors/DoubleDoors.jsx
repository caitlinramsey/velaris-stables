import React, { useState } from 'react';
import './doubledoors.css';

const DoubleDoors = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`double-door-container ${isOpen ? 'open' : ''}`}>
      <div className="door left-door"></div>
      <div className="door right-door"></div>
      <button className="toggle-button" onClick={handleToggle}>
        Toggle Doors
      </button>
    </div>
  );
};

export default DoubleDoors;