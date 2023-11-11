import './home.css'

export default function Home() {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
                <div class="container">
                    <a class="navbar-brand" href="#">Velaris Stables</a>
                </div>
            </nav>

            <section class="bgimage" id="home">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                            <h2 class="hero_title">Welcome to Velaris Stables</h2>
                            <p class="hero_desc">We are a boarding, training, and lesson facility located in Raleigh, North Carolina.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}