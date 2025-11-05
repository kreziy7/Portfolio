import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'React va Tailwind CSS bilan yaratilgan zamonaviy onlayn do\'kon. Responsive dizayn va smooth animatsiyalar bilan.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'API integratsiyasi bilan ob-havo ma\'lumotlarini ko\'rsatuvchi ilova. Geolocation va search funksiyalari bilan.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'CSS', 'Weather API'],
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Shaxsiy portfolio websayti. Dark theme, smooth scroll va contact form bilan jihozlangan.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Context API'],
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Mening Loyihalarim
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              O'rganish jarayonida yaratgan loyihalarim. Har birida yangi texnologiyalar 
              va yondashuvlarni sinab ko'rdim.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:scale-105 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-black/30 border border-white/20 rounded-full text-white text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-white text-black text-center text-sm font-medium border-2 border-white hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Ko'rish
                    </a>
                    
                    <a
                      href={project.codeUrl}
                      className="flex-1 px-4 py-2 bg-transparent text-white text-center text-sm font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Kod
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;