import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Name {
  spanish: string;
  english: string;
  latin: string;
}
const Breadcrumbs = ({ name, link }: { name: Name; link: string }) => {
  console.log("nombre en bread crumbs es", name);
  // In case there's no latin or spanish name available, we use the ternary operator.
  const nameBird = name?.latin || name?.spanish || name?.english;
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Inicio</span>
            </Link>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <Link
              href="/"
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              Pajaros
            </Link>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <svg
              className="h-5 w-5 flex-shrink-0 text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
            <Link
              href={link}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {nameBird}
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
