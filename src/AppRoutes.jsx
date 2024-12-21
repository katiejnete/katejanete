import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import ProjectPage from "./components/Projects/ProjectPage";
import NotFound from "./components/NotFound";
import twiceListing from "./assets/twice-listing.png";
import twiceHome from "./assets/twice-home.png";
import skinHome from "./assets/skin-home.png";
import skinRecs from "./assets/skin-recs.png";
import ProjectsContext from "./context/ProjectsContext";
import ExperienceContext from "./context/ExperienceContext";

const AppRoutes = () => {
  const projects = [
    {
      name: "twice-loved",
      title: "TwiceLoved: A Platform for Sharing Surplus Items",
      text: `TwiceLoved is a web application designed to
      facilitate mutual aid by tracking free items available 
      within the user's vicinity. Built with React and Node.js,
      this platform helps reduce landfill waste and curb 
      over-consumption by connecting people with surplus items to those in need.`,
      images: [twiceListing, twiceHome],
      techStack: ["React.js", "Node.js", "Express.js", "Leaflet", "PostgreSQL"],
      features: [
        "Users can list items with title, description, category, condition, and images.",
        "Simultaneously filter and sort listings based on category, condition, and location.",
        "View item details with images, location, and other key info.",
        "Geolocation features to map item locations.",
        "Save favorite listings for easy access.",
      ],
      links: ["https://twiceloved-frontend.onrender.com/"],
    },
    {
      name: "edu-skin",
      title: "EduSkin: Your Personalized Skincare Companion",
      text: `EduSkin is a web application that allows users to access reliable data about cosmetic products. Built with Flask, it empowers consumers by providing ingredient insights and tailored skincare product recommendations, making informed decisions effortless.`,
      images: [skinHome, skinRecs],
      techStack: [
        "scikit-learn",
        "K-Nearest Neighbors",
        "Flask",
        "Python",
        "PostgreSQL",
        "pandas",
        "Selenium",
        "Beautiful Soup",
      ],
      features: [
        "Search and sort products by reviews, price, rating, and safety scores.",
        "Access detailed product pages with ingredient breakdowns and scores.",
        "Save liked or desired products to a wishlist.",
        "Receive personalized skincare product recommendations.",
        "Submit new products for review and inclusion.",
      ],
      links: ["https://eduskin.onrender.com/"],
    },
  ];
  const experiences = [
    {
      role: "Volunteer Front-End Developer",
      company: "Hack for LA, Remote",
      timeline: "Nov 2024 - Present",
      skills: [
        "Collaborate with cross-functional teams to develop civic-focused open-source projects, contributing full-stack expertise to improve community outcomes.",
        "Implement back-end services containerized with Docker for efficient development and deployment.",
        "Conduct code reviews, manage GitHub repositories, and ensure adherence to best practices for clean, maintainable code.",
        "Actively participate in Agile-style sprints, improving collaboration and project progress tracking.",
      ],
    },
    {
      role: "Full-Stack Software Developer Fellow",
      company: "Springboard, Remote",
      timeline: "Dec 2023 - Oct 2024",
      skills: [
        "Completed over 700 hours of hands-on coursework with 1:1 expert mentor oversight, focusing on building scalable, production-ready applications.",
        "Developed end-to-end projects utilizing Python, Flask, React, and SQLAlchemy, following the full software development lifecycle.",
        "Gained expertise in debugging, testing, and implementing best practices in both front-end and back-end development.",
      ],
    },
    {
      role: "Coding Instructor",
      company: "Sigma Coding, Alhambra, CA",
      timeline: "Jan 2019 - Jun 2019",
      skills: [
        "Taught programming fundamentals to elementary students using visual languages such as Snap! and Scratch, fostering early interest in technology.",
        "Simplified complex coding concepts into engaging, age-appropriate lessons to ensure student comprehension and engagement.",
      ],
    },
  ];

  return (
    <ProjectsContext.Provider value={{ projects }}>
      <ExperienceContext.Provider value={{ experiences }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ExperienceContext.Provider>
    </ProjectsContext.Provider>
  );
};

export default AppRoutes;
