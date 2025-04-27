import React from 'react';
import { 
  MapPin, 
  Mail, 
  Linkedin 
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informations générales */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Restons connectés</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Merci de visiter mon portfolio. Si vous avez des questions, souhaitez collaborer ou discuter d'un projet, n'hésitez pas à m'envoyer un message.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-400 mr-2" />
                <span>Saint-Nazaire, France</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                <span>
                  <a 
                    href="mailto:tusseauelouan@gmail.com" 
                    className="hover:underline"
                  >
                    tusseauelouan@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Linkedin className="h-5 w-5 text-indigo-400 mr-2" />
                <span>
                  <a 
                    href="https://www.linkedin.com/in/elouan-tusseau-a4a7932a0/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer inférieur */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Elouan Tusseau. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;