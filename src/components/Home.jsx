import React from "react";
import Typewriter from "typewriter-effect";
// import videobg from "../videos/home.mp4";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  return (
    <section id="home">
      <div className="hero-wrap">
        {darkTheme ?
        <div className="hero-mask opacity-8 bg-dark" />
        :
        <div className="hero-mask opacity-7 bg-dark" />
        }
        

        {/* ---------------image background------------------ */}
        {/* <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/intro-bg2.jpg")' }}
        ></div> */}

        <div id="carouselExampleFade" className="hero-bg parallax carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/intro-bg1.jpg" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="Portfolio Background Image 1"/>
            </div>
            <div className="carousel-item">
              <img src="images/intro-bg2.jpg" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="Portfolio Background Image 2"/>
            </div>
            <div className="carousel-item">
              <img src="images/intro-bg3.jpg" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="Portfolio Background Image 3"/>
            </div>
            <div className="carousel-item">
              <img src="images/intro-bg4.jpg" style={{ width: "100%", height: "100vh", objectFit: "cover" }} alt="Portfolio Background Image 4"/>
            </div>
          </div>
        </div>

        {/* -------------------video background---------------------- */}

        {/* <div className="player hero-bg parallax">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          ></video>
        </div> */}

        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    onInit={(typewriter)=>{
                      typewriter.pauseFor(1500)
                      .typeString('I am Alexis Peves')
                      .pauseFor(1500)
                      .deleteChars(12)
                      .typeString('a Software Engineer')
                      .pauseFor(1500)
                      .deleteChars(17)
                      .typeString('Mechanical Engineer')
                      .pauseFor(1500)
                      .deleteChars(19)
                      .typeString('Crafter ...')
                      .pauseFor(1500)
                      .start()
                    }}
                    options={{
                      // strings: [
                      //   "I am Alexis Peves",
                      //   "I am a Software Engineer",
                      //   "I am a Mechanical Engineer",
                      //   "I am a Crafter ...",
                      // ],
                      // autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
                {/* <p className="text-5 text-light mb-4">
                  based in Los Angeles, California.
                </p> */}
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Hire Me
                </a>
                <a
                  className="btn btn-outline-primary rounded-pill shadow-none mt-2"
                  href={'https://drive.google.com/file/d/1DDY3ZXRSkgsv8ibqdiCBoPXRQ1QlKO1s/view?usp=sharing'}
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  Resume
                  <span className="ms-1">
                    <i className="fas fa-download" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
