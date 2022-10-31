import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "../components/context/authContext";
import { theme } from "../theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}
