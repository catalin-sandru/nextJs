import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // we wrap Component with Layout to have the same styles across the pages
    // if we didn't do this, we have to import and include the layout in each component that we want such a layout
    <Layout>
      {/* Component is the one that gets rendered and changes at every page */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
