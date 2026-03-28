import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useShaderBackground } from '../components/ui/animated-shader-hero';

const BackgroundEffect = () => {
  const canvasRef = useShaderBackground();

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#050312]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Welcome Text */}
              <motion.div
                className="text-center mb-6 sm:mb-8 md:mb-12"
                variants={childVariants}
              >
                <h1 
className="text-4xl sm:text-5xl md:text-7xl font-normal space-y-2 sm:space-y-4 uppercase tracking-[0.8em] [text-shadow:0_0_20px_rgba(234,234,234,0.3)]"
                  style={{ 
                    fontFamily: "'Montserrat', sans-serif", 
                    fontWeight: 200, 
                    color: '#EAEAEA' 
                  }}
                >
                  <div className="mb-2 sm:mb-4">
                    <span
                      data-aos="fade-right"
                      data-aos-delay="200"
                      className="inline-block"
                    >
                      WELCOME
                    </span>{' '}
                  </div>
                </h1>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
