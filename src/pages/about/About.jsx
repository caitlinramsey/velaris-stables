import React from "react";
import './about.css';

function About() {
    return (
        <section id="about">
            <div class="container mt-4 pt-4">
                <h1 class="text-center">About Velaris Stables</h1>
                <div class="row mt-4">
                    <div class="col-lg-4">
                        <img src="images/about.jpeg" class="imageAboutPage" alt=""></img>
                    </div>

                    <div class="col-lg-8">
                        <p> Velaris Stables is a 100 acre facility with some wonderful amenities for you and your horse. The facility boasts a state of the art 100x200 indoor arena with rubber footing as well as a 200x300 outdoor arena with the same footing. Both arenas have full jump courses that are changed weekly.
                        </p>
                        <p> For those not interested in jumping, we have a regulation dressage arena with a speaker system you can connect your phone to so you can practice your freestyle.
                        </p>
                        <p> Other amenities include a full cross country course with a water feature, miles of trails, a trail obstacle course, and a hot walker. 
                        </p>
                        <p> Inside the barn, we have 12x12 and 14x14 matted stalls with automatic waterers. The barn has 8 grooming stalls as well as 2 H/C wash stalls with infrared heaters. We have 3 tack rooms; one for boarders, one for lessons, and one for our owner and trainers. The tack rooms are heated and air conditioned with furniture, a kitchenette, and a lovely view of the indoor arena. We also offer trailer parking on concrete with access to water to make it easy to wash your trailer.
                        </p>
                        <p> We will be offering a show series on site as well as clinics year round.
                        </p>
                        <p>To highlight the key features of our facilities:
                        </p>
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <ul>
                                    <li>100x200 indoor arena</li>
                                    <li>200x300 outdoor arena</li>
                                    <li>20x60 meter dressage arena</li>
                                    <li>Full cross country course</li>
                                    <li>Miles of trails</li>
                                    <li>Trail obstacle course</li>
                                    <li>H/C wash stalls</li>
                                    <li>Heated and AC tack rooms</li>
                                    <li>Trailer parking</li>
                                    <li>Shows and clinics onsite</li>
                                </ul>
                            </div>
                        </div>
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

export default About;