import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';

export default function Contact() {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle icon={Mail} title="İletişim" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">İletişime Geçin</h3>
            <p className="text-gray-600">
              Projeleriniz için profesyonel çözümler sunabilirim. Yaratıcı fikirlerinizi hayata geçirmek için
              benimle iletişime geçebilirsiniz.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:kenantrkz@hotmail.com" 
                 className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
                kenantrkz@hotmail.com
              </a>
              <a href="tel:+905309490193"
                 className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                <Phone className="w-5 h-5" />
                0530 949 01 93
              </a>
              <a href="https://instagram.com/kenanntrkz"
                 className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
                @kenanntrkz
              </a>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5" />
                İstanbul, Türkiye
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="Adınız Soyadınız"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="ornek@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors resize-none"
                placeholder="Mesajınız..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg font-medium text-white transition-all hover:scale-105"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}