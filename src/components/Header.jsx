import React, { useState } from 'react';
import ProfileImage from '../assets/profile-Elouan-Tusseau.png';
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building } from 'lucide-react';



function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const navLinks = [
        { href: '#accueil', label: 'Accueil' },
        { href: '#experienceSection', label: 'Parcours' },
        { href: '#skillsSection', label: 'Compétences' },
        { href: '#projectsSection', label: 'Projets' }
      ];

  return (
    <header className="bg-gray-900 text-white">
      <div className="h-dvh bg-gradient-to-b from-gray-950 to-gray-900">
        <nav className="fixed w-full top-0 py-4 px-6 bg-gray-900/80 backdrop-blur-md flex justify-between items-center z-50 shadow-lg shadow-gray-800/30">
            {/* Logo */}
            <a href="#" className="text-white text-2xl font-semibold tracking-wide">
            Elouan<span className="text-indigo-400"> Tusseau</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                {link.label}
                </a>
            ))}
            </div>

            {/* Mobile Menu Button */}
            <button
            className="md:hidden text-white hover:text-indigo-400 transition-colors duration-300"
            onClick={toggleMobileMenu}
            >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
                />
            </motion.svg>
            </button>
        </nav>

        {/* Mobile Menu (animé avec Framer Motion) */}
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 z-40"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {/* Close Button */}
                <button
                className="absolute top-6 right-6 text-white hover:text-indigo-400 transition-colors duration-300"
                onClick={closeMobileMenu}
                >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    />
                </motion.svg>
                </button>

                {/* Mobile Links */}
                {navLinks.map((link, index) => (
                <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-medium text-white hover:text-indigo-400 transition-colors duration-300"
                    onClick={closeMobileMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    {link.label}
                </motion.a>
                ))}
            </motion.div>
            )}
        </AnimatePresence>
        <section
      id="accueil"
      className="container mx-auto px-6 py-16 min-h-dvh flex flex-col md:flex-row items-center justify-center gap-12"
    >
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src={ProfileImage}
          alt="Elouan Tusseau"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 border-4 border-indigo-500 shadow-lg shadow-indigo-600/50"
        />
      </motion.div>

      <motion.div
        className="flex-1 max-w-2xl text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-400">
          Découvrez mon univers numérique !
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="text-white font-bold">
            Bonjour, je m'appelle <span className="text-indigo-400">Elouan</span>, j'ai <span className="font-semibold text-white">19 ans</span> et je suis
          <span className="text-indigo-400 font-bold"> développeur web et application !</span>
          </span>
        </p>

        <motion.div
          className="space-y-4 text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-indigo-400 mr-2" />
            <span>
              Actuellement en alternance chez <span className="font-semibold text-white">Paprec</span>
            </span>
          </div>
          <div className="flex items-center">
            <Building className="h-6 w-6 text-indigo-400 mr-2" />
            <span>
              Étudiant à l'<span className="font-semibold text-white">Institut Informatique Appliqué de Saint-Nazaire</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Me contacter
          </a>
          <a
            href="https://linkedin.com/in/elouan-tusseau-a4a7932a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-indigo-500 text-indigo-400 rounded-lg shadow-md hover:bg-indigo-500 hover:text-white transition duration-300"
          >
            Voir mon LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
      </div>
    </header>
  );
}

export default Header;