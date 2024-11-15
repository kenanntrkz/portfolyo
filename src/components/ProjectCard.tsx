import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface ProjectDetails {
  features: string[];
  technologies: string[];
  duration: string;
  role: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  details?: ProjectDetails;
}

export function ProjectCard({ title, description, image, link, details }: ProjectCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer transform hover:scale-105"
        onClick={() => details && setShowModal(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-zinc-900/70 to-transparent z-10"></div>
        <img 
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gray-200 transition-colors">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 opacity-90 group-hover:opacity-100 transition-opacity">
            {description}
          </p>
          {details && (
            <button 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              Detayları Gör <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {showModal && details && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-zinc-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-white/20">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
              <p className="text-gray-300 mb-6">{description}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Özellikler</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Kullanılan Teknolojiler</h4>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Proje Süresi</h4>
                    <p className="text-gray-300">{details.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Rol</h4>
                    <p className="text-gray-300">{details.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}