import "../styles/globals.css";

import Layout from "../components/navigation/Layout";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
