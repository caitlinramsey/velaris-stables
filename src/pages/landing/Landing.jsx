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
        <div className="enter-container">
          <a className='button home-link pt-5' href="home" rel="noopener noreferrer">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">ENTER</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Landing;