// pages/breed/[breed].js
import BreedDetail from "@/components/details/BreedDetail";
import { useRouter } from "next/router";
import Error from "next/error";
import { Fragment } from "react";
import Head from "next/head";

const BreedImages = ({ images }) => {
  const router = useRouter();
  const { breed } = router.query;

  return (
    <Fragment>
      <Head>
        <title>{breed} images</title>
        <meta name="description" content="Displaying dog breed images."></meta>
      </Head>
      <div>
        <BreedDetail images={images} />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps({ params }) {
  const { breed } = params;
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);

  const data = await response.json();
  const images = data.message;
  return { props: { images } };
}

export default BreedImages;

// pages/breed/[breed].js
/* import BreedDetail from "@/components/details/BreedDetail";
import { useRouter } from "next/router";
import Error from "next/error";
import { Fragment } from "react";
import Head from "next/head";

const BreedImages = ({ images, errorCode }) => {
  const router = useRouter();
  const { breed } = router.query;

  if (errorCode) {
    return (
      <Error statusCode={500} title="Failed to fetch images for the breed" />
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{breed} images</title>
        <meta name="description" content="Displaying dog breed images."></meta>
      </Head>
      <div>
        <BreedDetail images={images} />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const { breed } = params;
    const response = await fetch(`https://21dog.ceo/api/breed/${breed}/images`);

    //    if (!response.ok) {
    //  throw new Error("Failed to fetch images for the breed");
    //} 

    const data = await response.json();
    const images = data.message;
    return { props: { images } };
  } catch (error) {
    return { props: { images: [], errorCode: true } };
  }
}

export default BreedImages; */
