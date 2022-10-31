import {
  CheckIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import type { Bird, BirdDetail } from "types";
import Image from "next/image";
import Breadcrumbs from "components/breadcrumbs";
import Player from "components/audioplayer";
import GalleryPreview from "components/image-gallery";

const BirdPage: NextPage = ({ bird }) => {
  console.log(bird);
  return (
    <>
      <div className="min-h-full bg-gray-100">
        <main className="py-10">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <Breadcrumbs name={bird.name} link={bird.uid} />
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2 lg:col-start-1">
              <section>
                <GalleryPreview images={bird.images.gallery} />
              </section>
              <section>
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <div className="mb-6 flex items-center space-x-5 lg:hidden">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                          {bird.name.spanish}
                        </h1>
                        <p className="text-base font-medium text-gray-500">
                          {bird.name.latin}
                        </p>
                        <Player url={bird.audio.file} />
                      </div>
                    </div>
                    <h2
                      id="applicant-information-title"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Información detallada
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Revisa más información cómo su habitat, donde los puedes
                      encontrar y más.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className=" font-medium text-gray-500">
                          Nombre en Español
                        </dt>
                        <dd className="mt-1  text-gray-900">
                          {bird.name.spanish}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="font-medium text-gray-500">
                          Nombre en Latín
                        </dt>
                        <dd className="mt-1  text-gray-900">
                          {bird.name.latin}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="font-medium text-gray-500">
                          Nombre en Inglés
                        </dt>
                        <dd className="mt-1  text-gray-900">
                          {bird.name.english}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="font-medium text-gray-500">Tamaño</dt>
                        <dd className="mt-1 text-gray-900">{bird.size}</dd>
                      </div>

                      <div className="sm:col-span-1">
                        <dt className="font-medium text-gray-500">Especie</dt>
                        <dd className="mt-1 text-gray-900">{bird.species}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className=" font-medium text-gray-500">
                          Sabías que
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {bird.didyouknow}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>

            <section className="lg:col-span-1 lg:col-start-3">
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
                <div className="mb-6 flex hidden items-center space-x-5 lg:block">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      {bird.name.spanish}
                    </h1>
                    <p className="text-base font-medium text-gray-500">
                      {bird.name.latin}
                    </p>
                    <Player url={bird.audio.file} />
                  </div>
                </div>
                <h2 className="text-lg font-medium text-gray-900">Ubicación</h2>
                <p className="text-base text-gray-700">{bird.map.title}</p>

                <div>
                  <Image
                    src={bird.map.image}
                    width={300}
                    height={300}
                    alt={bird.map.title}
                  ></Image>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://aves.ninjas.cl/api/birds");
  const data: Bird[] = await response.json();
  const paths = data.map((bird) => {
    // For some reason the uid of this bird contains spaces. And it's kinda weird how to work with spaces in the id.
    // That's why this the only bird that cant make it. Sorryl Oxyura Ferruginea.
    if (bird.sort === 120) {
      return {
        params: {
          uid: encodeURIComponent("41-chloephaga-picta"),
        },
      };
    }
    return {
      params: {
        uid: encodeURIComponent(bird.uid),
      },
    };
  });

  console.log("Paths a construir es", paths);

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  //This is a single object
  const { uid } = context.params;

  const response = await fetch(
    `https://aves.ninjas.cl/api/birds/${encodeURIComponent(uid)}`
  );
  const bird: BirdDetail = await response.json();
  console.log(bird);
  return {
    props: {
      bird: bird as BirdDetail,
    },
  };
};

export default BirdPage;
