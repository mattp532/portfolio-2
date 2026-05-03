import ProjectCard from "../components/ProjectCard.jsx";
import beaverbuddyProj from "../assets/beaverbuddyProj.png";
import beaverbuddyProjGif from "../assets/beaverBuddyProjGif.gif";
import metgamesProj from "../assets/metgames_logo.png";
import metgamesProjGif from "../assets/metGamesProjGif.gif";
import eventfullProj from "../assets/eventfullProj.png";
import eventfullProjGif from "../assets/eventfullProj.gif";
import portfolioProj from "../assets/portfolioProj.png";
import { motion } from "framer-motion";

export default function Projects({ theme }) {
  const projects = [
    {
      id: "beaverbuddy",
      title: "BeaverBuddy",
      image: beaverbuddyProj,
      hoverImage: beaverbuddyProjGif,
      href: "https://github.com/Build-your-bridge/BeaverBuddy",
      description: "AI-Powered wellness app for Canadian Immigrants. Won $3000 and 1st place for Mental Health and Wellbeing at Build a Bridge 2026",
      languages: [
        { name: "Next.js", colour: "purple" },
        { name: "Express", colour: "yellow" },
        { name: "GPT-4o mini", colour: "green" },
      ],
    },
    {
      id: "eventfull",
      title: "EventFull",
      image: eventfullProj,
      hoverImage: eventfullProjGif,
      href: "https://github.com/LooperLoopy/EventFull",
      description: "AI assistant + interactive heat-map for Toronto event planning",
      objectPosition: "center middle",
      languages: [
        { name: "Next.js", colour: "purple" },
        { name: "FastAPI", colour: "blue" },
        { name: "scikit-learn", colour: "green" },
      ],
    },
  ];

  const freelanceProjects = [
    {
      id: "metgames",
      title: "Met Game Studios",
      image: metgamesProj,
      hoverImage: metgamesProjGif,
      href: "https://metropolitangamestudios.ca/",
      description: "Redesigned and built site from scratch",
      languages: [{ name: "Next.js", colour: "purple" }],
    },
  ];

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pb-4"
    >
      <h1 className="font-bold text-2xl mb-6">Projects</h1>
      <div className={`mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} theme={theme} />
        ))}
      </div>

      <h1 className="font-bold text-2xl mb-6">Freelance</h1>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
        {freelanceProjects.map((project) => (
          <ProjectCard key={project.id} project={project} theme={theme} />
        ))}
      </div>
    </motion.div>
  );
}