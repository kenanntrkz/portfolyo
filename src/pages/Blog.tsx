import React from 'react';
import { BookOpen } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

const blogPosts = [
  {
    title: 'Modern Web Tasarımında Son Trendler',
    date: '15 Mart 2024',
    category: 'Web Tasarım',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
    summary: 'Web tasarımında 2024 yılının öne çıkan trendleri ve kullanıcı deneyimini artıran modern yaklaşımlar.'
  },
  {
    title: 'SolidWorks ile Endüstriyel Tasarım',
    date: '10 Mart 2024',
    category: '3D Modelleme',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500',
    summary: 'Endüstriyel tasarımda SolidWorks kullanımı ve profesyonel ipuçları.'
  },
  {
    title: 'React ve TypeScript ile Güvenli Kod',
    date: '5 Mart 2024',
    category: 'Yazılım',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500',
    summary: 'Modern web uygulamalarında type-safety ve best practices.'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle icon={BookOpen} title="Blog" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100 hover:border-gray-200"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-sm bg-white/90 text-gray-900 px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.summary}</p>
                
                <button className="mt-4 text-gray-900 text-sm font-medium hover:text-gray-700 transition-colors">
                  Devamını Oku →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}