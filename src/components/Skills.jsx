import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { skillsInView } = usePortfolio();

  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 100 },
    { name: 'JavaScript (ES7)', level: 68 },
    { name: 'Tailwind CSS', level: 100 },
    { name: 'React (ES7)', level: 80 },
  ];

  const backendSkills = [
    { name: 'Python', level: 35 },
    { name: 'Node.js', level: 10 },
  ];

  const SkillBar = ({ skill, index }) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: skillsInView ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 200}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Mening Ko'nikmalarim
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">
              Texnologiyalar bo'yicha bilim darajam
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                Frontend Bilimlar
              </h3>
              
              <div>
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-gray-400 rounded-full mr-3"></span>
                Backend Bilimlar
              </h3>
              
              <div>
                {backendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index + frontendSkills.length} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-black/20 rounded-lg border border-white/10">
                <p className="text-gray-400 text-sm">
                  <span className="text-white font-medium">Eslatma:</span> Backend texnologiyalarni 
                  hozirda o'rganmoqdaman va tez orada bilim darajamni oshirishni rejalashtirmoqdaman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;