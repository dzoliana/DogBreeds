// _app.js
import { DogProvider } from "@/contexts/DogContext";
import "../styles/globals.css";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DogProvider>
        <Component {...pageProps} />
      </DogProvider>
    </Layout>
  );
}

export default MyApp;
