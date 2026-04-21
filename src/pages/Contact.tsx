import { useState } from 'react';
import { useDocumentTitle } from '../hooks';

export const Contact = () => {
  useDocumentTitle('Contacto');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contáctanos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Información de Contacto
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <span className="text-gray-600 dark:text-gray-300">La Paz, Bolivia</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <span className="text-gray-600 dark:text-gray-300">info@codedev.bo</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <span className="text-gray-600 dark:text-gray-300">+591 2 1234567</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⏰</span>
              <span className="text-gray-600 dark:text-gray-300">Lun - Vie: 9:00 - 18:00</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Envíanos un Mensaje
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};