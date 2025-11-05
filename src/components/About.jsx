import React from 'react';

const About = () => {
  const facts = [
    { label: 'Yosh', value: '15' },
    { label: 'Tug\'ilgan sana', value: '04.10.2010' },
    { label: 'Yo\'nalish', value: 'Frontend Developer' },
    { label: 'Asosiy texnologiya', value: 'React & JavaScript' },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Men haqimda
            </h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Salom! Men Otabekmiz
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  15 yoshda bo'lsam ham, web dasturlash sohasida katta ishtiyoq bilan ishlayman. 
                  Frontend texnologiyalarni o'rganish va amaliy loyihalar yaratishni yoqtiraman.
                </p>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  HTML, CSS va JavaScript asoslarini puxta o'zlashtirganman. React framework 
                  bilan ishlashni yaxshi bilaman va Tailwind CSS yordamida chiroyli dizaynlar 
                  yarataman.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  Kelgusida full-stack developer bo'lishni rejalashtirmoqdaman va hozir 
                  backend texnologiyalarni ham o'rganmoqdaman.
                </p>
              </div>

              <div className="space-y-6">
                {facts.map((fact, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 bg-black/30 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <span className="text-gray-400 font-medium">{fact.label}:</span>
                    <span className="text-white font-semibold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;