import Link from "next/link";
import Image from "next/image";

import type { Bird } from "types";
const BirdCard = ({ bird }: { bird: Bird }) => {
  const { uid, name, images, _links } = bird;
  return (
    <Link
      href={`birds/${uid}`}
      className="col-span-12 h-full rounded-lg bg-white  px-2 py-2 shadow-md hover:bg-gray-100 sm:col-span-4 lg:col-span-2
    "
    >
      <div>
        <div>
          <div>
            <Image
              src={bird.images.thumb}
              height={200}
              width={200}
              className="mx-auto rounded-lg"
              alt={bird.name.spanish}
            ></Image>
          </div>
        </div>
        <div>
          <h2 className="text-center text-lg font-semibold text-gray-800">
            {bird.name.spanish}
          </h2>
          <p className="text-center text-gray-500">{bird.name.latin}</p>
        </div>
      </div>
    </Link>
  );
};

export default BirdCard;
