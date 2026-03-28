import React, { useEffect, memo } from "react";
import { FileText, Code, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c83ff] to-[#b47cff]"
        data-aos="zoom-in-up"
        data-aos-duration="600"
      >
        About Me
      </h2>
    </div>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-center items-center p-0 lg:p-4">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Optimized gradient backgrounds */}
      <div className="absolute -inset-4 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-2xl blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-500 via-violet-500 to-purple-600 rounded-2xl blur-2xl animate-pulse-slow opacity-50" />
      </div>

      <div className="relative">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0" />
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));


const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-0 relative" id="About">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <Header />

      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        {/* Main Glass Card Wrapper */}
        <div className="relative group/main">
          {/* Animated gradient border glow */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[#7c83ff]/40 via-[#b47cff]/40 to-[#7c83ff]/40 rounded-3xl opacity-20 group-hover/main:opacity-50 blur-sm transition-opacity duration-700" />
          
          <div className="relative bg-[#0f1228]/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 py-12 sm:p-12 md:p-16 border border-white/[0.08] overflow-hidden">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
              
              {/* Content Side */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#8f95ff]" data-aos="fade-right" data-aos-duration="600">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-widest">Get specialized in AI</span>
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight" data-aos="fade-right" data-aos-duration="800">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c83ff] to-[#b47cff]">
                      Hello, I'm
                    </span>
                    <span className="block mt-2 text-white">Eswar</span>
                  </h2>

                  <p className="text-[#a8b1d3] text-lg leading-relaxed text-justify" data-aos="fade-right" data-aos-duration="1000">
                    I am a student with a strong interest in artificial intelligence and machine learning. 
                    I am passionate about building intelligent systems that can solve real-world problems. 
                    I am a quick learner and a team player, looking for new challenges to grow.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="" className="flex-1 sm:flex-none">
                    <button className="w-full sm:px-8 py-4 rounded-xl bg-gradient-to-r from-[#7c83ff] to-[#b47cff] text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(124,131,255,0.42)] flex items-center justify-center gap-2 group/btn">
                      <FileText className="w-5 h-5 group-hover/btn:rotate-6 transition-transform" />
                      Download CV
                    </button>
                  </a>
                  <a href="#Portofolio" className="flex-1 sm:flex-none">
                    <button className="w-full sm:px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-semibold transition-all duration-300 hover:bg-white/[0.08] hover:scale-[1.02] flex items-center justify-center gap-2 group/btn">
                      <Code className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                      View Projects
                    </button>
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <ProfileImage />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(AboutPage);
