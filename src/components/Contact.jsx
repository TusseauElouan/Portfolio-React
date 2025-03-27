import React, { useState } from 'react';
import { Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Formulaire soumis', formData);
    // Réinitialiser le formulaire ou gérer l'envoi
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-gradient-to-b from-gray-950 to-gray-900'>
        <section id="contact" className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Contactez-moi</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom */}
            <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Nom</label>
                <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-indigo-500" 
                placeholder="Votre nom"
                />
            </div>
            
            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-indigo-500" 
                placeholder="Votre email"
                />
            </div>
            
            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-indigo-500" 
                placeholder="Votre message"
                ></textarea>
            </div>
            
            {/* Bouton d'envoi */}
            <button 
                type="submit" 
                className="w-full py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
            >
                <Send className="mr-2 h-5 w-5" /> Envoyer
            </button>
            </form>
        </div>
        </section>
    </div>
  );
}

export default Contact;