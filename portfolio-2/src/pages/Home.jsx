import compugenLogo from "../assets/compugen.png";
import tmuLogo from "../assets/tmuLogo.jpg";
import stanfordLogo from "../assets/stanford.jpg";
import { motion } from "framer-motion";

export default function Home({ theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
<ul className="list-disc space-y-3 ml-4">
  <li className="hover:translate-x-0.5 duration-300">
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-extralight text-neutral-300">
      AI & Networking Automation Intern

        </span>
      <a href="https://www.compugen.com/" className="inline-flex items-center gap-2 underline underline-offset-4 opacity-90 hover:opacity-100 duration-200">
        <img src={compugenLogo} alt="Compugen logo" className="w-4 h-4" />
        <strong>Compugen</strong>
      </a>
    </div>
  </li>
  <li className="hover:translate-x-1 duration-300">
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-extralight text-neutral-300">
      3rd year CS

        </span>
      <a href="https://www.tmu.ca/" className="inline-flex items-center gap-2 underline underline-offset-4 opacity-90 hover:opacity-100 duration-200">
        <img src={tmuLogo} alt="TMU logo" className="w-4 h-4" />
        <strong>TMU</strong>
      </a>
    </div>
  </li>
  <li className="hover:translate-x-1 duration-300">
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-extralight text-neutral-300">
      Taught 12+ students

        </span>
      <a href="https://codeinplace.stanford.edu/" className="inline-flex items-center gap-2 underline underline-offset-4 opacity-80 hover:opacity-100 duration-200">
        <img src={stanfordLogo} alt="Stanford logo" className="w-4 h-4" />
        <strong>Stanford's Code in Place</strong>
      </a>
    </div>
  </li>
</ul>

      {/* Icon row */}
      <div className="flex gap-2 mt-6">
        <a className="opacity-70 rounded-md border border-gray-500 border-opacity-50 w-10 h-10 flex justify-center items-center hover:opacity-100 duration-200"
          href="https://github.com/mattp532" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
          </svg>
        </a>
        <a className="opacity-70 rounded-md border border-gray-500 border-opacity-50 w-10 h-10 flex justify-center items-center hover:opacity-100 duration-200"
          href="https://www.linkedin.com/in/matthew-phang-b4a60a326/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
          </svg>
        </a>
        <a className="opacity-70 rounded-md border border-gray-500 border-opacity-50 w-10 h-10 flex justify-center items-center hover:opacity-100 duration-200"
          href="mailto:matthew.phang@torontomu.ca" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
            <path fill="currentColor" fillRule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12zM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914zM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833zM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}