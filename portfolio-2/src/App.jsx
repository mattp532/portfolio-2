import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import pfp from "./assets/pfp.png";
import banner from "./assets/banners.png";
import lingifyProj from "./assets/lingifyProj.png";
import pokestudyProj from "./assets/pokestudyProj.png";
import composerdleProj from "./assets/composerdleProj.png";
import portfolioProj from "./assets/portfolioProj.png";
import guitarAmpProj from "./assets/guitarAmpProj.png";
import resume from "./assets/Resume.pdf";
import { motion } from "framer-motion";
import Language from "./Language.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "matthew.phang@torontomu.ca"; // Replace with your actual email
  const [theme, setTheme] = useState("dark");
  const handleThemeChange = () => {
    if (theme == "dark") {
      setTheme("light");
    } else if (theme == "light") {
      setTheme("dark");
    }
  };
  const cursorColor = theme === "dark" ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)";

  return (
    <>
      <div
        className={`border-opacity-50 bg-[rgb(30,30,30)] duration-200 ${
          theme === "dark"
            ? "bg-gray-1000 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <div className="mb-23 sm:mb-18 xl:mb-18 lg-18 xl-18">
          <div className="header max-h-20/100">
            <img
              src={banner}
              alt="Banner"
              className="image w-full h-18 sm:h-25 md:h-30 lg:h-37 xl:h-28 object-cover"
            />
            <div className="absolute top-4/100 left-9/100 flex lg: left-12/100 xl:left-24/100">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{
                  duration: 0.6,
                }}
                key="pfp"
                className="xl:hover:scale-105 xl:duration-300 z-10 h-30 w-30 sm:h-32 sm:w-32 md:h-33 md:w-33 lg:w-40 lg:h-40 xl:h-35 xl:w-35 rounded-full border-2 border-gray-500"
                src={pfp}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="body w-76/100 lg:w-70/100 xl:w-50/100 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="w-10%">
              <motion.h1
                className="flex items-center w-auto fade-down font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl"
                style={{

                }}
              >
                <motion.span>👋</motion.span>
                <span 
                
                className={`w-auto typing ml-1 ${theme === "dark" ? "dark" : "light"}`}
                style={{
                  display: "inline" /* or inline-block */

                }}
                >

  Hi, I'm Matthew
</span>

              </motion.h1>
            </div>
            <h2
              className={` text-xl font-normal mt-3 
              
              ${theme === "dark" ? "text-gray-300 " : "text-black"}
              `}
            >
              CS Student & Software Developer
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="iconBox flex gap-2 mt-5"
          >
            <div className="tooltip tooltip-bottom" data-tip="Github">
              <a
                className="opacity-70 rounded-md border-1 border-gray-500 border-opacity-50 w-10 h-10 flex justify-center items-center hover:opacity-100 duration-200 "
                href="https://github.com/mattp532"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  className="size-5 md:size-6"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Linkedin">
              <a
                className="opacity-70 rounded-md border-1 border-gray-500 border-opacity-50 w-10 h-10 flex justify-center items-center hover:opacity-100 duration-200 "
                href="https://www.linkedin.com/in/matthew-phang-b4a60a326/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="size-5 md:size-6"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Email">
              <a
                className="opacity-70 rounded-md border-1 border-gray-500 border-opacity-50 w-10 h-10 flex justify-center items-center hover:opacity-100 duration-200 "
                href="mailto:matthew.phang@torontomu.ca"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  className="size-5 md:size-6"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914zM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5z"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Resume">
              <a
                className="opacity-70 rounded-md border-1 border-gray-500 border-opacity-50 w-auto px-2 h-10 flex justify-center items-center hover:opacity-100 duration-200 "
                href={resume}
                target="_blank" // Open in a new tab
                rel="noopener noreferrer"
              >
                <p>Resume</p>
              </a>
            </div>
            <div
              className={`cursor-pointer tooltip tooltip-bottom
  `}
              data-tip="Theme"
            >
              <button
                className={`cursor-pointer opacity-70 rounded-md border-1 border-gray-500 border-opacity-50 w-auto px-2 h-10 flex justify-center items-center hover:opacity-100 duration-200 `}
                onClick={handleThemeChange}
              >
                <p>
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  )}
                </p>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-10"
          >
            <h1 className="font-bold text-2xl">About me</h1>
            <ul className="list-disc space-y-2 mt-2 ">
              <li className="hover:translate-x-1 duration-300">
                🖥️ 1st year CS student @TMU
              </li>
              <li className="hover:translate-x-1 duration-300">
                {" "}
                🎨 Experience in building frontend projects with React.js
              </li>
              <li className="hover:translate-x-1 duration-300">
                🌐 Learning backend - API development and database management
              </li>
              <li className="hover:translate-x-1 duration-300">
                🎶 I also like making music and learning Cantonese :-)
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-10 pb-20"
          >
            <h1 className="font-bold text-2xl">Projects</h1>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 mt-6 
                            ${
                              theme === "dark" ? "text-gray-300 " : "text-black"
                            }
              `}
            >
              {/* Project 1 */}
              <a target="_blank" href="https://github.com/mattp532/Composerdle">
                <div className="card bg-[rgb(24, 24, 24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
                  <figure>
                    <img
                      className="object-cover w-full h-40 object-top"
                      src={composerdleProj}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-semibold text-xl">
                      Composerdle
                    </h2>
                    <p>Full-stack wordle for classical composers</p>
                  </div>
                  <div className="flex flex-wrap l-2">
                    <Language colour="purple" language="React"></Language>
                    <Language colour="yellow" language="Express"></Language>
                    <Language
                      colour="#A3C9FF"
                      language="PostgreSQL"
                    ></Language>{" "}
                  </div>
                </div>
              </a>
              {/* Project 1.5 */}
              <a target="_blank" href="https://github.com/mattp532/Guitar-Amp-Simulator">
                <div className="card bg-[rgb(24, 24, 24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
                  <figure>
                    <img
                      className="object-cover w-full h-40 object-top"
                      src={guitarAmpProj}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-semibold text-xl">
                      Virtual Guitar Amp
                    </h2>
                    <p>Guitar effect processor</p>
                  </div>
                  <div className="flex flex-wrap l-2">
                    <Language colour="purple" language="React"></Language>
                    <Language colour="blue" language="Flask"></Language>
                    <Language
                      colour="yellow"
                      language="MongoDB"
                    ></Language>{" "}
                  </div>
                </div>
              </a>

              {/* Project 2 */}
              <a target="_blank" href="https://mattp532.github.io/Lingify/ ">
                <div className="card bg-[rgb(24, 24, 24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103 ">
                  <figure>
                    <img
                      className="object-cover w-full h-40"
                      src={lingifyProj}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-semibold text-xl">
                      Lingify
                    </h2>
                    <p>Language learning quiz app</p>
                  </div>
                  <div className="flex ml-2">
                    <Language colour="purple" language="React"></Language>
                    <Language colour="yellow" language="Javascript"></Language>
                  </div>
                </div>
              </a>

              {/* Project 3 */}
              <a target="_blank" href="https://mattp532.github.io/PokeStudy/">
                <div className="card bg-[rgb(24, 24, 24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
                  <figure>
                    <img
                      className="object-cover w-full object-middle h-40 "
                      src={pokestudyProj}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-semibold text-xl">
                      PokéStudy
                    </h2>
                    <p>Study timer where you collect pokemon</p>
                  </div>
                  <div className="flex ml-2">
                    <Language colour="yellow" language="Javascript"></Language>
                  </div>
                </div>
              </a>
              {/* Project 4 */}
              <a
                target="_blank"
                href="https://mattp532.github.io/react-portfolio/"
              >
                <div className="card bg-[rgb(24, 24, 24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
                  <figure>
                    <img
                      className="object-cover w-full object-middle h-40"
                      src={portfolioProj}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-semibold text-xl">
                      Windows 95 Portfolio
                    </h2>
                    <p>Retro desktop themed portfolio</p>
                  </div>
                  <div className="flex ml-2">
                    <Language colour="purple" language="React"></Language>
                    <Language colour="yellow" language="Javascript"></Language>
                  </div>
                </div>
              </a>
              {/* Add more projects as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
