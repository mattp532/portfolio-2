import Language from "../Language.jsx";
import beaverbuddyProj from "../assets/beaverbuddyProj.png";
import metgamesProj from "../assets/metgames_logo.png";
import eventfullProj from "../assets/eventfullProj.png";
import portfolioProj from "../assets/portfolioProj.png";
import { motion } from "framer-motion";

export default function Projects({ theme }) {
  return (
<motion.div
  initial={{ y: 40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="pb-4"
>
  <h1 className="font-bold text-2xl mb-6">Projects</h1>
  <div className={`mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
        <a target="_blank" href="https://github.com/Build-your-bridge/BeaverBuddy">
          <div className="card bg-[rgb(24,24,24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
            <figure><img className="object-cover w-full h-40" src={beaverbuddyProj} alt="" /></figure>
            <div className="card-body">
              <h2 className="text-white card-title font-semibold text-xl">BeaverBuddy</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">AI-Powered wellness app for Canadian Immigrants. Won <strong>$3000</strong> and <strong>1st place</strong> for Mental Health and Wellbeing at Build a Bridge 2026</p>
            </div>
            <div className="flex ml-2">
              <Language colour="purple" language="Next.js" />
              <Language colour="yellow" language="Express" />
              <Language colour="green" language="GPT-4o mini" />
            </div>
          </div>
        </a>

        <a target="_blank" href="https://github.com/LooperLoopy/EventFull">
          <div className="card bg-[rgb(24,24,24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
            <figure><img className="object-cover w-full object-middle h-40" src={eventfullProj} alt="" /></figure>
            <div className="card-body">
              <h2 className="text-white card-title font-semibold text-xl">EventFull</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">AI assistant + interactive heat-map for Toronto event planning</p>
            </div>
            <div className="flex ml-2">
              <Language colour="purple" language="Next.js" />
              <Language colour="blue" language="FastAPI" />
              <Language colour="green" language="scikit-learn" />
            </div>
          </div>
        </a>


      </div>
       <h1 className="font-bold text-2xl mb-6">Freelance</h1>
  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${theme === "dark" ? "text-gray-300" : "text-black"}`}>
        <a target="_blank" href="https://metropolitangamestudios.ca/">
          <div className="card bg-[rgb(24,24,24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
            <figure><img className="object-cover w-full h-40" src={metgamesProj} alt="" /></figure>
            <div className="card-body">
              <h2 className="text-white card-title font-semibold text-xl">Met Game Studios</h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">Redesigned and built site from scratch</p>
            </div>
            <div className="flex ml-2">
              <Language colour="purple" language="Next.js" />

            </div>
          </div>
        </a>


      </div>
    </motion.div>
  );
}