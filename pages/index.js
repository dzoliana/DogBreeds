//pages/index.js
// pages/index.js
import DogsList from "../components/list/DogsList";
import { Fragment } from "react";
import Head from "next/head";
/* import Error from "next/error"; */

const Home = ({ breeds, error }) => {
  // console.log(error);
  if (error) {
    return (
      <Fragment>
        <Head>
          <title>Error | Dog breeds</title>
          <meta name="description" content="Failed to fetch dog breeds data" />
        </Head>
        <div>
          <h2>Error: {error}</h2>
          <p>"Failed to fetch dog breeds"</p>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>Dog breeds</title>
        <meta name="description" content="Browse a list of breeds" />
      </Head>
      <DogsList breeds={breeds} />
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");

    /*     if (!response.ok) {
      throw new Error("Something went wrong! Failed to fetch dog breeds");
    } */

    const data = await response.json();
    const breeds = Object.keys(data.message);
    return { props: { breeds } };
  } catch (error) {
    return { props: { breeds: null, error: error.message } };
  }
}

export default Home;

//pages/index.js
/* import Errors from "@/components/error/Errors";
import DogsList from "../components/list/DogsList";
import { Fragment } from "react";
import Head from "next/head";

const Home = ({ breeds, error }) => {
  console.log(error);

  if (error) {
    return <Errors errorMsg={error} />;
  }

  return (
    <Fragment>
      <Head>
        <title>Dog breeds</title>
        <meta name="description" content="Browse a list of breeds"></meta>
      </Head>
      <DogsList breeds={breeds} />;
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");

    if (!response.ok) {
      throw new Error("Something went wrong! Failed to fetch dog breeds");
    }

    const data = await response.json();
    const breeds = Object.keys(data.message);
    return { props: { breeds } };
  } catch (error) {
    return { props: { breeds: [], error: error.message } };
  }
}

export default Home; */
