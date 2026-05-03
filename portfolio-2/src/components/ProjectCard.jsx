import Language from "../Language.jsx";

export default function ProjectCard({ project, theme }) {
  return (
    <a target="_blank" href={project.href} rel="noopener noreferrer">
      <div className="card bg-[rgb(24,24,24)] rounded-lg border-1 border-gray-600 duration-300 transition-all hover:scale-103">
        <figure>
          <img
            className="object-cover w-full h-40"
            src={project.image}
            alt={project.title}
            style={project.objectPosition ? { objectPosition: project.objectPosition } : {}}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-white card-title font-semibold text-xl">
            {project.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="flex ml-2">
          {project.languages.map((lang) => (
            <Language
              key={lang.name}
              colour={lang.colour}
              language={lang.name}
            />
          ))}
        </div>
      </div>
    </a>
  );
}
