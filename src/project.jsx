import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const projectdetails = {
  title: "Bank of AJK Intern",
  location: "Muzaffarabad, Pakistan",
  images: [
    "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/4386394/pexels-photo-4386394.jpeg?auto=compress&cs=tinysrgb&w=800",
  ],
  description: `• Customer Service: Assisted customers with basic banking services, including opening and closing accounts, processing transactions, and answering general inquiries, contributing to a positive customer experience.
• Data Analysis: Collected and analyzed customer data to identify trends in account usage, helping the bank improve service offerings and target key customer segments.
• Loan Documentation: Assisted in the preparation and processing of loan documentation, ensuring accuracy and compliance with regulatory requirements.`,
};

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % projectdetails.images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section 
    id="projects"
    className="py-10 px-4 sm:px-6 lg:px-12 m-3 bg-gray-900 rounded-lg scroll-mt-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-400">
        PROFESSIONAL EXPERIENCE
      </h2>

      <div className="w-full max-w-full mx-auto bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-xl hover:shadow-indigo-500/50 transition-shadow duration-500">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 text-indigo-300">
          {projectdetails.title}
        </h3>
        <p className="text-gray-400 text-sm sm:text-base mb-6">
          {projectdetails.location}
        </p>

        {/* Image Carousel */}
        <div
          className="relative w-full h-80 mb-6 overflow-hidden rounded-xl cursor-pointer group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={() => setModalOpen(true)}
        >
          {projectdetails.images.map((img, i) => {
            const index =
              (i - currentIndex + projectdetails.images.length) %
              projectdetails.images.length;
            return (
              <img
                key={i}
                src={img}
                alt={`Project-${i}`}
                className="absolute w-full h-80 object-cover rounded-xl shadow-lg transition-all duration-700"
                style={{
                  top: `${index * 10}px`,
                  zIndex: projectdetails.images.length - index,
                  transform: `scale(${index === 0 ? 1 : 0.92})`,
                  opacity: index === 0 ? 1 : 0.7,
                }}
              />
            );
          })}
        </div>

        <p className="text-gray-300 text-sm sm:text-base line-clamp-6">
          {projectdetails.description}
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm sm:text-base font-medium"
        >
          Read More
        </button>
      </div>

      {/* Modal */}
      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-gray-800 max-w-2xl w-full rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                {projectdetails.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {projectdetails.location}
              </p>

              <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {projectdetails.description}
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Project;
