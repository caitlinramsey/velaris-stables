import React from "react";
import { Link } from 'react-router-dom';
import './about.css';
import barnExterior from '../../../images/barn-exterior.png';
import outdoor from '../../../images/outdoor.png';
import indoor from '../../../images/indoor.png';

function About() {
    return (
        <section id="about">
            <div className="container mt-4 pt-4">
                <h1 className="text-center fw-bold">About Velaris Stables</h1>
                <div className="row mt-4">
                    <div className="col-lg-4 mt-4">
                        <div style={{
                            backgroundImage: `url(${barnExterior})`,
                            backgroundRepeat: 'no-repeat',
                            height: '30vh',
                            backgroundSize: 'contain',
                        }}></div>
                    </div>

                    <div className="col-lg-8">
                        <p> Velaris Stables is a 100 acre facility with some wonderful amenities for you and your horse. The facility boasts a state of the art 100'x200' indoor arena with rubber footing as well as a 200'x300' outdoor arena with the same footing. Both arenas have full jump courses that are changed weekly and all weather footing.
                        </p>
                        <p> For those not interested in jumping, we have a regulation dressage arena with a speaker system you can connect your phone to so you can practice your freestyle.
                        </p>
                        <p> Other amenities include a full cross country course with a water feature, miles of trails, a trail obstacle course, and a hot walker.
                        </p>
                        <p> Inside the main barn, we have 12'x12' and 14'x14' matted stalls with automatic waterers. The barn has 8 grooming stalls as well as 2 H/C wash stalls with infrared heaters. We have 3 tack rooms; one for boarders, one for lessons, and one for our owner and trainers. The tack rooms are heated and air conditioned with furniture, a kitchenette, and a lovely view of the indoor arena. We also offer trailer parking on concrete with access to water to make it easy to wash your trailer.
                        </p>
                        <p> We will be offering a show series on site as well as clinics year round.
                        </p>
                    </div>
                    <div className="row mt-3">
                        <p>To highlight the <span className="fw-bold">key features</span> of our facility:
                        </p>
                        <div className="col-md-3 key-features fw-bold">
                            <ul>
                                <li>100' x 200' indoor arena</li>
                                <li>200' x 300' outdoor arena</li>
                                <li>20 x 60 meter dressage arena</li>
                                <li>Full cross country course</li>
                                <li>Miles of trails</li>
                                <li>Trail obstacle course</li>
                                <li>H/C wash stalls</li>
                                <li>Heated and AC tack rooms</li>
                                <li>Trailer parking</li>
                                <li>Shows and clinics onsite</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 indoor">
                            <div style={{
                                backgroundImage: `url(${indoor})`,
                                backgroundRepeat: 'no-repeat',
                                height: '30vh',
                                width: '40vw',
                                backgroundSize: 'contain',
                            }}></div>
                        </div>
                        
                        <div className="col-lg-4">
                        <div style={{
                            backgroundImage: `url(${outdoor})`,
                            backgroundRepeat: 'no-repeat',
                            height: '30vh',
                            width: '40vw',
                            backgroundSize: 'contain',
                        }}></div>
                    </div>
                    </div>
                    <div className="row mt-3 text-center">
                        <p> We'd love to give you a tour of the facility and show what we have to offer you and your equine. Please navigate to the <Link to='/Contact' className='about-contact'>Contact Page</Link> to find out how to reach out to us and schedule a time!
                        </p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default About;