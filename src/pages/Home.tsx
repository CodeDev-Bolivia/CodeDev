import { useDocumentTitle } from '../hooks';
import { useCounterStore } from '../store';

export const Home = () => {
  useDocumentTitle('Inicio');
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido a CodeDev Bolivia
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Soluciones tecnológicas para el futuro
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Demo: Contador Global
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Este contador utiliza Zustand para manejar el estado global.
          Puedes usarlo como referencia para futuros stores.
        </p>
        
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            -
          </button>
          <span className="text-3xl font-bold text-gray-900 dark:text-white min-w-[60px] text-center">
            {count}
          </span>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            +
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Misión
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Proveer soluciones innovadoras que impulsen el crecimiento tecnológico de Bolivia.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Visión
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ser líderes en desarrollo de software en la región andina para 2030.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Valores
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Innovación, calidad, compromiso y trabajo en equipo.
          </p>
        </div>
      </div>
    </div>
  );
};