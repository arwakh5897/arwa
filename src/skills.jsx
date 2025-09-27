import React, { useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const skills = [
  {
    name: "Banking Fundamentals",
    image: "https://cdn-icons-png.flaticon.com/512/263/263115.png", // colored bank icon
    description: `• Understanding of core banking principles including deposits, loans, and interest rates
• Knowledge of financial instruments such as bonds, equities, and derivatives
• Familiarity with banking operations, regulatory compliance, and risk management`,
  },
  {
    name: "Analytical Skills",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // colored analytics icon
    description: `• Proficiency in data analysis, financial modeling, and reporting
• Ability to interpret complex datasets to support decision-making
• Strong problem-solving skills, identifying trends and anomalies efficiently`,
  },
  {
    name: "Software Proficiency",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // colored software icon
    description: `• Advanced proficiency in MS Office Suite (Excel, Word, PowerPoint)
• Basic knowledge of financial software such as Tally, QuickBooks, or other ERP systems
• Comfortable with spreadsheet modeling, charting, and database management`,
  },
  {
    name: "Communication Skills",
    image: "https://cdn-icons-png.flaticon.com/512/2942/2942660.png", // colored chat icon
    description: `• Strong written and verbal communication, including professional emails and reports
• Effective presentation and public speaking skills
• Ability to collaborate with clients, colleagues, and stakeholders efficiently`,
  },
  {
    name: "Quantitative Tools",
    image: "https://cdn-icons-png.flaticon.com/512/1680/1680559.png", // colorful stats icon
    description: `• Experienced in statistical software (e.g., STATA, SPSS, R) for data analysis
• Ability to perform regression analysis, hypothesis testing, and forecasting
• Strong quantitative and numerical problem-solving skills`,
  },
  {
    name: "Research",
    image: "https://cdn-icons-png.flaticon.com/512/2917/2917993.png", // colorful research icon
    description: `• Skilled in conducting literature reviews, surveys, and data collection
• Competent in analyzing policies, market trends, and financial reports
• Ability to synthesize complex information into actionable insights`,
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
        SKILLS
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-indigo-500/50 transition-shadow duration-500"
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-300">
              {skill.name}
            </h3>

            <div className="h-36 w-full mb-3 flex items-center justify-center bg-white rounded-md overflow-hidden">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-28 object-contain"
              />
            </div>

            <p className="text-gray-300 text-sm">
              {skill.description.slice(0, 60)}...
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
