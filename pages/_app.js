import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import "tailwindcss/tailwind.css";
import Layout from "../layout/Layout";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
