/* This example requires Tailwind CSS v2.0+ */
import { EyeDropperIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface CleanSearch {
  cleanSearch: () => void;
}
const EmptyState = ({ cleanSearch }: CleanSearch) => {
  return (
    <div className="col-span-12 w-full text-center">
      <Image
        src="/img/empty-state.png"
        height={300}
        width={300}
        priority
        className="mx-auto"
        alt="No hay resultados."
      />
      <h3 className="mt-1 text-3xl font-medium text-gray-900">
        No hay resultados para tu búsqueda.
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Puedes probar buscando otra ave limpiando tu busqueda.
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={cleanSearch}
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-lg font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Limpiar búsqueda
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
