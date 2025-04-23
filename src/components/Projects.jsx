import React, { useState } from 'react';
import { Code, ExternalLink, X } from 'lucide-react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "HelpHub",
    description: "Application de gestion de tickets.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    images: [
      {
        src: "./src/assets/helphup-accueil.png",
        alt: "Dashboard de HelpHub",
        description: "Interface principale du tableau de bord administrateur"
      },
      {
        src: "./src/assets/helphub-creation-ticket.png",
        alt: "Création de ticket HelpHub",
        description: "Interface de création de ticket, avec un formulaire dynamique."
      },
      {
        src: "./src/assets/helphub-ticket-cree.png",
        alt: "Ticket créé HelpHub",
        description: "Ticket créé avec succès, voici le visuel côté client."
      },
      {
        src: "./src/assets/helphub-messagerie.png",
        alt: "Ticket de HelpHub",
        description: "Messagerie du tickets en question en administrateur, avec administration du ticket sur le côté droit." 
      }
    ]
  },
  {
    title: "Paiement Sécurisé",
    description: "Application de paiement sécurisé sans utilisations d'un service tiers.",
    technologies: ["Laravel", "PHP", "TailwindCSS", "MySQL"],
    images: [
      {
        src: "./src/assets/paiement-securise-liste-paiements.png",
        alt: "Liste des paiements",
        description: "Liste des paiements effectués, avec possibilité de les rembourser."
      },
      {
        src: "./src/assets/paiement-securise-paiement.png",
        alt: "Création d'un paiement",
        description: "Interface de création d'un paiement, avec un formulaire dynamique."
      },
      {
        src: "./src/assets/paiement-securise-remboursement.png",
        alt: "Remboursement d'un paiement",
        description: "Interface de remboursement d'un paiement, soit partiel, soit entièrement."
      },
      {
        src: "./src/assets/paiement-securise-liste-paiements-diff.png",
        alt: "Liste des paiements après les manips",
        description: "Liste des paiements après les manipulations, avec un paiement remboursé et un autre en attente de remboursement." 
      },
      {
        src: "./src/assets/paiement-securise-liste-paiements-client.png",
        alt: "Liste des paiements côté client",
        description: "Liste des paiements côté client, sans possibilité de rembourser un paiement."
      }
    ]
  }
  // Ajoutez plus de projets ici
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour naviguer entre les images
  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Réinitialiser l'index d'image à 0 quand un nouveau projet est sélectionné
  };

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
                className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
                onClick={() => handleOpenProject(project)}
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
            </motion.div>
            ))}
        </div>

        {/* Modal pour les détails du projet avec galerie d'images */}
        {selectedProject && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
            <motion.div 
              className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Empêche la fermeture lors du clic sur le contenu
            >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-indigo-500/30 text-indigo-300 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Galerie</h3>
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg mb-2 bg-black">
                        <img 
                          src={selectedProject.images[currentImageIndex].src} 
                          alt={selectedProject.images[currentImageIndex].alt}
                          className="w-full h-auto object-contain max-h-96"
                        />
                      </div>
                      
                      <p className="text-gray-300 text-sm italic mb-4">
                        {selectedProject.images[currentImageIndex].description}
                      </p>
                      
                      {selectedProject.images.length > 1 && (
                        <div className="flex justify-between items-center">
                          <button 
                            onClick={prevImage}
                            className="bg-indigo-500/20 hover:bg-indigo-500/40 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Précédent
                          </button>
                          <span className="text-gray-400">
                            {currentImageIndex + 1} / {selectedProject.images.length}
                          </span>
                          <button 
                            onClick={nextImage}
                            className="bg-indigo-500/20 hover:bg-indigo-500/40 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Suivant
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
            </motion.div>
          </motion.div>
        )}
        </section>
    </div>
  );
}

export default Projects;