import React from "react";
import './lessons.css';

function Lessons() {
    return (
        <section id="lessons">
            <div className="container mt-4 pt-4">
                <h1 className="text-center">Lessons at Velaris Stables</h1>
                <div className="row mt-4">
                    <div className="col-lg-4">
                        <img src="images/lessons.jpg" class="imageLessonPage" alt=""></img>
                    </div>

                    <div className="col-lg-8">
                        <p> We offer lessons ranging from beginner to advanced in multiple disciplines. We offer lessons in hunters, jumpers, dressage, cross country, trail, and general western.
                        </p>
                        <p> Meet the Trainers:</p>
                        <p>List of trainers here</p>
                        <div className="row mt-3">
                            <p> In order to determine who you should work with and what your riding level is, we require an inital one-on-one lesson where one of our trainers can evaluate your riding ability. You will need to show up 15 minutes before your lesson in order to groom and tack up your horse.
                            </p>
                            <p>Don't have your own horse? No problem! We have a wide range of lovely lessons horses who can suit many different rider's needs.</p>
                        </div>
                    </div>
                    <div id="lesson-horses">
                        <h1 id="meet-our-horses" className="text-center">Meet Our Horses:</h1>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Lessons;