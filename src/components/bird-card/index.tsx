import Link from "next/link";
import Image from "next/image";

import type { Bird } from "types";
const BirdCard = ({ bird }: { bird: Bird }) => {
  const { uid, name, images, _links, sort } = bird;

  // In this case we are gonna use the API endpoint to give it priority if its less than 15 images rendered. So we avoid CLS on the first render.
  let prerender = true;
  if (sort > 20) {
    prerender = false;
  }

  // // For some reason the uid of this bird contains spaces. And it's kinda weird how to work with spaces in the id.
  //   // That's why this the only bird that cant make it. Sorryl Oxyura Ferruginea.
  if (sort === 120) {
    return;
  }
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
              priority={prerender}
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
