import "./landing.css";
import DoubleDoors from "./doors/DoubleDoors";

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="main-landing">
          <h1>
            Welcome to Velaris Stables!
            <div className="roller">
              <span id="rolltext">
                Boarding
                <br />
                Lessons
                <br />
                Training
                <br />
              </span>
            </div>
          </h1>
        </div>
        <DoubleDoors />
      </header>
    </div>
  );
}

export default Landing;