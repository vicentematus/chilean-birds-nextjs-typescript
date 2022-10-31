import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import type { Bird } from "types";
import BirdCard from "components/bird-card/index";
import InfiniteScroller from "react-infinite-scroller";
import { useState } from "react";
import EmptyState from "components/empty-state";
const Home: NextPage = ({ birds }) => {
  const [search, setSearch] = useState("");
  const [birdList, setBirdList] = useState<Bird[]>(birds);
  const updateSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    if (!value) {
      setBirdList(birds);
      return;
    }

    //We get the query from the event target element
    const query = value.trim().toLowerCase();

    //Based on  https://github.com/joyofpw/chileanbirds-api/blob/main/src/frontend/src/pages/home/controller.js
    // Because every bird has latin, spanish and english names. We need to grab all 3 of these values and store it in an array.
    // We also add the uid in case of
    const filterText = birdList.filter((bird) => {
      const text = [
        " ",
        bird.name.spanish.toLowerCase(),
        bird.name.english.toLowerCase(),
        bird.name.latin.toLowerCase(),
        bird.uid.split("-").join(" "),
      ].join(" ");

      return text.indexOf(query) > 0 || text.search(query) > 0;
    });

    const result = { items: filterText, total: filterText.length };

    setBirdList(result.items);
    console.log("result es ", result);
  };

  const cleanSearch = () => {
    setSearch("");
    setBirdList(birds);
  };
  return (
    <>
      <Head>
        <title>Aves Chilenas</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-5xl">
            Encuentra toda la información respecto a los pajaros chilenos 🐦
          </h1>
          <div>
            <div className="relative mx-auto mt-4 pt-2 text-gray-600">
              <input
                className=" w-full rounded-lg border-2 border-gray-300 bg-white px-5 py-2 pr-8 text-2xl  focus:border-r-indigo-400 focus:outline-none focus:ring"
                type="search"
                name="search"
                value={search}
                onChange={(e) => updateSearch(e)}
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              ></button>
            </div>
          </div>

          <section className="mt-6">
            <InfiniteScroller
              pageStart={1}
              loadMore={() => {
                console.log("load");
              }}
            >
              <div className="grid grid-cols-12 items-center justify-center gap-2">
                {birdList.length > 0 ? (
                  birdList.map((bird: Bird) => (
                    <BirdCard bird={bird} key={bird.uid} />
                  ))
                ) : (
                  <EmptyState cleanSearch={cleanSearch} />
                )}
              </div>
            </InfiniteScroller>
          </section>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://aves.ninjas.cl/api/birds");
  const birds: Bird[] = await response.json();
  console.log(birds);
  return {
    props: {
      birds,
    },
  };
};

export default Home;
