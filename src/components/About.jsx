import React from "react";
// import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" style={{height:"100vh"}} className={"section " + (darkTheme ? "bg-dark-1" : "")}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam in arcu cursus euismod. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Tristique senectus et netus et malesuada fames ac. Cursus sit amet dictum sit. Aliquam nulla facilisi cras fermentum odio eu. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. In arcu cursus euismod quis viverra. Lacus viverra vitae congue eu consequat ac felis donec et. Tristique nulla aliquet enim tortor at auctor urna. Ornare lectus sit amet est placerat in egestas. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Lacus viverra vitae congue eu consequat ac felis donec. Duis ut diam quam nulla porttitor massa id.


            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Cursus risus at ultrices mi tempus imperdiet. Cursus euismod quis viverra nibh cras pulvinar mattis. Aliquet lectus proin nibh nisl condimentum id venenatis. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Tortor posuere ac ut consequat. Sed felis eget velit aliquet sagittis id consectetur. Amet mattis vulputate enim nulla aliquet. Pharetra pharetra massa massa ultricies mi. Libero nunc consequat interdum varius sit amet mattis vulputate. Nulla aliquet porttitor lacus luctus accumsan. Lectus arcu bibendum at varius vel. Mattis pellentesque id nibh tortor id aliquet. Non consectetur a erat nam. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Mi proin sed libero enim. Mi sit amet mauris commodo. Magna sit amet purus gravida. Vitae justo eget magna fermentum. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Molestie at elementum eu facilisis sed odio.
            </p>
            {/* <p className={darkTheme ? "text-white-50" : ""}>
              After college, I took up some hobbies/crafts to take up some free time. One in particular stuck with me over the years and I keep coming back to it over the years. Crochet has been a favorite of mine because it's relaxing and you can make some beautiful projects.
            </p> */}
            
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
