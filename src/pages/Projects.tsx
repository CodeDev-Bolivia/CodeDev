import { useDocumentTitle } from '../hooks';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico para empresas bolivianas con integración de pagos locales.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Aplicación móvil para banca digital con características de seguridad avanzadas.',
    tech: ['React Native', 'TypeScript', 'AWS'],
  },
  {
    id: 3,
    title: 'Sistema de Gestión Hospitalaria',
    description: 'Solución integral para administración de citas, historias clínicas y facturación.',
    tech: ['React', 'Python', 'PostgreSQL'],
  },
];

export const Projects = () => {
  useDocumentTitle('Proyectos');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nuestros Proyectos
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Descubre algunas de nuestras soluciones más destacadas
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};