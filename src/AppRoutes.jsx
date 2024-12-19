import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import ProjectPage from "./components/Projects/ProjectPage";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import twiceListing from "./assets/twice-listing.png";
import twiceHome from "./assets/twice-home.png";
import ProjectsContext from "./context/ProjectsContext";

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
      techStack: ["Node.js", "React"],
      features: [
        "Users can list items with title, description, category, condition, and images.",
        "Simultaneously filter and sort listings based on category, condition, and location.",
        "View item details with images, location, and other key info.",
        "Geolocation features to map item locations.",
        "Save favorite listings for easy access.",
      ],
      links: ["https://twiceloved-frontend.onrender.com/", "github.com"],
    },
    {
      name: "edu-skin",
      title: "EduSkin: Your Personalized Skincare Companion",
      text: `EduSkin is a web application that allows users to access reliable data about cosmetic products. Built with Flask, it empowers consumers by providing ingredient insights and tailored skincare product recommendations, making informed decisions effortless.`,
      images: [twiceListing, twiceHome],
      techStack: ["Flask", "Python", "Scikit-learn", "BeautifulSoup"],
      features: [
        "Search and sort products by reviews, price, rating, and safety scores.",
        "Access detailed product pages with ingredient breakdowns and scores.",
        "Save liked or desired products to a wishlist.",
        "Receive personalized skincare product recommendations.",
        "Submit new products for review and inclusion.",
      ],
      links: ["https://eduskin-frontend.onrender.com/", "github.com"],
    },
  ];

  return (
    <ProjectsContext.Provider value={{ projects }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:name" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/playground" /> */}
      </Routes>
    </ProjectsContext.Provider>
  );
};

export default AppRoutes;
