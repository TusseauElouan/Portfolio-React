import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Projet 1",
    description: "Description détaillée du projet 1",
    technologies: ["React", "Tailwind", "Node.js"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Projet 2",
    description: "Description détaillée du projet 2",
    technologies: ["Vue.js", "Vuetify", "Express"],
    githubLink: "#", 
    liveLink: "#"
  }
  // Ajoutez plus de projets ici
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-950'>
        <section id="projectsSection" className="container mx-auto px-8 max-md:px-6 py-16 min-h-dvh content-center">
        <motion.h2 
          className="text-4xl font-semibold mb-4 max-md:text-3xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projets
        </motion.h2>
        <motion.p 
          className="text-gray-400 max-md:text-base text-center mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Présentation de mes projets réalisés.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
            <motion.div 
                key={index} 
                className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <Code className="text-indigo-500 h-6 w-6" />
                </div>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                    <span 
                    key={techIndex} 
                    className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-xs"
                    >
                    {tech}
                    </span>
                ))}
                </div>
                
                <div className="flex justify-between">
                <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center"
                >
                    <Code className="mr-2 h-4 w-4" /> GitHub
                </a>
                <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center"
                >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                </a>
                </div>
            </motion.div>
            ))}
        </div>

        {/* Modal pour les détails du projet (optionnel) */}
        {selectedProject && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
            <motion.div 
              className="bg-gray-900 p-8 rounded-xl max-w-md w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
                <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                <button 
                onClick={() => setSelectedProject(null)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                >
                Fermer
                </button>
            </motion.div>
            </motion.div>
        )}
        </section>
    </div>
  );
}

export default Projects;