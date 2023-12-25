import './home.css'
import background from '../../../images/sven-right-no-halter.png'

function Home() {
    return (
        <>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                backgroundSize: 'cover',
                position: 'relative',
            }}>
                <section class="bgimage" id="home">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 hero-text">
                                <h2 className="hero_title">Welcome to Velaris Stables</h2>
                                <p className="hero_desc">We are a boarding, training, and lesson facility located in Raleigh, North Carolina.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;