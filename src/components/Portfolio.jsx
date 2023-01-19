import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("Development");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DEVELOPMENT: "Development",
    CRAFTING: "Crafting",
    // PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "wastD",
      projectInfo:
        "wastD is a social media app to allow users to post their favorite cocktail drinks and comment on existing posts. Google Maps API is integrated to show the location added to the post. This app was created by a group 4 developers, including myself. The app is hosted on Heroku, please allow time for the app to start up before viewing.",
      client: "Ruby Clinton",
      technologies: "Python, Django, ReactJS",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "wastD",
        link: "https://rocky-temple-80630.herokuapp.com/",
      },
      repo: {
        name:"Backend",
        link: "https://github.com/sarameix/drink-rest-api",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/wastD1.jpg",
      sliderImages: [
        "images/projects/wastD2.jpg",
        "images/projects/wastD3.jpg",
      ],
      categories: [filters.DEVELOPMENT],
    },
    {
      title: "Project Showcase",
      projectInfo:
        "Project Showcase is an app where users can upload and show their personal projects. The users can provide images, a summary about the project and useful links in creating the project. The app is hosted on Heroku, please allow time for the app to start up before viewing.",
      client: "Ruby Clinton",
      technologies: "Node.js, Express, EJS, MongoDB, Bootstrap, jQuery",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "Project Showcase",
        link: "https://obscure-coast-07598.herokuapp.com/",
      },
      repo:{
        name:"Repo",
        link: "https://github.com/Apeves89/ZoidbergCRUDapp",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/showcase-1.jpg",
      sliderImages: [
        "images/projects/showcase-2.jpeg",
        "images/projects/showcase-3.jpeg"
      ],
      categories: [filters.DEVELOPMENT],
    },
    {
      title: "Project Coming soon",
      projectInfo:
        "Actively learning new technologies to create web applications.",
      client: "Ruby Clinton",
      technologies: "Not Available Yet",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "",
        link: "",
      },
      repo:{
        name:"",
        link: "",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/newproject.jpg",
      sliderImages: [
      ],
      categories: [filters.DEVELOPMENT],
    },
    {
      title: "Llama Amigurumi",
      projectInfo:
        "After two years of crocheting, I found the perfect llama pattern to follow. I had to translate and transcribe this pattern into my notes for future iterations. This crochet pattern was created by Knitoys & Crafts. Video link provided below.",
      client: "Ruby Clinton",
      technologies: "Crocheting",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "Knitoys & Crafts",
        link: "https://www.youtube.com/playlist?list=PLqKKxGCteJVz6Bm-8Zp4ARf0JcCPuB292",
      },
      repo:{
        name:"",
        link: "",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/llama-1.jpg",
      sliderImages: [
        "images/projects/llama-1.jpg",
      ],
      categories: [filters.CRAFTING],
    },
    {
      title: "Conrad the Crocodile",
      projectInfo:
        "Conrad is one of my first and most intricate crochet patterns I have attempted so far. Consisted of 20+ parts that were required to be sewn together. Crochet pattern was created by IlDikko. Link to the pattern below.",
      client: "Ruby Clinton",
      technologies: "Crocheting",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "IlDikko Crochet",
        link: "https://www.etsy.com/listing/246003846/amigurumi-pattern-conrad-the-crocodile?",
      },
      repo:{
        name:"",
        link: "",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "https://i.imgur.com/elHLPAE.jpg",
      sliderImages: [
        "https://i.imgur.com/KyI4Otj.jpg",
      ],
      categories: [filters.CRAFTING],
    },
    // {
    //   title: "Project Title 6",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-6.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.BRAND],
    // },
    // {
    //   title: "Project Title 7",
    //   projectInfo:
    //     "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    //   client: "Ruby Clinton",
    //   technologies: "iOS, HTML5, CSS3, PHP, Java",
    //   industry: "Art & Design",
    //   date: "July 16, 2019",
    //   url: {
    //     name: "www.example.com",
    //     link: "https://www.example.com",
    //   },
    //   socialLinks: {
    //     facebook: "http://www.facebook.com/",
    //     twitter: "http://www.twitter.com/",
    //     google: "http://www.google.com/",
    //     instagram: "http://www.instagram.com/",
    //     mail: "mailto:example@gmail.com",
    //   },
    //   thumbImage: "images/projects/project-7.jpg",
    //   sliderImages: [
    //     "images/projects/project-1.jpg",
    //     "images/projects/project-5.jpg",
    //   ],
    //   categories: [filters.DESIGN, filters.PHOTOS],
    // },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Projects
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              Projects
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt="Project Thumbnail"
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="#"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
