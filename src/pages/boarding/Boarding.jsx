import React from "react";
import { Link } from 'react-router-dom';
import './boarding.css';
import selfCare from '../../../images/self-care-barn.jpg';
import fullCare from '../../../images/full-care-board.jpeg';
import trainingCare from '../../../images/training-board.jpg';

function Boarding() {
  return (
    <section id="boarding">
      <div className="container mt-4 pt-4">
        <h1 className="text-center">Boarding at Velaris Stables</h1>
        <div className="row mt-4">
          <div className="col-lg-12 boarding-desc">
            <p>
              We have three levels of boarding at Velaris Stables. We offer <a href="#self-care" className="self-text"><span className="magical--underline">self care</span></a>, <a href="#full-care" className="full-text"><span className="magical--underline">full care</span></a>, and <a href="#training-care" className="training-text"><span className="magical--underline">training board</span></a>. To learn more about our facilities, please visit the <Link to='/About' className="boarding-about"><span className="boarding-about-text">About</span></Link> page.
            </p>
            <p>
              Inside the main barn, we have 12x12 and 14x14 matted stalls with automatic waterers. The barn has 8 grooming stalls as well as 2 H/C wash stalls with infrared heaters. We have 3 tack rooms; one for boarders, one for lessons, and one for our owner and trainers. The tack rooms are heated and air conditioned with furniture, a kitchenette, and a lovely view of the indoor arena. We also offer trailer parking on concrete with access to water to make it easy to wash your trailer.
            </p>
          </div>

          <hr style={{ border: '2px solid black', margin: '20px 0' }} />

          <div className="row mt-3">
            <div className="col-lg-3">
              <div style={{
                backgroundImage: `url(${selfCare})`,
                backgroundRepeat: 'no-repeat',
                height: '30vh',
                backgroundSize: 'contain',
              }}></div>
            </div>

            <div className="col-lg-8 text-center mt-4">
              <h2 id="self-care" className="self-care-title"> Self Care Boarding
              </h2>
              <h4>$400/month</h4>
              <p className="self-care-desc">
                For self care boarding, we have a small 8 stall barn with a tack room, 2 grooming stalls, a H/C wash stall and pastures attached. You are responsible for buying hay, grain, and shavings for your horse. We are happy to allow you to purchase these from us if needed. You are responsible for cleaning your horse's stall, feeding, watering, and turning them in/out. For a small fee, on a per service basis, we are happy to do this for you.
              </p>
            </div>
          </div>

          <hr style={{ border: '2px solid black', margin: '20px 0' }} />

          <div className="row mt-3">
            <div className="col-lg-8 text-center mt-5">
              <h2 id="full-care" className="full-care-title"> Full Care Boarding
              </h2>
              <h4>$650/month</h4>
              <p className="full-care-desc">
                For full care boarding, we have a 30 stall barn with multiple tack rooms, 8 grooming stalls, 4 H/C wash stalls and pastures attached. This barn contains the indoor arena so there is easy access to that as well as to the outdoor. We will take care of hay, grain, and shavings for your horse. Stalls will be cleaned daily or twice daily if horses are in. We take care of all feeding, watering, turning in/out, blanketing/unblanketing, fly protection, and basic wound care.
              </p>
            </div>
            <div className="col-lg-3 mt-5">
              <div style={{
                backgroundImage: `url(${fullCare})`,
                backgroundRepeat: 'no-repeat',
                height: '30vh',
                backgroundSize: 'contain',
              }}></div>
            </div>
          </div>

          <hr style={{ border: '2px solid black', margin: '20px 0' }} />

          <div className="row mt-3">
            <div className="col-lg-3 mb-5">
              <div style={{
                backgroundImage: `url(${trainingCare})`,
                backgroundRepeat: 'no-repeat',
                height: '30vh',
                backgroundSize: 'contain',
              }}></div>
            </div>

            <div className="col-lg-8 text-center mt-5">
              <h2 id="training-care" className="training-care-title"> Training Board
              </h2>
              <h4>$800/month</h4>
              <p className="training-care-desc">
                For training board, you get all the benefits and services of full care boarding in addition to 3 training rides, lessons, and/or lunging sessions a week. What routine your horse will be in will depend on age, fitness, and your goals. You will work closely with one of our trainers in order to establish this routine and work towards your goals.
              </p>
            </div>
          </div>

          <hr style={{ border: '2px solid black', margin: '20px 0' }} />

          <div className="row mt-3 mb-3 text-center">
            <h4> We'd love to give you a tour of the facility and show what we have to offer you and your equine. Please navigate to the <Link to='/Contact' className="boarding-contact">Contact Page</Link> to find out how to reach out to us and schedule a time!
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Boarding;
