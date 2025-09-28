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
  description: [
    {
      heading: "Customer Service",
      text: "Provided exceptional support to customers by assisting with a wide range of banking services, including opening and closing accounts, processing deposits, withdrawals, and transfers, and resolving account-related issues. Responded promptly to inquiries, delivered personalized guidance, and ensured a smooth and positive customer experience."
    },
    {
      heading: "Data Analysis",
      text: "Collected, organized, and analyzed customer data to identify patterns and trends in account usage, spending behavior, and product engagement. Generated detailed reports and actionable insights that helped the bank optimize service offerings, target key customer segments, and improve overall customer satisfaction."
    },
    {
      heading: "Loan Documentation",
      text: "Assisted in the preparation, verification, and processing of loan applications and related documentation, ensuring accuracy, completeness, and compliance with regulatory and internal standards. Coordinated with internal teams and clients to streamline approval processes and maintain high levels of operational efficiency."
    }
  ]
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
      className="py-10 px-4 sm:px-6 lg:px-12 m-3 bg-gray-900 rounded-lg scroll-mt-10"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-indigo-400">
        PROFESSIONAL EXPERIENCE
      </h2>

      {/* Card */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-3xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-indigo-500/30 transition-shadow duration-300">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 text-indigo-300">
          {projectdetails.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          {projectdetails.location}
        </p>

        {/* Compact Image Carousel */}
        <div
          className="relative w-full h-40 mb-3 sm:h-48 overflow-hidden rounded-md group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
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
                className="absolute w-full h-full object-cover rounded-md transition-all duration-700"
                style={{
                  zIndex: projectdetails.images.length - index,
                  transform: `scale(${index === 0 ? 1 : 0.95}) translateY(${index * 5}px)`,
                  opacity: index === 0 ? 1 : 0.7,
                }}
              />
            );
          })}
        </div>

        {/* Truncated Description */}
        <div className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-2">
          {projectdetails.description.map((item, i) => {
            if (i === 0) {
              return (
                <p key={i}>
                  <strong>{item.heading}:</strong>{" "}
                  {item.text.slice(0, 200)}...
                </p>
              );
            }
            return null;
          })}
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="text-indigo-400 hover:text-indigo-300 cursor-pointer text-xs sm:text-sm font-medium"
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
              className="bg-gray-800 w-full max-w-md sm:max-w-2xl rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6 cursor-pointer" />
              </button>

              <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                {projectdetails.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                {projectdetails.location}
              </p>

              {/* Full Description with bold headings */}
              <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3">
                {projectdetails.description.map((item, i) => (
                  <p key={i}>
                    <strong>{item.heading}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Project;
