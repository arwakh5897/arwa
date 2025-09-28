import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';  // Updated import

// Import core Swiper styles (add 'swiper/css/autoplay' if you need Autoplay-specific styles)
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/navigation"; // optional if you add arrows


const certificates = [
  { name: "Bank of AJ&K (Internship)", image: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
  { name: "Designing a Multidimensional Poverty Index", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { name: "Islamic Finance for Sustainable Development Goals", image: "https://cdn-icons-png.flaticon.com/512/3096/3096653.png" },
  { name: "International Data Master Class", image: "https://cdn-icons-png.flaticon.com/512/2917/2917993.png" },
  { name: "Data Science in Central Banking", image: "https://cdn-icons-png.flaticon.com/512/1680/1680559.png" },
  { name: "Training of Trainers Program (State Bank of Pakistan Initiative)", image: "https://cdn-icons-png.flaticon.com/512/2942/2942660.png" },
];

const Certificates = () => {
  return (
    <section 
    id="certificates"
    className="py-12 bg-gray-900 px-4 sm:px-6 lg:px-12 scroll-mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400 tracking-wide">
        CERTIFICATES
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20} // less space for mobile
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform duration-500
                  ${isActive ? "scale-105 shadow-indigo-500/70 border-2 border-indigo-400" : "scale-95 opacity-80"}
                   hover:shadow-indigo-400/50 
                  h-64`}
              >
                <div className="h-28 w-28 sm:h-36 sm:w-36 mb-3 sm:mb-4 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-inner">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                  />
                </div>
                <h3 className="text-center text-sm sm:text-lg md:text-xl font-semibold text-indigo-300 tracking-tight">
                  {cert.name}
                </h3>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certificates;
