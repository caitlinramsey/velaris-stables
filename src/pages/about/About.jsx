import React from "react";
import { Link } from 'react-router-dom';
import './about.css';
import barnExterior from '../../../images/barn-exterior.png';
import outdoor from '../../../images/outdoor.png';
import indoor from '../../../images/indoor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorseHead } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <section id="about">
            <div className="container mt-4 pt-4">
                <h1 className="text-center text-black fw-bold bg-transparent">About Velaris Stables</h1>
                <div className="row mt-4">
                    <div className="barn-exterior-img col-lg-4 mt-4 text-center">
                        <div style={{
                            backgroundImage: `url(${barnExterior})`,
                            backgroundRepeat: 'no-repeat',
                            height: '30vh',
                            backgroundSize: 'contain',
                        }}></div>
                    </div>

                    <div className="col-lg-8 about-desc">
                        <p> Velaris Stables is a <span className="fw-bold">100</span> acre facility with some wonderful amenities for both you and your horse. The facility boasts a state of the art <span className="fw-bold">100' x 200'</span> indoor arena with rubber footing as well as a <span className="fw-bold">200' x 300'</span> outdoor arena with the same footing. Both arenas have full jump courses that are changed weekly have all weather footing.
                        </p>
                        <p> For those not interested in jumping, we have a regulation dressage arena with a speaker system you can connect your phone to so you can practice your freestyle.
                        </p>
                        <p> Other amenities include a full cross country course with a water feature, miles of trails, a covered <span className="fw-bold">80'</span> round pen with wooden sides, a trail obstacle course, and a hot walker.
                        </p>
                        <p> Inside the main barn, we have <span className="fw-bold">12' x 12'</span> and <span className="fw-bold">14' x 14'</span> matted stalls with automatic waterers. The barn has <span className="fw-bold">8</span> grooming stalls as well as <span className="fw-bold">2</span> H/C wash stalls with infrared heaters. We have <span className="fw-bold">3</span> tack rooms; one for boarders, one for lessons, and one for our owner and trainers. The tack rooms are heated and air conditioned with furniture, a kitchenette, a bathroom, and a lovely view of the indoor arena. We also offer trailer parking on concrete with access to water to make it easy to wash your trailer.
                        </p>
                        <p> We will be offering a show series on site, hunter paces, and clinics year round.
                        </p>
                    </div>
                    <hr style={{ border: '2px solid black', margin: '20px 0' }} />
                    <div className="row mt-3 key-features-title">
                        <p>To highlight the <span className="fw-bold">key features</span> of our facility:
                        </p>
                        <div className="col-md-3 key-features">
                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}100' x 200' indoor arena
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}200' x 300' outdoor arena
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}20 x 60 meter dressage arena
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Full cross country course
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Covered round pen
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Miles of trails

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Trail obstacle course

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}H/C wash stalls

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Heated and AC tack rooms

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Trailer parking

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Shows and clinics onsite

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHorseHead} />{' '}Hot walker

                                </li>
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

                        <div className="col-lg-4 outdoor">
                            <div style={{
                                backgroundImage: `url(${outdoor})`,
                                backgroundRepeat: 'no-repeat',
                                height: '30vh',
                                width: '40vw',
                                backgroundSize: 'contain',
                            }}></div>
                        </div>
                    </div>
                    <hr style={{ border: '2px solid black', margin: '20px 0' }} />
                    <div className="row mt-3 text-center fs-4">
                        <p> We'd love to give you a tour of the facility and show what we have to offer you and your equine. Please navigate to the <Link to='/Contact' className='about-contact'>Contact Page</Link> to find out how to reach out to us and schedule a time!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;