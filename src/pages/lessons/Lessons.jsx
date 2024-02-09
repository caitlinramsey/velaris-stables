import React, { useState } from "react";
import './lessons.css';
import me from '../../../images/me-hershey.jpg';
import sven from '../../../images/lesson-horses/sven-front-no-halter.png';
import hershey from '../../../images/lesson-horses/hershey.jpg';
import freddie from '../../../images/lesson-horses/freddie.jpg';
import zippy from '../../../images/lesson-horses/zippy.jpg';
import linus from '../../../images/lesson-horses/linus.jpg';
import bennyXc from '../../../images/lesson-horses/benny-xc.jpg';

function Lessons() {
    const [isPricingExpanded, setPricingExpanded] = useState(false);
    const [isOwnHorseExpanded, setOwnHorseExpanded] = useState(false);

    const togglePricing = () => {
        setPricingExpanded(!isPricingExpanded);
    };

    const toggleOwnHorse = () => {
        setOwnHorseExpanded(!isOwnHorseExpanded);
    };

    return (
        <section id="lessons">
            <div className="container mt-4 pt-4">
                <h1 className="lessons fw-bold text-center text-black bg-transparent">Lessons at Velaris Stables</h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <img src="images/lessons.jpg" className="imageLessonPage" alt="" />
                    </div>
                    <div className="lesson-desc col-lg-12 text-center">
                        <p> We offer lessons ranging from beginner to advanced in multiple disciplines. We offer lessons in hunters, jumpers, dressage, cross country, trail, and general western.
                        </p>
                        <div className="row mt-3 mb-4">
                            <p> In order to determine who you should work with and what your riding level is, we require an initial one-on-one lesson where one of our trainers can evaluate your riding ability. You will need to show up <span className="fw-bold text-decoration-underline">15</span> minutes before your lesson to groom and tack up your horse.
                            </p>
                        </div>
                        <div className="question-section">
                            <div className="lesson-pricing-section mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-link lesson-pricing-btn" onClick={togglePricing}>
                                        {isPricingExpanded ? '-' : '+'}
                                    </button>
                                    <h1 className="lesson-pricing fw-bold text-black bg-transparent">Lesson Pricing</h1>
                                </div>
                                {isPricingExpanded && (
                                    <div className="lesson-prices">
                                        <p><span className="fw-bold">30</span> minute private lesson -- <span className="fw-bold">$40</span></p>
                                        <p><span className="fw-bold">1</span> hour private lesson -- <span className="fw-bold">$60</span></p>
                                        <p><span className="fw-bold">30</span> minute group lesson -- <span className="fw-bold">$30</span></p>
                                        <p><span className="fw-bold">1</span> hour group lesson -- <span className="fw-bold">$50</span></p>
                                    </div>
                                )}
                            </div>
                            <div className="own-horse-section mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <button className="btn btn-link own-horse-btn" onClick={toggleOwnHorse}>
                                        {isOwnHorseExpanded ? '-' : '+'}
                                    </button>
                                    <h1 className="own-horse fw-bold text-black bg-transparent">Do I need my own horse?</h1>
                                </div>
                                {isOwnHorseExpanded && (
                                    <div className="own-horse-question">
                                        <p className="own-horse-desc">Nope! We have a wide range of wonderful lessons horses that can accommodate you! From dressage to jumping to western, we have it all.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <h1 className="meet-trainers fs-1 fw-bold text-black bg-transparent"> Meet the Trainers</h1>
                        <div className="col-lg-8 trainer-info">
                            <div style={{
                                backgroundImage: `url(${me})`,
                                backgroundRepeat: 'no-repeat',
                                height: '30vh',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center center',
                                overflow: 'hidden',
                                margin: '0 auto',
                            }}></div>
                            <h4 className="caitlin-ramsey fw-bold">Caitlin Ramsey</h4>
                            <p>Caitlin rode her first horse at 2 years old and started taking lessons at 6 years old. She has experience with hunters, jumpers, eventing, dressage, driving, and a small bit in reining. She teaches beginner and some intermediate lessons while spending most of her time working with her young horse, Sven.
                            </p>
                        </div>
                    </div>
                    <div id="lesson-horses" className="row text-center">
                        <h1 className="text-center fs-1 fw-bold col-12 pb-3 text-black bg-transparent meet-our-horses">Meet Our Lesson Horses</h1>

                        {[
                            { image: sven, name: 'Sven', description: 'Sven is a 3.5 year old, 13.3 hand, Norwegian Fjord gelding who is not part of the lesson program yet, but will be once he is old enough.' },
                            { image: hershey, name: 'Hershey', description: 'Hershey is a 21 year old, 13.2 hand Welsh pony gelding. He loves jumpers and is very quick and handy.' },
                            { image: bennyXc, name: 'Benny', description: 'Benny is a 15 year old, 16 hand American Warmblood gelding. Benny is great for hunters, jumpers, and eventing. He is happy as long as there is a jump infront of him.' },
                            { image: freddie, name: 'Freddie', description: 'Freddie is a Quarter Horse gelding who was a pony horse on the racetrack. He is loving his second career learning to jump.' },
                            { image: zippy, name: 'Zippy', description: 'Zippy is a 15.2 hand, American Paint mare who has mainly done trail riding but is loving learning to jump and learning dressage.' },
                            { image: linus, name: 'Linus', description: 'Linus is a 4 year old, 14 hand, Appaloosa gelding. He is still young and learning but is very safe and quiet.' },
                        ].map((horse, index) => (
                            <div className="col-lg-4 mb-4" key={index}>
                                <div className="lesson-image-container" style={{
                                    backgroundImage: `url(${horse.image})`,
                                    backgroundRepeat: 'no-repeat',
                                    height: '30vh',
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    overflow: 'hidden',
                                    margin: '0 auto',
                                    position: 'relative',
                                    transition: '0.3s ease',
                                }}>
                                    <div className="lesson-image-overlay">
                                        <h3 className="lesson-image-caption">{horse.name}</h3>
                                        <h4 className="lesson-image-description">{horse.description}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lessons;