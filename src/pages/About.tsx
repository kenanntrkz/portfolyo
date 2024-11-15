import React from 'react';
import { User, Cog, Code, Rocket, Heart, Lightbulb, GraduationCap } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { TechBadge } from '../components/TechBadge';

const technologies = [
  'React', 'TypeScript', 'TailwindCSS', 'Node.js', 
  'Web Design', 'UI/UX', 'SolidWorks', 'Responsive Design',
  '3D Modelleme', 'Teknik Çizim', 'JavaScript', 'HTML/CSS'
];

export default function About() {
  return (
    <div className="pt-24 px-4 min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl space-y-16">
        <div className="fade-in">
          <SectionTitle icon={User} title="Hakkımda" />
          
          <div className="grid gap-12 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50 blur-3xl -z-10"></div>
            
            <div className="space-y-8">
              <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-black shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Başlangıç Hikayem</h3>
                    <p className="text-black/70 leading-relaxed">
                      Teknolojiye olan tutkum çocukluk yıllarıma dayanıyor. Bilgisayarları sadece kullanmakla kalmayıp, 
                      nasıl çalıştıklarını anlama merakım beni yazılım dünyasına yönlendirdi. Kendi kendime öğrenme 
                      sürecinde, her hata yeni bir öğrenme fırsatına dönüştü ve bu deneyimler beni bugünkü konumuma getirdi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-black shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">Eğitim ve Gelişim</h3>
                    <p className="text-black/70 leading-relaxed">
                      Resmi bir yazılım eğitimi almamış olmama rağmen, sürekli öğrenme ve kendini geliştirme tutkum 
                      sayesinde, modern web teknolojileri ve endüstriyel tasarım alanlarında kapsamlı bilgi ve deneyim 
                      edindim. Online kaynaklar, açık kaynak projeler ve pratik deneyimler, benim en büyük öğretmenlerim oldu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors shadow-sm hover:shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-black mb-4">
                  <Code className="w-5 h-5 group-hover:scale-110 transition-transform" /> Web Geliştirme
                </h3>
                <p className="text-black/70">
                  Modern web teknolojilerini kullanarak, kullanıcı deneyimini ön planda tutan projeler geliştiriyorum. 
                  React, TypeScript ve TailwindCSS başta olmak üzere, güncel teknolojilerle responsive ve performanslı 
                  web uygulamaları oluşturuyorum.
                </p>
              </div>
              
              <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors shadow-sm hover:shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-black mb-4">
                  <Cog className="w-5 h-5 group-hover:scale-110 transition-transform" /> SolidWorks
                </h3>
                <p className="text-black/70">
                  Endüstriyel tasarım alanında, özellikle makine parçaları, montaj sistemleri ve prototip geliştirme 
                  konularında uzmanım. Kompleks mekanik sistemlerin 3D modellemesi ve teknik çizimlerinde geniş tecrübeye sahibim.
                </p>
              </div>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-black mb-4">
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform" /> Çalışma Felsefem
              </h3>
              <p className="text-black/70">
                Her projeye özgün bir bakış açısıyla yaklaşıyor, müşterilerimin ihtiyaçlarını detaylı analiz ederek 
                en uygun çözümleri sunuyorum. İşbirliği ve şeffaflık ilkesiyle, projelerin her aşamasında müşterilerimle 
                yakın iletişim kuruyorum.
              </p>
            </div>

            <div className="group p-6 bg-white rounded-xl border border-black/10 hover:border-black/20 transition-colors shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-black mb-4">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" /> Kişisel İlgi Alanları
              </h3>
              <p className="text-black/70">
                İş dışında yeni teknolojileri takip etmeyi, doğa sporlarıyla ilgilenmeyi ve fotoğrafçılığı seviyorum. 
                Özellikle yapay zeka ve makine öğrenimi alanlarındaki gelişmeleri yakından takip ediyor, bu teknolojileri 
                mevcut uzmanlık alanlarımla birleştirerek yenilikçi çözümler üretmeyi hedefliyorum.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 fade-in">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-black">
            <Cog className="w-5 h-5" /> Teknolojiler & Araçlar
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}