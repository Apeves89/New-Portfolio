import React from "react";
// import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            About
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-12 col-xl-12 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I am <span className="text-primary">Alexis Peves,</span> a Software Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            with an education in Mechanical Engineering and nearly a decade of experience in the manufacturing industry which involved collaborating with a team to enhance workflow productivity. My background in manufacturing has sharpened my problem-solving abilities along with my analytical skills.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am committed to continuously expanding my knowledge and skillset, both in my professional and personal life, as it is a passion that drives me. My passion for self-improvement and learning is evident in the diverse range of hobbies and interests I have acquired over the years, including plumbing, wood-working, automotive repair, PC building and crafting. They have helped me develop valuable skills that are transferable to software development such as attention to detail, multitasking, independence, proficiency in working with complex systems and ability to work under pressure. 
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am eager to immerse myself in the dynamic and ever-evolving field of Software Engineering and join a team where I can continue to learn, grow, and explore the various technologies and advancements in this field. 
            </p>
            
          </div>
          {/* About me content end */}
          {/* about me personal details start */}
          <div className="col">
            <div className="ps-lg-4">
            {/* <ul
            className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Alexis Peves
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">chat@simone.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>28
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Los Angeles,
                  California
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a> */}
              <figure className="text-end">
              <blockquote className="blockquote fst-italic text-muted">
                <p>"Don’t be a know-it-all.
                  {darkTheme ?
                  <span className="text-white"> Be a learn-it-all</span>
                  :
                  <span className="text-black"> Be a learn-it-all</span>
                  }
                  ."</p>
              </blockquote>
              <figcaption className="blockquote-footer text-primary">
              <cite title="Source Title">Satya Nadella, CEO, Microsoft</cite>
              </figcaption>
            </figure>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        {/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
