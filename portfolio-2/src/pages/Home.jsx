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
    </motion.div>
  );
}