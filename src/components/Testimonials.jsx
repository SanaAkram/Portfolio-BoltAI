import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    title: 'WP All Import + Automation',
    rating: 5,
    period: 'Jul 24, 2025 - Aug 9, 2025',
    feedback:
      'Sana was very helpful and cooperative on this project. Thank you.',
    tags: ['Solution Oriented', 'Collaborative'],
  },
  {
    title: 'Selenium Automation Expert',
    rating: 5,
    period: 'Jul 14, 2024 - Oct 2, 2024',
    feedback:
      'Sana is a very skilled individual. Was very impressed with her knowledge and approach to the project. Definitely recommended.',
    tags: ['Committed to Quality'],
  },
  {
    title: 'Web Scraping Task',
    rating: 5,
    period: 'May 8, 2024',
    feedback: 'Sana did the work in less than 1h, incredible work!',
    tags: ['Reliable', 'Committed to Quality'],
  },
  {
    title: 'LinkedIn Jobs Scraping',
    rating: 5,
    period: 'Feb 5, 2024 - Feb 9, 2024',
    feedback:
      'Very thoughtful, quick responses, and great data handling skills. Highly collaborative.',
    tags: ['Clear Communicator', 'Collaborative'],
  },
  {
    title: 'Venture Capital Data Scraper',
    rating: 5,
    period: 'Jan 4, 2024 - Jan 6, 2024',
    feedback:
      'Efficient, knowledgeable, and delivered outstanding results before deadline. Highly recommended.',
    tags: ['Fast Delivery', 'High Quality'],
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-24" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="section-heading text-center mb-12">
          Client Testimonials
        </h2>
        <div className="text-center mb-10">
          <motion.a
          href="https://www.upwork.com/freelancers/~019a6fa4fac7ad0aa4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-lg text-sm font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))',
              color: '#fff'
            }}
          >
            ⭐ View Client Testimonials
          </motion.a>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onMouseEnter={(swiper) => swiper.autoplay.stop()}
          onMouseLeave={(swiper) => swiper.autoplay.start()}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group"
                style={{
                  border: '1px solid var(--color-border)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* glow hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))',
                  }}
                />

                {/* header */}
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h3 className="font-semibold text-base leading-tight">
                    {t.title}
                  </h3>

                  <span className="text-yellow-400 font-bold flex items-center gap-1">
                    ⭐ {t.rating}
                  </span>
                </div>

                <p className="text-xs mb-3 opacity-70 relative z-10">
                  {t.period}
                </p>

                <p className="text-sm leading-relaxed mb-5 relative z-10">
                  "{t.feedback}"
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full border"
                      style={{
                        borderColor: 'var(--color-border)',
                        background: 'rgba(255,255,255,0.05)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
  );
};

export default TestimonialsCarousel;