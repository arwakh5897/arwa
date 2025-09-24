import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom"; // 👈 Portal import

const projects = [
  {
    title: "J Dent",
    images: ["/assets/jdent1.png", "/assets/jdent2.png", "/assets/jdent3.png"],
    description: `J Dent Lite is a dental clinic management web application where I contributed to the frontend development using React and Tailwind CSS.

    My work included:
    - Designing and implementing a modern UI with responsive layouts
    - Appointment booking forms
    - Patient record management
    - Dashboards with charts
    - Dark mode
    - Accessibility improvements`,
  },
  {
    title: "Building Management System",
    images: ["/assets/building1.png", "/assets/building2.png", "/assets/building3.png"],
    description: `The Building Management System is a property and tenant management web application developed with React and Bootstrap 5.

    My work included:
    - Responsive UI with Bootstrap 5 and SCSS
    - Role-based access
    - Complaints, notices, rent payments, documents
    - Dashboards with charts and tables
    - Mobile compatibility
    - Accessibility standards`,
  },
];

const Project = () => {
  const [currentIndexes, setCurrentIndexes] = useState(projects.map(() => 0));
  const [pausedIndex, setPausedIndex] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // Auto slideshow
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((val, i) =>
          i === pausedIndex ? val : (val + 1) % projects[i].images.length
        )
      );
    }, 3000);
    return () => clearInterval(id);
  }, [pausedIndex]);

  const goToDot = (projectIndex, imageIndex) => {
    setCurrentIndexes((prev) =>
      prev.map((v, i) => (i === projectIndex ? imageIndex : v))
    );
  };

  return (
    <section id="projects" className="py-20 px-6 m-6 bg-gray-900 rounded-lg relative z-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-500"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-300">
              {project.title}
            </h3>

            {/* Slideshow */}
            <div
              className="relative h-72 w-full mb-4 overflow-hidden rounded-md group"
              onMouseEnter={() => setPausedIndex(index)}
              onMouseLeave={() => setPausedIndex(null)}
            >
              <img
                src={project.images[currentIndexes[index]]}
                alt={project.title}
                className="h-72 w-full rounded-md"
              />

              {/* dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToDot(index, i)}
                    className={`w-3 h-3 rounded-full ${
                      currentIndexes[index] === i
                        ? "bg-indigo-400"
                        : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Short description */}
            <p className="text-gray-300">
              {project.description.slice(0, 150)}...
            </p>
            <button
              onClick={() => setActiveProject(project)}
              className="text-indigo-400 hover:text-indigo-300 mt-2"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal using Portal */}
      {activeProject &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
            onClick={() => setActiveProject(null)} // click outside close
          >
            <div
              className="bg-gray-800 max-w-2xl w-full rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()} // prevent close on content click
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                {activeProject.title}
              </h3>
              <p className="text-gray-300 whitespace-pre-line">
                {activeProject.description}
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Project;
