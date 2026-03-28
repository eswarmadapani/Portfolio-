import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full h-full">
      {/* Outer glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7c83ff] to-[#b47cff] rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500 shadow-[0_0_20px_rgba(124,131,255,0.34)]"></div>
      
      <div className="relative h-full overflow-hidden rounded-2xl bg-[#0f1228]/50 backdrop-blur-xl border border-white/[0.08] shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:translate-y-[-4px]">
        {/* Animated image container */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f1228]/90 z-10"></div>
          <img
            src={Img}
            alt={Title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          {/* Floating badge for image */}
          <div className="absolute top-3 left-3 z-20">
             <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2">
                <Layers className="w-3 h-3 text-[#8f95ff]" />
                <span className="text-[10px] uppercase tracking-wider text-[#dbe0f4] font-medium">Project</span>
             </div>
          </div>
        </div>

        <div className="relative p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#aab0ff] transition-colors duration-300 line-clamp-1">
              {Title}
            </h3>
            <p className="text-[#a8b1d3] text-sm leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {Description}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-white/[0.05]">
            {ProjectLink ? (
              <a
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#a8b1d3] hover:text-[#8f95ff] transition-colors duration-300 group/link"
              >
                <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                Live Demo
              </a>
            ) : (
              <span className="text-[#737ca0] text-xs italic">Demo Private</span>
            )}

            {id ? (
              <Link
                to={`/project/${id}`}
                onClick={handleDetails}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7c83ff]/10 hover:bg-[#7c83ff]/20 text-[#8f95ff] text-sm font-semibold transition-all duration-300 group/details"
              >
                Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover/details:translate-x-1" />
              </Link>
            ) : (
              <span className="text-[#737ca0] text-xs italic">Details Private</span>
            )}
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;