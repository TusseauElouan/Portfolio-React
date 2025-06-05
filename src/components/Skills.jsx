import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code, 
  Server, 
  GitBranch, 
  Lightbulb 
} from 'lucide-react';

const technicalSkills = {
  'Développement Web': {
    icon: <Code className="h-8 w-8 text-indigo-500" />, 
    skills: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS']
  },
  'Back-end & Bases de Données': {
    icon: <Server className="h-8 w-8 text-indigo-500" />, 
    skills: ['C#', 'SQL', 'PHP/Laravel']
  },
  'Outils & DevOps': {
    icon: <GitBranch className="h-8 w-8 text-indigo-500" />, 
    skills: ['Git', 'Docker', 'CI/CD']
  }
};

const softSkills = {
  'Adaptabilité': "Capacité à s'ajuster rapidement aux nouveaux défis et environnements.",
  'Travail d’équipe': "Collaboration efficace avec les collègues et communication fluide.",
  'Résolution de problèmes': "Approche analytique et méthodique pour surmonter les obstacles."
};

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900'>
      <section id="skillsSection" className="container mx-auto px-8 max-md:px-6 py-16 min-h-dvh content-center " ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-semibold mb-4 max-md:text-3xl text-indigo-500">Compétences</h2>
          <p className="text-gray-400 max-md:text-base">Découvrez mes compétences en développement web et application.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technicalSkills).map(([category, { icon, skills }]) => (
            <motion.div 
              key={category}
              className="group bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{category}</h3>
                {icon}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {skills.join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-indigo-500">Compétences Transversales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(softSkills).map(([skill, description]) => (
              <motion.div 
                key={skill} 
                className="group bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{skill}</h3>
                  <Lightbulb className="h-8 w-8 text-indigo-500" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Skills;

document.documentElement.style.scrollBehavior = "smooth";