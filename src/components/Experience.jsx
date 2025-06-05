import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experienceData = [
  { title: "Expérience professionnel", description: "Alternant chez Paprec suite à un stage. Développement mobile sous .NET MAUI." },
  { title: "École", description: "Arrivé dans l'école de l'Institut Informations Appliquée en septembre 2023. Pour un BTS SIO option SLAM." },
  { title: "Diplômes", description: "Obtention du BAC en juillet 2023. Spécialitées : NSI et Mathématiques. Obtention du brevet en juillet 2020." },
];

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <section id="experienceSection" className="container mx-auto py-16 relative min-h-screen overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-12 text-white fade-in">Parcours</h2>

        {/* Wrapper for the timeline */}
        <div ref={ref} className="relative flex flex-col items-center">
          {/* Vertical Line (visible only on desktop) */}
          <motion.div
            className="absolute w-1 bg-indigo-600 md:block"
            style={{ left: "50%", transform: "translateX(-50%)", top: 0, bottom: 0 }}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: experienceData.length * 0.6, ease: "easeInOut" }}
          ></motion.div>

          {/* Experience Items */}
          {experienceData.map((exp, index) => {
            const itemRef = useRef(null);
            const itemInView = useInView(itemRef, { once: true, margin: "-100px 0px" });

            return (
              <motion.div
                key={index}
                ref={itemRef}
                initial={{ opacity: 0, y: 50 }}
                animate={itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`relative flex w-full mb-12 ${
                  index % 2 === 0 ? "md:pl-92 md:justify-end" : "md:pr-92 md:justify-start"
                } md:items-center`}
              >
                {/* Circle on the timeline - visible only on desktop */}
                <div className="hidden md:block w-4 h-4 bg-indigo-600 rounded-full absolute left-1/2 transform -translate-x-1/2" />

                {/* Experience Card */}
                <motion.div
                  className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 rounded-lg shadow-lg p-6 max-w-xs mx-auto
                             hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20
                             text-center md:text-left"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={itemInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                >
                  <h3 className="font-semibold text-lg text-white mb-2">{exp.title}</h3>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Experience;
