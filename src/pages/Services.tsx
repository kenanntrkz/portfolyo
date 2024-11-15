import React from 'react';
import { Code, Palette, Cog } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const services = [
  {
    icon: Code,
    title: 'Web Geliştirme',
    description: 'Modern ve responsive web uygulamaları geliştirme. React, TypeScript ve modern web teknolojileri kullanarak özel çözümler.',
    features: ['Frontend Geliştirme', 'Backend Entegrasyonu', 'API Geliştirme', 'Performans Optimizasyonu']
  },
  {
    icon: Palette,
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı arayüz tasarımları ve deneyim optimizasyonu. Modern ve etkileyici tasarımlar ile markanızı öne çıkarın.',
    features: ['Arayüz Tasarımı', 'Kullanıcı Deneyimi', 'Prototip Oluşturma', 'Marka Kimliği']
  },
  {
    icon: Cog,
    title: 'Teknik Çizim & 3D',
    description: 'SolidWorks ile profesyonel teknik çizimler ve 3D modelleme hizmetleri. Endüstriyel tasarımdan prototip üretime.',
    features: ['3D Modelleme', 'Teknik Çizim', 'Prototip Tasarım', 'Montaj Çizimleri']
  }
];

export default function Services() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle icon={Cog} title="Hizmetler" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-gray-200"
              >
                <Icon className="w-12 h-12 text-gray-800 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}