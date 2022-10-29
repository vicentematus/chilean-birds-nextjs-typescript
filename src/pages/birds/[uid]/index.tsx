import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

const BirdPage: NextPage = ({
  bird,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <main>
      <section>
        <header>
          <h2 className=" text-lg font-semibold text-gray-800">
            {bird.name.spanish}
          </h2>
          <p className=" text-gray-500">{bird.name.latin}</p>
        </header>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid } = context.query;
  const response = await fetch(`https://aves.ninjas.cl/api/birds/${uid}`);

  const bird = await response.json();

  return {
    props: {
      bird,
    },
  };
};

export default BirdPage;
