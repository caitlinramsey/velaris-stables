import React, { useState, useEffect } from 'react';
import './doubledoors.css';

const DoubleDoors = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const doors = document.querySelectorAll('.door');

            doors.forEach(door => {
                door.addEventListener('transitioned', handleTransitionEnd);
                door.classList.add('transitioning');
            });

            return () => {
                const doors = document.querySelectorAll('.door');
                doors.forEach(door => {
                    door.removeEventListener('transitioned', handleTransitionEnd);
                });
            };
        }
    }, [isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleTransitionEnd = () => {
        const doors = document.querySelectorAll('.door');
        doors.forEach(door => {
            door.classList.remove('transitioning');
        });

        setTimeout(() => {
            window.location.href = 'home';
        }, 3000);
    };

    return (
        <div className={`double-door-container ${isOpen ? 'open' : ''}`}>
            <div className="door left-door"></div>
            <div className='center-aisle'></div>
            <div className="door right-door"></div>
            <div className='enter-container'>
                <a className='button home-link pt-5' href="home" rel="noopener noreferrer">
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className="button__text" onClick={handleToggle}>Enter</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                </a>
            </div>
        </div>
    );
};

export default DoubleDoors;