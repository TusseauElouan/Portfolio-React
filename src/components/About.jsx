import React from 'react';
import ProfileImage from '../assets/profile-Elouan-Tusseau.png';
import { MapPin, Lock, Building } from 'lucide-react';

function About() {
  return (
    <section id="aboutSection" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 min-h-dvh flex items-center fade-in">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img 
            src={ProfileImage} 
            alt="Elouan Tusseau" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 border-4 border-indigo-600 shadow-lg shadow-indigo-600/50 bg-slate-900"
          />
        </div>
        
        {/* About Content */}
        <div className="flex-1 max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-500">
            À propos de moi
          </h1>
          
          <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="text-white font-bold">Bonjour, je m'appelle <span className="text-indigo-400">Elouan</span>,</span> 
            j'ai <span className="font-semibold text-white">18 ans</span> et je suis 
            <span className="text-indigo-400 font-bold"> développeur web et application !</span>
          </p>
          
          <div className="space-y-4 text-gray-400 text-sm sm:text-base md:text-lg">
            <div className="flex items-start justify-center md:justify-start">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <span>Actuellement en alternance chez <span className="font-semibold text-white">Paprec</span></span>
            </div>
            
            <div className="flex items-start justify-center md:justify-start">
              <Building className="h-5 w-5 md:h-6 md:w-6 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
              <span>Étudiant à l'<span className="font-semibold text-white">Institut Informatique Appliqué de Saint-Nazaire</span></span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 hover:shadow-lg transition duration-300 text-center w-full sm:w-auto"
            >
              Me contacter
            </a>
            <a 
              href="https://linkedin.com/in/elouan-tusseau-a4a7932a0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-300 text-center w-full sm:w-auto"
            >
              Voir mon LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;