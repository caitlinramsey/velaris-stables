import React from "react";
import './lessons.css';

function Lessons() {
    return (
        <section id="about">
            <div class="container mt-4 pt-4">
                <h1 class="text-center">Boarding at Velaris Stables</h1>
                <div class="row mt-4">
                    <div class="col-lg-4">
                        <img src="images/boarding.jpg" class="imageBoardingPage" alt=""></img>
                    </div>

                    <div class="col-lg-8">
                        <p> We have three levels of boarding at Velaris Stables. We offer self care, full care, and training board. To learn more about our facilities, please visit the About (insert link here) page.
                        </p>
                        <p> Inside the barn, we have 12x12 and 14x14 matted stalls with automatic waterers. The barn has 8 grooming stalls as well as 2 H/C wash stalls with infrared heaters. We have 3 tack rooms; one for boarders, one for lessons, and one for our owner and trainers. The tack rooms are heated and air conditioned with furniture, a kitchenette, and a lovely view of the indoor arena. We also offer trailer parking on concrete with access to water to make it easy to wash your trailer.
                        </p>
                        <p> Self Care Boarding: 
                            <br>
                            For self care boarding, we have a small 8 stall barn with a tack room and pastures attached. You are responsible for buying hay, grain, and shavings for your horse. We are happy to allow you to purchase these from us if needed. You are responsible for cleaning your horse's stall, feeding and watering them, and turning them in/out. For a small fee, on a per service basis, we are happy to do this for you.
                            </br>
                        </p>
                        <p> Full Care Boarding: 
                            <br>
                            For full care boarding, we have a 30 stall barn with multiple tack rooms and pastures attached. This barn contains the indoor arena so there is easy access to that as well. We will take care of hay, grain, and shavings for your horse. Stalls will be cleaned daily or twice daily if horses are in. We take care of all feeding, watering, turning in/out, blanketing/unblanketing, fly protection, and basic wound care.
                            </br>
                        </p>
                        <p> Training Board: 
                            <br>
                            For training board, you get all the benefits and services of full care boarding in addition to 3 training rides, lessons, or lunging sessions a week. What routine your horse will be in will depend on age, fitness, and what your goals are. You will work closely with one of our trainers in order to establish this routine and work towards your goals.
                            </br>
                        </p>
                        <div class="row mt-3">
                            <p> We'd love to give you a tour of the facility and show what we have to offer you and your equine. Please navigate to the contact page to find out how to reach out to us and schedule a time!
                            </p>
                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Lessons;