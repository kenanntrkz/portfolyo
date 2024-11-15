import React from 'react';
import { Palette } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern ve kullanıcı dostu bir e-ticaret deneyimi. React ve Node.js ile geliştirilmiş tam kapsamlı bir dijital mağaza çözümü.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    link: '/projects/ecommerce',
    details: {
      features: [
        'Responsive tasarım ile tüm cihazlarda kusursuz görünüm',
        'Gelişmiş ürün filtreleme ve arama özellikleri',
        'Güvenli ödeme entegrasyonu',
        'Gerçek zamanlı stok takibi'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      duration: '3 ay',
      role: 'Baş Geliştirici'
    }
  },
  {
    title: 'Endüstriyel Otomasyon Sistemi',
    description: 'SolidWorks ile tasarlanmış kapsamlı bir endüstriyel otomasyon projesi. Mekanik tasarım ve simülasyon çalışmaları.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500',
    link: '/projects/automation',
    details: {
      features: [
        '3D parametrik modelleme',
        'Hareket analizi ve simülasyon',
        'Montaj optimizasyonu',
        'Teknik dokümantasyon'
      ],
      technologies: ['SolidWorks', 'AutoCAD', 'Ansys'],
      duration: '6 ay',
      role: 'Mekanik Tasarım Uzmanı'
    }
  },
  {
    title: 'Kurumsal Web Platformu',
    description: 'Büyük ölçekli bir şirket için geliştirilen modern ve etkileşimli kurumsal web sitesi projesi.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500',
    link: '/projects/corporate',
    details: {
      features: [
        'Özel tasarlanmış UI/UX deneyimi',
        'Çok dilli içerik yönetimi',
        'Blog ve haber sistemi',
        'Entegre iletişim formları'
      ],
      technologies: ['React', 'TailwindCSS', 'Headless CMS', 'i18n'],
      duration: '4 ay',
      role: 'Frontend Geliştirici'
    }
  }
];

export default function Projects() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle icon={Palette} title="Projeler" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}