import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaMapPin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Section = (props) => {
  const { children} = props;

  return (
    <motion.section
      className={`
  h-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-center md:items-start justify-center`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}

      style={{width:'90%'}}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const {section, setSection} = props
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection section={section} setSection={setSection}/>
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

    </div>
  );
};

const AboutSection = (props) => {
  const {section, setSection} = props;
  return (
    <Section>
      <h1 className="text-5xl md:text-6xl font-extrabold leading-snug">
        Hi 👋 I'm
        {/* <br /> */}
      </h1>
        <h1 className="text-4xl md:text-6xl px-3 py-1 rounded-lg bg-white italic mt-5 font-bold">Lorem Ispum</h1>
      <motion.p
        className="rounded-lg text-2xl bg-white p-3  mt-4 w-[90vw] text-center md:text-left md:w-1/2"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
      
        I am a Professional Graphic designer and Programmer <br />
        I create stunning visuals and creative Programs
     
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        onClick={()=>{
          setSection(3);
        }}
      >
        Contact me
      </motion.button>


    </Section>
  );
};

const skills = [
  {
    title: "Canva Designing",
    level: 90,
  },
  {
    title: "Photo Shop",
    level: 70,
  },
  {
    title: "Python",
    level: 70,
  },
  {
    title: "HTML",
    level: 80,
  },
  {
    title: "CSS",
    level: 80,
  },
];
const languages = [
  {
    title: "Urdu",
    level: 100,
  },
  {
    title: "English",
    level: 80,
  },
  {
    title: "Pushtu",
    level: 100,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  
  return (
    <Section>
      <div className="flex flex-wrap px-20 justify-center items-start flex-col">

        <h2 className="text-4xl text-indigo-800 md:text-black md:text-5xl font-bold text-center">Contact me</h2>

        <div className="flex flex-col  mt-10 space-y-10 items-start">

          <div className="cursor-pointer flex  flex-row items-center space-x-4 justify-center"><FaWhatsapp className="text-4xl text-indigo-500 cursor-pointer" /><a className="cursor-pointer text-2xl text-indigo-600 hover:underline " href="https://wa.me/+923469901771" target="_blank">+0000000000</a></div>

          <div className="cursor-pointer flex  flex-row items-center space-x-4 justify-center"><FaEnvelope className="text-4xl text-indigo-500 cursor-pointer" /><a className="cursor-pointer text-2xl text-indigo-600 hover:underline " href="mailto:humaisali989@gmail.com" target="_blank">00000000@gmail.com</a></div>

          <div className="cursor-pointer flex  flex-row items-center space-x-4 justify-center"><FaMapLocation className="text-4xl text-indigo-500 cursor-pointer" /><a className="cursor-pointer text-2xl text-indigo-600 hover:underline " href="https//mrkhan-solarsystem.vercel.app" target="_blank">XYZ</a></div>

        </div>

      </div>
    </Section>

  );
};


// Projects


const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-5 w-96 max-w-[95vw] mx-auto "
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className="rounded-lg w-full h-64 object-cover mb-4"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-bold"
      >
        View Project
      </a>
    </motion.div>
  );
};

const projectList = [
  {
    title: "Modern Architecture Design",
    description: "A futuristic architectural design for urban spaces.",
    image: "https://i.pinimg.com/236x/94/dc/f1/94dcf1bbe721c3977df177a99f66d6bd.jpg",
    link: "#",
  },
  {
    title: "Creative Logo Design",
    description: "Logo design for a tech startup, focusing on innovation.",
    image: "https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Creative-Idea-Logo-Design-1180x664.jpg",
    link: "#",
  },
  {
    title: "E-Commerce Web App",
    description: "Development of a fully responsive e-commerce platform.",
    image: "https://freebiesui.com/wp-content/uploads/2020/07/Daily-UI-Challenge-075100-Furniture-E-commerce-App-design.jpg",
    link: "#",
  },
  {
    title: "3D Product Animation",
    description: "3D modeling and animation for a product marketing campaign.",
    image: "https://img-new.cgtrader.com/items/4582260/c8acf0d313/large/product-animation-shoe-animation-blender-project-file-3d-model-c8acf0d313.jpg",
    link: "#",
  },
  {
    title: "Branding for Non-Profit",
    description: "Complete branding package for a non-profit organization.",
    image: "https://graphicsfamily.com/wp-content/uploads/2020/10/Non-Profit-Company-Logo-Design-on-paper-1180x755.jpg",
    link: "#",
  },
  {
    title: "Mobile App UI/UX",
    description: "User-centered design for a fitness tracking app.",
    image: "https://images.squarespace-cdn.com/content/v1/5d139a978680e80001bede30/1722189345945-AVNLZ5MBV2XM80IVV9RX/Recognize+Me+Mobile+App+UI+UX+Design+-+Light+Mode+-+Orange.jpg?format=1000w",
    link: "#",
  },
  {
    title: "Digital Marketing Campaign",
    description: "Strategic digital marketing campaign for brand growth.",
    image: "https://zenmedia.com/wp-content/uploads/2022/11/2.3-zen-blog_.jpg",
    link: "#",
  },
  {
    title: "NFT Artwork Design",
    description: "A series of unique NFT designs for digital art enthusiasts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4dMDOxNuwL1BSMNjkAcjViy8gmA0_-Z4Qw&s",
    link: "#",
  },
  {
    title: "Photography Portfolio",
    description: "A minimalistic portfolio website for a professional photographer.",
    image: "https://upqode.com/wp-content/uploads/659ca48aad7d57b8a6e9f6ac_dd64756e-4a4a-476f-8a3a-560773ce87d4-1024x640.jpeg",
    link: "#",
  },
  {
    title: "Virtual Reality Experience",
    description: "An immersive VR experience for a travel and tourism company.",
    image: "https://cdn.prod.website-files.com/62826010140593390f881c8b/659ecf9a8cc3a853dcebabfb_5%20Best%20Virtual%20Reality%20Experiences%20of%202023.jpg",
    link: "#",
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    const numProjects = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    if (currentIndex + numProjects < projectList.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const projectsToShow = () => {
    const numProjects = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    return projectList.slice(currentIndex, currentIndex + numProjects);
  };

  return (
    <Section>
      <h2 className="text-5xl font-bold">Projects</h2>
      <div className="mt-8 flex justify-center space-x-4">
        {projectsToShow().map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center mx-auto w-full space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-indigo-600 text-white py-2 px-4 rounded-full"
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            opacity: currentIndex === 0 ? 0.5 : 1,
          }}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3) >= projectList.length}
          className="bg-indigo-600 text-white py-2 px-4 rounded-full"
          style={{
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: currentIndex + (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3) >= projectList.length ? "not-allowed" : "pointer",
            opacity: currentIndex + (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3) >= projectList.length ? 0.5 : 1,
          }}
        >
          <FaArrowRight />
        </button>
      </div>
    </Section>
  );
};
