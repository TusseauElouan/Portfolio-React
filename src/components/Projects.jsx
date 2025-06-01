import React, { useState, useEffect } from 'react';
import { Code, ExternalLink, X, ZoomIn, ZoomOut, Move } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import de toutes les images
import helphubAccueil from '../assets/helphup-accueil.png';
import helphubCreationTicket from '../assets/helphub-creation-ticket.png';
import helphubTicketCree from '../assets/helphub-ticket-cree.png';
import helphubMessagerie from '../assets/helphub-messagerie.png';
import paiementListePaiements from '../assets/paiement-securise-liste-paiements.png';
import paiementPaiement from '../assets/paiement-securise-paiement.png';
import paiementRemboursement from '../assets/paiement-securise-remboursement.png';
import paiementListePaiementsDiff from '../assets/paiement-securise-liste-paiements-diff.png';
import paiementListePaiementsClient from '../assets/paiement-securise-liste-paiements-client.png';

const projectsData = [
  {
    title: "HelpHub",
    description: "Application de gestion de tickets.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    images: [
      {
        src: helphubAccueil, // ✅ Utilisation de l'import
        alt: "Dashboard de HelpHub",
        description: "Interface principale du tableau de bord administrateur"
      },
      {
        src: helphubCreationTicket, // ✅ Utilisation de l'import
        alt: "Création de ticket HelpHub",
        description: "Interface de création de ticket, avec un formulaire dynamique."
      },
      {
        src: helphubTicketCree, // ✅ Utilisation de l'import
        alt: "Ticket créé HelpHub",
        description: "Ticket créé avec succès, voici le visuel côté client."
      },
      {
        src: helphubMessagerie, // ✅ Utilisation de l'import
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
        src: paiementListePaiements, // ✅ Utilisation de l'import
        alt: "Liste des paiements",
        description: "Liste des paiements effectués, avec possibilité de les rembourser."
      },
      {
        src: paiementPaiement, // ✅ Utilisation de l'import
        alt: "Création d'un paiement",
        description: "Interface de création d'un paiement, avec un formulaire dynamique."
      },
      {
        src: paiementRemboursement, // ✅ Utilisation de l'import
        alt: "Remboursement d'un paiement",
        description: "Interface de remboursement d'un paiement, soit partiel, soit entièrement."
      },
      {
        src: paiementListePaiementsDiff, // ✅ Utilisation de l'import
        alt: "Liste des paiements après les manips",
        description: "Liste des paiements après les manipulations, avec un paiement remboursé et un autre en attente de remboursement." 
      },
      {
        src: paiementListePaiementsClient, // ✅ Utilisation de l'import
        alt: "Liste des paiements côté client",
        description: "Liste des paiements côté client, sans possibilité de rembourser un paiement."
      }
    ]
  },
  {
    title: "Endeavour",
    description: "Application qui vise à simplifier le travail des chauffeurs Paprec, grâce à la digitalisation.",
    technologies: ["C#", ".NET 9", "MAUI", "Xunit"]
  }
    

  // Ajoutez plus de projets ici
];

// Composant pour afficher l'image en plein écran avec zoom
const ImageModal = ({ image, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Empêcher le défilement du corps quand la modal est ouverte
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const zoomIn = (e) => {
    e?.stopPropagation();
    setScale(prev => Math.min(prev + 0.5, 5));
  };
  
  const zoomOut = (e) => {
    e?.stopPropagation();
    setScale(prev => Math.max(prev - 0.5, 1));
  };
  
  const resetZoom = (e) => {
    e?.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };
  
  // Gestion du déplacement avec la souris
  const handleMouseDown = (e) => {
    e.preventDefault();
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };
  
  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Gestion du déplacement sur mobile
  const handleTouchStart = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };
  
  const handleTouchMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  // Zoom avec double-clic ou molette
  const handleDoubleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (scale === 1) {
      setScale(2.5);
      // Centrer le zoom
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) - (rect.width / 2)) * 0.6;
      const y = ((e.clientY - rect.top) - (rect.height / 2)) * 0.6;
      setPosition({ x, y });
    } else {
      resetZoom(e);
    }
  };
  
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale(prev => Math.min(prev + 0.2, 5));
    } else {
      setScale(prev => Math.max(prev - 0.2, 1));
    }
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Boutons de contrôle */}
      <div 
        className="absolute top-4 right-4 flex gap-2 z-50"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={zoomIn}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="h-6 w-6 text-white" />
        </button>
        <button 
          onClick={zoomOut}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="h-6 w-6 text-white" />
        </button>
        <button 
          onClick={resetZoom}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Reset zoom"
        >
          <Move className="h-6 w-6 text-white" />
        </button>
        <button 
          onClick={onClose}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-white" />
        </button>
      </div>
      
      {/* Conteneur d'image */}
      <div 
        className="w-full h-full flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={e => e.stopPropagation()}
      >
        <div 
          className="relative"
          style={{
            transformOrigin: 'center',
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="max-w-full max-h-[80vh] object-contain select-none"
            draggable="false"
          />
        </div>
      </div>
      
      {/* Description de l'image */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/70 py-2 px-4">
        <p className="text-sm">{image.description}</p>
        <p className="text-xs mt-1 text-gray-400">
          Molette pour zoomer, double-clic pour zoomer/dézoomer, glissez pour déplacer
        </p>
      </div>
    </div>
  );
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

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
  
  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };
  
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
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
        <AnimatePresence>
          {selectedProject && (
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              >
              <motion.div 
                className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
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
                        <div 
                          className="overflow-hidden rounded-lg mb-2 bg-black cursor-pointer relative group"
                          onClick={() => handleImageClick(selectedProject.images[currentImageIndex])}
                        >
                          <img 
                            src={selectedProject.images[currentImageIndex].src} 
                            alt={selectedProject.images[currentImageIndex].alt}
                            className="w-full h-auto object-contain max-h-96"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-150" />
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm italic mb-4">
                          {selectedProject.images[currentImageIndex].description}
                        </p>                        
                        {selectedProject.images.length > 1 && (
                          <div className="flex justify-between items-center">
                            <button 
                              onClick={(e) => { e.stopPropagation(); prevImage(); }}
                              className="bg-indigo-500/20 hover:bg-indigo-500/40 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                              Précédent
                            </button>
                            <span className="text-gray-400">
                              {currentImageIndex + 1} / {selectedProject.images.length}
                            </span>
                            <button 
                              onClick={(e) => { e.stopPropagation(); nextImage(); }}
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
        </AnimatePresence>
        
        {/* Modal pour l'image en plein écran */}
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ImageModal 
                image={fullscreenImage} 
                onClose={closeFullscreenImage} 
              />
            </motion.div>
          )}
        </AnimatePresence>
        </section>
    </div>
  );
}

export default Projects;