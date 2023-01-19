import React from "react";
// import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2022",
      title: "Software Engineering",
      place: "General Assembly",
      desc: "",
    },
    {
      yearRange: "2015 - 2017",
      title: "CNC Machining & Manufacturing Technology",
      place: "Lincoln Technical Institute",
      desc: "",
    },
    {
      yearRange: "2009 - 2014",
      title: "B.S. in Mechanical Engineering",
      place: "New Jersey Institute of Technology",
      desc: "",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2022 - 2023",
      title: "Software Engineering Teaching Assistant",
      place: "General Assembly",
      desc: "",
    },
    {
      yearRange: "2013 - 2022",
      title: "Manufacturing Engineer",
      place: "Sensor Scientific Inc.",
      desc: "",
    },
    {
      yearRange: "2013",
      title: "Junior Laser Engineer",
      place: "AKELA Laser Corp",
      desc: "",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      percent: 85,
    },
    {
      name: "Python",
      percent: 70,
    },
    {
      name: "HTML/CSS",
      percent: 80,
    },
    {
      name: "ReactJS",
      percent: 75,
    },
    {
      name: "Node.js",
      percent: 80,
    },
    {
      name: "Express",
      percent: 75,
    },
    {
      name: "EJS",
      percent: 80,
    },
    {
      name: "Django",
      percent: 70,
    },
    {
      name: "PostgreSQL",
      percent: 70,
    },
    {
      name: "MongoDB",
      percent: 75,
    },
    {
      name: "Git/Github",
      percent: 80,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Resume
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={'https://drive.google.com/file/d/1rrYHcoMHK7aSmcoWvKaRWbk4VMJuDEj-/view?usp=sharing'}
            target='_blank'
            rel="noopener noreferrer"
          >
            View Full Resume
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
