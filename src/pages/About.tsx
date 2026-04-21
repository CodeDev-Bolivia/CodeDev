import { useDocumentTitle } from '../hooks';

export const About = () => {
  useDocumentTitle('Nosotros');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Sobre Nosotros
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
          CodeDev Bolivia nace en 2024 con la misión de transformar el panorama tecnológico boliviano. 
          Somos un equipo apasionado por la innovación y el desarrollo de software de alta calidad.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Nuestro Equipo
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          Contamos con desarrolladores senior con experiencia internacional, expertos en React, 
          Node.js, Python y tecnologías cloud. Creemos en el trabajo colaborativo y la mejora continua.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              +50
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Proyectos completados</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              +20
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Clientes satisfechos</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              5 años
            </h3>
            <p className="text-gray-600 dark:text-gray-300">De experiencia en el mercado</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              100%
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Compromiso con la calidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};