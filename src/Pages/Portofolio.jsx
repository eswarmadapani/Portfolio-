import React, { useEffect, useState, useCallback } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { projects as localProjects } from "../data/projects";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Boxes, Layout, Shapes, Sparkles } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-6 py-3
      text-[#8f95ff] 
      hover:text-white 
      text-sm 
      font-bold 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-[#7c83ff]/10 
      hover:bg-[#7c83ff]/20
      rounded-xl
      border 
      border-[#7c83ff]/20
      hover:border-[#7c83ff]/30
      backdrop-blur-xl
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More Projects"}
      <Sparkles className={`w-4 h-4 transition-all duration-300 ${isShowingMore ? "rotate-180" : "group-hover:rotate-12"}`} />
    </span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "tailwind.svg", language: "Tailwind CSS" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "vite.svg", language: "Vite" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "MUI.svg", language: "Material UI" },
  { icon: "vercel.svg", language: "Vercel" },
  { icon: "SweetAlert.svg", language: "SweetAlert2" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    AOS.init({ once: false });
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setProjects(localProjects);
      localStorage.setItem("projects", JSON.stringify(localProjects));
    } catch (error) {
      console.error("Error setting local data:", error);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);

  return (
    <div className="relative bg-[#050312]" id="Portofolio">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-[10%] w-[30%] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 right-[10%] w-[30%] h-[300px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="md:px-[10%] px-[5%] w-full py-[5%] bg-[#050312] overflow-hidden">
      {/* Header section with unified title style */}
      <div className="text-center pb-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#7c83ff] to-[#b47cff]">
          Portfolio Showcase
        </h2>
        <p className="text-[#a8b1d3] max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed">
          Explore my journey through projects and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* Custom styled AppBar for Tabs */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(20px)",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#a8b1d3",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "16px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(180, 124, 255, 0.14)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(124, 131, 255, 0.22), rgba(180, 124, 255, 0.22))",
                  boxShadow: "0 4px 20px -5px rgba(124, 131, 255, 0.42)",
                  "& .lucide": {
                     color: "#8f95ff",
                  }
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Layout className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Shapes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex flex-col justify-center items-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-8 w-full">
                {displayedProjects.map((project, index) => (
                  <div
                    key={project.id || index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration="1000"
                  >
                    <CardProject
                      Img={project.image}
                      Title={project.title}
                      Description={project.description}
                      Link={project.demo}
                      id={project.id}
                    />
                  </div>
                ))}
              </div>
              
              {projects.length > initialItems && (
                <div className="mt-12 w-full flex justify-center">
                  <ToggleButton
                    onClick={toggleShowMore}
                    isShowingMore={showAllProjects}
                  />
                </div>
              )}
            </div>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-6">
                {techStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay={index * 50}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
      </div>
    </div>
  );
}