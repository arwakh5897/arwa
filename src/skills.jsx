import React, { useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const skills = [
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    description: `I have strong expertise in React.js, including:
- Component-based architecture
- Hooks (useState, useEffect, useContext)
- State management patterns
- Optimizing performance with memoization
- Responsive UI with Tailwind CSS`,
  },
  {
    name: "React Native",
    image: "https://reactnative.dev/img/header_logo.svg",
    description: `Hands-on experience in React Native for mobile app development:
- Cross-platform apps (iOS & Android)
- Navigation and routing
- API integration with Axios/Fetch
- State management with Context API
- Styling with Tailwind & custom components`,
  },
  {
    name: "Laravel",
    image: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
    description: `Laravel backend experience:
- REST APIs
- Middleware & authentication
- Role-based access
- Eloquent ORM
- Blade templates`,
  },
  {
    name: "Yii2 (PHP)",
    image: "https://avatars.githubusercontent.com/u/993323?s=200&v=4",
    description: `Yii2 framework experience:
- MVC architecture
- ActiveRecord ORM
- User authentication & RBAC
- RESTful APIs
- CRUD generators`,
  },
  {
    name: "Tailwind CSS",
    image:
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    description: `Tailwind CSS for modern UI:
- Utility-first CSS
- Responsive design
- Dark mode
- Custom configurations
- Component-based styling`,
  },
  {
    name: "Bootstrap 5",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    description: `Bootstrap 5 expertise:
- Responsive grid layouts
- Utility classes
- Tabs, tables, modals
- Theming with SCSS
- Cross-browser support`,
  },
  {
    name: "JavaScript (ES6+)",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    description: `JavaScript ES6+ experience:
- Modern syntax (let, const, arrow functions)
- Promises & async/await
- Array & object methods
- DOM manipulation
- Event handling`,
  },
  {
    name: "Git",
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    description: `Git version control:
- Branching & merging
- Pull requests
- GitHub/GitLab workflows
- Conflict resolution
- Version history`,
  },
  {
    name: "SQL",
    image: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    description: `Database expertise:
- Writing complex queries
- Joins & subqueries
- Normalization
- Indexing for performance
- Integration with ORMs`,
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skills"
      className="py-10 px-4 m-4 bg-gray-900 rounded-lg relative z-10 scroll-mt-10"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-indigo-500/50 transition-shadow duration-500"
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-300">
              {skill.name}
            </h3>

            {/* Single Image */}
            <div className="h-36 w-full mb-3 flex items-center justify-center bg-white rounded-md overflow-hidden">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-28 object-contain"
              />
            </div>

            {/* Short description */}
            <p className="text-gray-300 text-sm">
              {skill.description.slice(0, 80)}...
            </p>
            <button
              onClick={() => setActiveSkill(skill)}
              className="text-indigo-400 hover:text-indigo-300 mt-2 text-sm"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeSkill &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
            onClick={() => setActiveSkill(null)}
          >
            <div
              className="bg-gray-800 max-w-lg w-full rounded-lg p-5 relative shadow-lg overflow-y-auto max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                {activeSkill.name}
              </h3>
              <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
                {activeSkill.description}
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Skills;
