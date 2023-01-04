import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "../components/context/authContext";
import { theme } from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
